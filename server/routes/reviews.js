const express = require('express');
const router = express.Router();
const pool = require('../db/pool');
const axios = require('axios');

// Get stored reviews from database
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, rating, location_id } = req.query;
    const offset = (page - 1) * limit;
    
    let query = 'SELECT * FROM google_reviews';
    let countQuery = 'SELECT COUNT(*) FROM google_reviews';
    let conditions = [];
    let params = [];
    let paramCount = 0;

    // Add filters
    if (rating) {
      paramCount++;
      conditions.push(`star_rating = $${paramCount}`);
      params.push(parseInt(rating));
    }

    if (location_id) {
      paramCount++;
      conditions.push(`location_id = $${paramCount}`);
      params.push(location_id);
    }

    if (conditions.length > 0) {
      const whereClause = ' WHERE ' + conditions.join(' AND ');
      query += whereClause;
      countQuery += whereClause;
    }

    // Add ordering and pagination
    query += ' ORDER BY review_time DESC LIMIT $' + (paramCount + 1) + ' OFFSET $' + (paramCount + 2);
    params.push(parseInt(limit), offset);

    // Get total count
    const countResult = await pool.query(countQuery, params.slice(0, -2));
    const totalCount = parseInt(countResult.rows[0].count);

    // Get reviews
    const result = await pool.query(query, params);
    
    res.json({
      reviews: result.rows,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: totalCount,
        pages: Math.ceil(totalCount / limit)
      }
    });

  } catch (err) {
    console.error('Error fetching stored reviews:', err);
    res.status(500).json({ error: err.message || 'Internal server error' });
  }
});

router.get('/fetch', async (req, res) => {
  try {
    // Get Google tokens from DB
    const { rows } = await pool.query('SELECT * FROM google_accounts ORDER BY created_at DESC LIMIT 1');
    const account = rows[0];

    if (!account) {
      return res.status(400).json({ error: 'No connected Google account found' });
    }

    const accessToken = account.access_token;

    // 1️⃣ Fetch Account ID using Business Profile API
    const accountsResponse = await axios.get('https://mybusinessaccountmanagement.googleapis.com/v1/accounts', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    if (!accountsResponse.data.accounts || accountsResponse.data.accounts.length === 0) {
      return res.status(400).json({ error: 'No business accounts found' });
    }

    const accountId = accountsResponse.data.accounts[0].name; // e.g., accounts/123456789

    // 2️⃣ Fetch Locations using Business Profile API
    const locationsResponse = await axios.get(`https://mybusinessbusinessinformation.googleapis.com/v1/${accountId}/locations`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    if (!locationsResponse.data.locations || locationsResponse.data.locations.length === 0) {
      return res.status(400).json({ error: 'No locations found for this account' });
    }

    const location = locationsResponse.data.locations[0];
    const locationId = location.name; // e.g., accounts/123456789/locations/987654321

    // 3️⃣ Fetch Reviews using My Business API v4
    const reviewsResponse = await axios.get(`https://mybusiness.googleapis.com/v4/${locationId}/reviews`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    if (!reviewsResponse.data.reviews) {
      return res.json({ message: 'No reviews found', count: 0 });
    }

    const reviews = reviewsResponse.data.reviews;

    // 4️⃣ Insert into Supabase DB
    let insertedCount = 0;
    let updatedCount = 0;

    for (const review of reviews) {
      try {
        const result = await pool.query(
          `INSERT INTO google_reviews (location_id, review_id, reviewer_name, star_rating, comment, review_time, created_at, updated_at)
           VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
           ON CONFLICT (review_id) DO UPDATE SET
             reviewer_name = EXCLUDED.reviewer_name,
             star_rating = EXCLUDED.star_rating,
             comment = EXCLUDED.comment,
             review_time = EXCLUDED.review_time,
             updated_at = NOW()
           RETURNING *`,
          [
            locationId,
            review.reviewId,
            review.reviewer?.displayName || 'Anonymous',
            parseInt(review.starRating) || 0,
            review.comment || '',
            review.createTime || new Date().toISOString()
          ]
        );

        if (result.rows[0]) {
          if (result.rows[0].created_at === result.rows[0].updated_at) {
            insertedCount++;
          } else {
            updatedCount++;
          }
        }
      } catch (dbError) {
        console.error('Error inserting review:', dbError);
        // Continue with other reviews even if one fails
      }
    }

    res.json({ 
      message: 'Fetched and stored reviews successfully', 
      total: reviews.length,
      inserted: insertedCount,
      updated: updatedCount
    });

  } catch (err) {
    console.error('Error fetching reviews:', err);
    
    // Provide more specific error messages
    if (err.response?.status === 401) {
      return res.status(401).json({ error: 'Invalid or expired access token. Please re-authenticate.' });
    } else if (err.response?.status === 403) {
      return res.status(403).json({ error: 'Insufficient permissions to access Google Business API.' });
    } else if (err.response?.status === 404) {
      return res.status(404).json({ error: 'Business account or location not found.' });
    }
    
    res.status(500).json({ error: err.message || 'Internal server error' });
  }
});

module.exports = router;
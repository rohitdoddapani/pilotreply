const express = require('express');
const router = express.Router();
const pool = require('../db/pool');
const { 
  getAuthUrl, 
  exchangeCodeForTokens, 
  getGoogleUserInfoFromIdToken, 
  refreshAccessToken,
  testBusinessApiAccess 
} = require('../services/googleAuth');

// Start Google OAuth flow
router.get('/google', (req, res) => {
  const authUrl = getAuthUrl();
  res.redirect(authUrl);
});

// Google OAuth callback
router.get('/google/callback', async (req, res) => {
  try {
    const { code } = req.query;
    
    if (!code) {
      return res.status(400).json({ error: 'Authorization code is required' });
    }

    const tokens = await exchangeCodeForTokens(code);
    const userInfo = await getGoogleUserInfoFromIdToken(tokens.id_token);

    // Calculate token expiry
    const tokenExpiry = new Date();
    tokenExpiry.setSeconds(tokenExpiry.getSeconds() + tokens.expires_in);

    // Store in database
    await pool.query(`
      INSERT INTO google_accounts (google_user_id, email, access_token, refresh_token, token_expiry)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (google_user_id) DO UPDATE SET 
        access_token = $3, 
        refresh_token = $4, 
        token_expiry = $5, 
        updated_at = NOW()
    `, [userInfo.sub, userInfo.email, tokens.access_token, tokens.refresh_token, tokenExpiry]);

    res.json({ 
      message: 'Google Business account connected successfully!',
      user: userInfo
    });

  } catch (error) {
    console.error('OAuth callback error:', error);
    res.status(500).json({ error: 'Failed to complete authentication' });
  }
});

// Test API access
router.get('/test', async (req, res) => {
  try {
    // Get the latest access token
    const { rows } = await pool.query('SELECT * FROM google_accounts ORDER BY created_at DESC LIMIT 1');
    
    if (!rows.length) {
      return res.status(400).json({ error: 'No connected Google account found' });
    }

    const account = rows[0];
    let accessToken = account.access_token;

    // Check if token is expired and refresh if needed
    if (account.token_expiry && new Date() > account.token_expiry) {
      console.log('Token expired, refreshing...');
      const newTokens = await refreshAccessToken(account.refresh_token);
      
      const newExpiry = new Date();
      newExpiry.setSeconds(newExpiry.getSeconds() + newTokens.expires_in);

      await pool.query(`
        UPDATE google_accounts 
        SET access_token = $1, token_expiry = $2, updated_at = NOW()
        WHERE id = $3
      `, [newTokens.access_token, newExpiry, account.id]);

      accessToken = newTokens.access_token;
    }

    // Test the API access
    const testResult = await testBusinessApiAccess(accessToken);
    
    res.json({
      account: {
        email: account.email,
        tokenExpiry: account.token_expiry,
        isExpired: account.token_expiry && new Date() > account.token_expiry
      },
      apiTest: testResult
    });

  } catch (error) {
    console.error('Test error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get connected accounts
router.get('/accounts', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT id, email, created_at, updated_at FROM google_accounts ORDER BY created_at DESC');
    res.json({ accounts: rows });
  } catch (error) {
    console.error('Error fetching accounts:', error);
    res.status(500).json({ error: 'Failed to fetch accounts' });
  }
});

module.exports = router;
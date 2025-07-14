# Google Reviews API Integration

This server fetches Google Business reviews and stores them in a Supabase database.

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in the server directory with:

```env
SUPABASE_DB_URL=your_supabase_connection_string
```

### 2. Database Setup

Run the SQL schema in your Supabase SQL editor:

```sql
-- Copy the contents of db/schema.sql
```

### 3. Google API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the following APIs:
   - My Business Account Management API
   - My Business Business Information API
   - My Business API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs for your application

### 4. API Endpoints

#### Fetch Reviews from Google
```
GET /api/reviews/fetch
```
Fetches reviews from Google Business API and stores them in the database.

#### Get Stored Reviews
```
GET /api/reviews?page=1&limit=10&rating=5&location_id=accounts/123/locations/456
```
Retrieves stored reviews with optional filtering and pagination.

Query Parameters:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `rating`: Filter by star rating (1-5)
- `location_id`: Filter by location ID

### 5. Database Schema

The `google_reviews` table contains:
- `id`: Primary key
- `location_id`: Google location ID
- `review_id`: Unique review identifier
- `reviewer_name`: Name of the reviewer
- `star_rating`: Rating (1-5 stars)
- `comment`: Review text
- `review_time`: When the review was posted
- `created_at`: When record was created
- `updated_at`: When record was last updated

### 6. Error Handling

The API provides specific error messages for:
- 401: Invalid or expired access token
- 403: Insufficient permissions
- 404: Business account or location not found
- 500: Internal server errors

### 7. Authentication

Make sure you have a valid Google access token stored in the `google_accounts` table before fetching reviews.

## Troubleshooting

1. **No reviews found**: Check if your Google Business account has reviews and the API permissions are correct.

2. **Authentication errors**: Ensure your access token is valid and not expired.

3. **Database errors**: Verify your Supabase connection string and table schema.

4. **API rate limits**: Google APIs have rate limits. Consider implementing retry logic for production use. 
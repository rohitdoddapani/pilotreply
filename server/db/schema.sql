-- Create google_reviews table for Supabase
CREATE TABLE IF NOT EXISTS google_reviews (
    id SERIAL PRIMARY KEY,
    location_id VARCHAR(255) NOT NULL,
    review_id VARCHAR(255) UNIQUE NOT NULL,
    reviewer_name VARCHAR(255),
    star_rating INTEGER CHECK (star_rating >= 1 AND star_rating <= 5),
    comment TEXT,
    review_time TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_google_reviews_location_id ON google_reviews(location_id);
CREATE INDEX IF NOT EXISTS idx_google_reviews_review_time ON google_reviews(review_time);
CREATE INDEX IF NOT EXISTS idx_google_reviews_star_rating ON google_reviews(star_rating);

-- Create trigger to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_google_reviews_updated_at 
    BEFORE UPDATE ON google_reviews 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Create google_accounts table if it doesn't exist
CREATE TABLE IF NOT EXISTS google_accounts (
    id SERIAL PRIMARY KEY,
    google_user_id VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL,
    access_token TEXT NOT NULL,
    refresh_token TEXT,
    token_expiry TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create trigger for google_accounts updated_at
CREATE TRIGGER update_google_accounts_updated_at 
    BEFORE UPDATE ON google_accounts 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column(); 
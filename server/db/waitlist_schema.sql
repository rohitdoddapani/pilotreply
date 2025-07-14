-- Waitlist table for early access signups
CREATE TABLE IF NOT EXISTS waitlist (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for fast email lookup
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email); 
-- Create the win_entries table in Supabase
CREATE TABLE IF NOT EXISTS win_entries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  how_did_hear TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS (Row Level Security) policies
ALTER TABLE win_entries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON win_entries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all entries (for admin)
CREATE POLICY "Allow authenticated reads" ON win_entries
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_win_entries_email ON win_entries(email);

-- Create index on submitted_at for sorting
CREATE INDEX IF NOT EXISTS idx_win_entries_submitted_at ON win_entries(submitted_at DESC);
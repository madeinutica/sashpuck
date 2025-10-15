-- SQL script to create contact_form table
CREATE TABLE IF NOT EXISTS contact_form (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_form ENABLE ROW LEVEL SECURITY;

-- Public insert policy for contact_form
CREATE POLICY "Public insert" ON contact_form
  FOR INSERT
  USING (true);

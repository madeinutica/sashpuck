-- Fix RLS policies for win_entries table
-- Run this in your Supabase SQL editor

-- First, drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous inserts" ON win_entries;
DROP POLICY IF EXISTS "Allow authenticated reads" ON win_entries;

-- Ensure RLS is enabled
ALTER TABLE win_entries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for form submissions from the website)
CREATE POLICY "Enable anonymous inserts" ON win_entries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow service role to do everything (for admin operations)
CREATE POLICY "Enable service role access" ON win_entries
  FOR ALL
  TO service_role
  WITH CHECK (true);

-- Allow authenticated users to read all entries (for admin dashboard)
CREATE POLICY "Enable authenticated reads" ON win_entries
  FOR SELECT
  TO authenticated
  USING (true);

-- Grant necessary permissions to anon role
GRANT INSERT ON win_entries TO anon;
GRANT USAGE ON SEQUENCE win_entries_id_seq TO anon;

-- Grant necessary permissions to authenticated role
GRANT SELECT ON win_entries TO authenticated;

-- Verify the policies are in place
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename = 'win_entries';
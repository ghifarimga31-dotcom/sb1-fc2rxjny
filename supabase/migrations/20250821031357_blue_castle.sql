/*
  # Fix Contact Messages RLS Policy

  1. Security Changes
    - Add policy to allow anonymous users to insert contact messages
    - This enables the contact form to work for website visitors who are not authenticated

  2. Policy Details
    - Allows INSERT operations for anonymous (anon) role
    - No restrictions on the data being inserted
    - Maintains security while enabling contact form functionality
*/

-- Drop existing policies if any
DROP POLICY IF EXISTS "Allow anonymous contact form submissions" ON contact_messages;

-- Create policy to allow anonymous users to insert contact messages
CREATE POLICY "Allow anonymous contact form submissions"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);
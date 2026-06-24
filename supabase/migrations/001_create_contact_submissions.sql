-- ========================================
-- PixelWave AI Solutions
-- Table: PW_contact_submissions
-- ========================================
CREATE TABLE IF NOT EXISTS PW_contact_submissions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  read BOOLEAN NOT NULL DEFAULT FALSE
);

ALTER TABLE PW_contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert" ON PW_contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "auth_select" ON PW_contact_submissions
  FOR SELECT TO authenticated USING (true);

-- ============================================
-- PixelWave AI Solutions - All PW_ Tables
-- ============================================

-- 1. PW_job_applications
CREATE TABLE IF NOT EXISTS PW_job_applications (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT,
  message TEXT,
  resume_url TEXT,
  position TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE PW_job_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_insert" ON PW_job_applications FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "auth_select" ON PW_job_applications FOR SELECT TO authenticated USING (true);

-- 2. PW_blog_posts
CREATE TABLE IF NOT EXISTS PW_blog_posts (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  author TEXT NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  excerpt TEXT NOT NULL,
  content JSONB NOT NULL,
  image_url TEXT,
  tags TEXT[] DEFAULT '{}',
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE PW_blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_select_published" ON PW_blog_posts FOR SELECT TO anon USING (published = true);
CREATE POLICY "auth_all" ON PW_blog_posts FOR ALL TO authenticated USING (true);

-- 3. PW_blog_comments
CREATE TABLE IF NOT EXISTS PW_blog_comments (
  id BIGSERIAL PRIMARY KEY,
  blog_slug TEXT NOT NULL REFERENCES PW_blog_posts(slug) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE PW_blog_comments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_insert" ON PW_blog_comments FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "anon_select_approved" ON PW_blog_comments FOR SELECT TO anon USING (approved = true);
CREATE POLICY "auth_all" ON PW_blog_comments FOR ALL TO authenticated USING (true);

-- 4. PW_newsletter_subscribers
CREATE TABLE IF NOT EXISTS PW_newsletter_subscribers (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  subscribed BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  unsubscribed_at TIMESTAMPTZ
);

ALTER TABLE PW_newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_insert" ON PW_newsletter_subscribers FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "auth_select" ON PW_newsletter_subscribers FOR SELECT TO authenticated USING (true);

-- 5. PW_resource_downloads
CREATE TABLE IF NOT EXISTS PW_resource_downloads (
  id BIGSERIAL PRIMARY KEY,
  resource_id TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE PW_resource_downloads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_insert" ON PW_resource_downloads FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "auth_select" ON PW_resource_downloads FOR SELECT TO authenticated USING (true);

-- 6. PW_projects
CREATE TABLE IF NOT EXISTS PW_projects (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  content JSONB,
  image_url TEXT,
  tech_stack TEXT[] DEFAULT '{}',
  client_name TEXT,
  client_url TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE PW_projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_select" ON PW_projects FOR SELECT TO anon USING (true);
CREATE POLICY "auth_all" ON PW_projects FOR ALL TO authenticated USING (true);

-- 7. PW_pricing_inquiries
CREATE TABLE IF NOT EXISTS PW_pricing_inquiries (
  id BIGSERIAL PRIMARY KEY,
  plan_name TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE PW_pricing_inquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_insert" ON PW_pricing_inquiries FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "auth_select" ON PW_pricing_inquiries FOR SELECT TO authenticated USING (true);

-- 8. PW_social_publisher_posts
CREATE TABLE IF NOT EXISTS PW_social_publisher_posts (
  id BIGSERIAL PRIMARY KEY,
  topic TEXT,
  keywords TEXT,
  draft TEXT NOT NULL,
  platform TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft',
  scheduled_for TIMESTAMPTZ,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE PW_social_publisher_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_insert" ON PW_social_publisher_posts FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "auth_all" ON PW_social_publisher_posts FOR ALL TO authenticated USING (true);

-- 9. PW_team_members
CREATE TABLE IF NOT EXISTS PW_team_members (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  image_url TEXT,
  linkedin_url TEXT,
  sort_order INT NOT NULL DEFAULT 0,
  visible BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE PW_team_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_select_visible" ON PW_team_members FOR SELECT TO anon USING (visible = true);
CREATE POLICY "auth_all" ON PW_team_members FOR ALL TO authenticated USING (true);

-- 10. PW_admin_users
CREATE TABLE IF NOT EXISTS PW_admin_users (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'editor',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_login TIMESTAMPTZ
);

ALTER TABLE PW_admin_users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "auth_select" ON PW_admin_users FOR SELECT TO authenticated USING (true);

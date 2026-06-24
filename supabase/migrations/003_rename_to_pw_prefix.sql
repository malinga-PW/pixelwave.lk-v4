-- ============================================
-- Rename existing tables to PW_ prefix
-- Run this ONLY if tables already exist
-- without the PW_ prefix
-- ============================================

ALTER TABLE IF EXISTS contact_submissions RENAME TO PW_contact_submissions;
ALTER TABLE IF EXISTS job_applications RENAME TO PW_job_applications;
ALTER TABLE IF EXISTS blog_posts RENAME TO PW_blog_posts;
ALTER TABLE IF EXISTS blog_comments RENAME TO PW_blog_comments;
ALTER TABLE IF EXISTS newsletter_subscribers RENAME TO PW_newsletter_subscribers;
ALTER TABLE IF EXISTS resource_downloads RENAME TO PW_resource_downloads;
ALTER TABLE IF EXISTS projects RENAME TO PW_projects;
ALTER TABLE IF EXISTS pricing_inquiries RENAME TO PW_pricing_inquiries;
ALTER TABLE IF EXISTS social_publisher_posts RENAME TO PW_social_publisher_posts;
ALTER TABLE IF EXISTS team_members RENAME TO PW_team_members;
ALTER TABLE IF EXISTS admin_users RENAME TO PW_admin_users;

"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './AdminDashboard.module.css';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Check if already authenticated via simple localStorage (for demo/client side)
  useEffect(() => {
    const authStatus = localStorage.getItem('pixel_admin_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Admin@pixel') {
      setIsAuthenticated(true);
      setError('');
      localStorage.setItem('pixel_admin_auth', 'true');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('pixel_admin_auth');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <section className={styles.adminSection}>
        <div className="container">
          <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
              <h2 className={styles.title}>Admin Login</h2>
              <p className={styles.subtitle}>Enter your password to access the control panel.</p>
              
              <form onSubmit={handleLogin} className={styles.formGroup}>
                <div className={styles.inputWrapper}>
                  <label>Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter admin password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className={styles.errorMessage}>{error}</p>}
                
                <button type="submit" className={styles.primaryBtn}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Admin Dashboard Content (Authenticated)
  return (
    <section className={styles.adminSection}>
      <div className="container">
        <div className={styles.dashboardContainer}>
          <div className={styles.header}>
            <h2 className={styles.title}>Welcome, Admin!</h2>
            <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
          </div>

          <div className={styles.grid}>
            {/* Social Publisher Link */}
            <div className={styles.toolCard}>
              <h3 className={styles.cardTitle}>Social Media Publisher</h3>
              <p className={styles.cardDesc}>Automate your social media research, AI generation, and scheduling via n8n.</p>
              <Link href="/social-publisher" className={styles.actionLink}>
                Open Publisher &rarr;
              </Link>
            </div>

            {/* Placeholder for future tools */}
            <div className={styles.toolCard}>
              <h3 className={styles.cardTitle}>Analytics & Reports</h3>
              <p className={styles.cardDesc}>View website traffic, conversion rates, and SEO performance metrics.</p>
              <span className={styles.comingSoon}>Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

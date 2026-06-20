"use client";
import React, { useState } from 'react';
import styles from './SocialPublisher.module.css';

export default function SocialPublisher() {
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [draft, setDraft] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('linkedin');
  const [scheduleDate, setScheduleDate] = useState('');
  const [isScheduling, setIsScheduling] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate n8n webhook delay
    setTimeout(() => {
      setDraft(`🚀 Exciting news from PixelWave AI Solutions! \n\nWe are exploring the fascinating world of ${topic ? topic : 'AI Automation'}. \n\nKeywords: ${keywords}\n\nStay tuned for more updates as we continue to build smarter and grow faster. #AI #Automation #PixelWave`);
      setIsGenerating(false);
    }, 2000);
  };

  const handleSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsScheduling(true);
    
    // Simulate n8n webhook delay for scheduling
    setTimeout(() => {
      alert('Post successfully scheduled via n8n!');
      setIsScheduling(false);
      setDraft('');
      setTopic('');
      setKeywords('');
    }, 1500);
  };

  return (
    <section className={styles.publisherSection}>
      <div className="container">
        <div className={styles.dashboardContainer}>
          <div className={styles.header}>
            <h2 className={styles.title}>AI Content Control Center</h2>
            <p className={styles.subtitle}>Research, Generate, and Schedule your Social Media across platforms.</p>
          </div>

          <div className={styles.grid}>
            {/* Left Column: Input Form */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>1. Research & Generate</h3>
              <form onSubmit={handleGenerate} className={styles.formGroup}>
                <div className={styles.inputWrapper}>
                  <label>Topic / URL</label>
                  <input 
                    type="text" 
                    placeholder="E.g., Benefits of AI Automation" 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <label>Keywords (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="E.g., #productivity, workflow" 
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                  />
                </div>
                <button type="submit" className={styles.primaryBtn} disabled={isGenerating}>
                  {isGenerating ? 'Analyzing & Generating...' : 'Generate with AI'}
                </button>
              </form>
            </div>

            {/* Right Column: Editor & Scheduler */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>2. Review & Schedule</h3>
              <form onSubmit={handleSchedule}>
                <div className={styles.editorWrapper}>
                  <label>Generated Draft</label>
                  <textarea 
                    rows={8}
                    placeholder="Your generated content will appear here..."
                    value={draft}
                    onChange={(e) => setDraft(e.target.value)}
                    required
                  ></textarea>
                </div>

                <div className={styles.platforms}>
                  <label>Target Platform</label>
                  <div className={styles.radioGroup}>
                    <label className={selectedPlatform === 'linkedin' ? styles.activeRadio : ''}>
                      <input type="radio" name="platform" value="linkedin" checked={selectedPlatform === 'linkedin'} onChange={() => setSelectedPlatform('linkedin')} /> LinkedIn
                    </label>
                    <label className={selectedPlatform === 'facebook' ? styles.activeRadio : ''}>
                      <input type="radio" name="platform" value="facebook" checked={selectedPlatform === 'facebook'} onChange={() => setSelectedPlatform('facebook')} /> Facebook
                    </label>
                    <label className={selectedPlatform === 'twitter' ? styles.activeRadio : ''}>
                      <input type="radio" name="platform" value="twitter" checked={selectedPlatform === 'twitter'} onChange={() => setSelectedPlatform('twitter')} /> Twitter
                    </label>
                  </div>
                </div>

                <div className={styles.inputWrapper}>
                  <label>Schedule Date & Time</label>
                  <input 
                    type="datetime-local" 
                    value={scheduleDate}
                    onChange={(e) => setScheduleDate(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className={styles.successBtn} disabled={isScheduling || !draft}>
                  {isScheduling ? 'Scheduling...' : 'Approve & Schedule'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

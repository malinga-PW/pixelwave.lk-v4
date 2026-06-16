"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

/* ── Elena.AI Floating Chat Widget ─────────────────────────────
   Hidden on right edge. Hover expands label. Click opens chat.
──────────────────────────────────────────────────────────────── */
export default function ElenaChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`elena-chat-widget ${isOpen ? "is-open" : ""}`} ref={widgetRef}>
      {/* The main toggle/avatar area that sits on the edge */}
      <div className="elena-chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className="elena-avatar-inner">
          <svg width="24" height="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="12" stroke="#00FF97" strokeWidth="1.2" strokeDasharray="3 2"/>
            <circle cx="13" cy="10" r="3.5" fill="#00FF97" fillOpacity="0.9"/>
            <path d="M6.5 20C6.5 16.686 9.41 14 13 14C16.59 14 19.5 16.686 19.5 20" stroke="#00FF97" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="8.5"  cy="10" r="1" fill="#00020f"/>
            <circle cx="17.5" cy="10" r="1" fill="#00020f"/>
          </svg>
        </div>
        <span className="elena-toggle-label">Elena.AI</span>
      </div>

      {/* The slide-out chat panel */}
      <div className="elena-chat-panel">
        <div className="elena-chat-header">
          <div className="elena-chat-title">
            <span className="elena-name">Elena.AI</span>
            <span className="elena-status">
              <span className="elena-status-dot" /> Online
            </span>
          </div>
          <Link href="/elena-ai" className="elena-expand-btn" aria-label="Open full chat">
            <i className="far fa-external-link-alt"></i>
          </Link>
        </div>

        <div className="elena-chat-history">
          <div className="elena-message bot">
            <p>Hi there! I'm Elena, PixelWave's AI agent. 👋</p>
          </div>
          <div className="elena-message bot">
            <p>How can I help you automate your business today?</p>
          </div>
        </div>

        <div className="elena-chat-input-area">
          <input type="text" placeholder="Ask me anything..." disabled className="elena-mock-input" />
          <Link href="/elena-ai" className="elena-mock-submit">
            <i className="fas fa-paper-plane"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

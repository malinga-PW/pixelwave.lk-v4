"use client";

import Link from "next/link";

/* ── Elena.AI Floating Chat Widget ─────────────────────────────
   Fixed bottom-left widget. Clicking routes to /elena-ai page.
──────────────────────────────────────────────────────────────── */
export default function ElenaChatWidget() {
  return (
    <Link href="/elena-ai" className="elena-chat-widget" aria-label="Chat with Elena.AI">
      {/* Avatar with spinning gradient ring */}
      <div className="elena-avatar">
        <div className="elena-avatar-inner">
          {/* AI bot icon */}
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="12" stroke="#00f0ff" strokeWidth="1.2" strokeDasharray="3 2"/>
            <circle cx="13" cy="10" r="3.5" fill="#00f0ff" fillOpacity="0.9"/>
            <path d="M6.5 20C6.5 16.686 9.41 14 13 14C16.59 14 19.5 16.686 19.5 20" stroke="#00f0ff" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="8.5"  cy="10" r="1" fill="#bd00ff"/>
            <circle cx="17.5" cy="10" r="1" fill="#bd00ff"/>
          </svg>
        </div>
      </div>

      {/* Label card */}
      <div className="elena-label">
        <span className="elena-name">Elena.AI</span>
        <span className="elena-status">
          <span className="elena-status-dot" />
          Online • Ask me anything
        </span>
      </div>
    </Link>
  );
}

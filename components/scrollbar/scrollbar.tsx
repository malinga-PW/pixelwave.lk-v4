"use client";

import { useEffect, useState, useCallback } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./style.css";

export default function Scrollbar() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setProgress(pct);
    setVisible(scrollTop > 120);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* SVG ring maths */
  const size = 52;
  const stroke = 3;
  const radius = (size - stroke) / 2;          // 24.5
  const circumference = 2 * Math.PI * radius;  // ≈ 153.94
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className={`pw-scroll-btn ${visible ? "pw-scroll-visible" : ""}`}>
      <AnchorLink href="#scrool" aria-label="Scroll to top" className="pw-scroll-anchor">
        {/* SVG progress ring */}
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="pw-ring"
        >
          {/* Track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={stroke}
          />
          {/* Progress */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            style={{ transition: "stroke-dashoffset 0.2s ease" }}
          />
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#bd00ff" />
            </linearGradient>
          </defs>
        </svg>

        {/* Arrow icon inside */}
        <span className="pw-arrow">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 11V3M7 3L3 7M7 3L11 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </AnchorLink>
    </div>
  );
}

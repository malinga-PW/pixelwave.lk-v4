"use client";

import { useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from "next/link";
import Image from "next/image";

import footerBg from "@/public/images/bg/footer-bg02.png";
import diamondIcon from "@/public/images/icon/diamond-icon02.gif";

/* ================================
   Static Constants
================================= */

const BG_STYLE = {
  backgroundImage: `url(${footerBg.src})`,
};

const ArrowSVG = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="5.06" y="19.97" width="20.57" height="2.61" transform="rotate(-40.28 5.06 19.97)" fill="white" />
    <rect x="7.97" y="7.24" width="2.61" height="2.61" transform="rotate(-40.28 7.97 7.24)" fill="white" />
    <rect x="11.65" y="7.55" width="2.61" height="2.61" transform="rotate(-40.28 11.65 7.55)" fill="white" />
    <rect x="15.33" y="7.85" width="2.61" height="2.61" transform="rotate(-40.28 15.33 7.85)" fill="white" />
    <rect x="18.71" y="11.84" width="2.61" height="2.61" transform="rotate(-40.28 18.71 11.84)" fill="white" />
    <rect x="18.40" y="15.52" width="2.61" height="2.61" transform="rotate(-40.28 18.40 15.52)" fill="white" />
    <rect x="18.10" y="19.20" width="2.61" height="2.61" transform="rotate(-40.28 18.10 19.20)" fill="white" />
  </svg>
);

export default function Footer() {
  /* ================================
     Smooth Scroll
  ================================= */
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    const links = document.querySelectorAll<HTMLAnchorElement>(
      "a.scrollspy-btn[href^='#']"
    );

    const handler = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (!targetId) return;

      const target = document.querySelector(targetId);
      if (target) {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: target, offsetY: 80 },
          ease: "power2.out",
        });
      }
    };

    links.forEach((el) => el.addEventListener("click", handler));
    return () => links.forEach((el) => el.removeEventListener("click", handler));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <footer className="footer pos-rel z-1 pt-80 bg_img" style={BG_STYLE}>
      <div className="ac-footer-wrap xb-border mxw-1650 m-auto">
        <div className="container">

          {/* NAV */}
          <ul className="ac-footer-nav list-unstyled ul_li">
            <li><a className="scrollspy-btn" href="#features">Features</a></li>
            <li><a className="scrollspy-btn" href="#process">Process</a></li>
            <li><a className="scrollspy-btn" href="#integration">Integration</a></li>
            <li><a className="scrollspy-btn" href="#pricing">Pricing</a></li>
            <li><a className="scrollspy-btn" href="#faq">Faq’s</a></li>
            <li><Link href="/contact">Contact us</Link></li>
          </ul>

          <div className="xb-footer-inner">
            <div className="row g-0">

              {/* SOCIAL */}
              <div className="col-lg-3 col-md-5 footer-col">
                <div className="xb-footer-item xb-social_media">
                  <p className="sub-title">Join our social group</p>

                  <ul className="xb-social_icon ul_li list-unstyled">
                    {/* X */}
                    <li>
                      <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                        <svg width="16" height="16" viewBox="0 0 14 14">
                          <path
                            fill="#fff"
                            d="M13.98 14L8.51 5.84 13.46 0h-1.65L7.79 4.76 4.60 0H0.27l5.11 7.62L0 14h1.64l4.47-5.30L9.66 14z"
                          />
                        </svg>
                      </a>
                    </li>

                    {/* LinkedIn */}
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <svg width="18" height="18" viewBox="0 0 24 24">
                          <path
                            fill="#fff"
                            d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.5-.95 1.75-1.95 3.6-1.95 3.85 0 4.55 2.55 4.55 5.85V21h-4v-5.5c0-1.3 0-3-1.85-3s-2.15 1.45-2.15 2.9V21H9z"
                          />
                        </svg>
                      </a>
                    </li>

                    {/* GitHub */}
                    <li>
                      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <svg width="18" height="18" viewBox="0 0 24 24">
                          <path
                            fill="#fff"
                            d="M12 .5A12 12 0 0 0 0 12.8c0 5.4 3.4 10 8.2 11.6.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 1.6 1.8 2 .9.3 1.8-.1 2.2-.3.1-.7.4-1.2.7-1.5-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.4-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.3a11.3 11.3 0 0 1 6.2 0c2.3-1.6 3.4-1.3 3.4-1.3.6 1.7.2 3 .1 3.3.8.9 1.2 2 1.2 3.3 0 4.7-2.8 5.8-5.5 6.1.4.4.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12.2 12.2 0 0 0 24 12.8 12 12 0 0 0 12 .5z"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* NEWSLETTER */}
              <div className="col-lg-6 col-md-7 footer-col">
                <div className="xb-footer-item xb-newsletter">
                  <p className="sub-title">Subscribe to our newsletter</p>
                  <form className="xb-footer-input-form" onSubmit={handleSubmit}>
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Submit</button>
                  </form>
                </div>
              </div>

              {/* CTA */}
              <div className="col-lg-3 col-md-5 footer-col">
                <div className="xb-footer-item xb-footer-btn">
                  <p className="sub-title">You can’t afford it?</p>
                  <Link className="thm-btn chatbot-btn" href="/contact">
                    start for free
                    <span className="arrow-icon">{ArrowSVG}{ArrowSVG}</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="xb-copyright ul_li_between">
            <p>© 2025 <Link href="/ai-chatbot">Aivora</Link>, All rights reserved.</p>
            <ul className="ai-footer-links ul_li">
              <li><Link href="/contact">Terms & Conditions</Link></li>
              <li><Link href="/contact">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM TITLE */}
      <div className="xb-footer-bottom-title">
        <h2 className="title">
          Aivora AI <span>chatbot</span>
          <Image src={diamondIcon} alt="icon" />
        </h2>
      </div>

      <span className="xb-footer-linear"></span>
    </footer>
  );
}

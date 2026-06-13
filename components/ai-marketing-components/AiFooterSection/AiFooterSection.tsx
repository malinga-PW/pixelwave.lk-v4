import Link from "next/link";
import Image from "next/image";

import diamondGif from "@/public/images/icon/diamond-icon02.gif";

function ArrowIcon() {
  return (
    <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
      <rect x="11.93" y="12.46" width="3.8" height="3.83" fill="black" />
      <rect x="0.84" y="0.99" width="3.83" height="3.83" fill="black" />
      <rect x="4.68" y="4.81" width="3.83" height="3.83" fill="black" />
      <rect x="8.53" y="8.63" width="3.83" height="3.83" fill="black" />
      <rect x="8.55" y="16.3" width="3.83" height="3.83" fill="black" />
      <rect x="4.73" y="20.15" width="3.83" height="3.83" fill="black" />
      <rect x="0.91" y="23.99" width="3.83" height="3.83" fill="black" />
    </svg>
  );
}

export default function AiFooterSection() {
  return (
    <footer className="footer pos-rel z-1 pt-80">
      <div className="container-fluid">
        <div className="ai-footer-wrap mlr-20">

          {/* === Footer Heading === */}
          <div className="ai-footer-heading">
            <h1 className="title">Lets Start</h1>
          </div>

          {/* === Footer Inner === */}
          <div className="ai-footer-inner o-hidden pos-rel pb-125 ul_li_between">

            {/* Left Text + CTA */}
            <div className="sec-title-three footer-sec-title">
              <h2 className="title xb-text-reveal">
                Create Something Extraordinary and Transform the Future of Your
                Business.
              </h2>

              <Link className="ai-marketing-btn mt-65" href="/contact">
                <span className="arrow">
                  <ArrowIcon />
                </span>
                <span className="text">
                  <span>Book a Free Discovery Session</span>
                  <span>Book a Free Discovery Session</span>
                </span>
              </Link>
            </div>

            {/* Social links */}
            <div className="ai-footer-link">
              <p>
                Start Your Journey With Us Today — Together, We’ll Build
                Something Truly Remarkable.
              </p>

              <ul className="ai-social-link list-unstyled mt-80">
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            {/* Animated GIF Shape */}
            <div className="ai-footer-shape">
              <div className="wow fadeInUp" data-wow-duration="600ms">
                {/* Using unoptimized to prevent Next.js GIF compression */}
                <Image src={diamondGif} alt="animated icon" unoptimized />
              </div>
            </div>
          </div>

          {/* === Copyright === */}
          <div className="xb-copyrig ht ai-copyright ul_li_between">
            <p>
              Copyright © 2025{" "}
              <Link href="/">Aivora</Link>, All rights reserved.
            </p>

            <ul className="ai-footer-links ul_li">
              <li>
                <Link href="/contact">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/contact">Privacy Policy</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

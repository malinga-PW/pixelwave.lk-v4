"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Images
import gifIcon from "@/public/images/icon/animated-gif02.gif";
import brand01 from "@/public/images/brand/brand01.png";
import brand02 from "@/public/images/brand/brand02.png";
import brand03 from "@/public/images/brand/brand03.png";
import brand04 from "@/public/images/brand/brand04.png";
import brand05 from "@/public/images/brand/brand05.png";
import brand06 from "@/public/images/brand/brand06.png";
import brand07 from "@/public/images/brand/brand07.png";

/* =======================
   STATIC DATA
======================= */
const BRAND_NAMES: string[] = [
  "Nestlé",
  "Danone",
  "Kellogg's",
  "Diageo",
  "Johnson & Johnson",
  "Reckitt",
  "Coca-Cola",
];

const BRAND_LOGOS = [
  brand01,
  brand02,
  brand03,
  brand04,
  brand05,
  brand06,
  brand07,
];

/* =======================
   SVG COMPONENT
======================= */
function ArrowIcon() {
  return (
    <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
      <rect x="11.9" y="12.46" width="3.8" height="3.83" fill="black" />
      <rect x="0.84" y="0.99" width="3.83" height="3.83" fill="black" />
      <rect x="4.68" y="4.81" width="3.83" height="3.83" fill="black" />
      <rect x="8.53" y="8.63" width="3.83" height="3.83" fill="black" />
      <rect x="8.55" y="16.30" width="3.83" height="3.83" fill="black" />
      <rect x="4.73" y="20.15" width="3.83" height="3.83" fill="black" />
      <rect x="0.91" y="23.99" width="3.83" height="3.83" fill="black" />
    </svg>
  );
}

export default function AiBrandSection() {
  useEffect(() => {
    const listItems = document.querySelectorAll<HTMLLIElement>(".ai-brand-list li");
    const logos = document.querySelectorAll<HTMLLIElement>(".ai-brand-logo li");

    let currentIndex = 0;

    const setActive = (index: number) => {
      currentIndex = index;

      listItems.forEach((li, i) => {
        li.classList.toggle("current", i === index);
        li.classList.toggle("mleave", i !== index);
      });

      logos.forEach((li, i) => {
        li.classList.toggle("active", i === index);
      });
    };

    const handlers = new Map<HTMLLIElement, { enter: () => void; click: () => void }>();

    listItems.forEach((li, index) => {
      const onEnter = () => setActive(index);
      const onClick = () => setActive(index);

      li.addEventListener("mouseenter", onEnter);
      li.addEventListener("click", onClick);

      handlers.set(li, { enter: onEnter, click: onClick });
    });

    const container = document.querySelector(".ai-brand-list");
    const onLeave = () => setActive(currentIndex);
    container?.addEventListener("mouseleave", onLeave);

    setActive(0);

    return () => {
      handlers.forEach((fns, li) => {
        li.removeEventListener("mouseenter", fns.enter);
        li.removeEventListener("click", fns.click);
      });

      container?.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="brand mt-80">
      <div className="container-fluid">
        <div className="sec-border mlr-20">
          <div className="ai-brand-heading mt-45 mb-60 ul_li_between">
            <div className="sec-title-three">
              <span className="sub-title mb-25">Trusted by Leading Brands</span>
              <h2 className="title xb-text-reveal">
                Proud to Work with the World’s Most Recognized Brands
              </h2>
            </div>
            <div className="shape">
              <Image src={gifIcon} alt="icon" />
            </div>
          </div>

          <div className="ai-brand-wrap pos-rel">
            <div className="ai-brand-content">
              <p className="content">
                Our AI-powered solutions address critical pain points that global brands face today.
              </p>

              <div className="ai-brand-inner ul_li align-items-start">
                <ul className="ai-brand-list list-unstyled">
                  {BRAND_NAMES.map((name, index) => (
                    <li key={name} className={index === 0 ? "current" : ""}>
                      <a href="/service-details">
                        <span>{name}</span>
                        <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                          <path
                            d="M9.53 6.53c.29-.29.29-.76 0-1.06L4.75.70A.75.75 0 0 0 3.69 1.76L7.94 6l-4.24 4.24a.75.75 0 1 0 1.06 1.06l4.77-4.77zM0 6v.75h9V6h-.75H0z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>

                <ul className="ai-brand-logo list-unstyled text-center">
                  {BRAND_LOGOS.map((logo, index) => (
                    <li key={index} className={index === 0 ? "active" : ""}>
                      <Image src={logo} alt="logo" />
                    </li>
                  ))}
                </ul>
              </div>

              <p className="content">Want to be one of our successful clients? Let’s begin.</p>

              <Link href="/contact" className="ai-marketing-btn mt-30">
                <span className="arrow">
                  <ArrowIcon />
                </span>
                <span className="text">
                  <span>Book a Free Discovery Session</span>
                  <span>Book a Free Discovery Session</span>
                </span>
              </Link>
            </div>

            <div className="background_video">
              <video
                className="responsive-video"
                src="https://www.pexels.com/download/video/28425784/"
                loop
                muted
                playsInline
                autoPlay
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

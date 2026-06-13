"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

// === Import brand logos ===
import logo01 from "@/public/images/brand/logo01.png";
import logo02 from "@/public/images/brand/logo02.png";
import logo03 from "@/public/images/brand/logo03.png";
import logo04 from "@/public/images/brand/logo04.png";
import logo05 from "@/public/images/brand/logo05.png";
import logo06 from "@/public/images/brand/logo06.png";
import logo07 from "@/public/images/brand/logo07.png";
import logo08 from "@/public/images/brand/logo08.png";
import logo09 from "@/public/images/brand/logo09.png";
import logo10 from "@/public/images/brand/logo10.png";
import logo11 from "@/public/images/brand/logo11.png";

/* ================================
   Static Brand Logos
================================= */

const BRAND_LOGOS = [
  logo01,
  logo02,
  logo03,
  logo04,
  logo05,
  logo06,
  logo07,
  logo08,
  logo09,
  logo10,
  logo11,
];

/* ================================ */

export default function BrandSection() {
  return (
    <section className="brand pb-150">
      <div className="container">
        <div className="sec-title sec-title-center brand-sec-title text-center mb-40">
          <p className="sub-title">
            World's Best <span>120 Companies</span> Work With Us
          </p>
        </div>
      </div>

      {/* === Brand Marquee === */}
      <Marquee
        gradient={false}
        speed={30}
        pauseOnHover
        direction="left"
        className="brand-marquee ac-brand-marquee marquee-left"
      >
        <div className="ac-brand-inner ul_li_between">
          {BRAND_LOGOS.map((logo, index) => (
            <div key={index} className="xb-brand-item">
              <Image
                src={logo}
                alt={`brand-logo-${index + 1}`}
                width={140}
                height={60}
                priority={index < 5}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}

"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

// Icons
import subLeftIcon from "@/public/images/icon/sub-left-icon.png";
import subRightIcon from "@/public/images/icon/sub-right-icon.png";

// Brand Logos
import brandLogo1 from "@/public/images/brand/logo01.png";
import brandLogo2 from "@/public/images/brand/logo02.png";
import brandLogo3 from "@/public/images/brand/logo03.png";
import brandLogo4 from "@/public/images/brand/logo04.png";
import brandLogo5 from "@/public/images/brand/logo05.png";
import brandLogo6 from "@/public/images/brand/logo06.png";
import brandLogo7 from "@/public/images/brand/logo07.png";
import brandLogo8 from "@/public/images/brand/logo08.png";
import brandLogo9 from "@/public/images/brand/logo09.png";
import brandLogo10 from "@/public/images/brand/logo10.png";
import brandLogo11 from "@/public/images/brand/logo11.png";

/* ================================
   Static Brand Logos
================================= */

const BRAND_LOGOS = [
  brandLogo1,
  brandLogo2,
  brandLogo3,
  brandLogo4,
  brandLogo5,
  brandLogo6,
  brandLogo7,
  brandLogo8,
  brandLogo9,
  brandLogo10,
  brandLogo11,
];

/* ================================ */

export default function BrandSection() {
  return (
    <section className="brand">
      <div className="container">
        <div className="sec-title sec-title--two custom-sec-title text-center mb-30">
          <span className="sub-title">
            <Image src={subLeftIcon} alt="icon-left" width={24} height={24} />
            Trusted by 9000+ AI Assistants created
            <Image src={subRightIcon} alt="icon-right" width={24} height={24} />
          </span>
        </div>
      </div>

      <Marquee
        gradient={false}
        speed={30}
        pauseOnHover
        direction="left"
        className="brand-marquee ac-brand-marquee marquee-left"
      >
        <div className="ac-brand-inner ul_li_between">
          {BRAND_LOGOS.map((logo, i) => (
            <div className="xb-brand-item" key={i}>
              <Image
                src={logo}
                alt={`brand-${i + 1}`}
                width={120}
                height={50}
                priority={i < 4}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}

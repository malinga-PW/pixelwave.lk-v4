"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

// Logos
import logo01 from "@/public/images/brand/logo01.png";
import logo02 from "@/public/images/brand/logo02.png";
import logo03 from "@/public/images/brand/logo03.png";
import logo04 from "@/public/images/brand/logo04.png";
import logo05 from "@/public/images/brand/logo05.png";
import logo06 from "@/public/images/brand/logo06.png";

export default function BrandSection() {
  const logos = [logo01, logo02, logo03, logo04, logo05, logo06];

  return (
    <section className="brand pt-170 pb-150">
      <div className="container">
        <div className="xb-brand-wrap xb-border">

          {/* Subtitle */}
          <div className="brand-sub-title xb-border">
            <p>
              World&apos;s Best <span>120 Companies</span> Work With Us
            </p>
          </div>

          {/* Marquee */}
          <Marquee
            speed={40}
            gradient={false}
            pauseOnHover={false}
            aria-label="Brand logos marquee"
          >
            <div className="xb-brand-inner ul_li_between">

              {logos.map((logo, index) => (
                <div className="xb-brand-item" key={index}>
                  <Image
                    src={logo}
                    alt={`Brand Logo ${index + 1}`}
                    width={120}
                    height={60}
                    priority={index < 2}
                  />
                </div>
              ))}

            </div>
          </Marquee>

        </div>
      </div>
    </section>
  );
}

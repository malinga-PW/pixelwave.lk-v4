import React from "react";
import Link from "next/link";
import Image from "next/image";

import gif1 from "@/public/images/icon/b10c3e43e836d32554bf.gif";
import gif2 from "@/public/images/icon/animated-gif02.gif";
import audience1 from "@/public/images/hero/audience-img01.png";
import audience2 from "@/public/images/hero/audience-img02.png";
import audience3 from "@/public/images/hero/audience-img03.png";
import heroPoster from "@/public/images/bg/hero-bg03_1.jpg";
import heroBg from "@/public/images/bg/hero-bg03.jpg";

export default function HeroSection() {
  return (
    <section
      className="hero ai-marketing-hero pos-rel bg_img"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <div className="hero-style hero-style--three sec-border pos-rel">
        <div className="container-fluid">
          <div className="hero-content hero-content--three">

            {/* TOP CONTENT */}
            <div className="xb-content-holder wow fadeInUp" data-wow-duration="600ms">
              <h2 className="title">
                AI Marketing{" "}
                <Image src={gif1} alt="animated gif" unoptimized /> for Smarter Insights and
              </h2>
              <p className="sub-title">
                AI audience & media solutions for Global Brands to increase media
                Efficiency & ROI
              </p>
              <span className="hero-shape">
                <Image src={gif2} alt="animated gif" unoptimized />
              </span>
            </div>

            {/* BOTTOM CONTENT */}
            <div
              className="hero-content-bottom ul_li_between wow fadeInUp"
              data-wow-delay="150ms"
              data-wow-duration="600ms"
            >
              <div className="xb-item--holder ul_li">
                <p className="xb-item--text">
                  Successfully <br /> <span>AI audience</span>
                </p>
                <div className="xb-item--audience ul_li">
                  <Image src={audience1} alt="Audience 1" />
                  <Image src={audience2} alt="Audience 2" />
                  <Image src={audience3} alt="Audience 3" />
                </div>
              </div>

              <h2 className="title">Campaigns</h2>

              <Link href="/contact" className="ai-marketing-btn">
                <span className="arrow">
                  <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
                    <rect x="11.93" y="12.46" width="3.8" height="3.83" fill="black" />
                    <rect x="0.84" y="0.99" width="3.83" height="3.83" fill="black" />
                    <rect x="4.68" y="4.81" width="3.83" height="3.83" fill="black" />
                    <rect x="8.53" y="8.63" width="3.83" height="3.83" fill="black" />
                    <rect x="8.55" y="16.30" width="3.83" height="3.83" fill="black" />
                    <rect x="4.73" y="20.15" width="3.83" height="3.83" fill="black" />
                    <rect x="0.91" y="23.99" width="3.83" height="3.83" fill="black" />
                  </svg>
                </span>
                <span className="text">
                  <span>Book a Free Discovery Session</span>
                  <span>Book a Free Discovery Session</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* BACKGROUND VIDEO */}
        <div className="background_video">
          <video
            className="responsive-video"
            src="https://cdn.pixabay.com/video/2017/06/06/10913-219826152_large.mp4" 
            loop
            muted
            playsInline
            autoPlay
            poster={heroPoster.src}
          ></video>
        </div>
      </div>
    </section>
  );
}

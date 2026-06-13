"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Background + icons
import bgImage from "@/public/images/bg/feature-bg.jpg";
import icon01 from "@/public/images/icon/fea-small-icon01.svg";
import icon04 from "@/public/images/icon/fea-small-icon04.svg";
import icon02 from "@/public/images/icon/fea-small-icon02.svg";
import icon06 from "@/public/images/icon/fea-small-icon06.svg";

/* ================================
   Static Styles
================================= */

const BG_STYLE = {
  backgroundImage: `url(${bgImage.src})`,
};

/* ================================ */

export default function FeatureSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // Register plugin safely on client
    gsap.registerPlugin(ScrollTrigger);

    const el = sectionRef.current;
    if (!el) return;

    // Initial GSAP state
    gsap.set(el, {
      backgroundPosition: "center 0px",
      backgroundSize: "cover",
    });

    // Parallax animation
    const animation = gsap.to(el, {
      backgroundPositionY: "200px",
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="feature-section parallax-section"
      style={BG_STYLE}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="xb-feature-content">

              {/* Section Heading */}
              <div className="sec-title sec-title-center fea-sec-title mb-35">
                <span className="sub-title mb-20">Why We are Better?</span>
                <h2 className="title title-line_height">
                  Why our services are better than others?
                </h2>
              </div>

              <div className="row mt-none-30">

                <div className="col-lg-6 col-md-6 mt-30">
                  <div className="xb-feature-item xb-feature-item2">
                    <div className="xb-item--inner xb-border">
                      <span className="xb-item--icon">
                        <Image src={icon01} alt="Secure AI" width={32} height={32} />
                      </span>
                      <h2 className="xb-item--title">
                        Secure, ethical & <br /> scalable AI
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 mt-30">
                  <div className="xb-feature-item xb-feature-item2 xb-border">
                    <div className="xb-item--inner xb-border">
                      <span className="xb-item--icon">
                        <Image src={icon04} alt="Expert Team" width={32} height={32} />
                      </span>
                      <h2 className="xb-item--title">
                        Expert team of AI <br /> specialists
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 mt-30">
                  <div className="xb-feature-item xb-feature-item2">
                    <div className="xb-item--inner xb-border">
                      <span className="xb-item--icon">
                        <Image src={icon02} alt="Custom Solutions" width={32} height={32} />
                      </span>
                      <h2 className="xb-item--title">
                        Custom-built <br /> solutions that fit you
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 mt-30">
                  <div className="xb-feature-item xb-feature-item2 xb-border">
                    <div className="xb-item--inner xb-border">
                      <span className="xb-item--icon">
                        <Image src={icon06} alt="Client Focused" width={32} height={32} />
                      </span>
                      <h2 className="xb-item--title">
                        Client-centered, <br /> business-focused
                      </h2>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

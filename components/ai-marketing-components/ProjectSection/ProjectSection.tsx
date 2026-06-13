"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "@/public/images/project/img08.png";
import img2 from "@/public/images/project/img11.png";
import img3 from "@/public/images/project/img10.png";
import img4 from "@/public/images/project/img09.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 767px)", () => {
      const panels = document.querySelectorAll<HTMLElement>(".des-portfolio-panel");

      panels.forEach((panel) => {
        gsap.set(panel, { scale: 1 });

        gsap.to(panel, {
          scale: 0.8,
          scrollTrigger: {
            trigger: panel,
            pin: true,
            scrub: 1,
            start: "top top",
            end: "bottom 60%",
            endTrigger: ".des-portfolio-wrap",
            pinSpacing: false,
            markers: false,
          },
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      mm.kill();
    };
  }, []);

  return (
    <section className="project mt-70 mb-30">
      <div className="container-fluid">
        <div className="mlr-20">
          <div className="ai-portfolio-wrap des-portfolio-wrap">

            {/* PROJECT 1 */}
            <div
              className="ai-project-item des-portfolio-panel pos-rel not-hide-cursor mb-30"
              data-cursor="View<br>Demo"
            >
              <Link className="cursor-hide" href="/project-details">
                <div className="ai-portfolio-thumb">
                  <Image src={img1} alt="GROK" />
                </div>
                <span className="ai-category">
                  Case Study : <span>GROK</span>
                </span>
              </Link>

              <div className="ai-project-content ul_li_between">
                <span className="content">
                  <span>Challenge:</span> GROK needed stronger digital outreach for product launches.
                </span>

                <Link className="ai-marketing-btn" href="/project">
                  <span className="arrow"><ArrowIcon /></span>
                  Read Full Case Study
                </Link>

                <p className="content text-end">
                  <span className="text-green">Solution:</span> AI Dashboard for real-time insights.
                </p>
              </div>
            </div>

            {/* PROJECT 2 */}
            <div
              className="ai-project-item des-portfolio-panel pos-rel not-hide-cursor mb-30"
              data-cursor="View<br>Demo"
            >
              <Link className="cursor-hide" href="/project-details">
                <div className="ai-portfolio-thumb">
                  <Image src={img2} alt="Dummy Shoes Company" />
                </div>
                <span className="ai-category">
                  Case Study : <span>Dummy Shoes Company</span>
                </span>
              </Link>

              <div className="ai-project-content ul_li_between">
                <p className="content">
                  <span>Challenge:</span> Competing in a crowded e-commerce market.
                </p>

                <Link className="ai-marketing-btn" href="/project">
                  <span className="arrow"><ArrowIcon /></span>
                  Read Full Case Study
                </Link>

                <p className="content text-end">
                  <span className="text-green">Solution:</span> AI agent for personalized shopping.
                </p>
              </div>
            </div>

            {/* PROJECT 3 */}
            <div
              className="ai-project-item des-portfolio-panel pos-rel not-hide-cursor mb-30"
              data-cursor="View<br>Demo"
            >
              <Link className="cursor-hide" href="/project-details">
                <div className="ai-portfolio-thumb">
                  <Image src={img3} alt="Perfume Brand" />
                </div>
                <span className="ai-category">
                  Case Study : <span>Perfume Brand</span>
                </span>
              </Link>

              <div className="ai-project-content ul_li_between">
                <p className="content">
                  <span>Challenge:</span> Scale luxury digital presence.
                </p>

                <Link className="ai-marketing-btn" href="/project">
                  <span className="arrow"><ArrowIcon /></span>
                  Read Full Case Study
                </Link>

                <p className="content text-end">
                  <span className="text-green">Solution:</span> AI insights for audience targeting.
                </p>
              </div>
            </div>

            {/* PROJECT 4 */}
            <div
              className="ai-project-item des-portfolio-panel pos-rel not-hide-cursor"
              data-cursor="View<br>Demo"
            >
              <Link className="cursor-hide" href="/project-details">
                <div className="ai-portfolio-thumb">
                  <Image src={img4} alt="IBM" />
                </div>
                <span className="ai-category">Case Study : <span>IBM</span></span>
              </Link>

              <div className="ai-project-content ul_li_between">
                <p className="content">
                  <span>Challenge:</span> Understand enterprise customer behavior.
                </p>

                <Link className="ai-marketing-btn" href="/project">
                  <span className="arrow"><ArrowIcon /></span>
                  <span className="text">
                    <span>Read Full Case Study</span>
                    <span>Read Full Case Study</span>
                  </span>
                </Link>

                <p className="content text-end">
                  <span className="text-green">Solution:</span> AI Behavioral Data + Dashboards.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// SVG Arrow Icon
function ArrowIcon() {
  return (
    <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
      <rect x="11.93" y="12.46" width="3.8" height="3.83" fill="black" />
      <rect x="0.84" y="0.99" width="3.83" height="3.83" fill="black" />
      <rect x="4.68" y="4.81" width="3.83" height="3.83" fill="black" />
      <rect x="8.53" y="8.63" width="3.83" height="3.83" fill="black" />
      <rect x="8.55" y="16.30" width="3.83" height="3.83" fill="black" />
      <rect x="4.73" y="20.15" width="3.83" height="3.83" fill="black" />
      <rect x="0.91" y="23.99" width="3.83" height="3.83" fill="black" />
    </svg>
  );
}

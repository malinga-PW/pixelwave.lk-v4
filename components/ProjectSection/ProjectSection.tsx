"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Images
import projectBg from "@/public/images/bg/project-bg.png";
import gifRound from "@/public/images/icon/b10c3e43e836d32554bf.gif";

import projectImg01 from "@/public/images/project/project-img01.jpg";
import projectImg02 from "@/public/images/project/project-img02.jpg";
import projectImg03 from "@/public/images/project/project-img03.jpg";
import projectImg04 from "@/public/images/project/project-img04.jpg";

// Icons
import icon01 from "@/public/images/icon/project-icon01.svg";
import icon02 from "@/public/images/icon/project-icon02.svg";
import icon03 from "@/public/images/icon/project-icon03.svg";
import icon08 from "@/public/images/icon/project-icon08.svg";
import icon09 from "@/public/images/icon/project-icon09.svg";
import icon10 from "@/public/images/icon/project-icon10.svg";
import icon11 from "@/public/images/icon/project-icon11.svg";
import icon12 from "@/public/images/icon/project-icon12.svg";
import icon13 from "@/public/images/icon/project-icon13.svg";

export default function ProjectSection() {
  useEffect(() => {
    // Background
    const bgElement = document.querySelector<HTMLElement>(".project.bg_img");
    if (bgElement) {
      bgElement.style.backgroundImage = `url(${projectBg.src})`;
    }

    const items = document.querySelectorAll<HTMLElement>(".xb-project-item");
    const paginations = document.querySelectorAll<HTMLElement>(".xb-project-pagination li");
    if (!items.length || !paginations.length) return;

    const updateActive = () => {
      let activeIndex = 0;
      const triggerLine = window.innerHeight * 0.3;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          activeIndex = index;
        }
      });

      paginations.forEach((dot) => dot.classList.remove("active"));
      paginations[activeIndex]?.classList.add("active");

      items.forEach((item, i) => {
        item.style.opacity = i === activeIndex ? "1" : i < activeIndex ? "0.3" : "1";
      });
    };

    window.addEventListener("scroll", updateActive);
    updateActive();

    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  const ArrowIcon = () => (
  <>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5.066" y="19.978" width="20.571" height="2.612" transform="rotate(-40.28 5.066 19.978)" fill="white" />
      <rect x="7.971" y="7.244" width="2.612" height="2.612" transform="rotate(-40.28 7.971 7.244)" fill="white" />
      <rect x="11.652" y="7.548" width="2.612" height="2.612" transform="rotate(-40.28 11.652 7.548)" fill="white" />
      <rect x="15.334" y="7.852" width="2.612" height="2.612" transform="rotate(-40.28 15.334 7.852)" fill="white" />
      <rect x="18.712" y="11.837" width="2.612" height="2.612" transform="rotate(-40.28 18.712 11.837)" fill="white" />
      <rect x="18.408" y="15.52" width="2.612" height="2.612" transform="rotate(-40.28 18.408 15.52)" fill="white" />
      <rect x="18.104" y="19.201" width="2.612" height="2.612" transform="rotate(-40.28 18.104 19.201)" fill="white" />
    </svg>

    {/* second duplicate for animation */}
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5.066" y="19.978" width="20.571" height="2.612" transform="rotate(-40.28 5.066 19.978)" fill="white" />
      <rect x="7.971" y="7.244" width="2.612" height="2.612" transform="rotate(-40.28 7.971 7.244)" fill="white" />
      <rect x="11.652" y="7.548" width="2.612" height="2.612" transform="rotate(-40.28 11.652 7.548)" fill="white" />
      <rect x="15.334" y="7.852" width="2.612" height="2.612" transform="rotate(-40.28 15.334 7.852)" fill="white" />
      <rect x="18.712" y="11.837" width="2.612" height="2.612" transform="rotate(-40.28 18.712 11.837)" fill="white" />
      <rect x="18.408" y="15.52" width="2.612" height="2.612" transform="rotate(-40.28 18.408 15.52)" fill="white" />
      <rect x="18.104" y="19.201" width="2.612" height="2.612" transform="rotate(-40.28 18.104 19.201)" fill="white" />
    </svg>
  </>
);

  const projects = [
    {
      img: projectImg01,
      title: "Chatbot and NLP projects..",
      desc: "We build smart chatbots and NLP tools that understand and respond naturally. From customer support to document analysis, our AI solutions automate communication, save time, and improve user experience.",
      industry: "Data Processing",
      country: "Germany, Issum",
      techs: [icon01, icon02, icon03],
    },
    {
      img: projectImg02,
      title: "E-commerce & marketing..",
      desc: "We create AI solutions that boost sales and customer engagement—like smart product recommendations, dynamic pricing, and behavior-based targeting.",
      industry: "Artificial Intelligence",
      country: "Singapore",
      techs: [icon01, icon08, icon09],
    },
    {
      img: projectImg03,
      title: "Computer vision projects..",
      desc: "We develop AI systems that see and understand visual data—detecting objects, recognizing patterns, and automating inspections.",
      industry: "Computer Vision",
      country: "United States",
      techs: [icon10, icon11, icon01],
    },
    {
      img: projectImg04,
      title: "Data science analytics..",
      desc: "We turn complex data into clear, actionable insights. Our AI-powered analytics help businesses make smarter decisions.",
      industry: "Data Science",
      country: "Canada",
      techs: [icon08, icon12, icon13],
    },
  ];

  return (
    <section className="project bg_img pt-135 pb-150">
      <div className="container">
        <div className="sec-title custom-sec-title xb-sec-padding text-center">
          <span className="sub-title">Our Projects</span>

          <h2 className="title">
            <span className="round-img">
              <Image src={gifRound} alt="animation" />
            </span>{" "}
            See the results that reflect of our hard work
          </h2>

          <div className="xb-heading-btn d-inline">
            <Link className="thm-btn agency-btn" href="/project">
              <span className="text">view more projects</span>
              <span className="arrow">
                <span className="arrow-icon">
                  <ArrowIcon />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mxw-1800">
        <div className="xb-project-wrap">

          {/* Pagination */}
          <div className="xb-project-pagination-wrap">
            <ul className="xb-project-pagination">
              {projects.map((_, i) => (
                <li key={i} className={i === 1 ? "active" : ""}>
                  {i + 1}
                </li>
              ))}
            </ul>
          </div>

          <div className="xb-project-inner">
            {projects.map((project, index) => (
              <div
                key={index}
                className="xb-project-item bg_img"
                style={{ backgroundImage: `url(${project.img.src})` }}
              >
                <div className="xb-project-content">
                  <div className="xb-item--inner xb-border">
                    <h2 className="xb-item--title">{project.title}</h2>
                    <p className="xb-item--content">{project.desc}</p>

                    <ul className="xb-item--list ul_li">
                      <li>Industry: <span>{project.industry}</span></li>
                      <li>Country: <span>{project.country}</span></li>
                    </ul>

                    <div className="xb-item--technologie ul_li">
                      <span>Core Technologies:</span>
                      <ul className="list-unstyled ul_li">
                        {project.techs.map((icon, i) => (
                          <li key={i}>
                            <Image src={icon} alt="tech icon" />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="xb-item---btn mt-70">
                      <Link className="thm-btn agency-btn" href="/project-details">
                        <span className="text">read more</span>
                        <span className="arrow">
                          <span className="arrow-icon">
                            <ArrowIcon />
                          </span>
                        </span>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

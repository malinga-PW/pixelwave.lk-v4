"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

// Images
import jobBg from "@/public/images/bg/job-bg.png";
import diamondIcon from "@/public/images/icon/diamond-icon02.gif";
import locIcon from "@/public/images/icon/location-icon02.svg";
import clockIcon from "@/public/images/icon/clock-icon.svg";

// JOB DATA
const jobs = [
  {
    id: 1,
    title: "Machine learning engineer.",
    category: ["cat2", "cat4"],
    location: "Remote, (USA)",
    type: "Full time",
  },
  {
    id: 2,
    title: "NLP (natural language processing) engineer.",
    category: ["cat1", "cat2"],
    location: "In House, (USA)",
    type: "Full time",
  },
  {
    id: 3,
    title: "Technical project manager (AI).",
    category: ["cat1", "cat3"],
    location: "Remote, (USA)",
    type: "Full time",
  },
  {
    id: 4,
    title: "Conversational UX designer.",
    category: ["cat3", "cat4"],
    location: "Remote, (USA)",
    type: "Full time",
  },
  {
    id: 5,
    title: "HR & talent manager (AI Sector).",
    category: ["cat4", "cat1"],
    location: "Remote, (USA)",
    type: "Full time",
  },
];

// FILTERS
const filters = [
  { label: "View all", value: "*" },
  { label: "Technical", value: "cat1" },
  { label: "Business", value: "cat2" },
  { label: "Marketing", value: "cat3" },
  { label: "Leadership", value: "cat4" },
];

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

export default function JobSection() {
  const [activeFilter, setActiveFilter] = useState("*");
  const itemsRef = useRef<HTMLDivElement[]>([]);

  // GSAP Filter Animation
  useEffect(() => {
    itemsRef.current.forEach((el) => {
      if (!el) return;

      const categories = el.dataset.category?.split(" ") ?? [];
      const show = activeFilter === "*" || categories.includes(activeFilter);

      gsap.to(el, {
        opacity: show ? 1 : 0,
        scale: show ? 1 : 0.8,
        duration: 0.4,
        pointerEvents: show ? "auto" : "none",
      });
    });
  }, [activeFilter]);

  return (
    <section
      className="job_section pt-90 pb-150 bg_img"
      style={{ backgroundImage: `url(${jobBg.src})` }}
    >
      <div className="container">

        {/* TITLE */}
        <div className="sec-title sec-title-center fea-sec-title text-center mb-40">
          <span className="sub-title">Open Positions</span>
          <h2 className="title">
            Be part of{" "}
            <span>
              <Image src={diamondIcon} alt="icon" />
            </span>{" "}
            the team
          </h2>
        </div>

        {/* FILTER BUTTONS */}
        <div className="text-center">
          <div className="career-menu ul_li">
            {filters.map((btn, i) => (
              <button
                key={i}
                className={activeFilter === btn.value ? "active" : ""}
                onClick={() => setActiveFilter(btn.value)}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* JOB GRID */}
        <div className="career-nav-wrapper grid mt-40">
          {jobs.map((job, i) => (
            <div
              key={job.id}
              ref={(el) => {
                itemsRef.current[i] = el as HTMLDivElement;
              }}
              className="xb-career-item grid-item xb-border"
              data-category={job.category.join(" ")}
              style={{ opacity: 1 }}
            >
              <div className="xb-item--content">
                <h2 className="xb-item--title">
                  <Link href="/career-details">{job.title}</Link>
                </h2>

                <ul className="xb-item--holder ul_li list-unstyled">
                  <li>
                    <Image src={locIcon} alt="location" /> {job.location}
                  </li>
                  <li>
                    <Image src={clockIcon} alt="clock" /> {job.type}
                  </li>
                </ul>
              </div>

              <div className="team-btn">
                <Link className="thm-btn agency-btn" href="/career-details">
                  <span className="text">view job</span>
                  <span className="arrow">
                    <span className="arrow-icon">
                       <ArrowIcon />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

/* ===============================
   IMAGES
================================ */

// Frame & Shapes
import videoFrame from "@/public/images/video/video-frame.png";
import shape1 from "@/public/images/shape/video-shape01.png";
import shape2 from "@/public/images/shape/video-shape02.png";
import shape3 from "@/public/images/shape/video-shape03.png";
import shape4 from "@/public/images/shape/video-shape04.png";
import robotImg from "@/public/images/video/robot-img.png";

// Tab Icons
import dashboardIcon from "@/public/images/icon/dash_board_icon.svg";
import documentIcon from "@/public/images/icon/document_icon.svg";
import sheetIcon from "@/public/images/icon/sheet_icon.svg";
import whiteboardIcon from "@/public/images/icon/sheet_icon.svg";

// Tab Images
import tabImg1 from "@/public/images/video/img01.jpg";
import tabImg2 from "@/public/images/video/img02.jpg";
import tabImg3 from "@/public/images/video/img03.jpg";
import tabImg4 from "@/public/images/video/img04.jpg";

/* ===============================
   STATIC TABS
================================ */

const TABS = [
  { id: "dashboard", label: "Dashboard", icon: dashboardIcon, img: tabImg1 },
  { id: "document", label: "Document", icon: documentIcon, img: tabImg2 },
  { id: "sheet", label: "Sheet", icon: sheetIcon, img: tabImg3 },
  { id: "whiteboard", label: "Whiteboard", icon: whiteboardIcon, img: tabImg4 },
];

/* =============================== */

export default function VideoSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  /* Auto tab switch */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TABS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="video z-1 pt-25 pb-70 pos-rel">
      <div className="container">
        <div className="xb-video-frame pos-rel">

          {/* VIDEO FRAME */}
          <div className="xb-img">
            <Image src={videoFrame} alt="video frame" />
          </div>

          {/* TABS */}
          <div className="xb-video-wrap">
            <ul className="xb-video-nav nav nav-pills mb-3" role="tablist">
              {TABS.map((tab, index) => (
                <li className="nav-item xb-video-nav-item" key={tab.id}>
                  <button
                    type="button"
                    role="tab"
                    className={`nav-link ${activeIndex === index ? "active" : ""}`}
                    aria-selected={activeIndex === index}
                    aria-controls={`tab-${tab.id}`}
                    id={`tab-btn-${tab.id}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <Image src={tab.icon} alt={`${tab.label} icon`} width={20} height={20} />
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* TAB CONTENT */}
            <div className="tab-content">
              {TABS.map((tab, index) => (
                <div
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tabpanel"
                  className={`tab-pane fade ${activeIndex === index ? "show active" : ""}`}
                >
                  <div className="xb-tab-img">
                    <Image src={tab.img} alt={`${tab.label} preview`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FLOATING SHAPES */}
          <div className="xb-video-shape">
            <div className="shape shape--1">
              <Image src={shape1} alt="shape" width={120} height={120} />
            </div>
            <div className="shape shape--2 updown-2">
              <Image src={shape2} alt="shape" width={120} height={120} />
            </div>
            <div className="shape shape--3 zoominup">
              <Image src={shape3} alt="shape" width={120} height={120} />
            </div>
          </div>
        </div>
      </div>

      {/* LINEAR GRADIENT */}
      <div className="xb-linear-gradient">
        <span className="gradient gradient--1"></span>
        <span className="gradient gradient--2"></span>
        <span className="gradient gradient--3"></span>
        <span className="gradient gradient--4"></span>
        <span className="gradient gradient--dot-img">
          <Image src={shape4} alt="dot shape" width={180} height={180} />
        </span>
      </div>

      {/* TEXT MARQUEE */}
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover
        direction="left"
        className="xb-text-marquee-wrap marquee-left"
      >
        <div className="xb-text-marquee-item">
          <h2 className="title">24/7 instant support</h2>
          <span className="img">
            <Image src={robotImg} alt="robot" width={60} height={60} />
          </span>
          <h2 className="title">No-code chatbot builder</h2>
          <span className="img">
            <Image src={robotImg} alt="robot" width={60} height={60} />
          </span>
        </div>
      </Marquee>
    </section>
  );
}

import React from "react";
import Image from "next/image";

// ---- image imports ----
import img07 from "@/public/images/project/mega-app-banner.png";

import icon4 from "@/public/images/icon/project-icon04.svg";
import icon5 from "@/public/images/icon/project-icon05.svg";
import icon6 from "@/public/images/icon/project-icon06.svg";
import icon7 from "@/public/images/icon/project-icon07.svg";

// ---- check icon svg ----
const CheckIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      opacity="0.2"
      d="M24 12C24 13.024 22.742 13.868 22.49 14.812C22.23 15.788 22.888 17.148 22.394 18.002C21.892 18.87 20.382 18.974 19.678 19.678C18.974 20.382 18.87 21.892 18.002 22.394C17.148 22.888 15.788 22.23 14.812 22.49C13.868 22.742 13.024 24 12 24C10.976 24 10.132 22.742 9.188 22.49C8.212 22.23 6.852 22.888 5.998 22.394C5.13 21.892 5.026 20.382 4.322 19.678C3.618 18.974 2.108 18.87 1.606 18.002C1.112 17.148 1.77 15.788 1.51 14.812C1.258 13.868 0 13.024 0 12C0 10.976 1.258 10.132 1.51 9.188C1.77 8.212 1.112 6.852 1.606 5.998C2.108 5.13 3.618 5.026 4.322 4.322C5.026 3.618 5.13 2.108 5.998 1.606C6.852 1.112 8.212 1.77 9.188 1.51C10.132 1.258 10.976 0 12 0C13.024 0 13.868 1.258 14.812 1.51C15.788 1.77 17.148 1.112 18.002 1.606C18.87 2.108 18.974 3.618 19.678 4.322C20.382 5.026 21.892 5.13 22.394 5.998C22.888 6.852 22.23 8.212 22.49 9.188C22.742 10.132 24 10.976 24 12Z"
      fill="#00FF97"
    />
    <path
      d="M15.5559 9.14076L11.3992 13.178L9.24437 11.0869C8.77664 10.6326 8.01773 10.6326 7.55001 11.0869C7.08229 11.5412 7.08229 12.2783 7.55001 12.7326L10.5729 15.6686C11.0279 16.1105 11.7668 16.1105 12.2218 15.6686L17.2484 10.7864C17.7162 10.3321 17.7162 9.59504 17.2484 9.14076C16.7807 8.68648 16.0236 8.68648 15.5559 9.14076Z"
      fill="#00FF97"
    />
  </svg>
);

// ==== main component ====
export default function MegaAppCaseStudy() {
  const projectMeta = [
    { icon: icon4, label: "status :", value: "In Development" },
    { icon: icon5, label: "industry :", value: "Social Ecosystem" },
    { icon: icon6, label: "scale :", value: "Global / Mega App" },
    { icon: icon7, label: "focus :", value: "All-in-One Super App" },
  ];

  return (
    <section className="project-details pb-90 pt-50">
      <div className="container">
        
        {/* Title Block */}
        <div className="mb-50 text-center">
          <span className="sub-title d-block mb-10 text-primary" style={{letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px', fontWeight: 600}}>Ongoing Internal Project</span>
          <h1 className="title" style={{ fontSize: '48px', lineHeight: 1.2 }}>The "All-In-One" <br /> <span style={{ color: '#00FF97' }}>AI-Powered Mega Community App</span></h1>
        </div>

        {/* image */}
        <div className="single-item-image mb-75 rounded overflow-hidden shadow-lg border border-secondary">
          <Image
            src={img07}
            alt="All-In-One Mega App AI Project Overview"
            className="w-100"
            style={{ objectFit: "cover", maxHeight: "550px", objectPosition: "center" }}
          />
        </div>

        {/* meta icons */}
        <ul className="project-meta ul_li_between mb-80 p-4 rounded bg-dark border border-secondary">
          {projectMeta.map((item, i) => (
            <li key={i} className="mb-3 mb-md-0">
              <Image src={item.icon} alt={item.label} width={40} height={40} className="me-3" />
              <div>
                <span className="d-block text-uppercase text-secondary" style={{fontSize: '12px'}}>{item.label}</span>
                <strong className={item.value === "In Development" ? "text-warning" : "text-white"}>{item.value}</strong>
              </div>
            </li>
          ))}
        </ul>

        {/* Executive Summary */}
        <h2 className="details-content-title mb-20 text-white">The Vision</h2>
        <p className="mb-30 text-light" style={{ fontSize: '18px', lineHeight: 1.8 }}>
          We are currently engineering our most ambitious project to date: a revolutionary <strong>All-In-One Mega Community Platform</strong>. This application is designed to consolidate the core functionalities of multiple disjointed digital services (Facebook, YouTube, TikTok, Smule, Uber, Canva) into a single, cohesive, AI-powered ecosystem. By bridging study, entertainment, ride-sharing, and business into one continuous user experience, we aim to redefine how global users interact online.
        </p>

        <ul className="list-unstyled mb-60 ps-3 border-start border-primary border-3">
          <li className="mb-2"><strong className="text-white">Target Audience:</strong> Global users seeking a unified digital lifestyle.</li>
          <li><strong className="text-white">Tech Stack:</strong> Next.js, React Native, AI Core Integration, Real-time WebRTC, Microservices.</li>
        </ul>

        {/* Feature Set */}
        <div className="mt-80 mb-80 p-5 rounded" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <h2 className="details-content-title mb-20 text-white">Consolidated Digital Services</h2>
          <div className="row mt-4">
            <div className="col-md-4 mb-4">
              <div className="p-4 h-100 rounded border border-secondary" style={{ background: '#0a0d14' }}>
                <h4 className="text-white mb-3" style={{ fontSize: '20px' }}>Social & Video Streaming</h4>
                <p className="text-secondary mb-0" style={{ fontSize: '15px' }}>Combining the short-form addictive nature of TikTok with long-form YouTube-style streaming and Facebook-esque social networking communities.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 h-100 rounded border border-secondary" style={{ background: '#0a0d14' }}>
                <h4 className="text-white mb-3" style={{ fontSize: '20px' }}>Entertainment & Ride-Hailing</h4>
                <p className="text-secondary mb-0" style={{ fontSize: '15px' }}>Interactive features like Smule-style social karaoke fused seamlessly with real-world utilities like Uber-style ride-hailing and tracking.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 h-100 rounded border border-secondary" style={{ background: '#0a0d14' }}>
                <h4 className="text-white mb-3" style={{ fontSize: '20px' }}>B2B & Creative Studio</h4>
                <p className="text-secondary mb-0" style={{ fontSize: '15px' }}>Built-in social media post makers, dedicated "Home Made" business profiles with verified subdomains, and professional business emails.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Development Status */}
        <div className="p-5 rounded text-center" style={{ background: 'linear-gradient(135deg, rgba(255, 151, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%)', border: '1px solid rgba(255, 151, 0, 0.2)' }}>
          <h2 className="details-content-title mb-20 text-white"><span className="text-warning">Status: Active Development</span></h2>
          <p className="text-light mx-auto" style={{ maxWidth: '800px', fontSize: '18px' }}>
            This platform is currently undergoing rigorous architectural planning, AI integration testing, and proprietary algorithm training at PixelWave. We are building the microservices required to handle extreme scalability across diverse modules without compromising load times.
          </p>
          <div className="mt-4">
             <span className="badge bg-warning text-dark px-4 py-2" style={{ fontSize: '14px', borderRadius: '30px' }}>Launch Timeline TBA</span>
          </div>
        </div>

      </div>
    </section>
  );
}

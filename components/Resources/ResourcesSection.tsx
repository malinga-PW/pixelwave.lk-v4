"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { resourcesData } from "@/data/resourcesData";

export default function ResourcesSection() {
  return (
    <section className="resources-section pt-120 pb-120 bg_img">
      <div className="container">
        
        {/* SECTION TITLE */}
        <div className="row justify-content-center mb-60">
          <div className="col-lg-8 text-center">
            <div className="sec-title mb-20">
              <span className="sub-title mb-15">Free Downloads</span>
              <h2 className="title">
                Premium Resources & <br /> Digital Toolkits
              </h2>
            </div>
            <p className="text-white">
              Accelerate your business growth with our highly curated library of E-Books, Whitepapers, and Automation Toolkits. Everything you need to scale, absolutely free.
            </p>
          </div>
        </div>

        {/* RESOURCES GRID */}
        <div className="row mt-none-30">
          {resourcesData.map((resource) => (
            <div key={resource.id} className="col-lg-6 mt-30">
              <div 
                className="xb-item--inner xb-border img-hove-effect wow fadeInUp" 
                data-wow-duration="600ms"
                style={{
                  padding: "30px",
                  borderRadius: "20px",
                  background: "rgba(255, 255, 255, 0.02)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  height: "100%"
                }}
              >
                {/* IMAGE */}
                <div className="xb-img" style={{ borderRadius: "15px", overflow: "hidden" }}>
                  <Image 
                    src={resource.image} 
                    alt={resource.title} 
                    style={{ width: "100%", height: "auto", aspectRatio: "16/9", objectFit: "cover" }}
                  />
                </div>

                {/* CONTENT */}
                <div className="xb-item--holder d-flex flex-column" style={{ flexGrow: 1 }}>
                  <div className="d-flex justify-content-between align-items-center mb-15">
                    <span 
                      className="xb-item--tag" 
                      style={{ 
                        color: "#99f3ff", 
                        border: "1px solid rgba(153, 243, 255, 0.3)", 
                        padding: "4px 12px", 
                        borderRadius: "30px", 
                        fontSize: "14px" 
                      }}
                    >
                      {resource.type}
                    </span>
                    <span style={{ color: "#a0a0a0", fontSize: "14px" }}>
                      <i className="fa-regular fa-file-arrow-down me-2"></i>
                      {resource.fileSize}
                    </span>
                  </div>

                  <h3 className="xb-item--title mb-15" style={{ fontSize: "24px", color: "#fff" }}>
                    {resource.title}
                  </h3>
                  
                  <p className="mb-30" style={{ color: "#b0b0b0", fontSize: "16px", lineHeight: "1.6", flexGrow: 1 }}>
                    {resource.description}
                  </p>

                  <Link href={resource.downloadLink} className="thm-btn agency-btn mt-auto">
                    <span className="text">Download Now</span>
                    <span className="arrow">
                      <span className="arrow-icon">
                        <i className="fa-regular fa-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

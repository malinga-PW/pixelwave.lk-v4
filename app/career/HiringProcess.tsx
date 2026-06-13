"use client";

import { useState } from "react";
import Image from "next/image";

// ===== Import Static Image =====
import processImg from "@/public/images/career/process-img.png";

export default function HiringProcess() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const steps = [
    {
      number: "01",
      title: "_Send your CV",
      content:
        "Apply for a position by sending us your CV or providing a link to your LinkedIn profile, and take the first step toward joining our team.",
    },
    {
      number: "02",
      title: "_Initial screening",
      content:
        "Apply for a position by sending us your CV or providing a link to your LinkedIn profile, and take the first step toward joining our team.",
    },
    {
      number: "03",
      title: "_Job interview",
      content:
        "Apply for a position by sending us your CV or providing a link to your LinkedIn profile, and take the first step toward joining our team.",
    },
    {
      number: "04",
      title: "_Test task",
      content:
        "Apply for a position by sending us your CV or providing a link to your LinkedIn profile, and take the first step toward joining our team.",
    },
    {
      number: "05",
      title: "_You’re hired!",
      content:
        "Apply for a position by sending us your CV or providing a link to your LinkedIn profile, and take the first step toward joining our team.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="hiring-process pt-140 pb-150">
      <div className="container">
        <div className="row mt-none-50 align-items-center">

          {/* LEFT SIDE */}
          <div className="col-lg-6 mt-50">
            <div className="sec-title sec-title-center mb-35">
              <span className="sub-title mb-20">Hiring Process</span>
              <h2 className="title title-line_height">Our hiring process</h2>
            </div>

            <div className="xb-faq career-faq">
              <ul className="accordion_box clearfix list-unstyled">
                {steps.map((item, index) => (
                  <li
                    key={index}
                    className={`accordion block ${
                      activeIndex === index ? "active-block" : ""
                    }`}
                  >
                    <div
                      className={`acc-btn ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="number">{item.number}</span>
                      {item.title}
                      <span className="arrow">
                        <span></span>
                      </span>
                    </div>

                    <div
                      className={`acc_body ${
                        activeIndex === index ? "current" : ""
                      }`}
                    >
                      <div className="content">
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6 mt-50">
            <div className="process-img">
              <Image src={processImg} alt="hiring process" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

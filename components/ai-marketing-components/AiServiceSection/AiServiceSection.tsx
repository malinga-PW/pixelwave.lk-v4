import React from "react";
import Link from "next/link";
import Image from "next/image";

import img17 from "@/public/images/service/img17.png";
import img18 from "@/public/images/service/img18.png";
import img19 from "@/public/images/service/img19.png";
import img20 from "@/public/images/service/img20.png";

/* =======================
   SVG ICON
======================= */
function ArrowIcon() {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6.12842"
        y="21.8882"
        width="22.7911"
        height="2.8941"
        transform="rotate(-40.2798 6.12842 21.8882)"
        fill="#00FF97"
      />
      <rect
        x="9.34692"
        y="7.78027"
        width="2.8941"
        height="2.8941"
        transform="rotate(-40.2798 9.34692 7.78027)"
        fill="#00FF97"
      />
      <rect
        x="13.4258"
        y="8.11658"
        width="2.8941"
        height="2.8941"
        transform="rotate(-40.2798 13.4258 8.11658)"
        fill="#00FF97"
      />
      <rect
        x="17.5046"
        y="8.45337"
        width="2.8941"
        height="2.8941"
        transform="rotate(-40.2798 17.5046 8.45337)"
        fill="#00FF97"
      />
      <rect
        x="21.2471"
        y="12.8689"
        width="2.8941"
        height="2.8941"
        transform="rotate(-40.2798 21.2471 12.8689)"
        fill="#00FF97"
      />
      <rect
        x="20.9109"
        y="16.9485"
        width="2.8941"
        height="2.8941"
        transform="rotate(-40.2798 20.9109 16.9485)"
        fill="#00FF97"
      />
      <rect
        x="20.5735"
        y="21.0273"
        width="2.8941"
        height="2.8941"
        transform="rotate(-40.2798 20.5735 21.0273)"
        fill="#00FF97"
      />
    </svg>
  );
}

/* =======================
   STATIC DATA
======================= */
const SERVICE_ITEMS = [
  { img: img17, title: "AI Media Interactive Dashboard" },
  { img: img18, title: "AI Experience Agent" },
  { img: img19, title: "Behavioral Data Collection" },
  { img: img20, title: "AI Consumer Insights" },
];

export default function AiServiceSection() {
  return (
    <section id="service" className="service pt-30">
      <div className="container-fluid">
        <div className="ai-service-wrap sec-border mlr-20">

          {/* === Heading Section === */}
          <div className="ai-service-heading ul_li_between mb-60 mt-40">
            <div className="sec-title-three">
              <span className="sub-title mb-25">Our AI Marketing Solutions</span>

              <h2 className="title xb-text-reveal">
                We help multinational brands synthesize fragmented audience data
                into actionable intelligence.
              </h2>
            </div>

            <p className="content">
              Unlock growth and efficiency with tailored AI solutions. We use
              automation and data-driven strategies to help you innovate and
              scale.
            </p>
          </div>

          {/* === Service Image Grid === */}
          <div className="ai-service-img">
            {SERVICE_ITEMS.map((item, index) => (
              <div
                key={item.title}
                className="ai-service-img-item wow fadeInLeft"
                data-wow-delay={`${index * 150}ms`}
                data-wow-duration="600ms"
              >
                <div className="img">
                  <Image src={item.img} alt={item.title} />
                </div>

                <div className="ai-img-content">
                  <h4 className="title">{item.title}</h4>
                  <p className="content">Unlock growth and efficiency</p>

                  <Link href="/service-details" className="arrow">
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

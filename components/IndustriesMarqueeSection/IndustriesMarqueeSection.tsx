"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

// Assets
import gradient1 from "@/public/images/industries/gradient.png";
import gradient2 from "@/public/images/industries/gradient02.png";
import indusLogo from "@/public/images/industries/indus-logo.png";
import shape from "@/public/images/shape/indus-shape.png";

export default function IndustriesMarqueeSection() {
  const marqueeData = [
    { tag: "POST", number: "300", text: "users/d72..." },
    { tag: "GET", number: "200", text: "users/d72..." },
    { tag: "DELETE", number: "500", text: "users/d72...", red: true },
  ];

  const renderMarquee = (speed: number) => (
    <Marquee
      gradient={false}
      speed={speed}
      pauseOnHover
      direction="left"
      className="xb-marquee-items marquee-horizontal-bottom"
    >
      {marqueeData.map((item, i) => (
        <div key={i} className="xb-marquee-item">
          <span className={`tag ${item.red ? "tag-red" : ""}`}>
            {item.tag}
          </span>
          <span className={`number ${item.red ? "number-red" : ""}`}>
            {item.number}
          </span>
          <p>{item.text}</p>
        </div>
      ))}
    </Marquee>
  );

  return (
    <section className="industries pos-rel pt-145 pb-50 bg_img">
      <div className="container">
        <div className="sec-title sec-title-center text-center mb-40">
          <span className="sub-title mb-15">Professional & Trust-Building</span>
          <h2 className="title">Real-time AI for smarter business</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="xb-industries-wrapper">
              <div className="xb-industries-marquee">
                <div className="xb-indus-marquee-inner">
                  {renderMarquee(10)}
                  {renderMarquee(15)}
                  {renderMarquee(10)}
                  {renderMarquee(15)}
                  {renderMarquee(10)}
                  {renderMarquee(15)}
                </div>

                <div className="xb-gardiant-shape">
                  <Image src={gradient1} alt="gradient" />
                </div>

                <div className="xb-gardiant-shape-two updown-2">
                  <Image src={gradient2} alt="gradient" />
                </div>
              </div>

              <div className="xb-industries-logo wow zoomIn">
                <Image src={indusLogo} alt="industries logo" />
              </div>
            </div>
          </div>
        </div>

        <div className="indu-shape">
          <Image src={shape} alt="shape" />
        </div>
      </div>

      <div className="xb-gradiant-line">
        <span></span><span></span><span></span><span></span>
      </div>
    </section>
  );
}

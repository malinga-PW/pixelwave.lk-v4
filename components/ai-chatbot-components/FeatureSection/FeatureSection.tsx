import Image from "next/image";

import bgImg from "@/public/images/bg/custom-bg.jpg";
import subLeftIcon from "@/public/images/icon/sub-left-icon.png";
import aiGif from "@/public/images/icon/artificial-intelligence-11761.gif";

import featureImg01 from "@/public/images/feature/feature-img03.png";
import featureLogo from "@/public/images/feature/logo.png";
import featureImg02 from "@/public/images/feature/feature-img02.png";
import scanImg from "@/public/images/feature/scan.png";
import featureImg03 from "@/public/images/feature/feature-img04.png";
import circleImg from "@/public/images/feature/circle.png";
import featureImg04 from "@/public/images/feature/feature-img05.png";
import featureImg05 from "@/public/images/feature/feature-img06.png";
import securityImg from "@/public/images/feature/security.png";

import BrandSection from "./BrandSection";

/* ================================
   Static Constants
================================= */

const BG_STYLE = {
  backgroundImage: `url(${bgImg.src})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const ArrowSVG = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="5.06592"
      y="19.9785"
      width="20.5712"
      height="2.61221"
      transform="rotate(-40.2798 5.06592 19.9785)"
      fill="white"
    />
    <rect
      x="7.97095"
      y="7.24463"
      width="2.61221"
      height="2.61221"
      transform="rotate(-40.2798 7.97095 7.24463)"
      fill="white"
    />
    <rect
      x="11.6523"
      y="7.54834"
      width="2.61221"
      height="2.61221"
      transform="rotate(-40.2798 11.6523 7.54834)"
      fill="white"
    />
    <rect
      x="15.334"
      y="7.85205"
      width="2.61221"
      height="2.61221"
      transform="rotate(-40.2798 15.334 7.85205)"
      fill="white"
    />
    <rect
      x="18.7119"
      y="11.8374"
      width="2.61221"
      height="2.61221"
      transform="rotate(-40.2798 18.7119 11.8374)"
      fill="white"
    />
    <rect
      x="18.4084"
      y="15.52"
      width="2.61221"
      height="2.61221"
      transform="rotate(-40.2798 18.4084 15.52)"
      fill="white"
    />
    <rect
      x="18.104"
      y="19.2012"
      width="2.61221"
      height="2.61221"
      transform="rotate(-40.2798 18.104 19.2012)"
      fill="white"
    />
  </svg>
);

const DOTS = (
  <>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </>
);

/* ================================ */

export default function FeatureSection() {
  return (
    <div className="bg_img" style={BG_STYLE}>
      {/* ================= FEATURE SECTION ================= */}
      <section id="features" className="feature pb-155">
        <div className="container">
          <div className="sec-title sec-title--two custom-sec-title feature-sec-title text-center mb-45">
            <span className="sub-title">
              <Image src={subLeftIcon} alt="icon" width={24} height={24} />{" "}
              Aivora AI Chatbot Features
            </span>

            <h2 className="title">
              <span>
                <Image src={aiGif} alt="AI Animation" width={60} height={60} />
              </span>
              Build the perfect customer-facing AI agent
            </h2>

            {/* BUTTON */}
            <div className="xb-heading-btn d-inline">
              <a className="thm-btn chatbot-btn" href="/contact">
                build your ai chatbot – it’s free
                <span className="arrow-icon">
                  {ArrowSVG}
                  {ArrowSVG}
                </span>

                <span className="btn-bg">
                  <svg
                    width="484"
                    height="60"
                    viewBox="0 0 484 60"
                    fill="none"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="484" height="60" fill="url(#paint0)" />
                    <defs>
                      <radialGradient
                        id="paint0"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(-667.5 -25 0.582116 -49.7476 497 39)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#00FF97" />
                        <stop offset="1" stopColor="#00020F" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* ================= FEATURE GRID ================= */}
          <div className="row mt-none-30">

            <div className="col-lg-8 mt-30">
              <div className="xb-feature-item-3 big-item">
                <div className="xb-item--inner xb-border">
                  <div className="xb-img">
                    <Image src={featureImg01} alt="Automate" width={600} height={500} />
                    <span className="logo">
                      <Image src={featureLogo} alt="logo" width={100} height={100} />
                    </span>
                  </div>
                  <div className="xb-item--holder">
                    <h2 className="xb-item--title">Automate with smart chatbot</h2>
                    <p className="xb-item--content">
                      Handle customer queries instantly, reduce repetitive tasks,
                      and boost satisfaction with 24/7 AI automation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-30 order-lg-first">
              <div className="xb-feature-item-3">
                <div className="xb-item--inner xb-border">
                  <div className="xb-img">
                    <Image src={featureImg02} alt="Sync Data" width={300} height={250} />
                    <span className="scan-img updown-2">
                      <Image src={scanImg} alt="scan" width={80} height={80} />
                    </span>
                  </div>
                  <div className="xb-item--holder">
                    <h2 className="xb-item--title">Sync with real-time data</h2>
                    <p className="xb-item--content">
                      Make faster decisions powered by real-time AI analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-30">
              <div className="xb-feature-item-3">
                <div className="xb-item--inner xb-border">
                  <div className="xb-img">
                    <Image src={featureImg03} alt="Multilingual" width={300} height={250} />
                    <span className="circle">
                      <Image src={circleImg} alt="circle" width={80} height={80} />
                    </span>
                  </div>
                  <div className="xb-item--holder">
                    <h2 className="xb-item--title">Multilingual support</h2>
                    <p className="xb-item--content">
                      Connect globally in your customers’ preferred language.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-30">
              <div className="xb-feature-item-3">
                <div className="xb-item--inner xb-border">
                  <div className="xb-img">
                    <Image src={featureImg04} alt="Reporting" width={300} height={250} />
                  </div>
                  <div className="xb-item--holder">
                    <h2 className="xb-item--title">Advanced reporting</h2>
                    <p className="xb-item--content">
                      Gain insights and metrics to make data-backed business decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-30">
              <div className="xb-feature-item-3">
                <div className="xb-item--inner xb-border">
                  <div className="xb-img">
                    <Image src={featureImg05} alt="Security" width={300} height={250} />
                    <span className="security">
                      <Image src={securityImg} alt="security" width={80} height={80} />
                    </span>

                    <span className="animated-dot">
                      <span className="dot">{DOTS}</span>
                    </span>
                  </div>

                  <div className="xb-item--holder">
                    <h2 className="xb-item--title">Data privacy & security</h2>
                    <p className="xb-item--content">
                      Protect customer data with enterprise-grade security.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BRAND SECTION */}
      <BrandSection />
    </div>
  );
}

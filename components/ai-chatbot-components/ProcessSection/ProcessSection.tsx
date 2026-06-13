import Link from "next/link";
import Image from "next/image";

// Images
import subLeftIcon from "@/public/images/icon/sub-left-icon.png";
import processImg01 from "@/public/images/process/img01.png";
import processImg02 from "@/public/images/process/img02.png";
import processImg03 from "@/public/images/process/img03.png";
import processImg04 from "@/public/images/process/img04.png";

/* ================================
   Static Constants
================================= */

const ArrowSVG = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="5.06592" y="19.9785" width="20.5712" height="2.61221" transform="rotate(-40.2798 5.06592 19.9785)" fill="white" />
    <rect x="7.97095" y="7.24463" width="2.61221" height="2.61221" transform="rotate(-40.2798 7.97095 7.24463)" fill="white" />
    <rect x="11.6523" y="7.54834" width="2.61221" height="2.61221" transform="rotate(-40.2798 11.6523 7.54834)" fill="white" />
    <rect x="15.334" y="7.85205" width="2.61221" height="2.61221" transform="rotate(-40.2798 15.334 7.85205)" fill="white" />
    <rect x="18.7119" y="11.8374" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.7119 11.8374)" fill="white" />
    <rect x="18.4084" y="15.52" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.4084 15.52)" fill="white" />
    <rect x="18.104" y="19.2012" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.104 19.2012)" fill="white" />
  </svg>
);

const STEPS = [
  { number: "01", title: "Sign Up & Build", img: processImg01 },
  { number: "02", title: "Connect Channels", img: processImg02 },
  { number: "03", title: "Analyze & Optimize", img: processImg03 },
];

/* ================================ */

export default function ProcessSection() {
  return (
    <section id="process" className="process-sction z-1 pt-150">
      <div className="container">
        <div className="row">

          {/* LEFT */}
          <div className="col-lg-5">
            <div
              className="xb-process-left-container wow fadeInLeft"
              data-wow-duration="600ms"
            >
              {/* Title */}
              <div className="sec-title sec-title--two process-title mb-50">
                <span className="sub-title d-block mb-25">
                  <Image src={subLeftIcon} alt="icon" />
                  How It Works
                </span>

                <h2 className="title d-inline">
                  Launch your chatbot in 3 steps
                </h2>

                {/* CTA BUTTON — SAME */}
                <div className="xb-heading-btn">
                  <Link className="thm-btn chatbot-btn" href="/contact">
                    start for free
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
                        <rect width="484" height="60" fill="url(#paint0_radial)" />
                        <defs>
                          <radialGradient
                            id="paint0_radial"
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
                  </Link>
                </div>
              </div>

              {/* Steps */}
              {STEPS.map((step, i) => (
                <div
                  key={i}
                  className={`xb-process-step xb-border ${i === 0 ? "active" : ""}`}
                >
                  <div className="xb-img">
                    <Image src={step.img} alt={step.title} />
                    <h2 className="step-number">{step.number}</h2>
                  </div>
                  <h2 className="step-name">{step.title}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-7">
            <div
              className="xb-process-right-container pb-150 mt-none-30 wow fadeInRight"
              data-wow-duration="600ms"
            >
              {[processImg02, processImg03, processImg04].map((img, i) => (
                <div className="xb-process-item mt-30" key={i}>
                  <div className="xb-img">
                    <Image src={img} alt={`Process ${i + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

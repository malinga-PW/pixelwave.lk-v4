import Link from "next/link";
import Image from "next/image";

// Images
import heroBg from "@/public/images/bg/hero_bg02.jpg";
import heroImg from "@/public/images/hero/hero-img01.png";
import textImg1 from "@/public/images/hero/text-img01.png";
import textImg2 from "@/public/images/hero/text-img02.png";
import textImg3 from "@/public/images/hero/text-img03.png";
import textImg4 from "@/public/images/hero/text-img04.png";
import textImg5 from "@/public/images/hero/text-img05.png";
import glassyEffect from "@/public/images/hero/glassy-effect-img.png";

/* ================================
   Static Constants
================================= */

const BG_STYLE = {
  backgroundImage: `url(${heroBg.src})`,
};

const ArrowSVG = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="5.06" y="19.97" width="20.57" height="2.61" transform="rotate(-40.28 5.06 19.97)" fill="white" />
    <rect x="7.97" y="7.24" width="2.61" height="2.61" transform="rotate(-40.28 7.97 7.24)" fill="white" />
    <rect x="11.65" y="7.55" width="2.61" height="2.61" transform="rotate(-40.28 11.65 7.55)" fill="white" />
    <rect x="15.33" y="7.85" width="2.61" height="2.61" transform="rotate(-40.28 15.33 7.85)" fill="white" />
    <rect x="18.71" y="11.84" width="2.61" height="2.61" transform="rotate(-40.28 18.71 11.84)" fill="white" />
    <rect x="18.40" y="15.52" width="2.61" height="2.61" transform="rotate(-40.28 18.40 15.52)" fill="white" />
    <rect x="18.10" y="19.20" width="2.61" height="2.61" transform="rotate(-40.28 18.10 19.20)" fill="white" />
  </svg>
);

/* ================================ */

export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero hero-style hero-style--two pos-rel bg_img"
      style={BG_STYLE}
    >
      <div className="container">
        <div className="row">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="hero-content hero-content--two">
              <h2 className="title scale-animation wow">
                Save your time, chat smarter with AI chatbot
              </h2>

              <p className="sub-title scale-animation wow">
                Automate your repetitive support, and let AI assist you when you
                need to jump in. Reply faster, stay personal, and automate the
                rest.
              </p>

              {/* CTA BUTTON */}
              <div className="hero-btn scale-animation wow">
                <Link className="thm-btn chatbot-btn" href="/contact">
                  build your ai chatbot — it’s free

                  <span className="arrow-icon">
                    {ArrowSVG}
                    {ArrowSVG}
                  </span>

                  {/* Background Shape */}
                  <span className="btn-bg">
                    <svg
                      width="484"
                      height="60"
                      viewBox="0 0 484 60"
                      fill="none"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="484" height="60" fill="url(#paint0_radial_hero)" />
                      <defs>
                        <radialGradient
                          id="paint0_radial_hero"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientTransform="matrix(-667 -25 0.58 -49.7 497 39)"
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
          </div>

          {/* RIGHT IMAGES */}
          <div className="col-lg-6">
            <div className="hero-img-container">

              <div className="xb-img" data-wow-duration="800ms">
                <Image src={heroImg} alt="AI Chatbot" priority />
              </div>

              <div className="xb-text-left wow updown">
                <div className="img img--1">
                  <Image src={textImg1} alt="text-img1" />
                </div>
                <div className="img img--2">
                  <Image src={textImg2} alt="text-img2" />
                </div>
              </div>

              <div className="xb-glassy-effect-img wow">
                <Image src={glassyEffect} alt="Glassy Effect" />
              </div>

              <div className="xb-text-right wow updown">
                <div className="img img--1">
                  <Image src={textImg3} alt="text-img3" />
                </div>
                <div className="img img--2">
                  <Image src={textImg4} alt="text-img4" />
                </div>
                <div className="img img--3">
                  <Image src={textImg5} alt="text-img5" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="hero-linear"></div>
    </section>
  );
}

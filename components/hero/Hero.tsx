import Link from "next/link";
import Image from "next/image";

// Image imports
import heroBg from "@/public/images/bg/hero_bg.png";
import heroIcon from "@/public/images/icon/animated-gif02.gif";
import featureIcon1 from "@/public/images/icon/feature-icon01.svg";
import featureIcon2 from "@/public/images/icon/feature-icon02.svg";
import featureIcon3 from "@/public/images/icon/feature-icon03.svg";

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

export default function HeroSection() {
  return (
    <section
      className="hero hero-style pos-rel bg_img"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <div className="container">
        <div className="row">

          {/* LEFT CONTENT */}
          <div className="col-lg-9 col-md-9">
            <div className="hero-content">
              <h2 className="title scale-animation wow">
                Build Smarter.<br />Grow Faster.
              </h2>

              <p className="sub-title scale-animation wow">
                Transforming Sri Lankan businesses and global startups through intelligent automation, premium web development, and custom SaaS solutions.
              </p>

              {/* BUTTON */}
              <div className="hero-btn scale-animation wow">
                <Link className="thm-btn agency-btn" href="/contact">
                  <span className="text">Book a Free Consultation</span>
                  <span className="arrow">
                    <span className="arrow-icon">
                      <ArrowIcon />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT GIF */}
          <div className="col-lg-3 col-md-3">
            <div
              className="hero-icon wow zoomIn"
              data-wow-delay="700ms"
              data-wow-duration="800ms"
            >
              <Image src={heroIcon} alt="Hero animated icon" className="hero-gif" />
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="row mt-55">

          {/* Feature 1 */}
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item wow fadeInUp" data-wow-delay="700ms">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <Image src={featureIcon1} alt="AI Automation" />
                </span>
                <h2 className="xb-item--title">AI Automation</h2>
                <p className="xb-item--content">
                  Automate workflows with intelligent chatbots, n8n systems, and customer support agents.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item wow fadeInUp" data-wow-delay="800ms">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <Image src={featureIcon2} alt="Premium Web Development" />
                </span>
                <h2 className="xb-item--title">Premium Websites</h2>
                <p className="xb-item--content">
                  Fast, secure, and SEO-optimized web development and custom SaaS platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item wow fadeInUp" data-wow-delay="900ms">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <Image src={featureIcon3} alt="Digital Transformation" />
                </span>
                <h2 className="xb-item--title">Digital Growth</h2>
                <p className="xb-item--content">
                  End-to-end business solutions from branding to advanced system integrations.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";

// Images
import aboutImg from "@/public/images/about/img09.png";
import downArrow from "@/public/images/icon/down-white-icon.svg";

export default function AboutSection() {
  return (
    <section className="about o-clip pos-rel">
      <div className="container-fluid">
        <div className="ai-about-wrap mlr-20">
          <div className="ai-about-inner">
            {/* === Title === */}
            <div className="sec-title-three">
              <span className="sub-title">What do we do</span>
              <h2 className="title xb-text-reveal">
                We provide AI Marketing Solutions to get better audience insight
                and optimize your media campaigns
              </h2>
            </div>

            {/* === Content & Button === */}
            <div className="ai-about-bottom ul_li">
              <p>
                Unlock deeper audience insights and optimize every step of your
                media strategy with AI-driven marketing.
              </p>

              <Link className="ai-marketing-btn" href="/contact">
                <span className="arrow">
                  {/* SVG left arrow */}
                  <svg
                    width="16"
                    height="28"
                    viewBox="0 0 16 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="11.93" y="12.463" width="3.805" height="3.834" fill="black" />
                    <rect x="0.843" y="0.994" width="3.834" height="3.834" fill="black" />
                    <rect x="4.689" y="4.816" width="3.834" height="3.834" fill="black" />
                    <rect x="8.534" y="8.639" width="3.834" height="3.834" fill="black" />
                    <rect x="8.558" y="16.307" width="3.834" height="3.834" fill="black" />
                    <rect x="4.735" y="20.153" width="3.834" height="3.834" fill="black" />
                    <rect x="0.912" y="23.999" width="3.834" height="3.834" fill="black" />
                  </svg>
                </span>

                <span className="text">
                  <span>Book a Free Discovery Session</span>
                  <span>Book a Free Discovery Session</span>
                </span>
              </Link>
            </div>

            {/* === Scroll Down Button === */}
            <a href="#service" className="down-arrow scrollspy-btn">
              <Image src={downArrow} alt="Scroll Down" width={20} height={20} />
              Scroll Down
            </a>
          </div>

          {/* === Image Right Side === */}
          <div className="ai-circle-img">
            <Image
              src={aboutImg}
              alt="About"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

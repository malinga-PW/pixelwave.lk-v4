import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// ==== Import Images ====
import img05 from "@/public/images/about/img05.jpg";
import img06 from "@/public/images/about/img06.jpg";
import img07 from "@/public/images/about/img07.jpg";
import img08 from "@/public/images/about/img08.jpg";

import videoPoster from "@/public/images/about/video-img.png";

import gif1 from "@/public/images/icon/original-66948a0d81d.gif";
import gif2 from "@/public/images/icon/0deec720000b2066289b.gif";
import gif3 from "@/public/images/icon/b10c3e43e836d32554bf.gif";

import featureIcon1 from "@/public/images/icon/feature-icon01.svg";
import featureIcon2 from "@/public/images/icon/feature-icon02.svg";
import featureIcon3 from "@/public/images/icon/feature-icon03.svg";

import aboutBg from "@/public/images/bg/about-bg02.png";

/* ================================
   Static Constants
================================= */

type SequenceItem = "img05" | "img06" | "img07" | "img08" | "video";

const IMAGE_SEQUENCE: SequenceItem[] = [
  "img05",
  "img06",
  "video",
  "img07",
  "img08",
];

const IMAGE_MAP: Record<
  Exclude<SequenceItem, "video">,
  StaticImageData
> = {
  img05,
  img06,
  img07,
  img08,
};

const REPEAT_IMAGES = [0, 1, 2, 3];

/* ================================ */

export default function AboutSection() {
  return (
    <section className="about pos-rel pb-140">
      <div className="container">
        {/* ===================== TOP IMAGE ROW ===================== */}
        <div className="about-top-image ul_li_between align-items-start">
          {IMAGE_SEQUENCE.map((item, index) =>
            item === "video" ? (
              <div key="video" className="xb-video">
                <video
                  loop
                  muted
                  playsInline
                  autoPlay
                  poster={videoPoster.src}
                >
                  <source src="https://www.pexels.com/download/video/18069701/" />
                </video>
              </div>
            ) : (
              <div key={index} className="img-hove-effect">
                <div className="xb-img">
                  {REPEAT_IMAGES.map((i) => (
                    <Link key={i} href="/about">
                      <Image src={IMAGE_MAP[item]} alt="about" />
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* ===================== TITLE SECTION ===================== */}
        <div className="sec-title sec-title-center about-sec-title about-sec-title-two mt-45">
          <span className="sub-title mb-10">Who We are?</span>

          <h2 className="title">
            We helping
            <span>
              <Image src={gif1} alt="gif" />
            </span>
            grow businesses and
            <span>
              <Image src={gif2} alt="gif" />
            </span>
            scale with smart,
            <span>
              <Image src={gif3} alt="gif" />
            </span>
            data-driven AI agency
          </h2>

          <p className="content">
            We help grow and scale your business by delivering smart,
            data-driven AI solutions tailored to your needs.
          </p>
        </div>

        {/* ===================== FEATURE BOXES ===================== */}
        <div className="row mt-40">
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <Image src={featureIcon1} alt="icon" />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Smarter insights</h2>
                  <p className="xb-item--content">
                    Make faster, data-driven decisions powered by real-time AI.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <Image src={featureIcon2} alt="icon" />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Integrated AI solutions</h2>
                  <p className="xb-item--content">
                    No extra tools needed — scalable AI from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <Image src={featureIcon3} alt="icon" />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">End-to-end automation</h2>
                  <p className="xb-item--content">
                    Automate workflows with intelligent systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND */}
      <div className="about-bg">
        <Image src={aboutBg} alt="background" />
      </div>
    </section>
  );
}

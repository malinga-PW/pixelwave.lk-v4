import Image from "next/image";
import Link from "next/link";

import aboutBg from "@/public/images/bg/about-bg.png";

import gif1 from "@/public/images/icon/original-66948a0d81d.gif";
import gif2 from "@/public/images/icon/0deec720000b2066289b.gif";
import gif3 from "@/public/images/icon/b10c3e43e836d32554bf.gif";

import img01 from "@/public/images/about/img01.jpg";
import img02 from "@/public/images/about/img02.jpg";
import img03 from "@/public/images/about/img03.jpg";

/* ================================
   Static Constants
================================= */

const ABOUT_IMAGES = [img01, img02, img03];

const MARQUEE_IMAGES = [
  ...ABOUT_IMAGES,
  ...ABOUT_IMAGES,
  ...ABOUT_IMAGES,
];

const REPEAT = Array.from({ length: 4 });

const BG_STYLE = {
  backgroundImage: `url(${aboutBg.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

/* ================================ */

export default function AboutSection() {
  return (
    <section className="about pt-140">
      <div className="container">
        <div className="sec-title about-sec-title mb-75">
          <span className="sub-title">Who We are?</span>

          <h2 className="title">
            We helping
            <span>
              <Image src={gif1} alt="animation" />
            </span>
            grow businesses and
            <span>
              <Image src={gif2} alt="animation" />
            </span>
            scale with smart, data-driven AI agency
            <span>
              <Image src={gif3} alt="animation" />
            </span>
          </h2>
        </div>
      </div>

      <div
        className="xb-about-img-wrap bg_img marquee-container"
        style={BG_STYLE}
      >
        <div className="marquee-track">
          {MARQUEE_IMAGES.map((img, index) => (
            <div
              key={index}
              className="xb-about-img-item img-hove-effect"
            >
              <div className="xb-img">
                {REPEAT.map((_, i) => (
                  <Link href="/service-details" key={i}>
                    <Image src={img} alt="About Image" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

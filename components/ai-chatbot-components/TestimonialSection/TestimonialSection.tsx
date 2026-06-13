"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Images
import bgImg from "@/public/images/bg/testimonial-bg02.png";
import subLeftWhiteIcon from "@/public/images/icon/sub_left-_white_icon.png";
import subRightWhiteIcon from "@/public/images/icon/sub_right-_white_icon.png";
import animatedGif from "@/public/images/icon/animated-gif03.gif";
import quoteIcon from "@/public/images/testimonial/quote.png";

import author1 from "@/public/images/avatar/author_01.png";
import author2 from "@/public/images/avatar/author_02.png";
import author3 from "@/public/images/avatar/author_03.png";

/* ===============================
   Static Data
================================ */

const TESTIMONIALS = [
  {
    avatar: author1,
    name: "Priya Ramirez",
    title: "Manager - SwiftLogix",
    text: "Aivora now automates over 70% of our customer queries, saving hours of manual work daily. It’s improved both our response time and overall customer satisfaction.",
  },
  {
    avatar: author2,
    name: "Sebastian Clark",
    title: "CEO & Founder - DocFlow",
    text: "We launched Aivora in just minutes, and the impact was immediate. Our support costs dropped by 50%, and customers receive answers instantly, 24/7.",
  },
  {
    avatar: author3,
    name: "Miguel Torres",
    title: "Director - Finexa Capital",
    text: "Aivora’s powerful analytics give us deep insights into customer needs. We’ve optimized our chatbot flows and seen noticeable growth in conversions.",
  },
];

// Duplicate once (NOT per render)
const SLIDES = [...TESTIMONIALS, ...TESTIMONIALS];

const BG_STYLE = {
  backgroundImage: `url(${bgImg.src})`,
};

/* =============================== */

export default function TestimonialSection() {
  return (
    <section className="testimonial pt-145 bg_img" style={BG_STYLE}>
      <div className="container">
        <div className="sec-title sec-title--two tes-sec-title text-center mb-50">
          <span
            className="sub-title wow fadeInUp mb-20"
            data-wow-duration="600ms"
          >
            <Image src={subLeftWhiteIcon} alt="icon" width={24} height={24} />
            Testimonials
            <Image src={subRightWhiteIcon} alt="icon" width={24} height={24} />
          </span>

          <h2
            className="title wow fadeInUp"
            data-wow-delay="150ms"
            data-wow-duration="600ms"
          >
            Hear from our{" "}
            <Image src={animatedGif} alt="shape" width={48} height={48} />{" "}
            happy customers
          </h2>
        </div>
      </div>

      <div className="testimonial-wrapper">
        <Swiper
          className="ac-testimonial-slider pb-150"
          modules={[Autoplay]}
          loop
          speed={400}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1600: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
            1024: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
        >
          {SLIDES.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="ac-testimonial-item ul_li xb-border">
                <div className="xb-item--avatar">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                  />
                </div>

                <div className="xb-item--holder">
                  <p className="xb-item--content">{t.text}</p>
                  <div className="xb-item--author">
                    <h5 className="xb-item--name">{t.name}</h5>
                    <p className="xb-item--desig">{t.title}</p>
                  </div>
                </div>

                <div className="xb-item--quote">
                  <Image src={quoteIcon} alt="quote" width={32} height={32} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

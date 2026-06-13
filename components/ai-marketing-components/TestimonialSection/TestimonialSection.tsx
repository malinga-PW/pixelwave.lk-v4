"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Thumbs, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";

// Images
import testimonialImg01 from "@/public/images/testimonial/testimonial-img01.jpg";
import testimonialImg02 from "@/public/images/testimonial/testimonial-img02.jpg";
import testimonialImg03 from "@/public/images/testimonial/testimonial-img03.jpg";
import testimonialImg04 from "@/public/images/testimonial/testimonial-img04.jpg";

import brand01 from "@/public/images/testimonial/brand.png";
import brand02 from "@/public/images/testimonial/brand02.png";
import brand03 from "@/public/images/testimonial/brand03.png";
import brand04 from "@/public/images/testimonial/brand04.png";
import quoteIcon from "@/public/images/icon/quote-icon.png";

export default function TestimonialSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const testimonialImages = [
    testimonialImg01,
    testimonialImg02,
    testimonialImg03,
    testimonialImg04,
  ];

  return (
    <section className="testimonial mt-30">
      <div className="container-fluid">
        <div className="ai-testimonial-wrapper pos-rel mlr-20 sec-border">

          {/* Heading */}
          <div className="ai-testimonial-heading mt-100 mb-60">
            <div className="sec-title-three">
              <span className="sub-title">Testimonials</span>
              <h2 className="title xb-text-reveal">
                Hear from top brands who have worked with us
              </h2>
            </div>
          </div>

          <div className="ai-testimonial-inner pos-rel z-1">

            {/* IMAGE SLIDER */}
            <Swiper
              className="ai-testimonial-slider-img"
              modules={[Navigation, Thumbs, Autoplay, EffectFade]}
              loop
              effect="fade"
              slidesPerView={1}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed
                    ? thumbsSwiper
                    : null,
              }}
            >
              {testimonialImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="ai-tes-img">
                    <Image src={img} alt={`testimonial-${i + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* TEXT SLIDER (THUMBS) */}
            <Swiper
              className="ai-testimonial-slider-nav"
              modules={[Thumbs, EffectFade]}
              onSwiper={setThumbsSwiper}
              slidesPerView={1}
              loop
              watchSlidesProgress
              effect="fade"
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div className="ai-testimonial-item">
                  <div className="xb-item--inner">
                    <div className="xb-item--content">
                      <div className="xb-item--quote">
                        <Image src={quoteIcon} alt="quote" />
                      </div>
                      <p className="xb-item--comment">
                        "Working with this team transformed how we run campaigns.
                        Their insights gave us clarity, and the results spoke for
                        themselves — higher engagement and lower costs."
                      </p>
                      <div className="xb-item--holder">
                        <p className="xb-item--name">
                          Sarah L. – Marketing Director, Danone
                        </p>
                        <div className="xb-item--brand">
                          <Image src={brand01} alt="brand-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div className="ai-testimonial-item">
                  <div className="xb-item--inner">
                    <div className="xb-item--content">
                      <div className="xb-item--quote">
                        <Image src={quoteIcon} alt="quote" />
                      </div>
                      <p className="xb-item--comment">
                        "They understood our challenges from day one and
                        delivered solutions that made a real difference."
                      </p>
                      <div className="xb-item--holder">
                        <p className="xb-item--name">
                          James R. – Founder, Dummy Shoes Co.
                        </p>
                        <div className="xb-item--brand">
                          <Image src={brand02} alt="brand-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div className="ai-testimonial-item">
                  <div className="xb-item--inner">
                    <div className="xb-item--content">
                      <div className="xb-item--quote">
                        <Image src={quoteIcon} alt="quote" />
                      </div>
                      <p className="xb-item--comment">
                        "Professional, innovative, and results-driven. Their
                        approach helped us connect with our audience in ways we
                        never thought possible."
                      </p>
                      <div className="xb-item--holder">
                        <p className="xb-item--name">
                          Elena M. – Brand Manager, Perfume Co.
                        </p>
                        <div className="xb-item--brand">
                          <Image src={brand03} alt="brand-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide>
                <div className="ai-testimonial-item">
                  <div className="xb-item--inner">
                    <div className="xb-item--content">
                      <div className="xb-item--quote">
                        <Image src={quoteIcon} alt="quote" />
                      </div>
                      <p className="xb-item--comment">
                        "Their data-driven approach streamlined our campaigns
                        and improved results."
                      </p>
                      <div className="xb-item--holder">
                        <p className="xb-item--name">
                          David K. – Senior Strategist, IBM
                        </p>
                        <div className="xb-item--brand">
                          <Image src={brand04} alt="brand-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Navigation Buttons */}
            <div className="ai-slide-btn">
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

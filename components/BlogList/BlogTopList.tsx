"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

// Swiper styles (REQUIRED)
import "swiper/css/navigation";
import "swiper/css/pagination";

// IMAGES
import blog1 from "@/public/images/blog/img04.jpg";
import blog2 from "@/public/images/blog/img4.2.jpg";
import blog3 from "@/public/images/blog/img4.3.jpg";
import blog4 from "@/public/images/blog/img4.4.jpg";

import shapeLeft from "@/public/images/shape/prev-shape.png";
import shapeRight from "@/public/images/shape/next-shape.png";

// SLIDER DATA
const blogSlides = [
  {
    img: blog1,
    tag: "# ai business tips",
    title: "We’re live! explore our smart AI solutions for the future of business.",
    content:
      "We’re live! Discover our smart AI solutions designed to help businesses automate tasks, gain insights, and grow faster.",
  },
  {
    img: blog2,
    tag: "# chatbots tips",
    title: "Why AI chatbots are the next big thing in business communication..",
    content:
      "AI chatbots are reshaping communication with instant support and personalized responses, reducing business costs.",
  },
  {
    img: blog3,
    tag: "# ai business tips",
    title: "How AI agencies help small businesses compete with global brands..",
    content:
      "AI agencies empower small businesses with tools like analytics, automation, and personalized marketing.",
  },
  {
    img: blog4,
    tag: "# ai business tips",
    title: "Top services you should expect from a modern AI agency..",
    content:
      "Modern AI agencies offer chatbots, predictive analytics, personalized marketing, and process automation.",
  },
];

export default function BlogSlider() {
  return (
    <section className="blog pt-70">
      <div className="container">
        <div className="blog-slider pos-rel">

          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            navigation={{
              nextEl: ".blog-next-btn",
              prevEl: ".blog-prev-btn",
            }}
          >
            {blogSlides.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="blog-slide-item">

                  {/* IMAGE */}
                  <div className="xb-item--img">
                    <Image
                      src={item.img}
                      alt={item.title}
                      priority={index === 0}
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="xb-item--holder">
                    <Link href="/blog-details" className="xb-item--tag xb-border">
                      {item.tag}
                    </Link>

                    <h2 className="xb-item--title">
                      <Link href="/blog-details">{item.title}</Link>
                    </h2>

                    <p className="xb-item--content">{item.content}</p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* PAGINATION */}
          <div className="swiper-pagination"></div>

          {/* NAVIGATION BUTTONS */}
          <div className="blog-item_button">
            <button
              type="button"
              className="blog-swiper-btn blog-prev-btn"
              aria-label="Previous slide"
            >
              <Image src={shapeLeft} alt="" aria-hidden />
              <i className="fa-regular fa-angles-left"></i>
            </button>

            <button
              type="button"
              className="blog-swiper-btn blog-next-btn"
              aria-label="Next slide"
            >
              <Image src={shapeRight} alt="" aria-hidden />
              <i className="fa-regular fa-angles-right"></i>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

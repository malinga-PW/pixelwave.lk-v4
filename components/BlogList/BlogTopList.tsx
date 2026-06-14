"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

// Swiper styles (REQUIRED)
import "swiper/css/navigation";
import "swiper/css/pagination";

// IMAGES
import { blogData } from "@/data/blogData";

import shapeLeft from "@/public/images/shape/prev-shape.png";
import shapeRight from "@/public/images/shape/next-shape.png";

// SLIDER DATA
const blogSlides = Object.values(blogData);

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
                      src={item.image}
                      alt={item.title}
                      priority={index === 0}
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="xb-item--holder">
                    <Link href={`/blog/${item.slug}`} className="xb-item--tag xb-border">
                      #{item.category.toLowerCase()}
                    </Link>

                    <h2 className="xb-item--title">
                      <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                    </h2>

                    <p className="xb-item--content">{item.excerpt}</p>
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

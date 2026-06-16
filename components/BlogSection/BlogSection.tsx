"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Background & Shapes
import blogBg from "@/public/images/bg/blog-bg.png";
import gifShape from "@/public/images/icon/original-9e54f87f13d.gif";

// Subtitle Icons
import subIconLeft from "@/public/images/icon/sub-left-icon.png";
import subIconRight from "@/public/images/icon/sub-right-icon.png";

import { blogData } from "@/data/blogData";

// Icons
import icon01 from "@/public/images/icon/blog-icon01.svg";
import icon02 from "@/public/images/icon/blog-icon02.svg";

export default function BlogSection() {
  const blogs = Object.values(blogData);
  // Replicating blogs to create a seamless marquee track
  const marqueeBlogs = [...blogs, ...blogs, ...blogs];

  useEffect(() => {
    const bgEl = document.querySelector<HTMLElement>(".blog.bg_img");
    if (bgEl) {
      bgEl.style.backgroundImage = `url(${blogBg.src})`;
    }
  }, []);

  return (
    <section id="blog" className="blog pt-150 pb-150 bg_img">
      <div className="container">
        {/* Centered Heading */}
        <div className="sec-title sec-title--two text-center mb-60">
          <span className="sub-title mb-15">
            <Image src={subIconLeft} alt="icon" width={22} height={22} />
            Our Latest News
            <Image src={subIconRight} alt="icon" width={22} height={22} />
          </span>
          <h2 className="title">
            Our latest news{" "}
            <Image src={gifShape} alt="shape" unoptimized />
          </h2>
        </div>
      </div>

      {/* Horizontal Scrolling Marquee */}
      <div className="xb-blog-marquee-wrap marquee-container mb-60" style={{ paddingTop: "30px", paddingBottom: "30px" }}>
        <div className="marquee-track">
          {marqueeBlogs.map((blog, index) => (
            <div key={index} className="xb-blog-marquee-item">
              <div className="xb-blog-item xb-border">
                <div className="xb-item--inner img-hove-effect">
                  <div className="xb-img">
                    {[0, 1, 2, 3].map((i) => (
                      <Link key={i} href={`/blog/${blog.slug}`}>
                        <Image src={blog.image} alt={blog.title} />
                      </Link>
                    ))}
                  </div>

                  <div className="xb-item--holder">
                    <ul className="xb-item--meta list-unstyled ul_li">
                      <li>
                        <Image src={icon01} alt="icon" /> {blog.category}
                      </li>
                      <li>
                        <Image src={icon02} alt="icon" /> {blog.date}
                      </li>
                    </ul>

                    <h2 className="xb-item--title">
                      <Link href={`/blog/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Centered Button at bottom */}
      <div className="container text-center">
        <div className="blog-btn" style={{ display: "inline-block" }}>
          <Link className="thm-btn agency-btn" href="/blog">
            <span className="text">view more blog</span>

            <span className="arrow">
              <span className="arrow-icon">
                {/* SVG 1 */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="5.06592" y="19.9785" width="20.5712" height="2.61221"
                    transform="rotate(-40.2798 5.06592 19.9785)" fill="white" />
                  <rect x="7.97095" y="7.24463" width="2.61221" height="2.61221"
                    transform="rotate(-40.2798 7.97095 7.24463)" fill="white" />
                  <rect x="11.6523" y="7.54834" width="2.61221" height="2.61221"
                    transform="rotate(-40.2798 11.6523 7.54834)" fill="white" />
                  <rect x="15.334" y="7.85205" width="2.61221" height="2.61221"
                    transform="rotate(-40.2798 15.334 7.85205)" fill="white" />
                  <rect x="18.7119" y="11.8374" width="2.61221" height="2.61221"
                    transform="rotate(-40.2798 18.7119 11.8374)" fill="white" />
                  <rect x="18.4084" y="15.52" width="2.61221" height="2.61221"
                    transform="rotate(-40.2798 18.4084 15.52)" fill="white" />
                  <rect x="18.104" y="19.2012" width="2.61221" height="2.61221"
                    transform="rotate(-40.2798 18.104 19.2012)" fill="white" />
                </svg>

                {/* SVG 2 (hover) */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="5.06592" y="19.9785" width="20.5712" height="2.61221"
                    transform="rotate(-40.2798 5.06592 19.9785)" fill="white" />
                  <rect x="7.97095" y="7.24463" width="2.61221" height="2.61221"
                    transform="rotate(-40.2798 7.97095 7.24463)" fill="white" />
                  <rect x="11.6523" y="7.54834" width="2.61221" height="2.61221"
                    transform="rotate(-40.2798 11.6523 7.54834)" fill="white" />
                  <rect x="15.334" y="7.85205" width="2.61221" height="2.61221"
                    transform="rotate(-40.2798 15.334 7.85205)" fill="white" />
                  <rect x="18.7119" y="11.8374" width="2.61221" height="2.61221"
                    transform="rotate(-40.2798 18.7119 11.8374)" fill="white" />
                  <rect x="18.4084" y="15.52" width="2.61221" height="2.61221"
                    transform="rotate(-40.2798 18.4084 15.52)" fill="white" />
                  <rect x="18.104" y="19.2012" width="2.61221" height="2.61221"
                    transform="rotate(-40.2798 18.104 19.2012)" fill="white" />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Background & Shapes
import blogBg from "@/public/images/bg/blog-bg.png";
import gifShape from "@/public/images/icon/original-9e54f87f13d.gif";

import { blogData } from "@/data/blogData";

// Icons
import icon01 from "@/public/images/icon/blog-icon01.svg";
import icon02 from "@/public/images/icon/blog-icon02.svg";

export default function BlogSection() {
  const blogs = Object.values(blogData);
  const bigBlog = blogs[0];
  const smallBlogs = blogs.slice(1, 3);

  useEffect(() => {
    const bgEl = document.querySelector<HTMLElement>(".blog.bg_img");
    if (bgEl) {
      bgEl.style.backgroundImage = `url(${blogBg.src})`;
    }
  }, []);

  return (
    <section id="blog" className="blog pt-150 pb-150 bg_img">
      <div className="container">
        <div className="row mt-none-30">

          {/* LEFT COLUMN */}
          <div className="col-lg-4 mt-30">
            <div className="sec-title blog-sec-title mb-70">
              <span className="sub-title mb-15">Our Latest News</span>
              <h2 className="title">
                Our latest news{" "}
                <Image src={gifShape} alt="shape" unoptimized />
              </h2>
            </div>

            <div className="blog-btn">
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

          {/* RIGHT COLUMN */}
          <div className="col-lg-8 mt-30">
            <div className="row mt-none-30">

              {/* BIG BLOG */}
              {bigBlog && (
                <div className="col-lg-12 mt-30">
                  <div className="xb-blog-item wow fadeInUp" data-wow-duration="600ms">
                    <div className="xb-item--inner img-hove-effect xb-border">
                      <div className="xb-img">
                        <Link href={`/blog/${bigBlog.slug}`}>
                          <Image src={bigBlog.image} alt={bigBlog.title} />
                        </Link>
                      </div>

                      <div className="xb-item--holder">
                        <ul className="xb-item--meta list-unstyled ul_li">
                          <li>
                            <Image src={icon01} alt="icon" /> {bigBlog.category}
                          </li>
                          <li>
                            <Image src={icon02} alt="icon" /> {bigBlog.date}
                          </li>
                        </ul>

                        <h2 className="xb-item--title">
                          <Link href={`/blog/${bigBlog.slug}`}>
                            {bigBlog.title}
                          </Link>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SMALL BLOGS */}
              {smallBlogs.map((blog, i) => (
                <div className="col-lg-6 col-md-6 mt-30" key={i}>
                  <div
                    className="xb-blog-item xb-small-blog-item wow fadeInUp"
                    data-wow-delay={`${(i + 1) * 150}ms`}
                    data-wow-duration="600ms"
                  >
                    <div className="xb-item--inner img-hove-effect xb-border">
                      <div className="xb-img">
                        <Link href={`/blog/${blog.slug}`}>
                          <Image src={blog.image} alt={blog.title} />
                        </Link>
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

        </div>
      </div>
    </section>
  );
}

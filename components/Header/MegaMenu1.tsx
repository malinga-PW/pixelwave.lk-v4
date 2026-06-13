import React from "react";
import Link from "next/link";
import Image from "next/image";

import icon1 from "@/public/images/icon/m_01.svg";
import icon2 from "@/public/images/icon/m_02.svg";
import icon3 from "@/public/images/icon/m_03.svg";
import icon4 from "@/public/images/icon/m_04.svg";

import client1 from "@/public/images/logo/client-logo.svg";
import client2 from "@/public/images/logo/client-logo2.svg";

import robot from "@/public/images/blog/mega-robot.jpg";
import avatar from "@/public/images/avatar/mega-avatar.jpg";

export default function MegaMenu1() {
  return (
    <ul className="submenu">
      <li>
        <div className="mega_menu_wrapper">
          <div className="container-fluid p-0">
            <div className="mega_menu_wrapper_inner">
              <div className="row mt-none-30">
                {/* ---------- LEFT SIDE ---------- */}
                <div className="col-xl-8 col-lg-12 mt-30">
                  <div className="megamenu_pages_wrapper">
                    <div className="row g-10">
                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/service">
                          <span className="icon_title_wrap">
                            <small className="iconbox_icon">
                              <Image src={icon1} alt="Service Icon" />
                            </small>
                            <small className="iconbox_title">Services</small>
                          </span>
                          <span className="description mb-0">
                            Happy to help you!
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/service-details">
                          <span className="icon_title_wrap">
                            <small className="iconbox_icon">
                              <Image src={icon1} alt="Service Details Icon" />
                            </small>
                            <small className="iconbox_title">
                              Service details
                            </small>
                          </span>
                          <span className="description mb-0">
                            Happy to help you!
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/career">
                          <span className="icon_title_wrap">
                            <span className="iconbox_icon">
                              <Image src={icon3} alt="Career Icon" />
                            </span>
                            <small className="iconbox_title">Career</small>
                            <span className="badge">We’re Hiring</span>
                          </span>
                          <span className="description mb-0">
                            Open jobs to join our team.
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/career-details">
                          <span className="icon_title_wrap">
                            <span className="iconbox_icon">
                              <Image src={icon2} alt="Career Details Icon" />
                            </span>
                            <small className="iconbox_title">
                              Career details
                            </small>
                          </span>
                          <span className="description mb-0">
                            We are friendly — join our team.
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/project">
                          <span className="icon_title_wrap">
                            <span className="iconbox_icon">
                              <Image src={icon3} alt="Project Icon" />
                            </span>
                            <small className="iconbox_title">Project</small>
                          </span>
                          <span className="description mb-0">
                            Explore our all case studies.
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/project-details">
                          <span className="icon_title_wrap">
                            <span className="iconbox_icon">
                              <Image src={icon3} alt="Project Details Icon" />
                            </span>
                            <small className="iconbox_title">
                              Project details
                            </small>
                          </span>
                          <span className="description mb-0">
                            Explore our all case studies.
                          </span>
                        </Link>
                      </div>

                      <div className="col-xl-4 col-lg-4">
                        <Link className="iconbox_block_2" href="/team">
                          <span className="icon_title_wrap">
                            <span className="iconbox_icon">
                              <Image src={icon4} alt="Team Icon" />
                            </span>
                            <small className="iconbox_title">Our team</small>
                          </span>
                          <span className="description mb-0">
                            We are friendly — join our team.
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* ---------- BUTTONS & REVIEWS ---------- */}
                    <ul className="btns_group mt-80 p-0 ul_li_between">
                      <li>
                        <Link
                          className="thm-btn agency-btn megamenu-btn"
                          href="/contact"
                        >
                          <span className="text">Get free consultation</span>
                          <span className="arrow">
                            <span className="arrow-icon">
                              {/* SVGs remain unchanged */}
                              {/* ... YOUR TWO SVGs ... */}
                            </span>
                          </span>
                        </Link>
                      </li>

                      <li>
                        <div className="review_short_info_2">
                          <div className="review_admin_logo">
                            <Image src={client1} alt="Client 1" />
                          </div>
                          <div className="review_info_content">
                            <ul className="rating_block unordered_list">
                              {Array(5)
                                .fill(null)
                                .map((_, i) => (
                                  <li key={i}>
                                    <i className="fas fa-star"></i>
                                  </li>
                                ))}
                            </ul>
                            <div className="review_counter">
                              From <b>200+</b> reviews
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="review_short_info_2">
                          <div className="review_admin_logo">
                            <Image src={client2} alt="Client 2" />
                          </div>
                          <div className="review_info_content">
                            <ul className="rating_block unordered_list">
                              {Array(5)
                                .fill(null)
                                .map((_, i) => (
                                  <li key={i}>
                                    <i className="fas fa-star"></i>
                                  </li>
                                ))}
                            </ul>
                            <div className="review_counter">
                              From <b>150+</b> reviews
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* ---------- RIGHT SIDE ---------- */}
                <div className="col-xl-4 col-lg-12 mt-30">
                  <div className="mega_menu_left">
                    <div className="author_box">
                      <div className="author_image">
                        <Image src={robot} alt="AI Robot" />
                      </div>
                      <div className="author_box_content">
                        <h3 className="mb-60 text-white">
                          Looking for custom AI solutions tailored to you?
                        </h3>

                        <Link
                          className="thm-btn agency-btn megamenu-btn"
                          href="/contact"
                        >
                          <span className="text">Contact us now</span>
                        </Link>
                      </div>
                    </div>

                    <div className="author_box">
                      <div className="author_image">
                        <Image src={avatar} alt="CEO Avatar" />
                      </div>
                      <div className="author_box_content">
                        <p className="mb-45 text-white">
                          “As CEO of Telligy, I’ve focused on clarity, efficiency,
                          and results — turning ideas into real value without
                          reinventing the wheel.”
                        </p>

                        <div className="author_holder">
                          <h4 className="author_name text-white">
                            Sebastian Patel
                          </h4>
                          <span className="author_designation text-white">
                            CEO & Chairman at,{" "}
                            <Link href="/">Aivora</Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ---------- END RIGHT SIDE ---------- */}
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

import React from "react";
import Link from "next/link";
import Image from "next/image";

import m05 from "@/public/images/icon/m_05.svg";
import serviceImg from "@/public/images/solutions/solution-corporate.png";

export default function MegaMenuResources() {
  const resources = [
    { title: "📥 Free Downloads", link: "/resources" },
    { title: "📚 Blog & Articles", link: "/blog" },
    { title: "🏷️ Pricing Plans", link: "/#pricing" },
    { title: "📁 Case Studies", link: "/project" },
    { title: "🤖 Elena AI Chatbot", link: "/elena-ai" }
  ];

  return (
    <ul className="submenu">
      <li>
        <div className="mega_menu_wrapper">
          <div className="container-fluid p-0">
            <div className="mega_menu_wrapper_inner megamenu_widget_wrapper">
              <div className="row justify-content-lg-between">

                {/* Left Column (Links) */}
                <div className="col-xl-9 col-lg-8">
                  <div className="mega_menu_box">
                    <div className="megamenu_widget_inner">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 megamenu-col">
                          <div className="megamenu_widget">
                            <ul className="icon_list unordered_list_block">
                              {resources.slice(0, 3).map((item, i) => (
                                <li key={i}>
                                  <Link href={item.link}>
                                    <span className="icon_list_text">{item.title}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 megamenu-col">
                          <div className="megamenu_widget">
                            <ul className="icon_list unordered_list_block">
                              {resources.slice(3).map((item, i) => (
                                <li key={i}>
                                  <Link href={item.link}>
                                    <span className="icon_list_text">{item.title}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="social_area">
                      <div className="row mt-none-30 align-items-center">
                        <div className="col-xl-12 mt-30">
                          <div className="service_link">
                            <div className="xb-item--inner">
                              <div className="xb-item--holder ul_li">
                                <span className="xb-item--icon">
                                  <Image src={m05} alt="icon" />
                                </span>
                                <h3 className="xb-item--title">
                                  <Link href="/blog">
                                    Read our latest tech insights
                                  </Link>
                                </h3>
                              </div>
                              <p className="xb-item--text">
                                Deep-dives on Next.js, n8n integrations, SaaS infrastructure, and AI algorithms.
                              </p>
                            </div>
                            <Link href="/blog" className="xb-overlay"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column (Visual Card) */}
                <div className="col-xl-3 col-lg-4">
                  <div className="megamenu_case">
                    <div className="xb-item--inner">
                      <div className="xb-item--img">
                        <Image src={serviceImg} alt="Resources Hub" />
                      </div>
                      <div className="xb-item--holder">
                        <h3 className="xb-item--title">
                          Knowledge Center
                        </h3>
                        <p className="xb-item--text">
                          Stay updated with our curated ebooks, free automation blueprints, and developer guides.
                        </p>
                        <Link className="thm-btn agency-btn megamenu-btn" href="/resources">
                          <span className="text">All Resources</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

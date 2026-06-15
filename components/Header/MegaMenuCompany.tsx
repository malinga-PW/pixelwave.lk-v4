import React from "react";
import Link from "next/link";
import Image from "next/image";

import m05 from "@/public/images/icon/m_05.svg";
import serviceImg from "@/public/images/solutions/solution-corporate.png";

export default function MegaMenuCompany() {
  const companyLinks = [
    { title: "ℹ️ About Us", link: "/about" },
    { title: "💼 Our Portfolio", link: "/project" },
    { title: "👥 Our Team", link: "/team" },
    { title: "🤝 Careers (We're Hiring!)", link: "/career" },
    { title: "🤖 Elena.AI Interface", link: "/elena-ai" }
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
                              {companyLinks.slice(0, 3).map((item, i) => (
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
                              {companyLinks.slice(3).map((item, i) => (
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
                                  <Link href="/career">
                                    Want to build the future of AI?
                                  </Link>
                                </h3>
                              </div>
                              <p className="xb-item--text">
                                We are always looking for talented developers, designers, and automation engineers.
                              </p>
                            </div>
                            <Link href="/career" className="xb-overlay"></Link>
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
                        <Image src={serviceImg} alt="Our Team" />
                      </div>
                      <div className="xb-item--holder">
                        <h3 className="xb-item--title">
                          About PixelWave
                        </h3>
                        <p className="xb-item--text">
                          A team of passionate technologists dedicated to digital transformation and optimization.
                        </p>
                        <Link className="thm-btn agency-btn megamenu-btn" href="/about">
                          <span className="text">Meet The Team</span>
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

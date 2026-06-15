import React from "react";
import Link from "next/link";
import Image from "next/image";

import m05 from "@/public/images/icon/m_05.svg";
import serviceImg from "@/public/images/solutions/solution-corporate.png";

export default function MegaMenuSolutions() {
  const solutions = [
    { title: "🏢 Corporate Solutions", link: "/solutions#corporate" },
    { title: "🛒 Retail & E-Commerce", link: "/solutions#retail" },
    { title: "🏥 Healthcare Systems", link: "/solutions#healthcare" },
    { title: "🏡 Real Estate Portals", link: "/solutions#real-estate" },
    { title: "🚀 Startups & SaaS", link: "/solutions#startups" },
    { title: "🤖 Custom AI Agents", link: "/solutions#custom" }
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
                              {solutions.slice(0, 3).map((item, i) => (
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
                              {solutions.slice(3).map((item, i) => (
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
                                  <Link href="/contact">
                                    Need a custom automation solution?
                                  </Link>
                                </h3>
                              </div>
                              <p className="xb-item--text">
                                Talk to our consultants for personalized enterprise integration maps.
                              </p>
                            </div>
                            <Link href="/contact" className="xb-overlay"></Link>
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
                        <Image src={serviceImg} alt="AI Solutions" />
                      </div>
                      <div className="xb-item--holder">
                        <h3 className="xb-item--title">
                          Tailored Solutions
                        </h3>
                        <p className="xb-item--text">
                          Helping enterprises streamline complex operations through software.
                        </p>
                        <Link className="thm-btn agency-btn megamenu-btn" href="/solutions">
                          <span className="text">All Solutions</span>
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

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
                          {/* UPDATED MEGA MENU BANNER */}
                          <div className="relative overflow-hidden rounded-lg px-6 py-5 flex items-center justify-between group" style={{ background: 'linear-gradient(90deg, #3247FF 0%, #00FF97 100%)', border: 'none' }}>
                            <div className="relative z-10 flex flex-col gap-2">
                              <div className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(4px)' }}>
                                  <Image src={m05} alt="icon" />
                                </span>
                                <h3 className="text-white text-xl font-semibold m-0 p-0">
                                  <Link href="/contact" className="text-white hover:text-white">
                                    Need a custom automation solution?
                                  </Link>
                                </h3>
                              </div>
                              <p className="text-white text-opacity-90 text-sm m-0 p-0 ml-14">
                                Talk to our consultants for personalized enterprise integration maps.
                              </p>
                            </div>
                            
                            {/* Overlay Link for full-banner click */}
                            <Link href="/contact" className="absolute inset-0 z-20"></Link>

                            {/* Right Arrow Button */}
                            <div className="relative z-10 flex items-center justify-center w-11 h-11 bg-[#0b0f19] rounded-full transition-colors duration-300 group-hover:bg-white group-hover:text-[#0b0f19] text-white">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 19L19 5M19 5H7.5M19 5V16.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                          {/* END UPDATED BANNER */}
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

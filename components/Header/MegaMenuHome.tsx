import React from "react";
import Link from "next/link";
import Image from "next/image";

import m05 from "@/public/images/icon/m_05.svg";
import serviceImg from "@/public/images/solutions/solution-corporate.png";

export default function MegaMenuHome() {
  const homeSections = [
    { title: "🚀 Hero Section", link: "/#hero" },
    { title: "ℹ️ About Us", link: "/#about" },
    { title: "🛠️ Main Services", link: "/#services" },
    { title: "⚡ Key Features", link: "/#features" },
    { title: "💼 Portfolio Cases", link: "/#portfolio" },
    { title: "💬 Client Testimonials", link: "/#testimonials" },
    { title: "💰 Pricing & Plans", link: "/#pricing" },
    { title: "❓ Frequently Asked FAQ", link: "/#faq" },
    { title: "✍️ Latest Blog News", link: "/#blog" },
    { title: "📞 Get in Touch", link: "/#contact" }
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
                              {homeSections.slice(0, 5).map((item, i) => (
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
                              {homeSections.slice(5).map((item, i) => (
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
                          <div className="custom-mega-cta">
                            <div className="cta-content">
                              <div className="cta-header">
                                <span className="cta-icon">
                                  <Image src={m05} alt="icon" />
                                </span>
                                <h3 className="cta-title">
                                  <Link href="/contact">
                                    Ready to automate your operations?
                                  </Link>
                                </h3>
                              </div>
                              <p className="cta-text">
                                Get a fully custom-built AI solution for your business.
                              </p>
                            </div>
                            
                            {/* Overlay Link for full-banner click */}
                            <Link href="/contact" className="xb-overlay"></Link>

                            {/* Right Arrow Button */}
                            <div className="cta-arrow">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 19L19 5M19 5H7.5M19 5V16.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                        <Image src={serviceImg} alt="PixelWave Home" />
                      </div>
                      <div className="xb-item--holder">
                        <h3 className="xb-item--title">
                          PixelWave AI
                        </h3>
                        <p className="xb-item--text">
                          Smarter software and intelligent automation, built for rapid business growth.
                        </p>
                        <Link className="thm-btn agency-btn megamenu-btn" href="/about">
                          <span className="text">Learn More</span>
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

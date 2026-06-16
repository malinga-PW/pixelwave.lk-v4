import React from "react";
import Link from "next/link";
import Image from "next/image";

// Images
import m05 from "@/public/images/icon/m_05.svg";
import serviceImg from "@/public/images/solutions/solution-corporate.png";

export default function MegaMenuServices() {
  return (
    <ul className="submenu">
      <li>
        <div className="mega_menu_wrapper">
          <div className="container-fluid p-0">
            <div className="mega_menu_wrapper_inner megamenu_widget_wrapper">
              <div className="row justify-content-lg-between">

                {/* ---------- Left Main Column ---------- */}
                <div className="col-xl-9 col-lg-8">
                  <div className="mega_menu_box">

                    <div className="megamenu_widget_inner">
                      <div className="row">

                        {/* Column 1 */}
                        <div className="col-xl-4 col-lg-6 megamenu-col">
                          <div className="megamenu_widget">
                            <ul className="icon_list unordered_list_block">
                              {[
                                { title: "Premium Websites", link: "/service/premium-websites" },
                                { title: "E-Commerce Solutions", link: "/service/e-commerce-solutions" },
                                { title: "AI Automation", link: "/service/ai-automation" }
                              ].map((item, i) => (
                                <li key={i}>
                                  <Link href={item.link}>
                                    <span className="icon_list_text">{item.title}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Column 2 */}
                        <div className="col-xl-8 col-lg-6 megamenu-col">
                          <div className="megamenu_widget">
                            <ul className="icon_list unordered_list_block">
                              {[
                                { title: "n8n Development", link: "/service/n8n-development" },
                                { title: "SaaS Development", link: "/service/saas-development" },
                                { title: "Branding & Design", link: "/service/branding-design" }
                              ].map((item, i) => (
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

                    {/* ---------- Social + Service CTA ---------- */}
                    <div className="social_area">
                      <div className="row mt-none-30 align-items-center">

                        {/* Social Icons */}
                        <div className="col-xl-4 mt-30">
                          <div className="social_inner ul_li">
                            <span>Follow Us:</span>
                            <ul className="social_icons_list unordered_list">
                              <li><a href="#!"><i className="fab fa-facebook-f"></i></a></li>
                              <li><a href="#!"><i className="fab fa-linkedin-in"></i></a></li>
                              <li>
                                <a href="#!">
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.6774 7.62177L17.2342 0H15.6805L9.98719 6.61788L5.43998 0H0.195312L7.07159 10.0074L0.195312 18H1.74916L7.76141 11.0113L12.5636 18H17.8083L10.677 7.62177H10.6774ZM8.54921 10.0956L7.8525 9.09906L2.30903 1.16971H4.69564L9.16929 7.56895L9.866 8.56546L15.6812 16.8835H13.2946L8.54921 10.096V10.0956Z"
                                      fill="#FFF"
                                    />
                                  </svg>
                                </a>
                              </li>
                              <li><a href="#!"><i className="fab fa-dribbble"></i></a></li>
                            </ul>
                          </div>
                        </div>

                        {/* CTA: Need custom AI service */}
                        <div className="col-xl-8 mt-30">
                          {/* UPDATED MEGA MENU BANNER */}
                          <div className="relative overflow-hidden rounded-lg px-6 py-5 flex items-center justify-between group" style={{ background: 'linear-gradient(90deg, #3247FF 0%, #00FF97 100%)', border: 'none' }}>
                            <div className="relative z-10 flex flex-col gap-2">
                              <div className="flex items-center gap-3">
                                <span className="flex items-center justify-center w-10 h-10 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(4px)' }}>
                                  <Image src={m05} alt="icon" />
                                </span>
                                <h3 className="text-white text-xl font-semibold m-0 p-0">
                                  <Link href="/contact" className="text-white hover:text-white">
                                    Need a Custom AI Service?
                                  </Link>
                                </h3>
                              </div>
                              <p className="text-white text-opacity-90 text-sm m-0 p-0 ml-14">
                                Get a free consultation today.
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

                {/* ---------- Right Image Column ---------- */}
                <div className="col-xl-3 col-lg-4">
                  <div className="megamenu_case">
                    <div className="xb-item--inner">

                      <div className="xb-item--img">
                        <Image src={serviceImg} alt="AI Service" />
                      </div>

                      <div className="xb-item--holder">
                        <h3 className="xb-item--title">
                          General AI projects..
                        </h3>
                        <p className="xb-item--text">
                          We deliver AI solutions that streamline operations and boost efficiency.
                        </p>

                        <Link
                          className="thm-btn agency-btn megamenu-btn"
                          href="/project"
                        >
                          <span className="text">read more project</span>
                        </Link>

                      </div>

                    </div>
                  </div>
                </div>
                {/* ---------- END Right Column ---------- */}

              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};
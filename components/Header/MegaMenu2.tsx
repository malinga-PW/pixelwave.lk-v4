import React from "react";
import Link from "next/link";
import Image from "next/image";

// Images
import m05 from "@/public/images/icon/m_05.svg";
import serviceImg from "@/public/images/service/img21.png";

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
                                "AI saas product.",
                                "Data and intelligence.",
                                "AI for E-commerce.",
                                "AI consulting."
                              ].map((text, i) => (
                                <li key={i}>
                                  <Link href="/service-details">
                                    <span className="icon_list_text">{text}</span>
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
                                "AI chatbot virtual.",
                                "AI - marketing.",
                                "Machine learning.",
                                "AI integration."
                              ].map((text, i) => (
                                <li key={i}>
                                  <Link href="/service-details">
                                    <span className="icon_list_text">{text}</span>
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
                          <div className="service_link">
                            <div className="xb-item--inner">
                              <div className="xb-item--holder ul_li">
                                <span className="xb-item--icon">
                                  <Image src={m05} alt="icon" />
                                </span>
                                <h3 className="xb-item--title">
                                  <Link href="/contact">
                                    Need any custom AI services.
                                  </Link>
                                </h3>
                              </div>
                              <p className="xb-item--text">
                                Discover our core offerings.
                              </p>
                            </div>

                            <Link href="/contact" className="xb-item--btn">
                              {/* SVG icons preserved */}
                              {/* First SVG */}
                              <svg
                                width="31"
                                height="31"
                                viewBox="0 0 31 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect x="6.29" y="21.41" width="22.36" height="2.84" transform="rotate(-40.28 6.29 21.41)" fill="white"/>
                                <rect x="9.45" y="7.57" width="2.84" height="2.84" transform="rotate(-40.28 9.45 7.57)" fill="white"/>
                                <rect x="13.45" y="7.89" width="2.84" height="2.84" transform="rotate(-40.28 13.45 7.89)" fill="white"/>
                                <rect x="17.45" y="8.23" width="2.84" height="2.84" transform="rotate(-40.28 17.45 8.23)" fill="white"/>
                                <rect x="21.12" y="12.56" width="2.84" height="2.84" transform="rotate(-40.28 21.12 12.56)" fill="white"/>
                                <rect x="20.79" y="16.56" width="2.84" height="2.84" transform="rotate(-40.28 20.79 16.56)" fill="white"/>
                                <rect x="20.46" y="20.56" width="2.84" height="2.84" transform="rotate(-40.28 20.46 20.56)" fill="white"/>
                              </svg>

                              {/* Second SVG (duplicate) */}
                              <svg
                                width="31"
                                height="31"
                                viewBox="0 0 31 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect x="6.29" y="21.41" width="22.36" height="2.84" transform="rotate(-40.28 6.29 21.41)" fill="white"/>
                                <rect x="9.45" y="7.57" width="2.84" height="2.84" transform="rotate(-40.28 9.45 7.57)" fill="white"/>
                                <rect x="13.45" y="7.89" width="2.84" height="2.84" transform="rotate(-40.28 13.45 7.89)" fill="white"/>
                                <rect x="17.45" y="8.23" width="2.84" height="2.84" transform="rotate(-40.28 17.45 8.23)" fill="white"/>
                                <rect x="21.12" y="12.56" width="2.84" height="2.84" transform="rotate(-40.28 21.12 12.56)" fill="white"/>
                                <rect x="20.79" y="16.56" width="2.84" height="2.84" transform="rotate(-40.28 20.79 16.56)" fill="white"/>
                                <rect x="20.46" y="20.56" width="2.84" height="2.84" transform="rotate(-40.28 20.46 20.56)" fill="white"/>
                              </svg>
                            </Link>

                            {/* Invisible overlay for full-click area */}
                            <Link href="/contact" className="xb-overlay"></Link>
                          </div>
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
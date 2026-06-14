"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceData {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  image: any;
  features: string[];
  faq: { question: string; answer: string }[];
}

export default function ServiceDetails({ service }: { service: ServiceData }) {
  const [activeFaq, setActiveFaq] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  return (
    <section className="service-details pos-rel pt-120 pb-120">
      <div className="container">
        {/* === Main Image === */}
        <div className="single-item-image service-det-img mb-75" style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(0,255,151,0.2)" }}>
          <Image src={service.image} alt={service.title} className="w-100" style={{ objectFit: "cover", maxHeight: "500px" }} />
        </div>

        {/* === Main Content === */}
        <div className="row">
          <div className="col-lg-8">
            <h2 className="details-content-title mb-15" style={{ color: "#fff", fontSize: "36px", fontWeight: "bold" }}>
              {service.subtitle}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "18px", lineHeight: "1.8", marginBottom: "40px" }}>
              {service.description}
            </p>

            {/* === Features List === */}
            <h3 className="details-content-title mb-20" style={{ color: "#fff", fontSize: "28px" }}>
              Key Features
            </h3>
            <ul className="service-outcome-list list-unstyled mt-35 mb-60">
              {service.features.map((feature, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "20px", color: "rgba(255,255,255,0.8)", fontSize: "17px" }}>
                  <span style={{ flexShrink: 0, marginTop: "4px" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.2"
                        d="M24 12C24 13.024 22.742 13.868 22.49 14.812C22.23 15.788 22.888 17.148 22.394 18.002C21.892 18.87 20.382 18.974 19.678 19.678C18.974 20.382 18.87 21.892 18.002 22.394C17.148 22.888 15.788 22.23 14.812 22.49C13.868 22.742 13.024 24 12 24C10.976 24 10.132 22.742 9.188 22.49C8.212 22.23 6.852 22.888 5.998 22.394C5.13 21.892 5.026 20.382 4.322 19.678C3.618 18.974 2.108 18.87 1.606 18.002C1.112 17.148 1.77 15.788 1.51 14.812C1.258 13.868 0 13.024 0 12C0 10.976 1.258 10.132 1.51 9.188C1.77 8.212 1.112 6.852 1.606 5.998C2.108 5.13 3.618 5.026 4.322 4.322C5.026 3.618 5.13 2.108 5.998 1.606C6.852 1.112 8.212 1.77 9.188 1.51C10.132 1.258 10.976 0 12 0C13.024 0 13.868 1.258 14.812 1.51C15.788 1.77 17.148 1.112 18.002 1.606C18.87 2.108 18.974 3.618 19.678 4.322C20.382 5.026 21.892 5.13 22.394 5.998C22.888 6.852 22.23 8.212 22.49 9.188C22.742 10.132 24 10.976 24 12Z"
                        fill="#00FF97"
                      />
                      <path
                        d="M15.5559 9.14076L11.3992 13.178L9.24437 11.0869C8.77664 10.6326 8.01773 10.6326 7.55001 11.0869C7.08229 11.5412 7.08229 12.2783 7.55001 12.7326L10.5729 15.6686C11.0279 16.1105 11.7668 16.1105 12.2218 15.6686L17.2484 10.7864C17.7162 10.3321 17.7162 9.59504 17.2484 9.14076C16.7807 8.68648 16.0236 8.68648 15.5559 9.14076Z"
                        fill="#00FF97"
                      />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* === FAQ Accordion === */}
            <div className="service-process-wrap pt-60 pb-60" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <h3 className="details-content-title mb-40" style={{ color: "#fff", fontSize: "28px" }}>
                Frequently Asked Questions
              </h3>
              <div className="service_process_faq">
                <div className="accordion">
                  {service.faq.map((item, index) => (
                    <div className="accordion-item" key={index} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "8px", marginBottom: "16px" }}>
                      <div
                        className={`accordion-button ${activeFaq === index ? "" : "collapsed"}`}
                        role="button"
                        onClick={() => toggleAccordion(index)}
                        style={{ padding: "20px", color: activeFaq === index ? "#00FF97" : "#fff", fontWeight: "bold", fontSize: "18px", boxShadow: "none" }}
                      >
                        {item.question}
                      </div>

                      <div className={`accordion-collapse collapse ${activeFaq === index ? "show" : ""}`}>
                        <div className="accordion-body" style={{ padding: "0 20px 20px", color: "rgba(255,255,255,0.6)", fontSize: "16px", lineHeight: "1.7" }}>
                          <p className="m-0">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* === Sidebar CTA === */}
          <div className="col-lg-4 mt-50 mt-lg-0">
            <div className="service-sidebar" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(0,255,151,0.15)", borderRadius: "16px", padding: "40px", position: "sticky", top: "120px" }}>
              <h3 style={{ color: "#fff", fontSize: "24px", marginBottom: "20px" }}>Ready to Start?</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", marginBottom: "30px" }}>
                Book a consultation today and let's discuss how {service.title} can accelerate your business growth.
              </p>
              <Link href="/contact" className="thm-btn agency-btn" style={{ width: "100%", textAlign: "center", background: "#00FF97", color: "#000", fontWeight: "bold", border: "none" }}>
                Book Consultation
              </Link>
              
              <div style={{ marginTop: "40px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "30px" }}>
                <h4 style={{ color: "#fff", fontSize: "18px", marginBottom: "15px" }}>Have Questions?</h4>
                <a href="mailto:hello@pixelwave.lk" style={{ color: "#00FF97", fontSize: "16px", display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  ✉ hello@pixelwave.lk
                </a>
                <a href="tel:+94719739734" style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
                  📞 +94 71 973 973 4
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

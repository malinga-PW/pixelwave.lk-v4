import Image from "next/image";
import Link from "next/link";
import ComparisonSection from "./Comparison";

// Background
import bgImg from "@/public/images/bg/integrations-bg.png";

// Logos
import microsoft from "@/public/images/integration/microsoft.png";
import telegram from "@/public/images/integration/telegram.png";
import slack from "@/public/images/integration/slack.png";
import line from "@/public/images/integration/line.png";
import mailchimp from "@/public/images/integration/mailchimp.png";

import apple from "@/public/images/integration/apple.png";
import messenger from "@/public/images/integration/messenger.png";
import linkedin from "@/public/images/integration/linkedin.png";
import googleMeet from "@/public/images/integration/google-meet.png";
import paypal from "@/public/images/integration/paypal.png";

import platform from "@/public/images/integration/plateform.png";
import airtable from "@/public/images/integration/airtable.png";
import whatsapp from "@/public/images/integration/whatsapp.png";
import android from "@/public/images/integration/android.png";
import instagram from "@/public/images/integration/instagram.png";

import shazam from "@/public/images/integration/shazam.png";
import shopify from "@/public/images/integration/shopify.png";
import loom from "@/public/images/integration/loom.png";
import snapchat from "@/public/images/integration/snapchat.png";
import discord from "@/public/images/integration/discord.png";

import subIcon from "@/public/images/icon/sub-left-icon.png";

/* ================================
   Static Constants (Envato Safe)
================================= */

const BG_STYLE = {
  backgroundImage: `url(${bgImg.src})`,
};

const ArrowSVG = (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="5.06592" y="19.9785" width="20.5712" height="2.61221" transform="rotate(-40.2798 5.06592 19.9785)" fill="white" />
    <rect x="7.97095" y="7.24463" width="2.61221" height="2.61221" transform="rotate(-40.2798 7.97095 7.24463)" fill="white" />
    <rect x="11.6523" y="7.54834" width="2.61221" height="2.61221" transform="rotate(-40.2798 11.6523 7.54834)" fill="white" />
    <rect x="15.334" y="7.85205" width="2.61221" height="2.61221" transform="rotate(-40.2798 15.334 7.85205)" fill="white" />
    <rect x="18.7119" y="11.8374" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.7119 11.8374)" fill="white" />
    <rect x="18.4084" y="15.52" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.4084 15.52)" fill="white" />
    <rect x="18.104" y="19.2012" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.104 19.2012)" fill="white" />
  </svg>
);

const LOGO_ROWS = [
  [microsoft, telegram, slack, line, mailchimp],
  [apple, messenger, linkedin, googleMeet, paypal],
  [platform, airtable, whatsapp, android, instagram],
  [shazam, shopify, loom, snapchat, discord],
];

const DUPLICATED_ROWS = LOGO_ROWS.map((row) => [...row, ...row]);

/* ================================ */

export default function IntegrationComparisonSection() {
  return (
    <section
      id="integration"
      className="integration-conparison pt-40 pb-150 bg_img"
      style={BG_STYLE}
    >
      <div className="container">
        <div className="integration-container">
          <div className="row mt-none-30 align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-lg-6 mt-30">
              <div className="integration-content">
                <div className="sec-title sec-title--two process-title mb-10">
                  <span className="sub-title d-block mb-30">
                    <Image src={subIcon} alt="icon" width={26} height={26} />
                    Easy integrations
                  </span>

                  <h2 className="title">Connect your favourite tools</h2>
                </div>

                <ul className="integration-list list-unstyled">
                  <li><span>✔</span> Messaging Platforms Integration.</li>
                  <li><span>✔</span> Web & E-commerce Integration.</li>
                  <li><span>✔</span> Customer Support & CRM Integration.</li>
                  <li><span>✔</span> Automation & API Tools Integration.</li>
                </ul>

                {/* CTA BUTTON */}
                <div className="integration-btn mt-45">
                  <div className="cta-btn mt-40">
                    <Link className="thm-btn chatbot-btn" href="/contact">
                      Build your AI chatbot — it’s free
                      <span className="arrow-icon">
                        {ArrowSVG}
                        {ArrowSVG}
                      </span>

                      <span className="btn-bg">
                        <svg
                          width="750"
                          height="60"
                          viewBox="0 0 750 60"
                          fill="none"
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="750" height="60" fill="url(#paint0_radial)" />
                          <defs>
                            <radialGradient
                              id="paint0_radial"
                              cx="0"
                              cy="0"
                              r="1"
                              gradientTransform="matrix(-667.5 -25 0.582116 -49.7476 497 39)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stopColor="#00FF97" />
                              <stop offset="1" stopColor="#00020F" stopOpacity="0" />
                            </radialGradient>
                          </defs>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* LOGO MARQUEES */}
            <div className="col-lg-6 mt-30">
              <div className="integration-logo-wrap ul_li">
                {DUPLICATED_ROWS.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className={`integration-logo-inner ${
                      rowIndex % 2 === 0 ? "marquee-first" : "marquee2"
                    }`}
                  >
                    {row.map((logo, i) => (
                      <div className="integration-logo" key={`${rowIndex}-${i}`}>
                        <Image src={logo} alt="integration-logo" width={80} height={80} />
                      </div>
                    ))}
                  </div>
                ))}

                <div className="xb-shape">
                  <div className="shape shape--1"></div>
                  <div className="shape shape--2"></div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* COMPARISON */}
        <ComparisonSection />
      </div>
    </section>
  );
}

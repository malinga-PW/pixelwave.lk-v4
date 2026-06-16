"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Backgrounds
import bgImg from "@/public/images/bg/pricing-bg.png";
import bgItemImg from "@/public/images/bg/pricing-bg01.png";

// Icons
import iconLeft from "@/public/images/icon/sub-left-icon.png";
import iconRight from "@/public/images/icon/sub-right-icon.png";
import moneyGif from "@/public/images/icon/money-icegif-22-unscreen.gif";
import icon1 from "@/public/images/icon/pricing-icon01.svg";

/* ================================
   Static Constants & Data
================================= */

const BG_STYLE = {
  backgroundImage: `url(${bgImg.src})`,
};

const BG_ITEM_STYLE = {
  backgroundImage: `url(${bgItemImg.src})`,
};

const CheckIcon = (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.1"
      d="M21 10.5C21 11.396 19.8993 12.1345 19.6787 12.9605C19.4513 13.8145 20.027 15.0045 19.5947 15.7517C19.1555 16.5112 17.8342 16.6022 17.2183 17.2183C16.6022 17.8342 16.5112 19.1555 15.7517 19.5947C15.0045 20.027 13.8145 19.4513 12.9605 19.6787C12.1345 19.8993 11.396 21 10.5 21C9.604 21 8.8655 19.8993 8.0395 19.6787C7.1855 19.4513 5.9955 20.027 5.24825 19.5947C4.48875 19.1555 4.39775 17.8342 3.78175 17.2183C3.16575 16.6022 1.8445 16.5112 1.40525 15.7517C0.973 15.0045 1.54875 13.8145 1.32125 12.9605C1.10075 12.1345 0 11.396 0 10.5C0 9.604 1.10075 8.8655 1.32125 8.0395C1.54875 7.1855 0.973 5.9955 1.40525 5.24825C1.8445 4.48875 3.16575 4.39775 3.78175 3.78175C4.39775 3.16575 4.48875 1.8445 5.24825 1.40525C5.9955 0.973 7.1855 1.54875 8.0395 1.32125C8.8655 1.10075 9.604 0 10.5 0C11.396 0 12.1345 1.10075 12.9605 1.32125C13.8145 1.54875 15.0045 0.973 15.7517 1.40525C16.5112 1.8445 16.6022 3.16575 17.2183 3.78175C17.8342 4.39775 19.1555 4.48875 19.5947 5.24825C20.027 5.9955 19.4513 7.1855 19.6787 8.0395C19.8993 8.8655 21 9.604 21 10.5Z"
      fill="#00FF97"
    />
    <path
      d="M13.5336 7.37076L9.53661 11.3678L7.46461 9.29751C7.01486 8.84776 6.28511 8.84776 5.83536 9.29751C5.38561 9.74726 5.38561 10.477 5.83536 10.9268L8.74211 13.8335C9.17961 14.271 9.89011 14.271 10.3276 13.8335L15.1611 9.00001C15.6109 8.55026 15.6109 7.82051 15.1611 7.37076C14.7114 6.92101 13.9834 6.92101 13.5336 7.37076Z"
      fill="#00FF97"
    />
  </svg>
);

const DIGITAL_PRESENCE = [
  "Premium Website",
  "High-Speed Hosting",
  "Business Email setup",
  "SSL Certificate",
  "Ongoing Maintenance",
];

const GROWTH_ENGINE = [
  "Everything in Digital Presence",
  "SEO Optimization",
  "Workflow Automation",
  "Custom AI Chatbot",
  "CRM Integration",
  "Analytics Dashboard",
];

const ENTERPRISE_AI = [
  "Custom SaaS Development",
  "Advanced AI Automation",
  "Production Dashboards",
  "Multi-User System",
  "Complex API Integrations",
  "Priority 24/7 Support",
];

const CURRENCIES = [
  { code: "USD", symbol: "$", rate: 1.0, flag: "🇺🇸", name: "US Dollar" },
  { code: "LKR", symbol: "Rs. ", rate: 300.0, flag: "🇱🇰", name: "Sri Lankan Rupee" },
  { code: "INR", symbol: "₹", rate: 83.5, flag: "🇮🇳", name: "Indian Rupee" },
  { code: "PKR", symbol: "₨", rate: 278.0, flag: "🇵🇰", name: "Pakistani Rupee" },
  { code: "EUR", symbol: "€", rate: 0.92, flag: "🇪🇺", name: "Euro" },
  { code: "GBP", symbol: "£", rate: 0.79, flag: "🇬🇧", name: "British Pound" },
  { code: "AUD", symbol: "A$", rate: 1.51, flag: "🇦🇺", name: "Australian Dollar" },
  { code: "CAD", symbol: "C$", rate: 1.37, flag: "🇨🇦", name: "Canadian Dollar" },
  { code: "SGD", symbol: "S$", rate: 1.35, flag: "🇸🇬", name: "Singapore Dollar" },
  { code: "AED", symbol: "AED ", rate: 3.67, flag: "🇦🇪", name: "UAE Dirham" },
  { code: "JPY", symbol: "¥", rate: 157.0, flag: "🇯🇵", name: "Japanese Yen" },
  { code: "CNY", symbol: "¥", rate: 7.25, flag: "🇨🇳", name: "Chinese Yuan" },
];

const PRICING_DATA = [
  {
    id: 1,
    name: "Digital Presence",
    prices: {
      weekly: 10,
      monthly: 39,
      yearly: 399,
    },
    features: DIGITAL_PRESENCE,
    popular: false,
  },
  {
    id: 2,
    name: "Growth Engine",
    prices: {
      weekly: 25,
      monthly: 99,
      yearly: 999,
    },
    features: GROWTH_ENGINE,
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise AI",
    prices: {
      weekly: 50,
      monthly: 199,
      yearly: 1999,
    },
    features: ENTERPRISE_AI,
    popular: false,
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"weekly" | "monthly" | "yearly">("yearly");
  const [selectedCurrency, setSelectedCurrency] = useState(CURRENCIES[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close currency selector dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatPrice = (valueUSD: number, rate: number, symbol: string) => {
    const converted = valueUSD * rate;
    const formatted = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0,
    }).format(converted);
    return `${symbol}${formatted}`;
  };

  return (
    <section id="pricing" className="pricing pt-145 pb-150 bg_img" style={BG_STYLE}>
      <div className="container">

        {/* TITLE */}
        <div className="sec-title sec-title--two pricing-sec-title text-center mb-30">
          <span className="sub-title">
            <Image src={iconLeft} alt="icon" width={22} height={22} />
            Pricing Plans
            <Image src={iconRight} alt="icon" width={22} height={22} />
          </span>

          <h2 className="title">
            Simple & <Image src={moneyGif} alt="shape" width={40} height={40} /> scalable pricing
          </h2>
        </div>

        {/* CONTROLS SWITCHERS (Billing and Currency Selectors) */}
        <div className="pricing-controls-wrapper ul_li_between align-items-center mb-50 notranslate">
          {/* Billing Switcher Pill */}
          <div className="billing-switcher-pill ul_li align-items-center">
            {(["weekly", "monthly", "yearly"] as const).map((cycle) => (
              <button
                key={cycle}
                type="button"
                className={`billing-btn ${billingCycle === cycle ? "active" : ""}`}
                onClick={() => setBillingCycle(cycle)}
              >
                {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
              </button>
            ))}
          </div>

          {/* Currency Dropdown Selector */}
          <div className="currency-selector position-relative" ref={dropdownRef}>
            <button
              type="button"
              className="currency-btn ul_li align-items-center"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <span className="currency-flag">{selectedCurrency.flag}</span>
              <span className="currency-code ms-2">{selectedCurrency.code}</span>
              <span className="currency-name d-none d-md-inline ms-1">({selectedCurrency.name})</span>
              <i className="far fa-angle-down ms-2" />
            </button>

            {dropdownOpen && (
              <ul className="currency-dropdown position-absolute list-unstyled m-0 p-0">
                {CURRENCIES.map((curr) => (
                  <li key={curr.code}>
                    <button
                      type="button"
                      className={`currency-option ul_li align-items-center w-100 ${
                        selectedCurrency.code === curr.code ? "active" : ""
                      }`}
                      onClick={() => {
                        setSelectedCurrency(curr);
                        setDropdownOpen(false);
                      }}
                    >
                      <span className="currency-flag">{curr.flag}</span>
                      <strong className="ms-2">{curr.code}</strong>
                      <span className="currency-desc ms-2 d-none d-sm-inline">- {curr.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="row mt-none-30 justify-content-center">
          {PRICING_DATA.map((tier) => {
            const basePrice = tier.prices[billingCycle];
            const formattedPrice = formatPrice(
              basePrice,
              selectedCurrency.rate,
              selectedCurrency.symbol
            );
            const cycleText =
              billingCycle === "yearly"
                ? "Year"
                : billingCycle === "monthly"
                ? "Month"
                : "Week";

            return (
              <div key={tier.id} className="col-lg-4 col-md-6 mt-30">
                <div
                  className="pricing-item xb-border bg_img h-100 d-flex flex-column"
                  style={BG_ITEM_STYLE}
                >
                  <div className="xb-icon">
                    <Image src={icon1} alt="icon" width={50} height={50} />
                  </div>

                  <h3 className="mb-10 text-white">{tier.name}</h3>
                  <h2 className="xb-dollar mb-20">
                    {formattedPrice} <sub>/{cycleText}</sub>
                  </h2>

                  <ul className="pricing-list list-unstyled mt-3 mb-40">
                    {tier.features.map((item, i) => (
                      <li key={i}>
                        <span>{CheckIcon}</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="pricing-btn mb-25 mt-auto d-flex flex-column gap-3">
                    <Link
                      className="thm-btn chatbot-btn w-100 text-center"
                      href="/contact"
                    >
                      <span className="text">Choose Plan</span>
                    </Link>
                    <button
                      className="w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                      style={{ 
                        border: '1px solid rgba(0, 255, 151, 0.3)', 
                        color: '#00FF97', 
                        background: 'rgba(0, 255, 151, 0.05)',
                        fontSize: '14px',
                        fontWeight: '600',
                        borderRadius: '30px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 255, 151, 0.15)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 255, 151, 0.05)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                      onClick={() => {
                        // Can be hooked up to ElenaChatWidget context or custom event
                        console.log(`Asking Elena AI about ${tier.name}`);
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                      Ask Elena AI
                    </button>
                  </div>

                  {tier.popular && (
                    <span className="xb-tag premium-plan">Most Popular</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

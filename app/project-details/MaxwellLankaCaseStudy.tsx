import React from "react";
import Image from "next/image";

// ---- image imports ----
import img07 from "@/public/images/project/project-img02.jpg";

import icon4 from "@/public/images/icon/project-icon04.svg";
import icon5 from "@/public/images/icon/project-icon05.svg";
import icon6 from "@/public/images/icon/project-icon06.svg";
import icon7 from "@/public/images/icon/project-icon07.svg";

// ---- check icon svg ----
const CheckIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
);

// ==== main component ====
export default function MaxwellLankaCaseStudy() {
  const projectMeta = [
    { icon: icon4, label: "client :", value: "Maxwell Lanka" },
    { icon: icon5, label: "industry :", value: "E-Commerce / Retail" },
    { icon: icon6, label: "location :", value: "Sri Lanka" },
    { icon: icon7, label: "focus :", value: "AI Integration & Dashboards" },
  ];

  return (
    <section className="project-details pb-90 pt-50">
      <div className="container">
        
        {/* Title Block */}
        <div className="mb-50 text-center">
          <span className="sub-title d-block mb-10 text-primary" style={{letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px', fontWeight: 600}}>Case Study</span>
          <h1 className="title" style={{ fontSize: '48px', lineHeight: 1.2 }}>Maxwell Lanka <br /> <span style={{ color: '#00FF97' }}>Next-Gen E-Commerce & AI Integration</span></h1>
        </div>

        {/* image */}
        <div className="single-item-image mb-75 rounded overflow-hidden shadow-lg border border-secondary">
          <Image
            src={img07}
            alt="Maxwell Lanka AI solutions project overview"
            className="w-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* meta icons */}
        <ul className="project-meta ul_li_between mb-80 p-4 rounded bg-dark border border-secondary">
          {projectMeta.map((item, i) => (
            <li key={i} className="mb-3 mb-md-0">
              <Image src={item.icon} alt={item.label} width={40} height={40} className="me-3" />
              <div>
                <span className="d-block text-uppercase text-secondary" style={{fontSize: '12px'}}>{item.label}</span>
                <strong className="text-white">{item.value}</strong>
              </div>
            </li>
          ))}
        </ul>

        {/* Executive Summary */}
        <h2 className="details-content-title mb-20 text-white">Executive Summary</h2>
        <p className="mb-30 text-light" style={{ fontSize: '18px', lineHeight: 1.8 }}>
          Maxwell Lanka, a premier e-commerce platform in Sri Lanka, required a technological leap to enhance customer engagement and streamline administrative operations. PixelWave engineered a high-performance headless e-commerce architecture, integrated an intelligent conversational AI shopping assistant, and deployed a robust administrative financial dashboard. The result is a lightning-fast, highly scalable platform that drives sales while giving management deep, real-time business insights.
        </p>

        <ul className="list-unstyled mb-60 ps-3 border-start border-primary border-3">
          <li className="mb-2"><strong className="text-white">Client Focus:</strong> Retail & Household Products</li>
          <li><strong className="text-white">Tech Stack:</strong> Next.js, Vercel, Supabase (PostgreSQL & pgvector), Google Gemini AI, LangChain, n8n.</li>
        </ul>

        {/* Business Challenge */}
        <div className="mt-80 mb-80 p-5 rounded" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <h2 className="details-content-title mb-20 text-white">The Challenge</h2>
          <div className="row mt-4">
            <div className="col-md-4 mb-4">
              <div className="p-4 h-100 rounded border border-secondary" style={{ background: '#0a0d14' }}>
                <h4 className="text-white mb-3" style={{ fontSize: '20px' }}>Customer Experience</h4>
                <p className="text-secondary mb-0" style={{ fontSize: '15px' }}>Navigating large product catalogs can cause buyer friction. The client needed a way to provide instant, personalized product recommendations.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 h-100 rounded border border-secondary" style={{ background: '#0a0d14' }}>
                <h4 className="text-white mb-3" style={{ fontSize: '20px' }}>Operational Blindspots</h4>
                <p className="text-secondary mb-0" style={{ fontSize: '15px' }}>Management lacked a unified, real-time view of financial KPIs (Average Order Value, Revenue Trends, Fulfillment Rates).</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 h-100 rounded border border-secondary" style={{ background: '#0a0d14' }}>
                <h4 className="text-white mb-3" style={{ fontSize: '20px' }}>Performance Bottlenecks</h4>
                <p className="text-secondary mb-0" style={{ fontSize: '15px' }}>The platform needed to handle high traffic and dynamic content without compromising on SEO or page load speeds.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Architecture */}
        <h2 className="details-content-title mb-20 text-white">Our Solution & Key Features</h2>

        <ul className="service-outcome-list project-requerment list-unstyled mt-35 mb-80">
          <li className="mb-4 align-items-start d-flex">
            <span className="me-3 mt-1"><CheckIcon /></span>
            <div>
              <strong className="text-white d-block mb-1" style={{ fontSize: '18px' }}>1. AI-Powered Conversational Commerce (Smart AI Agent)</strong>
              <span className="text-light d-block mb-2">We implemented a semantic-search-driven AI Customer Support Assistant using <strong>Google Gemini 3.1 Flash-Lite</strong> and <strong>Supabase Vector Database</strong>.</span>
              <ul className="text-secondary" style={{ fontSize: '15px' }}>
                <li><strong>Context-Aware Recommendations:</strong> The AI understands natural language queries (in English, Sinhala, and Singlish), scans the database, and recommends exact products with their features and prices.</li>
                <li><strong>Direct Conversion:</strong> The agent generates direct, clickable purchase links for the recommended products, significantly reducing the path-to-purchase.</li>
                <li><strong>Strict Data Security:</strong> Built-in confidentiality guardrails ensure the AI only reveals public selling prices, keeping profit margins and supplier data strictly hidden.</li>
              </ul>
            </div>
          </li>
          <li className="mb-4 align-items-start d-flex">
            <span className="me-3 mt-1"><CheckIcon /></span>
            <div>
              <strong className="text-white d-block mb-1" style={{ fontSize: '18px' }}>2. Automated Data Ingestion & Syncing</strong>
              <span className="text-light">Using <strong>n8n orchestration</strong>, we built an automated pipeline that continuously syncs product data, generates vector embeddings via Gemini, and updates the Supabase Vector Store. This ensures the AI always has real-time inventory and pricing data without manual data entry.</span>
            </div>
          </li>
          <li className="mb-4 align-items-start d-flex">
            <span className="me-3 mt-1"><CheckIcon /></span>
            <div>
              <strong className="text-white d-block mb-1" style={{ fontSize: '18px' }}>3. Comprehensive Admin & Financial Dashboard</strong>
              <span className="text-light d-block mb-2">We built a secure, glassmorphism-styled dashboard tailored for executives and store managers:</span>
              <ul className="text-secondary" style={{ fontSize: '15px' }}>
                <li><strong>Live KPI Tracking:</strong> Real-time monitoring of Total Revenue, Order Counts, and Average Order Value (AOV).</li>
                <li><strong>Visual Analytics:</strong> Custom interactive SVG charts mapping 30-day sales trends and category share distributions.</li>
                <li><strong>Order Management System:</strong> A centralized hub to instantly update fulfillment states (Processing, Shipped, Delivered) and payment statuses, directly synced to the PostgreSQL backend.</li>
              </ul>
            </div>
          </li>
          <li className="mb-4 align-items-start d-flex">
            <span className="me-3 mt-1"><CheckIcon /></span>
            <div>
              <strong className="text-white d-block mb-1" style={{ fontSize: '18px' }}>4. High-Performance Architecture</strong>
              <span className="text-light">By leveraging <strong>Next.js</strong> deployed on <strong>Vercel</strong>, the application utilizes Server-Side Rendering (SSR) for the admin dashboard (ensuring up-to-the-second data) and Incremental Static Regeneration (ISR) for product pages (guaranteeing instant load times and superior SEO rankings).</span>
            </div>
          </li>
        </ul>

        {/* ROI */}
        <div className="p-5 rounded" style={{ background: 'linear-gradient(135deg, rgba(0, 255, 151, 0.1) 0%, rgba(0, 0, 0, 0) 100%)', border: '1px solid rgba(0, 255, 151, 0.2)' }}>
          <h2 className="details-content-title mb-30 text-white"><span style={{ color: '#00FF97' }}>Business Impact & ROI (Why it matters for CEOs)</span></h2>
          
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <h3 className="h5 fw-bold text-white mb-2">Increased Conversion Rates</h3>
              <p className="text-secondary">The AI assistant acts as a 24/7 digital salesperson, instantly matching customer needs with products and providing immediate checkout links.</p>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <h3 className="h5 fw-bold text-white mb-2">Data-Driven Decision Making</h3>
              <p className="text-secondary">The new financial dashboard eliminates guesswork, allowing the CEO to spot sales trends and top-performing products instantly.</p>
            </div>
            <div className="col-md-4">
              <h3 className="h5 fw-bold text-white mb-2">Enterprise-Grade Scalability</h3>
              <p className="text-secondary">Built on Next.js and Supabase, the infrastructure is completely serverless. It costs practically nothing during low traffic but scales infinitely during massive seasonal sales.</p>
            </div>
          </div>
        </div>

        <div className="mt-5 text-center p-4 border border-secondary rounded" style={{ background: '#0a0d14' }}>
            <p className="mb-0 text-light"><strong>PixelWave's Role:</strong> From conceptualizing the database architecture to deploying advanced Large Language Models (LLMs) into a production environment, PixelWave delivered a complete digital transformation that sets Maxwell Lanka apart from its competitors.</p>
        </div>

      </div>
    </section>
  );
}

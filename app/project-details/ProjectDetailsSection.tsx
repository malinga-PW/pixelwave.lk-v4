import React from "react";
import Image from "next/image";

// ---- image imports ----
import img07 from "@/public/images/project/cupzo-banner.png";

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
export default function ProjectDetailsSection() {
  const projectMeta = [
    { icon: icon4, label: "client :", value: "Cupzo Tea" },
    { icon: icon5, label: "industry :", value: "B2B Enterprise Tea Export" },
    { icon: icon6, label: "location :", value: "Sri Lanka / Global" },
    { icon: icon7, label: "focus :", value: "AI Automation & Portals" },
  ];

  return (
    <section className="project-details pb-90 pt-50">
      <div className="container">
        
        {/* Title Block */}
        <div className="mb-50 text-center">
          <span className="sub-title d-block mb-10 text-primary" style={{letterSpacing: '2px', textTransform: 'uppercase', fontSize: '14px', fontWeight: 600}}>Case Study</span>
          <h1 className="title" style={{ fontSize: '48px', lineHeight: 1.2 }}>Cupzo Tea B2B Portal & <br /> <span style={{ color: '#00FF97' }}>AI-Driven Lead Automation</span></h1>
        </div>

        {/* image */}
        <div className="single-item-image mb-75 rounded overflow-hidden shadow-lg border border-secondary">
          <Image
            src={img07}
            alt="Cupzo Tea AI solutions project overview"
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

        {/* Project Overview */}
        <h2 className="details-content-title mb-20 text-white">Project Overview</h2>
        <p className="mb-30 text-light" style={{ fontSize: '18px', lineHeight: 1.8 }}>
          Cupzo Tea is a premium Ceylon Tea exporter targeting large-scale international enterprise buyers. PixelWave transformed their traditional B2B inquiry process into a hyper-automated, AI-powered lead generation and management ecosystem. By combining a high-performance Next.js frontend with an advanced "Human-in-the-Loop" (HITL) automation backend, we eliminated manual data entry and drastically accelerated sales response times.
        </p>

        <ul className="list-unstyled mb-60 ps-3 border-start border-primary border-3">
          <li className="mb-2"><strong className="text-white">Client Focus:</strong> B2B Enterprise Tea Export & Private Labeling (OEM)</li>
          <li><strong className="text-white">Core Technologies:</strong> Next.js, Tailwind CSS, n8n Enterprise Workflow Automation, OpenAI (GPT models), Supabase (Secure Cloud Database)</li>
        </ul>

        {/* Business Challenge */}
        <div className="mt-80 mb-80 p-5 rounded" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <h2 className="details-content-title mb-20 text-white">The Business Challenge</h2>
          <p className="mb-30 text-light">
            In the global B2B commodity export market, the first supplier to respond intelligently to a buyer's request usually wins the contract. Cupzo Tea faced three major operational bottlenecks:
          </p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="p-4 h-100 rounded border border-secondary" style={{ background: '#0a0d14' }}>
                <h4 className="text-white mb-3" style={{ fontSize: '20px' }}>1. Unstructured Buyer Data</h4>
                <p className="text-secondary mb-0" style={{ fontSize: '15px' }}>International buyers leave long, complex text requirements (specific packaging types, container volumes) that take hours for sales teams to read and parse.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 h-100 rounded border border-secondary" style={{ background: '#0a0d14' }}>
                <h4 className="text-white mb-3" style={{ fontSize: '20px' }}>2. Delayed Response Times</h4>
                <p className="text-secondary mb-0" style={{ fontSize: '15px' }}>High-value leads from different time zones sat in queues before being manually qualified by managers, risking lost opportunities.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 h-100 rounded border border-secondary" style={{ background: '#0a0d14' }}>
                <h4 className="text-white mb-3" style={{ fontSize: '20px' }}>3. Data Fragmentation</h4>
                <p className="text-secondary mb-0" style={{ fontSize: '15px' }}>Crucial raw customer notes were often summarized too early, losing key context and causing miscommunication during production.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Architecture */}
        <h2 className="details-content-title mb-20 text-white">The PixelWave Solution Architecture</h2>
        <p className="mb-40 text-light">
          We built a closed-loop system where premium frontend design meets autonomous backend execution:
        </p>

        <ul className="service-outcome-list project-requerment list-unstyled mt-35 mb-80">
          <li className="mb-4 align-items-start d-flex">
            <span className="me-3 mt-1"><CheckIcon /></span>
            <div>
              <strong className="text-white d-block mb-1" style={{ fontSize: '18px' }}>High-Conversion B2B Frontend (Next.js)</strong>
              <span className="text-light">A modern, luxury-tier international web application optimized for enterprise decision-makers. It features specialized product catalogs with subtle AI micro-interactions that trigger Contextual Help desks to maximize trade inquiries.</span>
            </div>
          </li>
          <li className="mb-4 align-items-start d-flex">
            <span className="me-3 mt-1"><CheckIcon /></span>
            <div>
              <strong className="text-white d-block mb-1" style={{ fontSize: '18px' }}>Autonomous Lead Qualification (OpenAI & n8n)</strong>
              <span className="text-light">When a buyer submits an inquiry, an n8n workflow immediately hands the payload to an isolated AI engine (Zara.AI). The AI autonomously analyzes the unstructured data, ranks the lead's commercial priority, and extracts a structured business summary within milliseconds.</span>
            </div>
          </li>
          <li className="mb-4 align-items-start d-flex">
            <span className="me-3 mt-1"><CheckIcon /></span>
            <div>
              <strong className="text-white d-block mb-1" style={{ fontSize: '18px' }}>"Human-in-the-Loop" Telegram Command Center</strong>
              <span className="text-light">The manager receives a beautifully formatted notification instantly on their mobile phone containing the AI's smart summary. With a single tap (Approve / Done), the system executes backend updates. The interactive buttons gracefully self-update into an inactive state (✅ Approved), ensuring an organized chronological stream of qualified leads.</span>
            </div>
          </li>
          <li className="mb-4 align-items-start d-flex">
            <span className="me-3 mt-1"><CheckIcon /></span>
            <div>
              <strong className="text-white d-block mb-1" style={{ fontSize: '18px' }}>Zero Data Loss Relational Storage (Supabase)</strong>
              <span className="text-light">To guarantee compliance, the approved pipeline logs both the pristine, untouched original human inputs alongside the AI-generated operational summaries, secured under enterprise-grade Service-Role architecture.</span>
            </div>
          </li>
        </ul>

        {/* ROI */}
        <div className="p-5 rounded" style={{ background: 'linear-gradient(135deg, rgba(0, 255, 151, 0.1) 0%, rgba(0, 0, 0, 0) 100%)', border: '1px solid rgba(0, 255, 151, 0.2)' }}>
          <h2 className="details-content-title mb-30 text-white"><span style={{ color: '#00FF97' }}>Tangible Business Results & ROI</span></h2>
          
          <div className="row text-center">
            <div className="col-md-3 mb-4 mb-md-0">
              <h3 className="display-4 fw-bold text-white mb-2">85%</h3>
              <p className="text-secondary fw-semibold">Reduction in Lead Processing Time (Under 3s)</p>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <h3 className="display-4 fw-bold text-white mb-2">0%</h3>
              <p className="text-secondary fw-semibold">Lead Leakage or Data Loss</p>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <h3 className="display-4 fw-bold text-white mb-2">100+</h3>
              <p className="text-secondary fw-semibold">Global Container Inquiries Scalability</p>
            </div>
            <div className="col-md-3">
              <h3 className="display-4 fw-bold text-white mb-2">24/7</h3>
              <p className="text-secondary fw-semibold">Frictionless Executive Mobile Control</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

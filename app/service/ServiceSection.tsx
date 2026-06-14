import Image from "next/image";
import Link from "next/link";

// Background image
import serviceBg from "@/public/images/bg/service-gradient-bg.png";

// Service images
import premiumImg from "@/public/images/service/premium_websites.png";
import ecommerceImg from "@/public/images/service/ecommerce_service.png";
import aiAutoImg from "@/public/images/service/ai_automation.png";
import n8nImg from "@/public/images/service/n8n_development.png";
import saasImg from "@/public/images/service/saas_development.png";
import brandingImg from "@/public/images/service/branding_design.png";

export default function ServiceSection() {
  // Arrow icon
  const ArrowIcon = () => (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6.29" y="21.411" width="22.36" height="2.839" transform="rotate(-40.2798 6.29 21.411)" fill="white" />
      <rect x="9.448" y="7.57" width="2.839" height="2.839" transform="rotate(-40.2798 9.448 7.57)" fill="white" />
      <rect x="13.449" y="7.9" width="2.839" height="2.839" transform="rotate(-40.2798 13.449 7.9)" fill="white" />
      <rect x="17.451" y="8.23" width="2.839" height="2.839" transform="rotate(-40.2798 17.451 8.23)" fill="white" />
      <rect x="21.123" y="12.562" width="2.839" height="2.839" transform="rotate(-40.2798 21.123 12.562)" fill="white" />
      <rect x="20.793" y="16.564" width="2.839" height="2.839" transform="rotate(-40.2798 20.793 16.564)" fill="white" />
      <rect x="20.461" y="20.566" width="2.839" height="2.839" transform="rotate(-40.2798 20.461 20.566)" fill="white" />
    </svg>
  );

  // Services data
  const services = [
    {
      title: "Premium Websites",
      content:
        "Fast, secure, and SEO-optimized web development using modern frameworks like Next.js.",
      images: [premiumImg, premiumImg, premiumImg, premiumImg],
      link: "/service/premium-websites",
    },
    {
      title: "E-Commerce Solutions",
      content:
        "High-converting online stores with payment gateway integrations and automated WhatsApp order processing.",
      images: [ecommerceImg, ecommerceImg, ecommerceImg, ecommerceImg],
      link: "/service/e-commerce-solutions",
    },
    {
      title: "AI Automation",
      content:
        "Intelligent chatbots, customer support bots, and WhatsApp automation to scale your operations 24/7.",
      images: [aiAutoImg, aiAutoImg, aiAutoImg, aiAutoImg],
      link: "/service/ai-automation",
    },
    {
      title: "n8n Development",
      content:
        "Custom workflow designs, API integrations, and system synchronizations to eliminate manual repetitive work.",
      images: [n8nImg, n8nImg, n8nImg, n8nImg],
      link: "/service/n8n-development",
    },
    {
      title: "SaaS Development",
      content:
        "Custom cloud software, inventory systems, CRM, and ERP dashboards built on robust and scalable tech stacks.",
      images: [saasImg, saasImg, saasImg, saasImg],
      link: "/service/saas-development",
    },
    {
      title: "Branding & Design",
      content:
        "Premium brand identity, UI/UX design, labels, packaging, and digital marketing materials that convert.",
      images: [brandingImg, brandingImg, brandingImg, brandingImg],
      link: "/service/branding-design",
    },
  ];

  return (
    <section
      className="service pos-rel bg_img"
      style={{ backgroundImage: `url(${serviceBg.src})` }}
    >
      <div className="container">
        <div className="row mt-none-30">
          {services.map((service, index) => (
            <div className="col-lg-6 mt-30" key={index}>
              <div className="xb-ser-item xb-border img-hove-effect">
                <div className="xb-item--inner">
                  <h3 className="xb-item--title border-effect">
                    <Link href={service.link}>{service.title}</Link>
                  </h3>

                  <Link className="xb-item--icon" href={service.link}>
                    <ArrowIcon />
                  </Link>

                  <p className="xb-item--content">{service.content}</p>

                  <div className="xb-item--img xb-img">
                    {service.images.map((img, i) => (
                      <Link key={i} href={service.link}>
                        <Image
                          src={img}
                          alt={`${service.title} service`}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

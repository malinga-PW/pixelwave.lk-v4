import Link from "next/link";
import Image from "next/image";

// IMPORT IMAGES
import premiumImg from "@/public/images/service/premium_websites.png";
import ecommerceImg from "@/public/images/service/ecommerce_service.png";
import aiAutoImg from "@/public/images/service/ai_automation.png";
import n8nImg from "@/public/images/service/n8n_development.png";
import saasImg from "@/public/images/service/saas_development.png";

// Arrow Icon
const ArrowIcon = () => (
  <>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <rect x="5.23" y="17.32" width="17.88" height="2.27" transform="rotate(-40.28 5.23 17.32)" fill="white" />
      <rect x="7.75" y="6.25" width="2.27" height="2.27" transform="rotate(-40.28 7.75 6.25)" fill="white" />
      <rect x="10.95" y="6.52" width="2.27" height="2.27" transform="rotate(-40.28 10.95 6.52)" fill="white" />
      <rect x="14.16" y="6.78" width="2.27" height="2.27" transform="rotate(-40.28 14.16 6.78)" fill="white" />
      <rect x="17.09" y="10.25" width="2.27" height="2.27" transform="rotate(-40.28 17.09 10.25)" fill="white" />
      <rect x="16.83" y="13.45" width="2.27" height="2.27" transform="rotate(-40.28 16.83 13.45)" fill="white" />
      <rect x="16.56" y="16.65" width="2.27" height="2.27" transform="rotate(-40.28 16.56 16.65)" fill="white" />
    </svg>

    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <rect x="5.23" y="17.32" width="17.88" height="2.27" transform="rotate(-40.28 5.23 17.32)" fill="white" />
      <rect x="7.75" y="6.25" width="2.27" height="2.27" transform="rotate(-40.28 7.75 6.25)" fill="white" />
      <rect x="10.95" y="6.52" width="2.27" height="2.27" transform="rotate(-40.28 10.95 6.52)" fill="white" />
      <rect x="14.16" y="6.78" width="2.27" height="2.27" transform="rotate(-40.28 14.16 6.78)" fill="white" />
      <rect x="17.09" y="10.25" width="2.27" height="2.27" transform="rotate(-40.28 17.09 10.25)" fill="white" />
      <rect x="16.83" y="13.45" width="2.27" height="2.27" transform="rotate(-40.28 16.83 13.45)" fill="white" />
      <rect x="16.56" y="16.65" width="2.27" height="2.27" transform="rotate(-40.28 16.56 16.65)" fill="white" />
    </svg>
  </>
);

// PROJECT DATA
const projectData = [
  {
    title: "Enterprise E-Commerce Platform",
    content:
      "We engineered a high-converting, fully custom Next.js e-commerce storefront. The platform features dynamic AI-driven pricing, automated inventory management, and a seamless checkout experience that increased our client's online revenue by 45% in the first quarter.",
    images: [ecommerceImg, ecommerceImg, ecommerceImg, ecommerceImg],
    reverse: false,
    link: "/service/e-commerce-solutions",
  },
  {
    title: "Automated WhatsApp Support AI",
    content:
      "To handle overwhelming customer inquiries, we deployed an intelligent WhatsApp chatbot trained on the client's knowledge base. It now successfully resolves 82% of routine queries autonomously 24/7, freeing up human agents for high-value tasks.",
    images: [aiAutoImg, aiAutoImg, aiAutoImg, aiAutoImg],
    reverse: true,
    link: "/service/ai-automation",
  },
  {
    title: "Global Supply Chain SaaS",
    content:
      "We built a robust, cloud-based B2B SaaS dashboard tailored for global logistics tracking. Featuring real-time data visualization, predictive delay modeling, and multi-tenant user architecture for over 1,000 active enterprise users.",
    images: [saasImg, saasImg, saasImg, saasImg],
    reverse: false,
    link: "/service/saas-development",
  },
  {
    title: "n8n Data Pipeline Integration",
    content:
      "A complete operational overhaul for a fast-growing startup. We used n8n to synchronize data across Salesforce, Mailchimp, and internal databases, eliminating manual data entry and reducing operational overhead by 120 hours per month.",
    images: [n8nImg, n8nImg, n8nImg, n8nImg],
    reverse: true,
    link: "/service/n8n-development",
  },
  {
    title: "Premium Corporate Web Experience",
    content:
      "A complete digital transformation for a leading financial firm. We delivered a sleek, lightning-fast Next.js corporate website with glowing glassmorphism aesthetics, advanced SEO architecture, and a modern headless CMS.",
    images: [premiumImg, premiumImg, premiumImg, premiumImg],
    reverse: false,
    link: "/service/premium-websites",
  },
];

export default function ProjectSection() {
  return (
    <section className="service pos-rel">
      <div className="container mxw-1650">
        <div className="xb-project-wrap xb-project-wrap_2">

          {projectData.map((item, index) => (
            <div className="xb-project-item" key={index}>

              {!item.reverse ? (
                <>
                  <div className="xb-project-content">
                    <div className="xb-item--inner xb-border">
                      <h2 className="xb-item--title">{item.title}</h2>
                      <p className="xb-item--content clr-white">{item.content}</p>

                      <div className="xb-item--btn mt-40">
                        <Link className="thm-btn agency-btn" href={item.link}>
                          <span className="text">read more</span>
                          <span className="arrow">
                            <span className="arrow-icon"><ArrowIcon /></span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="xb-project-img img-hove-effect">
                    <div className="xb-img">
                      {item.images.map((img, i) => (
                        <Link href={item.link} key={i}>
                          <Image
                            src={img}
                            alt={item.title}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="xb-project-img img-hove-effect">
                    <div className="xb-img">
                      {item.images.map((img, i) => (
                        <Link href={item.link} key={i}>
                          <Image
                            src={img}
                            alt={item.title}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="xb-project-content">
                    <div className="xb-item--inner xb-border">
                      <h2 className="xb-item--title">{item.title}</h2>
                      <p className="xb-item--content clr-white">{item.content}</p>

                      <div className="xb-item--btn mt-40">
                        <Link className="thm-btn agency-btn" href={item.link}>
                          <span className="text">read more</span>
                          <span className="arrow">
                            <span className="arrow-icon"><ArrowIcon /></span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

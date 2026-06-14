import Image from "next/image";
import Link from "next/link";

// Background image
import serviceBg from "@/public/images/bg/service-gradient-bg.png";

// Reusing some service images for solutions as placeholders
import img07 from "@/public/images/service/img07.jpg";
import img08 from "@/public/images/service/img08.jpg";
import img09 from "@/public/images/service/img09.jpg";
import img11 from "@/public/images/service/img11.jpg";

export default function SolutionsSection() {
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

  // Solutions data
  const solutions = [
    {
      title: "Corporate & Enterprise",
      content:
        "Scale your operations with custom ERPs, internal communication bots, and data intelligence dashboards.",
      images: [img08, img08, img08, img08],
      link: "/contact",
    },
    {
      title: "Retail & E-Commerce",
      content:
        "Boost sales with dynamic pricing, personalized product recommendations, and WhatsApp order automation.",
      images: [img09, img09, img09, img09],
      link: "/contact",
    },
    {
      title: "Healthcare",
      content:
        "Improve patient care with automated appointment scheduling, telemedicine portals, and secure patient data management.",
      images: [img11, img11, img11, img11],
      link: "/contact",
    },
    {
      title: "Real Estate",
      content:
        "Generate leads efficiently with virtual property tours, automated inquiry handling, and CRM integrations.",
      images: [img07, img07, img07, img07],
      link: "/contact",
    },
    {
      title: "Education",
      content:
        "Enhance learning with custom LMS platforms, student portals, and AI-driven automated grading and support systems.",
      images: [img11, img11, img11, img11],
      link: "/contact",
    },
    {
      title: "Startups & Agencies",
      content:
        "Launch faster with robust MVPs, scalable SaaS architectures, and complete digital branding packages.",
      images: [img07, img07, img07, img07],
      link: "/contact",
    },
  ];

  return (
    <section
      className="service pos-rel bg_img"
      style={{ backgroundImage: `url(${serviceBg.src})` }}
    >
      <div className="container">
        <div className="row mt-none-30">
          {solutions.map((solution, index) => (
            <div className="col-lg-6 mt-30" key={index}>
              <div className="xb-ser-item xb-border img-hove-effect">
                <div className="xb-item--inner">
                  <h3 className="xb-item--title border-effect">
                    <Link href={solution.link}>{solution.title}</Link>
                  </h3>

                  <Link className="xb-item--icon" href={solution.link}>
                    <ArrowIcon />
                  </Link>

                  <p className="xb-item--content">{solution.content}</p>

                  <div className="xb-item--img xb-img">
                    {solution.images.map((img, i) => (
                      <Link key={i} href={solution.link}>
                        <Image
                          src={img}
                          alt={`${solution.title} solution`}
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

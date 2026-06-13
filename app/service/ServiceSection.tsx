import Image from "next/image";
import Link from "next/link";

// Background image
import serviceBg from "@/public/images/bg/service-gradient-bg.png";

// Service images
import img07 from "@/public/images/service/img07.jpg";
import img08 from "@/public/images/service/img08.jpg";
import img09 from "@/public/images/service/img09.jpg";
import img11 from "@/public/images/service/img11.jpg";

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
      title: "AI saas product",
      content:
        "We build scalable AI-powered SaaS solutions that automate tasks, deliver insights, and boost business performance.",
      images: [img07, img07, img07, img07],
      link: "/service-details",
    },
    {
      title: "Data and intelligence..",
      content:
        "We turn complex data into clear, actionable insights using AI and advanced analytics—empowering smarter decisions.",
      images: [img08, img08, img08, img08],
      link: "/service-details",
    },
    {
      title: "AI for E-commerce",
      content:
        "We enhance e-commerce with AI-powered, dynamic pricing, and personalized customer experiences.",
      images: [img09, img09, img09, img09],
      link: "/service-details",
    },
    {
      title: "AI consulting",
      content:
        "We guide businesses in adopting AI strategies, optimizing processes, and integrating technologies for lasting success.",
      images: [img11, img11, img11, img11],
      link: "/service-details",
    },
    {
      title: "AI chatbot virtual",
      content:
        "We create intelligent chatbots and virtual assistants that improve customer support and automate interactions 24/7.",
      images: [img11, img11, img11, img11],
      link: "/service-details",
    },
    {
      title: "AI - marketing",
      content:
        "Use AI to target audiences, personalize campaigns, and analyze data for better engagement and results.",
      images: [img07, img07, img07, img07],
      link: "/service-details",
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

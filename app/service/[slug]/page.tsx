import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import ServiceDetails from "./ServiceDetails";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import { servicesData } from "@/data/servicesData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData];
  if (!service) {
    return {
      title: "Service Not Found | PixelWave AI Solutions",
    };
  }

  return {
    title: `${service.title} | PixelWave AI Solutions`,
    description: service.description,
  };
}

export default function ServiceSinglePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <div className="about-page inner-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle pageTitle={service.title} pagesub={service.title} />
          <ServiceDetails service={service} />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}

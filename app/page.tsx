import Header from "@/components/Header/Header";
import HeroSection from "@/components/hero/Hero";
import AboutSection from "@/components/about/about";
import ServiceSection from "@/components/ServiceSection/ServiceSection";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import IndustriesMarqueeSection from "@/components/IndustriesMarqueeSection/IndustriesMarqueeSection";
import IndustriesSection from "@/components/Industries/Industries";
import ContactSection from "@/components/ContactSection/ContactSection";
import TestimonialSection from "@/components/Testimonial/Testimonial";
import BlogSection from "@/components/BlogSection/BlogSection";
import Footer from "@/components/footer/Footer";
import Scrollbar from "@/components/scrollbar/scrollbar";

export const metadata = {
  title: "Home | AI Agency & Technology Next.js Template",
  description:
    "A modern AI Agency & Technology landing page built with Next.js App Router.",
};

export default function HomePage() {
  return (
    <>
      <div className="ai-agency">
        <div className="body_wrap o-clip">
          <Header />

          <main>
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <FeatureSection />
            <ProjectSection />
            <IndustriesMarqueeSection />
            <IndustriesSection />
            <ContactSection />
            <TestimonialSection />
            <BlogSection />
          </main>

          <Footer />
          <Scrollbar />
        </div>
      </div>
    </>
  );
}

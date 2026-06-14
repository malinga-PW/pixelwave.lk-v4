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
import PricingSection from "@/components/ai-chatbot-components/PricingSection/PricingSection";
import FAQSection from "@/components/ai-chatbot-components/FAQSection/FAQSection";
import BlogSection from "@/components/BlogSection/BlogSection";
import Footer from "@/components/footer/Footer";
import Scrollbar from "@/components/scrollbar/scrollbar";

export const metadata = {
  title: "PixelWave AI Solutions | Intelligent Automation & Growth",
  description:
    "End-to-end business solutions, including AI Automation, Website Development, n8n Systems, SaaS, and Digital Transformation.",
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
            <PricingSection />
            <FAQSection />
            <BlogSection />
          </main>

          <Footer />
          <Scrollbar />
        </div>
      </div>
    </>
  );
}

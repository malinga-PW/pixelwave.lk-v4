import { Fragment } from "react";
import HeaderThree from "@/components/HeaderThree/HeaderThree";
import HeroSection from "@/components/ai-chatbot-components/hero/Hero";
import VideoSection from "@/components/ai-chatbot-components/VideoSection/VideoSection";
import FeatureSection from "@/components/ai-chatbot-components/FeatureSection/FeatureSection";
import ProcessSection from "@/components/ai-chatbot-components/ProcessSection/ProcessSection";
import TestimonialSection from "@/components/ai-chatbot-components/TestimonialSection/TestimonialSection";
import IntegrationSection from "@/components/ai-chatbot-components/IntegrationSection/IntegrationSection";
import PricingSection from "@/components/ai-chatbot-components/PricingSection/PricingSection";
import FAQSection from "@/components/ai-chatbot-components/FAQSection/FAQSection";
import CTASection from "@/components/ai-chatbot-components/CTASection/CTASection";
import Footer from "@/components/ai-chatbot-components/Footer/Footer";
import Scrollbar from "@/components/scrollbar/scrollbar";

export const metadata = {
  title: "AI Chatbot – Aivora – AI Agency & Technology",
  description: "AI chatbot landing page built with Next.js.",
};

const HomePage3 = () => {
  return (
    <Fragment>
      <div className="ai-agency">
        <div className="body_wrap o-clip">
          <HeaderThree />

          <main>
            <HeroSection />
            <VideoSection />
            <FeatureSection />
            <ProcessSection />
            <TestimonialSection />
            <IntegrationSection />
            <PricingSection />
            <FAQSection />
            <CTASection />
          </main>

          <Footer />
          <Scrollbar />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage3;

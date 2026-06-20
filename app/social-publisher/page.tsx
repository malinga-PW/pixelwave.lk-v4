import React from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/footer/Footer";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import SocialPublisher from "@/components/SocialPublisher/SocialPublisher";

export const metadata = {
  title: "Social Media Publisher | PixelWave AI Solutions",
  description: "Automate, Research, Generate, and Schedule Social Media Posts.",
};

export default function SocialPublisherPage() {
  return (
    <>
      <div className="ai-agency">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PageTitle pageTitle="Social Publisher" pagesub="AI Automation" />
            <SocialPublisher />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </>
  );
}

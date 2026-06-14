import React from "react";
import ClientWrapper from "@/components/ClientWrapper/ClientWrapper";
import HeaderClient from "@/components/Header/HeaderClient";
import PageTitle from "@/components/pagetitle/PageTitle";
import Footer from "@/components/footer/Footer";
import ResourcesSection from "@/components/Resources/ResourcesSection";

export const metadata = {
  title: "Resources | PixelWave AI Solutions",
  description: "Download premium E-Books, Whitepapers, and Case Studies on AI, SaaS, and E-Commerce Automation from PixelWave AI Solutions.",
};

export default function ResourcesPage() {
  return (
    <ClientWrapper>
      <HeaderClient />
      
      <main className="page_content">
        <PageTitle pageTitle="Premium Resources" pagesub="Resources" />
        <ResourcesSection />
      </main>

      <Footer />
    </ClientWrapper>
  );
}

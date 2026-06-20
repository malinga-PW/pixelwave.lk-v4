import React from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/footer/Footer";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import AdminDashboard from "@/components/AdminDashboard/AdminDashboard";

export const metadata = {
  title: "Admin Access | PixelWave AI Solutions",
  description: "Secure administrative access for PixelWave.",
};

export default function AdminPage() {
  return (
    <>
      <div className="ai-agency">
        <div className="body_wrap o-clip">
          <Header />
          <main>
            <PageTitle pageTitle="Admin Portal" pagesub="Restricted Access" />
            <AdminDashboard />
          </main>
          <Footer />
          <Scrollbar />
        </div>
      </div>
    </>
  );
}

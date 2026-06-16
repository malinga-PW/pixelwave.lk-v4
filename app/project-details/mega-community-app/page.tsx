import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import MegaAppCaseStudy from "../MegaAppCaseStudy";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "All-In-One Mega App | Ongoing Project | PixelWave AI Solutions",
  description: "Explore the ongoing development of the ultimate AI-powered Mega Community App by PixelWave.",
};

export default function MegaAppProject() {
  return (
    <div className="service-page inner-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle 
            pageTitle="Ongoing Project" 
            pagesub="Mega Community App" 
          />
          <MegaAppCaseStudy />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}

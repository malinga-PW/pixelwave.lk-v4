import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import CupzoTeaCaseStudy from "../CupzoTeaCaseStudy";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Cupzo Tea Case Study | PixelWave AI Solutions",
  description: "Explore the Cupzo Tea B2B Portal & AI Lead Automation case study.",
};

export default function CupzoTeaProject() {
  return (
    <div className="service-page inner-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle 
            pageTitle="Project Details" 
            pagesub="Cupzo Tea" 
          />
          <CupzoTeaCaseStudy />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}

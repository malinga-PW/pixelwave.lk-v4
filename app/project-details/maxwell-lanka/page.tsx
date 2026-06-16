import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import MaxwellLankaCaseStudy from "../MaxwellLankaCaseStudy";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Maxwell Lanka Case Study | PixelWave AI Solutions",
  description: "Explore the Maxwell Lanka Next-Gen E-Commerce & AI Integration case study.",
};

export default function MaxwellLankaProject() {
  return (
    <div className="service-page inner-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle 
            pageTitle="Project Details" 
            pagesub="Maxwell Lanka" 
          />
          <MaxwellLankaCaseStudy />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}

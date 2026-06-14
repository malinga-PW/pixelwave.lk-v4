import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import SolutionsSection from "./SolutionsSection";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Industry Solutions | PixelWave AI Solutions",
  description:
    "Discover PixelWave's custom AI and SaaS solutions tailored for Corporate, Retail, Healthcare, Real Estate, and Startups.",
};

export default function SolutionsPage() {
  return (
    <div className="about-page inner-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle pageTitle="Industry Solutions" pagesub="Solutions" />
          <SolutionsSection />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}

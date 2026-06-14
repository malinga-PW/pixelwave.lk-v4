import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import AboutSection from "@/components/AboutComponents/AboutSection/AboutSection";
import BrandSection from "@/components/AboutComponents/BrandSection/BrandSection";
import FeatureSection from "@/components/AboutComponents/FeatureSection/FeatureSection";
import TeamSection from "@/components/AboutComponents/TeamSection/TeamSection";
import AwardSection from "@/components/AboutComponents/AwardSection/AwardSection";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "About Us | PixelWave AI Solutions",
  description:
    "Learn more about PixelWave AI Solutions – our mission, team, and the AI-powered digital solutions we provide.",
};

export default function AboutPage() {
  return (
    <div className="about-page inner-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle pageTitle="About Us" pagesub="About Us" />
          <AboutSection />
          <BrandSection />
          <FeatureSection />
          <TeamSection />
          <AwardSection />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}

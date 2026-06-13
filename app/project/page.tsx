import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import ProjectSection from "./ProjectSection";

export const metadata = {
  title: "Our Projects | Aivora – AI Agency & Technology",
  description:
    "Explore Aivora's featured AI, automation, and machine learning projects showcasing innovation and real business impact.",
};

export default function ProjectPage() {
  return (
    <div className="service-page inner-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle pageTitle="Our Projects" pagesub="Our Projects" />
          <ProjectSection />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}

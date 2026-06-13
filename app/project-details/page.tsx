import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import ProjectDetailsSection from "./ProjectDetailsSection";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Project Details | Aivora – AI Agency & Technology",
  description:
    "Explore detailed information about our AI, automation, and technology-driven projects designed to accelerate business growth.",
};

export default function ProjectDetails() {
  return (
    <div className="service-page inner-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle 
            pageTitle="Project Details" 
            pagesub="Project Details" 
          />
          <ProjectDetailsSection />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}

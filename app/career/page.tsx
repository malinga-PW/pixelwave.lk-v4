import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import GallerySection from "./GallerySection";
import HiringProcess from "./HiringProcess";
import JobSection from "./JobSection";
import VideoSection from "./VideoSection";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Careers | Aivora – Join Our AI & Technology Team",
  description:
    "Explore open positions, learn about our hiring process, and discover what it's like to work at Aivora.",
};

export default function CareerPage() {
  return (
    <div className="about-page inner-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle pageTitle="Careers" pagesub="Careers" />
          <GallerySection />
          <HiringProcess />
          <JobSection />
          <VideoSection />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}

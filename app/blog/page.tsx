import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import BlogList from "@/components/BlogList/BlogList";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Blog | PixelWave AI Solutions",
  description:
    "Stay updated with the latest news, insights, and trends in AI technology from PixelWave AI Solutions.",
};

export default function BlogPage() {
  return (
    <div className="about-page inner-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle pageTitle="Blog" pagesub="Blog" />
          <BlogList />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}

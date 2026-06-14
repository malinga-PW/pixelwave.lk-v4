import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import BlogDetailsSection from "@/components/BlogDetails/BlogSingle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Blog Details | PixelWave AI Solutions",
  description:
    "Read in-depth articles and insights on AI, machine learning, and automation from the experts at PixelWave AI Solutions.",
};

export default function BlogDetailsPage() {
  return (
    <div className="about-page inner-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle pageTitle="Blog Details" pagesub="Blog Details" />
          <BlogDetailsSection />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}

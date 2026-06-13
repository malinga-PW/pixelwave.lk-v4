import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import BlogDetailsSection from "@/components/BlogDetails/BlogSingle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Blog Details | Aivora – AI Agency & Technology",
  description:
    "Read detailed insights and articles on AI technology, automation, and digital transformation.",
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

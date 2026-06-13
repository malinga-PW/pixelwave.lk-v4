import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import BlogList from "@/components/BlogList/BlogList";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Blog | Aivora – AI Agency & Technology",
  description:
    "Explore articles, news, and insights on AI, automation, machine learning, and business technology.",
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

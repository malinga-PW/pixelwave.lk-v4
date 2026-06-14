import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import BlogDetailsSection from "@/components/BlogDetails/BlogSingle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import { blogData } from "@/data/blogData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogData[slug];
  
  if (!blog) {
    return {
      title: "Blog Not Found | PixelWave AI Solutions",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${blog.title} | PixelWave Blog`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogData[slug];

  if (!blog) {
    notFound();
  }

  return (
    <div className="about-page inner-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle pageTitle="Blog Details" pagesub={blog.title} />
          <BlogDetailsSection blog={blog} />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}

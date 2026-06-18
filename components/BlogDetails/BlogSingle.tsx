
// ICONS
import Image from "next/image";
import Link from "next/link";
import RelatedBlog from "./RelatedBlog";
import ItemDetailsContent from "./ItemDetailsContent";
import CommentsArea from "./CommentsArea";
import CommentForm from "./CommentForm";
import NewsletterBox from "./NewsletterBox";
import BlogSidebar from "../BlogSidebar/BlogSidebar";

// IMAGE IMPORTS
import { BlogPost } from "@/data/blogData";

export default function BlogDetailsSection({ blog }: { blog: BlogPost }) {
  return (
    <section className="blog_details_section pt-70">
      <div className="container">

        {/* MAIN IMAGE */}
        <div className="single-item-image mb-70">
          <Image src={blog.image} alt={blog.title} />
        </div>

        {/* HEADER META */}
        <ItemDetailsContent blog={blog} />

        {/* CONTENT ROW */}
        <div className="row mt-none-30 g-0 align-items-start">
          <div className="col-lg-8 mt-30">

            <div className="blog_details_content">

              {/* MAIN HEADING */}
              <h3 className="item_details_info_heading mb-35">
                {blog.content.heading1}
              </h3>

              <p>
                {blog.content.paragraph1}
              </p>

              <p className="mt-35">
                {blog.content.paragraph2}
              </p>

              {/* VIDEO EMBED */}
              <div className="blog-details-video mt-75" style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "12px" }}>
                <iframe
                  src="https://www.youtube.com/embed/HISRUrJsD08?si=_cI2X3hO3nluIWHV"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                ></iframe>
              </div>

              <h3 className="item_details_info_heading mb-20">
                {blog.content.heading2}
              </h3>

              <p className="mb-40">
                {blog.content.paragraph3}
              </p>

              <h3 className="item_details_info_heading mb-25">Key Benefits:</h3>

              <ul className="iconlist_block numlist_block list-unstyled mb-50">
                {blog.content.list.map((item, index) => (
                  <li key={index}><span className="iconlist_text">{index + 1}. {item}</span></li>
                ))}
              </ul>

              {/* TAGS + SOCIAL */}
              <div className="row mt-none-30">
                <div className="col-md-6 mt-30">
                  <ul className="tags_block list-unstyled">
                    {blog.tags.map((tag, i) => (
                      <li key={i}><Link className="xb-border" href="#">{tag}</Link></li>
                    ))}
                  </ul>
                </div>

                <div className="col-md-6 mt-30">
                  <ul className="social_icons_block list-unstyled ul_li justify-content-md-end">
                    <li><Link className="xb-border" href="#"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link className="xb-border" href="#"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link className="xb-border" href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                    <li><Link className="xb-border" href="#"><i className="fab fa-instagram"></i></Link></li>
                    <li><Link className="xb-border" href="#"><i className="fas fa-share-alt"></i></Link></li>
                  </ul>
                </div>
              </div>

              {/* COMMENTS AREA */}
              <CommentsArea />

              {/* COMMENT FORM */}
              <CommentForm />

              {/* SUBSCRIBE BOX */}
              <NewsletterBox />
            </div>
          </div>
          <BlogSidebar />
        </div>

        <RelatedBlog/>

      </div>
    </section>
  );
};

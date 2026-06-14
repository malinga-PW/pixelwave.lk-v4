import BlogSlider from "./BlogTopList";
import BlogSidebar from "../BlogSidebar/BlogSidebar";
import Link from "next/link";

import { blogData } from "@/data/blogData";
import Image from "next/image";

const Icons = {
  arrow: (
    <>
      <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
        <rect x="3.783" y="13.463" width="14.31" height="1.817" transform="rotate(-40.2798 3.783 13.463)" fill="white" />
        <rect x="5.807" y="4.605" width="1.817" height="1.817" transform="rotate(-40.2798 5.807 4.605)" fill="white" />
        <rect x="8.367" y="4.816" width="1.817" height="1.817" transform="rotate(-40.2798 8.367 4.816)" fill="white" />
        <rect x="10.926" y="5.028" width="1.817" height="1.817" transform="rotate(-40.2798 10.926 5.028)" fill="white" />
        <rect x="13.277" y="7.8" width="1.817" height="1.817" transform="rotate(-40.2798 13.277 7.8)" fill="white" />
        <rect x="13.066" y="10.361" width="1.817" height="1.817" transform="rotate(-40.2798 13.066 10.361)" fill="white" />
        <rect x="12.855" y="12.922" width="1.817" height="1.817" transform="rotate(-40.2798 12.855 12.922)" fill="white" />
      </svg>

      <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
        <rect x="3.783" y="13.463" width="14.31" height="1.817" transform="rotate(-40.2798 3.783 13.463)" fill="white" />
        <rect x="5.807" y="4.605" width="1.817" height="1.817" transform="rotate(-40.2798 5.807 4.605)" fill="white" />
        <rect x="8.367" y="4.816" width="1.817" height="1.817" transform="rotate(-40.2798 8.367 4.816)" fill="white" />
        <rect x="10.926" y="5.028" width="1.817" height="1.817" transform="rotate(-40.2798 10.926 5.028)" fill="white" />
        <rect x="13.277" y="7.8" width="1.817" height="1.817" transform="rotate(-40.2798 13.277 7.8)" fill="white" />
        <rect x="13.066" y="10.361" width="1.817" height="1.817" transform="rotate(-40.2798 13.066 10.361)" fill="white" />
        <rect x="12.855" y="12.922" width="1.817" height="1.817" transform="rotate(-40.2798 12.855 12.922)" fill="white" />
      </svg>
    </>
  ),
};

export default function BlogList() {
  return (
    <div>
      <BlogSlider />

      <section className="blog_details_section pt-120">
        <div className="container">
          <div className="row mt-none-50 g-0 align-items-start">
            <div className="col-lg-8 mt-50">
              <div className="blog_details_content">

                {Object.values(blogData).map((blog, index) => (
                  <div key={index} className="blog_details_item img-hove-effect ul_li xb-border">
                    <div className="xb-item--img xb-img">
                      <Link href={`/blog/${blog.slug}`}>
                        <Image src={blog.image} alt={blog.title} />
                      </Link>
                    </div>

                    <div className="xb-item--holder">
                      <Link href={`/blog/${blog.slug}`} className="xb-item--tag">#{blog.category.toLowerCase()}</Link>

                      <h3 className="xb-item--title border-effect-2">
                        <Link href={`/blog/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h3>

                      <span className="xb-item--content">
                        {blog.excerpt}
                      </span>

                      <div className="xb-item--button mt-40">
                        <Link className="thm-btn agency-btn" href={`/blog/${blog.slug}`}>
                          <span className="text">Read more</span>
                          <span className="arrow">
                            <span className="arrow-icon">{Icons.arrow}</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {/* PAGINATION */}
                <ul className="blog-pagination ul_li">
                  <li><Link className="xb-border" href="#"><i className="fas fa-chevron-double-left"></i></Link></li>
                  <li><Link className="xb-border" href="#">1</Link></li>
                  <li className="active"><Link className="xb-border" href="#">2</Link></li>
                  <li><Link className="xb-border" href="#">3</Link></li>
                  <li><Link className="xb-border" href="#"><i className="fas fa-chevron-double-right"></i></Link></li>
                </ul>

              </div>
            </div>

            {/* SIDEBAR */}
            <BlogSidebar />
          </div>
        </div>
      </section>
    </div>
  );
};
import Link from "next/link";

import Image from "next/image";
import { blogData } from "@/data/blogData";

// ICONS
const Icons = {
  search: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M14.002 5H20.002" stroke="#00020F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.002 8H17.002" stroke="#00020F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M21.002 11.5C21.002 16.75 16.752 21 11.502 21C6.25195 21 2.00195 16.75 2.00195 11.5C2.00195 6.25 6.25195 2 11.502 2"
        stroke="#00020F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M22.002 22L20.002 20" stroke="#00020F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function BlogSidebar() {
  return (
    <div className="col-lg-4 mt-50">
      <div className="sidebar">

        {/* SEARCH WIDGET */}
        <div className="sidebar_widget">
          <h3 className="sidebar_widget_title">Search</h3>

          <div className="form-group">
            <input className="form-control" type="search" placeholder="Search..." />

            <button type="submit" className="search_icon">
              <span>{Icons.search}</span>
            </button>
          </div>
        </div>

        {/* RELATED POSTS */}
        <div className="sidebar_widget">
          <h3 className="sidebar_widget_title">Recent posts</h3>

          <ul className="recent_post_block list-unstyled">
            {Object.values(blogData).slice(0, 3).map((blog, idx) => (
              <li key={idx} className="recent_post_item xb-border">
                <h3 className="post-title border-effect-2">
                  <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>
                <span>
                  By {blog.author}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CATEGORIES */}
        <div className="sidebar_widget">
          <h3 className="sidebar_widget_title">Categories</h3>

          <ul className="category_list_block list-unstyled">
            {Array.from(new Set(Object.values(blogData).map(b => b.category))).map((category, idx) => (
              <li key={idx}>
                <Link href="#">
                  <span><i className="far fa-arrow-right"></i> {category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* TAGS */}
        <div className="sidebar_widget">
          <h3 className="sidebar_widget_title">Tags</h3>

          <ul className="tags_block list-unstyled">
            {Array.from(new Set(Object.values(blogData).flatMap(b => b.tags))).slice(0, 8).map((tag, i) => (
              <li key={i}>
                <Link className="xb-border" href="#">{tag}</Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};
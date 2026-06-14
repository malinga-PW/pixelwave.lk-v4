import React from "react";
import Link from "next/link";

// SVG icons (correct to use <img />)
import iconCalendar from "@/public/images/icon/calendar-icon.svg";
import iconUserGradient from "@/public/images/icon/user-gradient-icon.svg";
import iconComment from "@/public/images/icon/comment-icon.svg";
import iconEye from "@/public/images/icon/eye-icon.svg";
import iconLink from "@/public/images/icon/link-icon.svg";
import iconBookmark from "@/public/images/icon/bookmark-icon.svg";
import { BlogPost } from "@/data/blogData";

export default function ItemDetailsContent({ blog }: { blog: BlogPost }) {
  return (
    <div className="item_details_content pb-80">

      {/* TOP META */}
      <ul className="post_meta ul_li list-unstyled mb-25">
        <li>
          <Link href="#">
            <span className="meta_label1">#{blog.category.toLowerCase()}</span>
          </Link>
        </li>

        <li>
          <Link href="#">
            <span className="meta_icon">
              <img src={iconCalendar.src} alt="" aria-hidden="true" />
            </span>
            <span className="meta_label">Last Update: {blog.date}</span>
          </Link>
        </li>
      </ul>

      {/* TITLE */}
      <h2 className="details-content-title mb-15">
        {blog.title}
      </h2>

      {/* SHORT CONTENT */}
      <p className="mb-35">
        {blog.excerpt}
      </p>

      {/* LOWER META */}
      <div className="post-meta-wrap">
        <div className="row mt-none-15">

          {/* LEFT */}
          <div className="col-md-6 mt-15">
            <ul className="post_meta list-unstyled ul_li">
              <li>
                <Link href="#">
                  <span className="meta_icon">
                    <img src={iconUserGradient.src} alt="" aria-hidden="true" />
                  </span>
                  <span className="meta_label">by {blog.author}</span>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <span className="meta_icon">
                    <img src={iconComment.src} alt="" aria-hidden="true" />
                  </span>
                  <span className="meta_label">0 Comments</span>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <span className="meta_icon">
                    <img src={iconEye.src} alt="" aria-hidden="true" />
                  </span>
                  <span className="meta_label">0 Views</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="col-md-6 mt-15">
            <ul className="post_meta list-unstyled ul_li justify-content-md-end">
              <li>
                <Link href="#">
                  <span className="meta_icon">
                    <img src={iconLink.src} alt="" aria-hidden="true" />
                  </span>
                  <span className="meta_label">Copy Link</span>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <span className="meta_icon">
                    <img src={iconBookmark.src} alt="" aria-hidden="true" />
                  </span>
                  <span className="meta_label">Bookmark</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

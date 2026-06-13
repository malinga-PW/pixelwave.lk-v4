import React from "react";
import Link from "next/link";

// SVG icons (correct to use <img />)
import iconCalendar from "@/public/images/icon/calendar-icon.svg";
import iconUserGradient from "@/public/images/icon/user-gradient-icon.svg";
import iconComment from "@/public/images/icon/comment-icon.svg";
import iconEye from "@/public/images/icon/eye-icon.svg";
import iconLink from "@/public/images/icon/link-icon.svg";
import iconBookmark from "@/public/images/icon/bookmark-icon.svg";

export default function ItemDetailsContent() {
  return (
    <div className="item_details_content pb-80">

      {/* TOP META */}
      <ul className="post_meta ul_li list-unstyled mb-25">
        <li>
          <Link href="/blog-details">
            <span className="meta_label1">#ai tools tips</span>
          </Link>
        </li>

        <li>
          <Link href="/blog-details">
            <span className="meta_icon">
              <img src={iconCalendar.src} alt="" aria-hidden="true" />
            </span>
            <span className="meta_label">Last Update: 02/12/2025</span>
          </Link>
        </li>
      </ul>

      {/* TITLE */}
      <h2 className="details-content-title mb-15">
        How our AI agency delivers next-gen <br />
        automation tools to help businesses.
      </h2>

      {/* SHORT CONTENT */}
      <p className="mb-35">
        Our AI agency builds next-gen automation tools that help businesses
        streamline operations, reduce manual work, and improve overall
        efficiency...
      </p>

      {/* LOWER META */}
      <div className="post-meta-wrap">
        <div className="row mt-none-15">

          {/* LEFT */}
          <div className="col-md-6 mt-15">
            <ul className="post_meta list-unstyled ul_li">
              <li>
                <Link href="/blog-details">
                  <span className="meta_icon">
                    <img src={iconUserGradient.src} alt="" aria-hidden="true" />
                  </span>
                  <span className="meta_label">by Madura</span>
                </Link>
              </li>

              <li>
                <Link href="/blog-details">
                  <span className="meta_icon">
                    <img src={iconComment.src} alt="" aria-hidden="true" />
                  </span>
                  <span className="meta_label">50 Comments</span>
                </Link>
              </li>

              <li>
                <Link href="/blog-details">
                  <span className="meta_icon">
                    <img src={iconEye.src} alt="" aria-hidden="true" />
                  </span>
                  <span className="meta_label">20k Views</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="col-md-6 mt-15">
            <ul className="post_meta list-unstyled ul_li justify-content-md-end">
              <li>
                <Link href="/blog-details">
                  <span className="meta_icon">
                    <img src={iconLink.src} alt="" aria-hidden="true" />
                  </span>
                  <span className="meta_label">Copy Link</span>
                </Link>
              </li>

              <li>
                <Link href="/blog-details">
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

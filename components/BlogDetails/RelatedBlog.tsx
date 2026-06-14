import React from "react";
import Link from "next/link";

import { blogData } from "@/data/blogData";

import blogIcon01 from "@/public/images/icon/blog-icon01.svg";
import blogIcon02 from "@/public/images/icon/blog-icon02.svg";
import Image from "next/image";

export default function RelatedBlog() {
  return (
    <div className="related-blog pt-130">
      <h2 className="related-blog-title">Browse related blog</h2>

      <div className="row mt-none-30">

        {Object.values(blogData).slice(0, 3).map((blog, idx) => (
          <div key={idx} className="col-lg-4 col-md-6 mt-30">
            <div className="xb-blog-item xb-small-blog-item">
              <div className="xb-item--inner img-hove-effect xb-border">
                <div className="xb-img">
                  <Link href={`/blog/${blog.slug}`}><Image src={blog.image} alt={blog.title} /></Link>
                </div>

                <div className="xb-item--holder">
                  <ul className="xb-item--meta list-unstyled ul_li">
                    <li>
                      <Image src={blogIcon01} alt="icon" />
                      {blog.category}
                    </li>
                    <li>
                      <Image src={blogIcon02} alt="icon" />
                      {blog.date}
                    </li>
                  </ul>

                  <h2 className="xb-item--title border-effect-2">
                    <Link href={`/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};
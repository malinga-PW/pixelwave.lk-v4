"use client";

import React, { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

// Images
import netImg from "@/public/images/download/net-img.png";
import pdfBook1 from "@/public/images/download/pdf-book.png";
import pdfBook2 from "@/public/images/download/pdf-book02.png";
import pdfBook3 from "@/public/images/download/pdf-book03.png";
import downloadIcon from "@/public/images/icon/doenload-icon.svg";

export default function DownloadSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bookList = useMemo(
    () => [
      {
        title: "The Ultimate Guide to Smarter Marketing Campaigns",
        img: pdfBook1,
      },
      {
        title: "Audience Insights Playbook: Turning Data Into Growth",
        img: pdfBook2,
      },
      {
        title: "The Complete Handbook for Optimizing Media Performance",
        img: pdfBook3,
      },
    ],
    []
  );

  const handleHover = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <section className="download pt-80">
      <div className="container-fluid">
        <div className="ai-download-wrap ul_li_between mlr-20">

          {/* Heading */}
          <div className="sec-title-three download-sec-title">
            <span className="sub-title mb-25">Download Guide</span>
            <h2 className="title xb-text-reveal">
              Download the Complete Playbook
            </h2>
          </div>

          {/* Content */}
          <div
            className="ai-download-inner ul_li wow fadeInRightBig"
            data-wow-duration="600ms"
          >
            {/* Background */}
            <div className="bg-shape">
              <Image src={netImg} alt="Background shape" />
            </div>

            {/* Book Images */}
            <div className="ai-download-book">
              {bookList.map((book, index) => (
                <div
                  key={index}
                  className={`book-item ${
                    index === currentIndex ? "active" : ""
                  }`}
                >
                  <Image src={book.img} alt={book.title} />
                </div>
              ))}
            </div>

            {/* Book Titles */}
            <ul className="ai-download-book-list list-unstyled">
              {bookList.map((book, index) => (
                <li
                  key={index}
                  className={`list ${
                    index === currentIndex ? "current" : ""
                  }`}
                  onMouseEnter={() => handleHover(index)}
                  onFocus={() => handleHover(index)}
                >
                  <Link href="/service-details">
                    {book.title}
                    <Image src={downloadIcon} alt="download icon" />
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}

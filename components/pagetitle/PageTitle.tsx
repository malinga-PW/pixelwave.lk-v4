import Link from "next/link";
import bgImage from "@/public/images/bg/bootcamp-bg.png";

interface PageTitleProps {
  pageTitle: string;
  pagesub?: string;
}

export default function PageTitle({ pageTitle, pagesub }: PageTitleProps) {
  return (
    <section
      className="breadcrumb bg_img"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="container">
        <div className="breadcrumb__content">

          {/* Breadcrumb Links */}
          <ul className="breadcrumb__list clearfix list-unstyled">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>

            {pagesub && (
              <li className="breadcrumb-item">{pagesub}</li>
            )}
          </ul>

          {/* Page Title */}
          <h2 className="breadcrumb__title">{pageTitle}</h2>

        </div>
      </div>
    </section>
  );
}

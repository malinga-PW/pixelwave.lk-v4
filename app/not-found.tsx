import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Footer from "@/components/footer/Footer";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Link from "next/link";

export const metadata = {
  title: "404 – Page Not Found",
};

export default function NotFound() {
  return (
    <div className="about-page inner-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle pageTitle="Error 404" pagesub="404" />

          <div className="error-page">
            <div className="container not-found-content">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="contant-wrapper text-center">

                    <div className="error-page__text">
                      <h2>404</h2>
                    </div>

                    <div className="error-page__content mb-50">
                      <h2>Hi Sorry, We Can’t Find That Page!</h2>
                      <p>
                        Oops! The page you are looking for does not exist.
                        It might have been moved or deleted.
                      </p>

                      <div className="error-page-button">
                        <Link href="/" className="thm-btn agency-btn">
                          <span className="text">Back to Home</span>
                          <span className="arrow">
                            <span className="arrow-icon">
                              {/* SVG UNCHANGED */}
                              <svg
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect x="5.06" y="19.97" width="20.57" height="2.61" transform="rotate(-40.28 5.06 19.97)" fill="white" />
                                <rect x="7.97" y="7.24" width="2.61" height="2.61" transform="rotate(-40.28 7.97 7.24)" fill="white" />
                                <rect x="11.65" y="7.54" width="2.61" height="2.61" transform="rotate(-40.28 11.65 7.54)" fill="white" />
                                <rect x="15.33" y="7.85" width="2.61" height="2.61" transform="rotate(-40.28 15.33 7.85)" fill="white" />
                                <rect x="18.71" y="11.83" width="2.61" height="2.61" transform="rotate(-40.28 18.71 11.83)" fill="white" />
                                <rect x="18.40" y="15.52" width="2.61" height="2.61" transform="rotate(-40.28 18.40 15.52)" fill="white" />
                                <rect x="18.10" y="19.20" width="2.61" height="2.61" transform="rotate(-40.28 18.10 19.20)" fill="white" />
                              </svg>
                              <svg
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect x="5.06" y="19.97" width="20.57" height="2.61" transform="rotate(-40.28 5.06 19.97)" fill="white" />
                                <rect x="7.97" y="7.24" width="2.61" height="2.61" transform="rotate(-40.28 7.97 7.24)" fill="white" />
                                <rect x="11.65" y="7.54" width="2.61" height="2.61" transform="rotate(-40.28 11.65 7.54)" fill="white" />
                                <rect x="15.33" y="7.85" width="2.61" height="2.61" transform="rotate(-40.28 15.33 7.85)" fill="white" />
                                <rect x="18.71" y="11.83" width="2.61" height="2.61" transform="rotate(-40.28 18.71 11.83)" fill="white" />
                                <rect x="18.40" y="15.52" width="2.61" height="2.61" transform="rotate(-40.28 18.40 15.52)" fill="white" />
                                <rect x="18.10" y="19.20" width="2.61" height="2.61" transform="rotate(-40.28 18.10 19.20)" fill="white" />
                              </svg>
                            </span>
                          </span>
                        </Link>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}

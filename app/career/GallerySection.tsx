import Link from "next/link";
import Image from "next/image";

// === Image Imports ===
import img01 from "@/public/images/career/img01.jpg";
import img02 from "@/public/images/career/img02.jpg";
import img03 from "@/public/images/career/img03.jpg";
import img04 from "@/public/images/career/img04.jpg";
import img05 from "@/public/images/career/img05.jpg";

const arrowIcon = (
  <>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5.0659" y="19.9785" width="20.571" height="2.612" transform="rotate(-40.28 5.0659 19.9785)" fill="white" />
      <rect x="7.971" y="7.2446" width="2.612" height="2.612" transform="rotate(-40.28 7.971 7.2446)" fill="white" />
      <rect x="11.6523" y="7.5483" width="2.612" height="2.612" transform="rotate(-40.28 11.6523 7.5483)" fill="white" />
      <rect x="15.334" y="7.8520" width="2.612" height="2.612" transform="rotate(-40.28 15.334 7.8520)" fill="white" />
      <rect x="18.7119" y="11.8374" width="2.612" height="2.612" transform="rotate(-40.28 18.7119 11.8374)" fill="white" />
      <rect x="18.4084" y="15.5200" width="2.612" height="2.612" transform="rotate(-40.28 18.4084 15.5200)" fill="white" />
      <rect x="18.104" y="19.2012" width="2.612" height="2.612" transform="rotate(-40.28 18.104 19.2012)" fill="white" />
    </svg>

    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5.0659" y="19.9785" width="20.571" height="2.612" transform="rotate(-40.28 5.0659 19.9785)" fill="white" />
      <rect x="7.971" y="7.2446" width="2.612" height="2.612" transform="rotate(-40.28 7.971 7.2446)" fill="white" />
      <rect x="11.6523" y="7.5483" width="2.612" height="2.612" transform="rotate(-40.28 11.6523 7.5483)" fill="white" />
      <rect x="15.334" y="7.8520" width="2.612" height="2.612" transform="rotate(-40.28 15.334 7.8520)" fill="white" />
      <rect x="18.7119" y="11.8374" width="2.612" height="2.612" transform="rotate(-40.28 18.7119 11.8374)" fill="white" />
      <rect x="18.4084" y="15.5200" width="2.612" height="2.612" transform="rotate(-40.28 18.4084 15.5200)" fill="white" />
      <rect x="18.104" y="19.2012" width="2.612" height="2.612" transform="rotate(-40.28 18.104 19.2012)" fill="white" />
    </svg>
  </>
);

// === Career Images ===
const careerImages = [img01, img02, img03, img04, img05];

export default function GallerySection() {
  return (
    <section className="career">
      <div className="container">

        {/* Gallery */}
        <div className="career-gallary ul_li_between">
          {careerImages.map((image, index) => (
            <div key={index} className="xb-image-item img-hove-effect">
              <div className="xb-img">
                {[...Array(4)].map((_, i) => (
                  <Link key={i} href="/career-details">
                    <Image src={image} alt="career" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="xb-career-btn text-center">
          <Link className="thm-btn agency-btn" href="/contact">
            <span className="text">Begin Today with us</span>
            <span className="arrow">
              <span className="arrow-icon">{arrowIcon}</span>
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}

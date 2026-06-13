import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// Images
import img14 from "@/public/images/service/img14.jpg";
import img15 from "@/public/images/service/img15.jpg";
import img16 from "@/public/images/service/img16.jpg";

export default function GallerySection() {
  const gallerySets: StaticImageData[][] = [
    [img14, img14, img14, img14],
    [img15, img15, img15, img15],
    [img16, img16, img16, img16],
  ];

  return (
    <div className="service-gallary ul_li_between mt-125">
      {gallerySets.map((set, index) => (
        <div className="single-item-image img-hove-effect" key={index}>
          <div className="xb-img">
            {set.map((img, i) => (
              <Link key={i} href="/service-details">
                <Image
                  src={img}
                  alt={`service gallery image ${index + 1}`}
                  className="w-100"
                />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

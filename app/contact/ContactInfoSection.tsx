import Image from "next/image";
import Link from "next/link";

// --- contact images ---
import img01 from "@/public/images/contact/img01.png";
import img02 from "@/public/images/contact/img02.png";
import img03 from "@/public/images/contact/img03.png";

// --- arrow icons ---
import arrowWhite from "@/public/images/icon/rotate-arrow-white02.svg";
import arrowBlack from "@/public/images/icon/rotate-arrow-black03.svg";

// ---- contact items data ----
const contactData = [
  {
    location: "Mulleriyawa, Colombo",
    phone: "+94 71 973 973 4",
    email: "hello@pixelwave.lk",
    img: img01,
  }
];

export default function ContactInfoSection() {
  return (
    <section className="contact pb-150">
      <div className="container">
        <div className="row mt-none-30">

          {contactData.map((item, index) => (
            <div className="col-lg-6 col-md-8 mx-auto mt-30" key={index}>
              <div className="xb-contact-items img-hove-effect xb-border text-center" style={{ padding: "clamp(20px, 4vw, 40px)" }}>
                <div className="xb-item--inner">

                  {/* Hover images */}
                  <div className="xb-img">
                    {[1, 2, 3, 4].map((i) => (
                      <a href="https://maps.app.goo.gl/oo3yr24kDV9LhXo28" target="_blank" rel="noopener noreferrer" key={i}>
                        <Image
                          src={item.img}
                          alt={`Office location ${item.location}`}
                        />
                      </a>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="xb-item--holder mt-30">
                    <p className="xb-item--location" style={{ fontSize: "clamp(18px, 3vw, 24px)" }}>
                      <a href="https://maps.app.goo.gl/oo3yr24kDV9LhXo28" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>
                        {item.location}
                      </a>
                    </p>

                    <span className="xb-item--contact_info" style={{ display: "block", marginBottom: "10px" }}>{item.phone}</span>
                    <span className="xb-item--contact_info" style={{ display: "block", marginBottom: "10px" }}>{item.email}</span>

                    <Link href="mailto:hello@pixelwave.lk" className="thm-btn form-btn mt-30">
                      EMAIL US
                      <span className="xb-icon">
                        <Image src={arrowWhite} alt="arrow icon" />
                        <Image src={arrowBlack} alt="arrow icon" />
                      </span>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

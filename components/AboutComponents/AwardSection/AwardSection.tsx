import Link from "next/link";
import Image from "next/image";

// Award Images
import award01 from "@/public/images/award/img01.png";
import award02 from "@/public/images/award/img02.png";
import award03 from "@/public/images/award/img03.png";
import award04 from "@/public/images/award/img04.png";
import award05 from "@/public/images/award/img05.png";
import award06 from "@/public/images/award/img06.png";
import award07 from "@/public/images/award/img07.png";
import award08 from "@/public/images/award/img08.png";

/* ================================
   Static Award Arrays
================================= */

const AWARDS_ROW_1 = [
  award01,
  award02,
  award03,
  award04,
  award05,
  award06,
  award07,
  award08,
];

const AWARDS_ROW_2 = [
  award01,
  award02,
  award07,
  award08,
  award03,
  award04,
  award05,
  award06,
];

const AWARDS_ROW_3 = [
  award01,
  award03,
  award02,
  award04,
  award06,
  award05,
  award08,
  award07,
];

/* ================================ */

export default function AwardSection() {
  return (
    <section className="award pos-rel">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="sec-title mb-30">
              <span className="sub-title mb-20">Our awards</span>
              <h2 className="title title-line_height mb-5">
                We are prestigious award winner
              </h2>
              <p className="content">
                We are a prestigious award-winning agency, recognized for our
                excellence and innovation in delivering cutting-edge AI
                solutions that help businesses achieve remarkable growth and
                success.
              </p>

              <div className="team-btn mt-40">
                <Link className="thm-btn agency-btn" href="/contact">
                  <span className="text">Begin Today with us</span>

                  <span className="arrow">
                    <span className="arrow-icon">
                      {/* SVGs unchanged */}
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5.06592"
                          y="19.9785"
                          width="20.5712"
                          height="2.61221"
                          transform="rotate(-40.2798 5.06592 19.9785)"
                          fill="white"
                        />
                        <rect
                          x="7.97095"
                          y="7.24463"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 7.97095 7.24463)"
                          fill="white"
                        />
                        <rect
                          x="11.6523"
                          y="7.54834"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 11.6523 7.54834)"
                          fill="white"
                        />
                        <rect
                          x="15.334"
                          y="7.85205"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 15.334 7.85205)"
                          fill="white"
                        />
                        <rect
                          x="18.7119"
                          y="11.8374"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.7119 11.8374)"
                          fill="white"
                        />
                        <rect
                          x="18.4084"
                          y="15.52"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.4084 15.52)"
                          fill="white"
                        />
                        <rect
                          x="18.104"
                          y="19.2012"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.104 19.2012)"
                          fill="white"
                        />
                      </svg>

                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="5.06592"
                          y="19.9785"
                          width="20.5712"
                          height="2.61221"
                          transform="rotate(-40.2798 5.06592 19.9785)"
                          fill="white"
                        />
                        <rect
                          x="7.97095"
                          y="7.24463"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 7.97095 7.24463)"
                          fill="white"
                        />
                        <rect
                          x="11.6523"
                          y="7.54834"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 11.6523 7.54834)"
                          fill="white"
                        />
                        <rect
                          x="15.334"
                          y="7.85205"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 15.334 7.85205)"
                          fill="white"
                        />
                        <rect
                          x="18.7119"
                          y="11.8374"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.7119 11.8374)"
                          fill="white"
                        />
                        <rect
                          x="18.4084"
                          y="15.52"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.4084 15.52)"
                          fill="white"
                        />
                        <rect
                          x="18.104"
                          y="19.2012"
                          width="2.61221"
                          height="2.61221"
                          transform="rotate(-40.2798 18.104 19.2012)"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT - LOGO MARQUEES */}
          <div className="col-lg-6">
            <div className="integration-logo-wrap ul_li">
              <div className="award-logo-inner marquee-first">
                {AWARDS_ROW_1.map((img, i) => (
                  <div className="integration-logo award-logo" key={i}>
                    <Image src={img} alt="award logo" />
                  </div>
                ))}
              </div>

              <div className="award-logo-inner marquee2">
                {AWARDS_ROW_2.map((img, i) => (
                  <div className="integration-logo award-logo" key={i}>
                    <Image src={img} alt="award logo" />
                  </div>
                ))}
              </div>

              <div className="award-logo-inner marquee-first">
                {AWARDS_ROW_3.map((img, i) => (
                  <div className="integration-logo award-logo" key={i}>
                    <Image src={img} alt="award logo" />
                  </div>
                ))}
              </div>

              <div className="xb-shape">
                <div className="shape shape--1"></div>
                <div className="shape shape--2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="award-gradiant"></span>
    </section>
  );
}

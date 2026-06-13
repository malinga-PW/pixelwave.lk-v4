import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

// Images
import img01 from "@/public/images/team/img01.jpg";
import img02 from "@/public/images/team/img02.jpg";
import img03 from "@/public/images/team/img03.jpg";
import img04 from "@/public/images/team/img04.jpg";
import img05 from "@/public/images/team/img05.jpg";
import img06 from "@/public/images/team/img06.jpg";
import img07 from "@/public/images/team/img07.jpg";
import img08 from "@/public/images/team/img08.jpg";
import img09 from "@/public/images/team/img09.jpg";
import img10 from "@/public/images/team/img10.jpg";

import bgLarge from "@/public/images/team/noice-bg02.png";
import bgSmall from "@/public/images/team/noice-bg.png";

export const metadata = {
  title: "Our Team | Aivora – AI Agency & Technology",
  description:
    "Meet the Aivora team — experts in AI engineering, data science, automation, product development, and technology innovation.",
};

const teamMembers = [
  { name: "Sebastian Patel", role: "CEO & Chairman at, Aivora", img: img09, big: true },
  { name: "Lennox Gabriel", role: "Chief Operating Officer at, Aivora", img: img10, big: true },
  { name: "Ethan Reynolds", role: "AI Engineer", img: img01, big: false },
  { name: "Priya Ramirez", role: "Data Scientist", img: img02, big: false },
  { name: "Aiden Brooks", role: "AI Researcher", img: img03, big: false },
  { name: "Grayson Cole", role: "AI Solutions Architect", img: img04, big: false },
  { name: "Eliana Rose", role: "Intelligence Analyst", img: img05, big: false },
  { name: "Carter Vaughn", role: "AI Project Manager", img: img06, big: false },
  { name: "Logan Pierce", role: "AI Solutions Architect", img: img07, big: false },
  { name: "Emerson Tate", role: "AI Product Manager", img: img08, big: false },
];

export default function TeamPage() {
  return (
    <div className="about-page inner-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle pageTitle="Our Team" pagesub="Our Team" />

          <section className="team">
            <div className="container">
              <div className="row mt-none-55">

                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className={
                      member.big
                        ? "col-xl-6 col-lg-6 col-md-8 mt-55"
                        : "col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-55"
                    }
                  >
                    <div
                      className={
                        member.big
                          ? "xb-team-item xb-team-item-big xb-border"
                          : "xb-team-item xb-border"
                      }
                    >
                      {/* Image */}
                      <div className="xb-item--img">
                        <Image src={member.img} alt={member.name} />
                      </div>

                      {/* Info */}
                      <div className="xb-item--holder ul_li_between">
                        <div className="xb-item--author">
                          <h2 className="xb-item--name">{member.name}</h2>
                          <span className="xb-item--desig">{member.role}</span>
                        </div>

                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} LinkedIn profile`}
                          className="xb-item--social xb-border"
                        >
                          <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                        </a>
                      </div>

                      {/* Background */}
                      <div className="xb-bg">
                        <Image
                          src={member.big ? bgLarge : bgSmall}
                          alt="decorative background texture"
                        />
                      </div>
                    </div>
                  </div>
                ))}


              </div>
            </div>
          </section>
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}

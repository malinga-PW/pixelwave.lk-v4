import Image, { StaticImageData } from "next/image";

// Background + Member Images
import bgTeam from "@/public/images/bg/team-bg.png";
import noiseBg from "@/public/images/team/noice-bg.png";

import img01 from "@/public/images/team/img01.jpg";
import img02 from "@/public/images/team/img02.jpg";
import img03 from "@/public/images/team/img03.jpg";
import img04 from "@/public/images/team/img04.jpg";
import img05 from "@/public/images/team/img05.jpg";
import img06 from "@/public/images/team/img06.jpg";
import img07 from "@/public/images/team/img07.jpg";
import img08 from "@/public/images/team/img08.jpg";

/* ================================
   Static Constants 
================================= */

interface TeamMember {
  name: string;
  role: string;
  img: StaticImageData;
}

const BG_STYLE = {
  backgroundImage: `url(${bgTeam.src})`,
};

const TEAM_MEMBERS: TeamMember[] = [
  { name: "Ethan Reynolds", role: "AI Engineer", img: img01 },
  { name: "Priya Ramirez", role: "Data Scientist", img: img02 },
  { name: "Aiden Brooks", role: "AI Researcher", img: img03 },
  { name: "Grayson Cole", role: "AI Solutions Architect", img: img04 },
  { name: "Eliana Rose", role: "Intelligence Analyst", img: img05 },
  { name: "Carter Vaughn", role: "AI Project Manager", img: img06 },
  { name: "Logan Pierce", role: "AI Solutions Architect", img: img07 },
  { name: "Emerson Tate", role: "AI Product Manager", img: img08 },
];

/* ================================ */

export default function TeamSection() {
  return (
    <section className="team pt-140 pb-150 bg_img" style={BG_STYLE}>
      <div className="container">
        <div className="sec-title sec-title-center text-center mb-45">
          <span className="sub-title mb-20">Our Specialists</span>
          <h2 className="title title-line_height">Dedicated professionals</h2>
        </div>

        <div className="row mt-none-55">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-55"
              key={index}
            >
              <div className="xb-team-item xb-border">
                {/* Main Image */}
                <div className="xb-item--img">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={350}
                    height={400}
                    className="w-100"
                  />
                </div>

                {/* Content */}
                <div className="xb-item--holder ul_li_between">
                  <div className="xb-item--author">
                    <h2 className="xb-item--name">{member.name}</h2>
                    <span className="xb-item--desig">{member.role}</span>
                  </div>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="xb-item--social xb-border"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>

                {/* Noise background */}
                <div className="xb-bg">
                  <Image
                    src={noiseBg}
                    alt="background texture"
                    width={350}
                    height={400}
                    className="w-100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

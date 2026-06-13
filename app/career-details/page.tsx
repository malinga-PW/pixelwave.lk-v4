import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import ApplyForm from "./ApplyForm";

export const metadata = {
  title: "Career Details | Aivora – AI Agency & Technology",
  description:
    "Explore career opportunities, job responsibilities, required experience, and benefits offered by Aivora.",
};

export default function CareerDetails() {
  return (
    <div className="about-page inner-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle pageTitle="Career Details" pagesub="Career Details" />

          <section className="career-details">
            <div className="container">
              <div className="cp-details-wrap">
                
                {/* Manager Info */}
                <div className="cp-manager_info">
                  <h2 className="details-content-title mb-30">
                    Technical project manager - (Full-time)
                  </h2>

                  <ul className="xb-details-content list-unstyled mb-35">
                    <li><span>Department :</span> Technical Project Manager</li>
                    <li><span>No. of Openings :</span> (3)</li>
                    <li><span>FullJob Type :</span> Full-Time</li>
                    <li><span>Location :</span> San Francisco, USA.</li>
                    <li><span>Salary :</span> $80k - $100k (Based on experience)</li>
                    <li><span>Deadline :</span> December 10, 2025</li>
                    <li><span>Experience Required :</span> 5+ Years</li>
                  </ul>

                  <p className="mb-30">
                    We’re looking for a Technical Project Manager and knowledgeable
                    Product Designer to join our technical team...
                  </p>

                  <p>
                    Working quickly and creatively should come naturally to you, as well
                    as being an innovative problem-solver who produces effective solutions.
                  </p>
                </div>

                {/* What you'll do */}
                <div className="xb-details-item">
                  <h3 className="details-title mt-70">What you'll get to do...</h3>
                  <ul className="content-list mt-25">
                    <li>Refactor current code to service-oriented architecture.</li>
                    <li>Collaborate with engineering, product & operations teams.</li>
                    <li>Solve technical problems that few have solved before.</li>
                    <li>Participate in decision-making — your voice matters.</li>
                    <li>Mentor team members & share engineering insights.</li>
                    <li>Improve quality, performance & scalability.</li>
                    <li>Participate in on-call rotation.</li>
                  </ul>
                </div>

                {/* Experience section */}
                <div className="xb-details-item">
                  <h3 className="details-title mt-70">Your experience should include...</h3>
                  <ul className="content-list mt-25">
                    <li>6+ years of Project Management experience.</li>
                    <li><span>Technical Expertise:</span> Strong technical background.</li>
                    <li><span>Stakeholder Management:</span> Strong alignment skills.</li>
                    <li><span>Agile Methodologies:</span> Hands-on Agile experience.</li>
                    <li><span>Risk Management:</span> Identify & mitigate risks.</li>
                    <li><span>Team Leadership:</span> Inspire & manage teams.</li>
                    <li><span>Communication Skills:</span> Excellent communicator.</li>
                    <li><span>Problem-Solving:</span> Proactive & analytical.</li>
                    <li><span>Quality Assurance:</span> Maintain high standards.</li>
                  </ul>
                </div>

                {/* You might also have */}
                <div className="xb-details-item">
                  <h3 className="details-title mt-70">You might also have...</h3>
                  <ul className="content-list mt-25">
                    <li>Experience with AWS.</li>
                    <li>Experience building CI/CD pipelines.</li>
                    <li>Infrastructure-as-code experience.</li>
                    <li>Passion for technology & innovation.</li>
                    <li>High standards & desire to create real impact.</li>
                    <li>Continuous improvement mindset.</li>
                  </ul>
                </div>

                {/* Benefits */}
                <div className="xb-details-item">
                  <h3 className="details-title mt-70">Great benefits...</h3>
                  <ul className="content-list mt-25">
                    <li>Company-wide 401(k) plan.</li>
                    <li>Life & disability insurance.</li>
                    <li>Competitive salary, bonus & equity.</li>
                    <li>Medical, dental & vision coverage.</li>
                    <li>Flexible paid time off & sick leave.</li>
                  </ul>
                </div>

                {/* Apply Form */}
                <ApplyForm />

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

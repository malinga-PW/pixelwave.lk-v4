import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import ServiceDetails from "./ServiceDetails";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Service Details | Aivora – AI Agency & Technology",
  description:
    "Detailed information about Aivora's AI-powered services, technologies, and business solutions.",
};

export default function ServiceSinglePage() {
  return (
    <div className="about-page inner-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle pageTitle="Service Details" pagesub="Service Details" />
          <ServiceDetails />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}

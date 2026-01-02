import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import InfertilityScanExpect from "../../components/ServicePages/InfertilityScan/InfertilityScanExpect";
import InfertilityScanHead from "../../components/ServicePages/InfertilityScan/InfertilityScanHead";
import InfertilityScanPrepare from "../../components/ServicePages/InfertilityScan/InfertilityScanPrepare";
import InfertilityScanService from "../../components/ServicePages/InfertilityScan/InfertilityScanService";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import infertilityScan from "./../../Images/InfertilityScanServicesBanner/Infertility-Scan.png";
import InfertilityScanContent from "../../components/ServicePages/InfertilityScan/InfertilityScanContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import InfertilityScanFaq from "../../components/ServicePages/InfertilityScan/InfertilityScanFaq";
import Script from "next/script";
export const metadata = {
  title:
    "Infertility Scan Test in Girinagar, Bangalore | Infertility Scans near Me",
  description:
    "Infertility Scan Test in Girinagar, Bangalore. Is a specialized ultrasound used to assess reproductive health in women and men who are facing difficulty conceiving.",
  canonical:
    "https://auradiagnostics.co.in/infertility-scan-test-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function InfertilityScan() {
  return (
    <>
      <Script
        id="infertility-scan-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are infertility scans?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Infertility scans are specialized ultrasound tests used to evaluate reproductive organs in men and women to identify possible causes of difficulty in conceiving.",
                },
              },
              {
                "@type": "Question",
                name: "Why has my doctor suggested an infertility scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Doctors recommend infertility scans to assess the uterus, ovaries, fallopian tubes, or testes and identify issues such as ovulation problems or structural abnormalities.",
                },
              },
              {
                "@type": "Question",
                name: "Who should undergo infertility scans?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Infertility scans are advised for couples trying to conceive for over one year, or six months if the woman is over 35, without success.",
                },
              },
              {
                "@type": "Question",
                name: "Are infertility scans painful?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most infertility scans are painless. Some procedures may cause mild discomfort, but they are generally well tolerated.",
                },
              },
              {
                "@type": "Question",
                name: "How long does an infertility scan take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An infertility scan typically takes about 20 to 30 minutes, depending on the type of scan being performed.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to prepare before an infertility scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Preparation depends on the scan type. You may be asked to have a full bladder or schedule the scan on specific days of your menstrual cycle.",
                },
              },
              {
                "@type": "Question",
                name: "Are infertility scans safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, infertility scans use ultrasound technology, which is safe, non-invasive, and free from radiation exposure.",
                },
              },
              {
                "@type": "Question",
                name: "When will I receive infertility scan results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Scan results are often discussed immediately after the procedure or shared shortly thereafter by your doctor.",
                },
              },
              {
                "@type": "Question",
                name: "Can infertility scans help in planning treatment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, infertility scans provide important information that helps doctors plan appropriate fertility treatments or further investigations.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for Infertility Scans in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics in Girinagar offers advanced ultrasound equipment, experienced radiologists, accurate reporting, and compassionate patient care for infertility evaluation.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Infertility Scans in Girinagar"
          para="Provide precise reproductive insights, guiding effective treatment, improving conception chances, and supporting your fertility journey."
          img={infertilityScan}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />

            <InfertilityScanHead />
            <div className="component-mainContent">
              <InfertilityScanExpect />
              <InfertilityScanPrepare />
              <ServiceBilling />
              <ServiceBook />
            </div>
          </div>
          <div className="component-sidebar">
            <ServiceSidebarBrochure />
            <ServiceSidebarLinks />
          </div>
        </div>
        <ServiceMap />
        <BloodTestCities />
        <InfertilityScanService />
        <HomeWhy />
        <HomeTestimonial />
        <InfertilityScanFaq />
        <InfertilityScanContent />
      </div>
    </>
  );
}

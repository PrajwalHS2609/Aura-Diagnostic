import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import USGGuidedProcedureService from "../../components/ServicePages/USGGuidedProcedure/USGGuidedProcedureService";
import USGGuided from "./../../Images/USGGuidedProcedureServicesBanner/USG-Guided-Procedure.png";
import USGGuidedProcedureHead from "../../components/ServicePages/USGGuidedProcedure/USGGuidedProcedureHead";
import USGGuidedProcedureExpect from "../../components/ServicePages/USGGuidedProcedure/USGGuidedProcedureExpect";
import USGGuidedProcedurePrepare from "../../components/ServicePages/USGGuidedProcedure/USGGuidedProcedurePrepare";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import USGGuidedProcedureContent from "../../components/ServicePages/USGGuidedProcedure/USGGuidedProcedureContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import USGGuidedProcedureFaq from "../../components/ServicePages/USGGuidedProcedure/USGGuidedProcedureFaq";
import Script from "next/script";
export const metadata = {
  title:
    "USG Guided Procedure in Girinagar, Bangalore | Ultrasound Test near Me",
  description:
    "USG Guided Procedure in Girinagar, Bangalore. Is a minimally invasive technique in which ultrasound imaging is used in real time to accurately guide needles or instruments to a specific area inside the body.",
  canonical:
    "https://auradiagnostics.co.in/usg-guided-procedure-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function USGGuidedProcedure() {
  return (
    <>
      <Script
        id="pregnancy-dating-scan-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a USG Guided Procedure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A USG Guided Procedure uses ultrasound imaging to guide doctors accurately during medical procedures such as biopsies, fluid aspirations, or injections.",
                },
              },
              {
                "@type": "Question",
                name: "Why has my doctor advised a USG Guided Procedure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Doctors recommend USG guided procedures for precise needle placement, improved accuracy, reduced risk, and safer outcomes.",
                },
              },
              {
                "@type": "Question",
                name: "Is a USG Guided Procedure painful?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The procedure usually causes minimal discomfort. Local anesthesia is commonly used to reduce pain during the process.",
                },
              },
              {
                "@type": "Question",
                name: "How safe is a USG Guided Procedure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "USG guided procedures are very safe as real-time ultrasound guidance helps avoid nearby organs, nerves, and blood vessels.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need any preparation before the procedure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Preparation depends on the procedure. You may be asked to fast or stop certain medications. Aura Diagnostics will provide clear instructions.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a USG Guided Procedure take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most USG guided procedures take about 15 to 30 minutes, depending on the type of intervention.",
                },
              },
              {
                "@type": "Question",
                name: "Will I need hospital admission after the procedure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In most cases, hospital admission is not required, and patients can go home after a short observation period.",
                },
              },
              {
                "@type": "Question",
                name: "Are there any risks or side effects?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Risks are minimal and may include mild pain or bruising at the site. Serious complications are very rare.",
                },
              },
              {
                "@type": "Question",
                name: "When will I get the results of the USG Guided Procedure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Imaging results are often immediate. Lab or biopsy reports may take a few days, depending on the test.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics in Girinagar for USG Guided Procedures?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics offers advanced ultrasound technology, experienced radiologists, strict safety protocols, and patient-focused care in Girinagar.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="USG Guided Procedure in Girinagar"
          para="Offers quick, accurate cell diagnosis, enabling early detection and guiding effective, timely treatment decisions."
          img={USGGuided}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />

            <USGGuidedProcedureHead />
            <div className="component-mainContent">
              <USGGuidedProcedureExpect />
              <USGGuidedProcedurePrepare />
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
        <USGGuidedProcedureService />
        <BloodTestCities />
        <HomeWhy />
        <HomeTestimonial />
        <USGGuidedProcedureFaq />
        <USGGuidedProcedureContent />
      </div>
    </>
  );
}

import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import fnac from "./../../Images/USGGuidedProcedureServicesBanner/Fine-Needle-Aspiration-Cytology.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import FNACHead from "../../components/ServicePages/FNAC/FNACHead";
import FNACPrepare from "../../components/ServicePages/FNAC/FNACPrepare";
import FNACExpect from "../../components/ServicePages/FNAC/FNACExpect";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import FNACContent from "../../components/ServicePages/FNAC/FNACContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import FNACFaq from "../../components/ServicePages/FNAC/FNACFaq";
import Script from "next/script";
export const metadata = {
  title: "FNAC Test in Girinagar, Bangalore | FNAC Test near Me",
  description:
    "FNAC in Girinagar, Bangalore. Is a minimally invasive diagnostic procedure used to examine lumps, swellings, or abnormal tissue growths in the body.",
  canonical: "https://auradiagnostics.co.in/fnac-test-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function FNAC() {
  return (
    <>
      <Script
        id="fnac-test-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is an FNAC test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "FNAC (Fine Needle Aspiration Cytology) is a diagnostic test where a thin needle is used to collect cells from a lump or swelling for laboratory examination.",
                },
              },
              {
                "@type": "Question",
                name: "Why has my doctor recommended an FNAC test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Doctors recommend FNAC to identify the nature of a lump or swelling and to determine whether it is benign, inflammatory, or requires further investigation.",
                },
              },
              {
                "@type": "Question",
                name: "Is the FNAC test painful?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The FNAC test involves minimal discomfort, similar to a small injection, and is generally well tolerated by patients.",
                },
              },
              {
                "@type": "Question",
                name: "How long does the FNAC procedure take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The FNAC procedure usually takes about 10 to 15 minutes, including preparation time.",
                },
              },
              {
                "@type": "Question",
                name: "Is the FNAC test safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, FNAC is a safe procedure with minimal risks. Side effects, if any, are usually mild and temporary.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need any preparation before an FNAC test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No special preparation is usually required. Patients should inform the doctor if they are on blood-thinning medications.",
                },
              },
              {
                "@type": "Question",
                name: "Can I go home after the FNAC test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, FNAC is an outpatient procedure, and patients can return home and resume normal activities shortly after the test.",
                },
              },
              {
                "@type": "Question",
                name: "When will I receive the FNAC test results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "FNAC test results are typically available within 24 to 48 hours, depending on the analysis required.",
                },
              },
              {
                "@type": "Question",
                name: "Are there any side effects after an FNAC test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Some patients may experience mild pain, swelling, or bruising at the needle site, which usually resolves quickly.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for FNAC Test in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics provides FNAC tests in Girinagar with experienced specialists, accurate reporting, advanced equipment, and patient-focused care.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="FNAC Test in Girinagar "
          para="Offers quick, accurate cell diagnosis, enabling early detection and guiding effective, timely treatment decisions."
          img={fnac}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <FNACHead />
            <div className="component-mainContent">
              <FNACExpect />
              <FNACPrepare />
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
        <HomeWhy />
        <HomeTestimonial />
        <FNACFaq />
        <FNACContent />
      </div>
    </>
  );
}

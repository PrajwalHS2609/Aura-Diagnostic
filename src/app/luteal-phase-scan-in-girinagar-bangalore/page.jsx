import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import leutealScan from "./../../Images/InfertilityScanServicesBanner/Leuteal-Phase-Scan.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import LeutealPhaseScanExpect from "../../components/ServicePages/LeutealPhaseScan/LeutealPhaseScanExpect";
import LeutealPhaseScanHead from "../../components/ServicePages/LeutealPhaseScan/LeutealPhaseScanHead";
import LeutealPhaseScanPrepare from "../../components/ServicePages/LeutealPhaseScan/LeutealPhaseScanPrepare";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import LeutealPhaseScanContent from "../../components/ServicePages/LeutealPhaseScan/LeutealPhaseScanContent";
import LeutealPhaseScanFaq from "../../components/ServicePages/LeutealPhaseScan/LeutealPhaseScanFaq";
import Script from "next/script";
export const metadata = {
  title: "Luteal Phase Scan in Girinagar, Bangalore | Ultrasound Scan near Me",
  description:
    "Luteal Phase Scan in Girinagar, Bangalore. Is an ultrasound performed during the second half of a woman’s menstrual cycle, typically after ovulation.",
  canonical:
    "https://auradiagnostics.co.in/luteal-phase-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function LeutealPhaseScan() {
  return (
    <>
      <Script
        id="luteal-phase-scan-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a Luteal Phase Scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Luteal Phase Scan is an ultrasound performed after ovulation to assess the uterus, ovaries, and hormonal response during the second half of the menstrual cycle.",
                },
              },
              {
                "@type": "Question",
                name: "Why is a Luteal Phase Scan recommended?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It helps doctors evaluate whether the uterine lining is healthy and thick enough to support implantation and early pregnancy.",
                },
              },
              {
                "@type": "Question",
                name: "When is the Luteal Phase Scan usually done?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The scan is typically done between day 19 and day 24 of the menstrual cycle, depending on the timing of ovulation.",
                },
              },
              {
                "@type": "Question",
                name: "Who needs a Luteal Phase Scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is recommended for women trying to conceive, those with repeated implantation failure, irregular menstrual cycles, or hormonal imbalance concerns.",
                },
              },
              {
                "@type": "Question",
                name: "Is the Luteal Phase Scan safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, the Luteal Phase Scan is completely safe as it uses ultrasound technology and does not involve radiation.",
                },
              },
              {
                "@type": "Question",
                name: "Does the Luteal Phase Scan cause pain?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The scan is usually painless. Mild discomfort may occur during a transvaginal scan, but it is brief and well tolerated.",
                },
              },
              {
                "@type": "Question",
                name: "What does the doctor check during the scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The scan checks endometrial thickness, ovarian condition, corpus luteum formation, and blood flow to confirm proper luteal phase support.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need any preparation before the Luteal Phase Scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Usually no special preparation is required. You may be advised to have an empty bladder before the scan.",
                },
              },
              {
                "@type": "Question",
                name: "How long does the Luteal Phase Scan take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The scan generally takes about 15 to 25 minutes, depending on individual findings.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for a Luteal Phase Scan in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics offers advanced ultrasound technology, accurate reporting, experienced specialists, and patient-focused care in Girinagar.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Leuteal Phase Scan in Girinagar"
          para="Assesses uterine readiness, supporting implantation, fertility planning, and healthier reproductive cycle outcomes."
          img={leutealScan}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <LeutealPhaseScanHead />
            <div className="component-mainContent">
              <LeutealPhaseScanExpect />
              <LeutealPhaseScanPrepare />
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
        <LeutealPhaseScanFaq />
        <LeutealPhaseScanContent />
      </div>
    </>
  );
}

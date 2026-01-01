import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import datingScan from "./../../Images/PregnancyScanServiceBanner/Pregnancy-Dating-Scan.png";
import DatingScanHead from "../../components/ServicePages/DatingScan/DatingScanHead";
import DatingScanExpect from "../../components/ServicePages/DatingScan/DatingScanExpect";
import DatingScanPrepare from "../../components/ServicePages/DatingScan/DatingScanPrepare";
import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import DatingScanContent from "../../components/ServicePages/DatingScan/DatingScanContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import DatingScanFaq from "../../components/ServicePages/DatingScan/DatingScanFaq";
import Script from "next/script";

export const metadata = {
  title: "Pregnancy Dating Scan in Girinagar, Bangalore | Fetal Scan near Me",
  description:
    "Pregnancy Dating Scan in Girinagar, Bangalore. Is an early pregnancy ultrasound performed to determine the gestational age of the baby and calculate the expected due date.",
  canonical:
    "https://auradiagnostics.co.in/pregnancy-dating-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function DatingScan() {
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
                name: "What is a dating scan and why is it needed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A dating scan is an early pregnancy ultrasound that confirms pregnancy and accurately determines how many weeks pregnant you are.",
                },
              },
              {
                "@type": "Question",
                name: "When should I take a dating scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A dating scan is usually recommended between 6 to 9 weeks of pregnancy for the most accurate results.",
                },
              },
              {
                "@type": "Question",
                name: "Is a dating scan safe for the mother and baby?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, dating scans use ultrasound technology and are completely safe for both the mother and the baby.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need any preparation before the dating scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You may be advised to have a partially full bladder, especially for an abdominal scan. Aura Diagnostics will guide you before the appointment.",
                },
              },
              {
                "@type": "Question",
                name: "Is the dating scan done abdominally or vaginally?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Depending on how early the pregnancy is, the scan may be done abdominally or through a safe and painless transvaginal method.",
                },
              },
              {
                "@type": "Question",
                name: "Will the dating scan detect the baby's heartbeat?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In most cases, the dating scan can detect and confirm the fetal heartbeat, offering reassurance about pregnancy viability.",
                },
              },
              {
                "@type": "Question",
                name: "How accurate is a dating scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dating scans are highly accurate in early pregnancy and help determine the expected due date reliably.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a dating scan take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The dating scan procedure usually takes about 10 to 15 minutes.",
                },
              },
              {
                "@type": "Question",
                name: "Will I receive the dating scan report on the same day?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Aura Diagnostics typically provides dating scan reports on the same day or shortly after the scan.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for a dating scan in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics offers experienced radiologists, advanced ultrasound equipment, accurate reporting, and a caring environment for expectant mothers.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Dating Scan in Girinagar"
          para="Accurate dating scans determine pregnancy age, confirm fetal growth, and ensure early guidance for expectant parents."
          img={datingScan}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <DatingScanHead />
            <div className="component-mainContent">
              <DatingScanExpect />
              <DatingScanPrepare />
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
        <DatingScanFaq />
        <DatingScanContent />
      </div>
    </>
  );
}

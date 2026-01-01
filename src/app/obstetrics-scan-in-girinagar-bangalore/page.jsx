import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import ObstetricsExpect from "../../components/ServicePages/Obstetrics/ObstetricsExpect";
import ObstetricsHead from "../../components/ServicePages/Obstetrics/ObstetricsHead";
import ObstetricsPrepare from "../../components/ServicePages/Obstetrics/ObstetricsPrepare";
import ObstetricsService from "../../components/ServicePages/Obstetrics/ObstetricsService";
import obstetricScans from "./../../Images/ObstetricScanServiceBanner/Obstetric-Scans.png";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import ObstetricsContent from "../../components/ServicePages/Obstetrics/ObstetricsContent";
import BloodTestCities from "./../../components/ServicePages/BloodTest/BloodTestCities";
import ObstetricsFaq from "../../components/ServicePages/Obstetrics/ObstetricsFaq";
import Script from "next/script";
export const metadata = {
  title: "Obstetrics Scan in Girinagar, Bangalore | Obstetrics Scans near Me",
  description:
    "Obstetrics Scan in Girinagar, Bangalore. Is a specialized branch of medicine that focuses on pregnancy, childbirth, and the postpartum period.",
  canonical:
    "https://auradiagnostics.co.in/obstetrics-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function Obstetrics() {
  return (
    <>
      <Script
        id="obstetrics-scan-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What are obstetric scans?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Obstetric scans are ultrasound examinations performed during pregnancy to monitor the baby’s growth, development, and overall well-being.",
                },
              },
              {
                "@type": "Question",
                name: "What types of obstetric scans are available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Obstetric scans include dating scans, NT scans, anomaly scans, growth scans, and 3D/4D fetal scans, depending on the stage of pregnancy.",
                },
              },
              {
                "@type": "Question",
                name: "Why are obstetric scans important during pregnancy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "These scans help track fetal development, confirm due dates, detect possible concerns early, and ensure the health of both mother and baby.",
                },
              },
              {
                "@type": "Question",
                name: "Are obstetric scans safe for the mother and baby?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, obstetric scans use ultrasound technology and are completely safe and non-invasive, with no radiation exposure.",
                },
              },
              {
                "@type": "Question",
                name: "How long does an obstetric scan take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most obstetric scans take about 15 to 30 minutes, depending on the type of scan and the baby’s position.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need any preparation before an obstetric scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Preparation depends on the type of scan. Some scans may require a partially full bladder. Aura Diagnostics will guide you before your appointment.",
                },
              },
              {
                "@type": "Question",
                name: "Will I receive the obstetric scan report on the same day?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Aura Diagnostics usually provides obstetric scan reports on the same day or shortly after the scan.",
                },
              },
              {
                "@type": "Question",
                name: "Can obstetric scans detect pregnancy-related complications?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Obstetric scans can help identify growth issues, placental position, amniotic fluid levels, and certain abnormalities for timely medical care.",
                },
              },
              {
                "@type": "Question",
                name: "Can family members attend the obstetric scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In most cases, one or two family members are allowed to attend, making the experience comfortable and reassuring for expectant parents.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for obstetric scans in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics offers experienced radiologists, advanced ultrasound technology, accurate reports, and a caring, patient-friendly environment for pregnancy care.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Obstetric Scans in Girinagar"
          para="Accurate scans for healthy pregnancy monitoring, ensuring, early detection, and confident care throughout."
          img={obstetricScans}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />

            <ObstetricsHead />
            <div className="component-mainContent">
              <ObstetricsExpect />
              <ObstetricsPrepare />
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
        <ObstetricsService />
        <BloodTestCities />
        <HomeWhy />
        <HomeTestimonial />
        <ObstetricsFaq />
        <ObstetricsContent />
      </div>
    </>
  );
}

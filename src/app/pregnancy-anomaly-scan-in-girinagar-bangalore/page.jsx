import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import anomaly from "./../../Images/PregnancyScanServiceBanner/Pregnancy-Anomaly-Scan.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import AnomalyScanHead from "../../components/ServicePages/AnomalyScan/AnomalyScanHead";
import AnomalyScanExpect from "../../components/ServicePages/AnomalyScan/AnomalyScanExpect";
import AnomalyScanPrepare from "../../components/ServicePages/AnomalyScan/AnomalyScanPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import AnomalyScanContent from "../../components/ServicePages/AnomalyScan/AnomalyScanContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import AnomalyScanFaq from "../../components/ServicePages/AnomalyScan/AnomalyScanFaq";
import Script from "next/script";

export const metadata = {
  title: "Pregnancy Anomaly Scan in Girinagar, Bangalore | Fetal Scans near Me",
  description:
    "Pregnancy Anomaly Scan in Girinagar, Bangalore. The mid-pregnancy or level-2 ultrasound, is a detailed examination performed between 18 to 22 weeks of pregnancy to assess the baby’s overall development.",
  canonical:
    "https://auradiagnostics.co.in/pregnancy-anomaly-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing, Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function AnomalyScan() {
  return (
    <>
      <Script
        id="pregnancy-anomaly-scan-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is an anomaly scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An anomaly scan is a detailed pregnancy ultrasound that checks the baby’s organs, growth, and physical development to identify any structural abnormalities.",
                },
              },
              {
                "@type": "Question",
                name: "When is an anomaly scan usually done?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An anomaly scan is typically performed between 18 to 22 weeks of pregnancy for accurate evaluation of fetal development.",
                },
              },
              {
                "@type": "Question",
                name: "Why is an anomaly scan important during pregnancy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This scan helps assess the baby’s organs, spine, brain, heart, limbs, and overall growth, enabling early detection of any developmental concerns.",
                },
              },
              {
                "@type": "Question",
                name: "Is an anomaly scan safe for the mother and baby?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, anomaly scans use ultrasound technology and are completely safe and non-invasive for both the mother and the baby.",
                },
              },
              {
                "@type": "Question",
                name: "How long does an anomaly scan take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The anomaly scan usually takes about 20 to 30 minutes, depending on the baby’s position and movements.",
                },
              },
              {
                "@type": "Question",
                name: "Is any preparation required before the anomaly scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In most cases, no special preparation is required. Aura Diagnostics will inform you in advance if any preparation is needed.",
                },
              },
              {
                "@type": "Question",
                name: "Will the anomaly scan reveal the baby’s gender?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. As per Indian medical regulations, gender determination is strictly not disclosed during the anomaly scan.",
                },
              },
              {
                "@type": "Question",
                name: "What if an abnormality is detected during the scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If any concern is identified, the radiologist will explain it clearly and may suggest follow-up scans or consultation with your doctor.",
                },
              },
              {
                "@type": "Question",
                name: "Will I receive the anomaly scan report on the same day?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Aura Diagnostics usually provides anomaly scan reports on the same day or shortly after the scan.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for an anomaly scan in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics offers experienced radiologists, advanced ultrasound technology, accurate reports, and a caring, comfortable environment for expectant mothers.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Anomaly Scan in Girinagar"
          para="It ensure healthy fetal development, detecting abnormalities early for confident, well-informed pregnancy care."
          img={anomaly}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <AnomalyScanHead />
            <div className="component-mainContent">
              <AnomalyScanExpect />
              <AnomalyScanPrepare />
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
        <AnomalyScanFaq />
        <AnomalyScanContent />
      </div>
    </>
  );
}

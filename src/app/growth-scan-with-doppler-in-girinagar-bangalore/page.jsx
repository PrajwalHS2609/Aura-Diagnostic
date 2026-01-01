import GrowthScanHead from "../../components/ServicePages/GrowthScan/GrowthScanHead";
import GrowthScanExpect from "../../components/ServicePages/GrowthScan/GrowthScanExpect";
import GrowthScanPrepare from "../../components/ServicePages/GrowthScan/GrowthScanPrepare";
import growthDoppler from "./../../Images/ObstetricScanServiceBanner/growthDoppler.png";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import GrowthScanContent from "../../components/ServicePages/GrowthScan/GrowthScanContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import GrowthScanFaq from "../../components/ServicePages/GrowthScan/GrowthScanFaq";
import Script from "next/script";
export const metadata = {
  title:
    "Growth Scan with Doppler in Girinagar, Bangalore | Fetal Growth Scans near Me",
  description:
    "Growth Scan with Doppler in Girinagar, Bangalore. Is a specialized pregnancy ultrasound performed in the second or third trimester to monitor the baby’s growth, wellbeing, and blood circulation.",
  canonical:
    "https://auradiagnostics.co.in/growth-scan-with-doppler-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function GrowthScan() {
  return (
    <>
      <Script
        id="growth-scan-with-doppler-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a Growth Scan with Doppler?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Growth Scan with Doppler is an advanced pregnancy ultrasound used to assess the baby’s growth, development, and blood flow between the placenta and the baby.",
                },
              },
              {
                "@type": "Question",
                name: "Why is a Growth Scan with Doppler important during pregnancy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It helps doctors monitor the baby’s growth and ensure proper blood circulation, oxygen, and nutrient supply, especially in the later stages of pregnancy.",
                },
              },
              {
                "@type": "Question",
                name: "When is a Growth Scan with Doppler usually recommended?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This scan is typically recommended after 28 weeks of pregnancy or earlier if the pregnancy is considered high-risk.",
                },
              },
              {
                "@type": "Question",
                name: "Is the Growth Scan with Doppler safe for the baby?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, the scan is completely safe. It uses ultrasound technology and does not involve radiation, making it safe for both mother and baby.",
                },
              },
              {
                "@type": "Question",
                name: "What does the Doppler scan measure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Doppler scan measures blood flow in the umbilical cord, placenta, and baby’s brain to ensure healthy circulation.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a Growth Scan with Doppler take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The scan usually takes about 20 to 30 minutes, depending on the baby’s position and the level of assessment required.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need any preparation before the scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In most cases, no special preparation is needed. Aura Diagnostics will inform you if any specific preparation is required.",
                },
              },
              {
                "@type": "Question",
                name: "Will I receive the Growth Scan with Doppler report on the same day?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Aura Diagnostics generally provides accurate scan reports on the same day or shortly after the examination.",
                },
              },
              {
                "@type": "Question",
                name: "Who should undergo a Growth Scan with Doppler?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is especially recommended for high-risk pregnancies, including conditions like diabetes, high blood pressure, twin pregnancies, or growth concerns.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for Growth Scan with Doppler in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics offers advanced Doppler technology, experienced radiologists, accurate reporting, and a comfortable, patient-focused diagnostic environment in Girinagar.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Growth Scan with Doppler in Girinagar"
          para="Advanced Doppler growth scan ensures baby’s health, blood flow, nourishment, timely monitoring, and complete pregnancy reassurance."
          img={growthDoppler}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <GrowthScanHead />
            <div className="component-mainContent">
              <GrowthScanExpect />
              <GrowthScanPrepare />
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
        <GrowthScanFaq />
        <GrowthScanContent />
      </div>
    </>
  );
}

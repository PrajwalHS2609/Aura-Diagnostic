import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import carotidScan from "./../../Images/DopplerScanBanner/Carotid-Doppler-Scan.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import CarotidDopplerHead from "../../components/ServicePages/CarotidDoppler/CarotidDopplerHead";
import CarotidDopplerExpect from "../../components/ServicePages/CarotidDoppler/CarotidDopplerExpect";
import CarotidDopplerPrepare from "../../components/ServicePages/CarotidDoppler/CarotidDopplerPrepare";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import CarotidDopplerContent from "../../components/ServicePages/CarotidDoppler/CarotidDopplerContent";
import CarotidDopplerFaq from "../../components/ServicePages/CarotidDoppler/CarotidDopplerFaq";
import Script from "next/script";

export const metadata = {
  title: "Carotid Doppler Scan in Girinagar, Bangalore | Doppler Scan near Me",
  description:
    "Carotid Doppler Scan in Girinagar, Bangalore. Is a specialized ultrasound test used to evaluate the carotid arteries, the major blood vessels on both sides of the neck that supply oxygen-rich blood to the brain.",
  canonical:
    "https://auradiagnostics.co.in/carotid-doppler-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function CarotidDoppler() {
  return (
    <>
      <Script
        id="carotid-doppler-scan-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a Carotid Doppler Scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Carotid Doppler Scan is a painless ultrasound test that checks blood flow in the carotid arteries, which supply blood to the brain.",
                },
              },
              {
                "@type": "Question",
                name: "Why is a Carotid Doppler Scan advised?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Doctors recommend this scan to detect narrowing or blockages in the carotid arteries, which can increase the risk of stroke.",
                },
              },
              {
                "@type": "Question",
                name: "Who should undergo a Carotid Doppler Scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is advised for patients with dizziness, frequent headaches, stroke symptoms, high blood pressure, diabetes, or a history of heart disease.",
                },
              },
              {
                "@type": "Question",
                name: "Is the Carotid Doppler Scan safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, the scan is completely safe. It uses sound waves, not radiation, and is suitable for all age groups.",
                },
              },
              {
                "@type": "Question",
                name: "Does the scan cause pain or discomfort?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, the test is painless. You may feel slight pressure when the probe moves over your neck area.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a Carotid Doppler Scan take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The scan usually takes about 20 to 30 minutes to complete.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need any preparation before the scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In most cases, no special preparation is needed. You may be advised to avoid wearing tight collars or necklaces.",
                },
              },
              {
                "@type": "Question",
                name: "What conditions can be detected through this scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It can detect artery narrowing, plaque buildup, reduced blood flow, or blood clots in the carotid arteries.",
                },
              },
              {
                "@type": "Question",
                name: "When will I receive my scan report?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "At Aura Diagnostics in Girinagar, reports are generally available the same day or within 24 hours.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for a Carotid Doppler Scan in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics offers advanced Doppler technology, experienced radiologists, accurate reports, and a patient-friendly diagnostic environment.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Carotid Doppler Scan in Girinagar"
          para="Detects artery blockages early, ensuring better stroke prevention and improved vascular health monitoring."
          img={carotidScan}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <CarotidDopplerHead />
            <div className="component-mainContent">
              <CarotidDopplerExpect />
              <CarotidDopplerPrepare />
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
        <CarotidDopplerFaq />
        <CarotidDopplerContent />
      </div>
    </>
  );
}

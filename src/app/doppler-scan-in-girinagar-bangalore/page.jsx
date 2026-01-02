import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import dopplerScan from "../../Images/DopplerScanBanner/Doppler-Scan.png";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import DopplerScanExpect from "../../components/ServicePages/DopplerScan/DopplerScanExpect";
import DopplerScanService from "../../components/ServicePages/DopplerScan/DopplerScanService";
import DopplerScanPrepare from "../../components/ServicePages/DopplerScan/DopplerScanPrepare";
import DopplerScanHeader from "../../components/ServicePages/DopplerScan/DopplerScanHead";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import DopplerScanContent from "../../components/ServicePages/DopplerScan/DopplerScanContent";
import DopplerScanFaq from "../../components/ServicePages/DopplerScan/DopplerScanFaq";
import Script from "next/script";

export const metadata = {
  title: "Doppler Scan in Girinagar, Bangalore | Ultrasound Scan near Me",
  description:
    "Doppler Scan in Girinagar, Bangalore. Is a specialized ultrasound technique used to measure the flow of blood through vessels, including major arteries and veins.",
  canonical:
    "https://auradiagnostics.co.in/doppler-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function DopplerPage() {
  return (
    <>
      <Script
        id="doppler-scan-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a Doppler Scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Doppler Scan is a specialized ultrasound test that evaluates blood flow in arteries and veins to identify circulation problems or abnormalities.",
                },
              },
              {
                "@type": "Question",
                name: "Why is a Doppler Scan recommended?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Doppler Scan is recommended to assess blood circulation issues, pregnancy-related concerns, varicose veins, limb pain, swelling, or suspected vascular conditions.",
                },
              },
              {
                "@type": "Question",
                name: "Is a Doppler Scan safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Doppler Scans are completely safe as they use sound waves instead of radiation, making them suitable for all age groups, including pregnant women.",
                },
              },
              {
                "@type": "Question",
                name: "Does a Doppler Scan cause pain?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, a Doppler Scan is painless. You may only feel mild pressure as the probe moves over the examined area.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a Doppler Scan take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Doppler Scan typically takes 20 to 40 minutes, depending on the area being examined.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need any preparation before the Doppler Scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most Doppler Scans do not require special preparation. In some cases, fasting or avoiding caffeine may be advised.",
                },
              },
              {
                "@type": "Question",
                name: "Which conditions can be detected with a Doppler Scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Doppler Scans can detect blocked or narrowed blood vessels, blood clots, poor circulation, placental blood flow issues, and vascular abnormalities.",
                },
              },
              {
                "@type": "Question",
                name: "Can a Doppler Scan be done during pregnancy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Doppler Scans are commonly performed during pregnancy to monitor blood flow to the baby, placenta, and umbilical cord.",
                },
              },
              {
                "@type": "Question",
                name: "When will I receive my Doppler Scan report?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "At Aura Diagnostics, Doppler Scan reports are usually provided on the same day or within 24 hours.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for Doppler Scan in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics in Girinagar offers advanced Doppler technology, experienced radiologists, accurate reporting, and patient-focused care.",
                },
              },
            ],
          }),
        }}
      />
      <div>
        <ServiceHeader
          title="Doppler Scan in Girinagar"
          para="Provides accurate blood flow assessment, ensuring early detection, better monitoring, and improved pregnancy and vascular health."
          img={dopplerScan}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />

            <DopplerScanHeader />
            <div className="component-mainContent">
              <DopplerScanExpect />
              <DopplerScanPrepare />
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
        <DopplerScanService />
        <BloodTestCities />
        <HomeWhy />
        <HomeTestimonial />
        <DopplerScanFaq />
        <DopplerScanContent />
      </div>
    </>
  );
}

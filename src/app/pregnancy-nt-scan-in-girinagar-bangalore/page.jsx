import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import ntScan from "./../../Images/PregnancyScanServiceBanner/NT-Scan.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import NtScanHead from "../../components/ServicePages/NtScan/NtScanHead";
import NtScanExpect from "../../components/ServicePages/NtScan/NtScanExpect";
import NtScanPrepare from "../../components/ServicePages/NtScan/NtScanPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import NtScanContent from "../../components/ServicePages/NtScan/NtScanContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import NtScanFaq from "../../components/ServicePages/NtScan/NtScanFaq";
import Script from "next/script";
export const metadata = {
  title: "Pregnancy NT Scan in Girinagar, Bangalore | Fetal Scans near Me",
  description:
    "Pregnancy NT Scan in Girinagar, Bangalore. Is an essential early pregnancy ultrasound performed between 11 to 14 weeks to assess the baby’s risk of chromosomal abnormalities. ",
  canonical:
    "https://auradiagnostics.co.in/pregnancy-nt-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function NtScan() {
  return (
    <>
      <Script
        id="pregnancy-nt-scan-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is an NT scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An NT (Nuchal Translucency) scan is an early pregnancy ultrasound that measures the fluid behind the baby’s neck to assess the risk of chromosomal conditions.",
                },
              },
              {
                "@type": "Question",
                name: "When should an NT scan be done?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The NT scan is usually performed between 11 weeks to 13 weeks and 6 days of pregnancy for accurate screening.",
                },
              },
              {
                "@type": "Question",
                name: "Why is an NT scan important during pregnancy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The NT scan helps screen for chromosomal conditions such as Down syndrome and assesses early fetal development.",
                },
              },
              {
                "@type": "Question",
                name: "Is an NT scan safe for the baby and mother?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, NT scans use ultrasound technology and are completely safe and non-invasive for both the mother and the baby.",
                },
              },
              {
                "@type": "Question",
                name: "How long does an NT scan take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The NT scan procedure usually takes about 15 to 20 minutes, depending on the baby’s position.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to prepare before the NT scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You may be advised to have a partially full bladder. Aura Diagnostics will provide clear instructions before the scan.",
                },
              },
              {
                "@type": "Question",
                name: "Does an NT scan confirm genetic conditions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, the NT scan is a screening test. If higher risk is detected, further diagnostic tests may be recommended by your doctor.",
                },
              },
              {
                "@type": "Question",
                name: "Will I receive the NT scan report on the same day?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Aura Diagnostics usually provides NT scan reports on the same day or shortly after the scan.",
                },
              },
              {
                "@type": "Question",
                name: "Can the NT scan reveal the baby’s gender?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. As per Indian medical regulations, gender determination is strictly not disclosed during pregnancy scans.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for an NT scan in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics provides experienced radiologists, advanced ultrasound technology, accurate screening reports, and a caring environment for expectant mothers.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Pregnancy NT Scans in Girinagar"
          para="Accurate NT scans for early screening, ensuring healthy pregnancy development with expert care and reassurance."
          img={ntScan}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <NtScanHead />
            <div className="component-mainContent">
              <NtScanExpect />
              <NtScanPrepare />
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
        <NtScanFaq />
        <NtScanContent />
      </div>
    </>
  );
}

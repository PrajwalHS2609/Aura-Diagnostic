import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import AdvancedUSGService from "../../components/ServicePages/AdvancedUSG/AdvancedUSGService";
import advanceUsg from "./../../Images/AdvancedUSGServices/advance-usg-scan.jpg";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import AdvancedUSGExpect from "../../components/ServicePages/AdvancedUSG/AdvancedUSGExpect";
import AdvancedUSGPrepare from "../../components/ServicePages/AdvancedUSG/AdvancedUSGPrepare";
import AdvancedUSGHead from "../../components/ServicePages/AdvancedUSG/AdvancedUSGHead";
import AdvancedUSGContent from "../../components/ServicePages/AdvancedUSG/AdvancedUSGContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import AdvancedUSGFaq from "../../components/ServicePages/AdvancedUSG/AdvancedUSGFaq";
import Script from "next/script";

export const metadata = {
  title: "Advanced USG Test in Girinagar, Bangalore | Ultrasound Test near Me",
  description:
    "Advanced USG Test in Girinagar, Bangalore. Is a high-precision imaging technique used to capture detailed visuals of internal organs, tissues, and fetal development",
  canonical:
    "https://auradiagnostics.co.in/advanced-usg-test-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function AdvancedUSG() {
  return (
    <>
      <Script
        id="advanced-usg-test-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is an Advanced USG test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An Advanced USG (Ultrasound Scan) is a detailed imaging test that provides high-resolution views of internal organs, tissues, blood flow, or fetal development for accurate diagnosis.",
                },
              },
              {
                "@type": "Question",
                name: "Why is an Advanced USG test recommended?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Doctors recommend an Advanced USG test for precise evaluation of medical conditions, pregnancy monitoring, organ health assessment, or when more detailed imaging is required.",
                },
              },
              {
                "@type": "Question",
                name: "Is the Advanced USG test safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Advanced USG is completely safe. It uses sound waves instead of radiation, making it suitable for all age groups, including pregnant women.",
                },
              },
              {
                "@type": "Question",
                name: "Does the Advanced USG test cause pain?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, the Advanced USG test is non-invasive and painless. You may only feel mild pressure from the probe during the scan.",
                },
              },
              {
                "@type": "Question",
                name: "How long does an Advanced USG test take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An Advanced USG test usually takes between 20 to 45 minutes, depending on the scan type and the area being examined.",
                },
              },
              {
                "@type": "Question",
                name: "Is any preparation required before the Advanced USG test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Preparation depends on the type of scan. Some Advanced USG tests may require fasting or a full bladder. Aura Diagnostics provides clear instructions before the appointment.",
                },
              },
              {
                "@type": "Question",
                name: "Who should undergo an Advanced USG test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Advanced USG is recommended for patients with specific symptoms, pregnant women needing detailed fetal assessment, or individuals requiring precise organ or vascular evaluation.",
                },
              },
              {
                "@type": "Question",
                name: "When will I receive my Advanced USG test report?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most Advanced USG reports are available on the same day or within 24 hours, depending on the type of scan and clinical requirements.",
                },
              },
              {
                "@type": "Question",
                name: "Is Advanced USG testing available near Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Aura Diagnostics offers Advanced USG tests near Girinagar with modern equipment and experienced radiologists.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for Advanced USG in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics is known for advanced ultrasound technology, skilled specialists, accurate reporting, hygienic facilities, and patient-focused care.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Advanced USG Test in Girinagar"
          para="Delivers precise imaging, early diagnosis, expert guidance, and complete confidence in your health."
          img={advanceUsg}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />

            <AdvancedUSGHead />
            <div className="component-mainContent">
              <AdvancedUSGExpect />
              <AdvancedUSGPrepare />
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
        <AdvancedUSGService />
        <HomeWhy />
        <HomeTestimonial />
        <AdvancedUSGFaq />
        <AdvancedUSGContent />
      </div>
    </>
  );
}

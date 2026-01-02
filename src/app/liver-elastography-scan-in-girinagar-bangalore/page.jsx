import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import liver from "./../../Images/AdvancedUSGServices/Liver-Elastography-Scan.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import LiverElastographyHead from "../../components/ServicePages/LiverElastography/LiverElastographyHead";
import LiverElastographyExpect from "../../components/ServicePages/LiverElastography/LiverElastographyExpect";
import LiverElastographyPrepare from "../../components/ServicePages/LiverElastography/LiverElastographyPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import LiverElastographyContent from "../../components/ServicePages/LiverElastography/LiverElastographyContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import LiverElastographyFaq from "../../components/ServicePages/LiverElastography/LiverElastographyFaq";
import Script from "next/script";
export const metadata = {
  title:
    "Liver Elastography Scan in Girinagar, Bangalore | Ultrasound Test near Me",
  description:
    "Liver Elastography Scan in Girinagar, Bangalore. Is an advanced, non-invasive ultrasound technique used to measure the stiffness and elasticity of liver tissue.",
  canonical:
    "https://auradiagnostics.co.in/liver-elastography-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function LiverElastography() {
  return (
    <>
      <Script
        id="liver-elastography-scan-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a Liver Elastography test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Liver Elastography test is a non-invasive scan that measures liver stiffness to assess liver health and detect fibrosis or scarring without surgery.",
                },
              },
              {
                "@type": "Question",
                name: "Why is a Liver Elastography test recommended?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Doctors recommend this test to evaluate liver conditions such as fatty liver disease, hepatitis, cirrhosis, or long-term liver damage accurately and safely.",
                },
              },
              {
                "@type": "Question",
                name: "Is the Liver Elastography test painful?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, the test is completely painless and feels similar to a regular ultrasound with mild vibrations on the skin.",
                },
              },
              {
                "@type": "Question",
                name: "Is Liver Elastography safe for all patients?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it is a safe procedure that uses ultrasound waves and does not involve radiation, making it suitable for repeated monitoring.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to prepare before the Liver Elastography test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Patients are usually advised to fast for a few hours before the test. Aura Diagnostics will provide clear preparation instructions before the appointment.",
                },
              },
              {
                "@type": "Question",
                name: "How long does the Liver Elastography test take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Liver Elastography test typically takes about 10 to 20 minutes to complete.",
                },
              },
              {
                "@type": "Question",
                name: "What conditions can be detected using Liver Elastography?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It helps detect liver fibrosis, fatty liver disease, chronic liver disease, and progression of liver scarring without the need for a biopsy.",
                },
              },
              {
                "@type": "Question",
                name: "When will I receive my Liver Elastography report?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Reports are usually available on the same day or within 24 hours, depending on clinical requirements.",
                },
              },
              {
                "@type": "Question",
                name: "Is Liver Elastography available near Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Aura Diagnostics provides Liver Elastography testing near Girinagar using advanced ultrasound technology.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for Liver Elastography in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics offers accurate results, modern equipment, experienced radiologists, hygienic facilities, and patient-focused care.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Liver Elastography in Girinagar"
          para="Accurate scan detects stiffness early, ensuring timely diagnosis, better monitoring, and confident liver health management."
          img={liver}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <LiverElastographyHead />
            <div className="component-mainContent">
              <LiverElastographyExpect />
              <LiverElastographyPrepare />
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
        <LiverElastographyFaq />
        <LiverElastographyContent />
      </div>
    </>
  );
}

import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import fetalEchoScan from "./../../Images/ObstetricScanServiceBanner/Fetal-Echo.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import FetalEchoHead from "../../components/ServicePages/FetalEcho/FetalEchoHead";
import FetalEchoExpect from "../../components/ServicePages/FetalEcho/FetalEchoExpect";
import FetalEchoPrepare from "../../components/ServicePages/FetalEcho/FetalEchoPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import FetalEchoContent from "../../components/ServicePages/FetalEcho/FetalEchoContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import FetalEchoFaq from "../../components/ServicePages/FetalEcho/FetalEchoFaq";
import Script from "next/script";
export const metadata = {
  title: "Fetal Echo Test in Girinagar, Bangalore | Fetal Echo Test near Me",
  description:
    "Fetal Echo Test in Girinagar, Bangalore. Is a specialized ultrasound used to examine the structure and function of a baby’s heart during pregnancy. ",
  canonical:
    "https://auradiagnostics.co.in/fetal-echo-test-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function FetalEcho() {
  return (
    <>
      <Script
        id="fetal-echo-test-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a Fetal Echo scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Fetal Echo (Fetal Echocardiography) is a specialized ultrasound scan that evaluates the structure, function, and blood flow of a baby’s heart during pregnancy.",
                },
              },
              {
                "@type": "Question",
                name: "Why is a Fetal Echo scan important during pregnancy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Fetal Echo scan helps detect congenital heart conditions early, allowing doctors to plan appropriate care before or immediately after birth.",
                },
              },
              {
                "@type": "Question",
                name: "When should a Fetal Echo scan be done?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The best time to perform a Fetal Echo scan is between 18 and 24 weeks of pregnancy, when the baby’s heart is well developed.",
                },
              },
              {
                "@type": "Question",
                name: "Is a Fetal Echo scan safe for the mother and baby?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Fetal Echo scans are completely safe. They use ultrasound waves and do not involve radiation or invasive procedures.",
                },
              },
              {
                "@type": "Question",
                name: "Who is advised to undergo a Fetal Echo scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fetal Echo is recommended for high-risk pregnancies, including mothers with diabetes, hypertension, family history of heart defects, or abnormal findings in earlier scans.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a Fetal Echo scan take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Fetal Echo scan usually takes about 30 to 45 minutes, depending on the baby’s position and the level of detail required.",
                },
              },
              {
                "@type": "Question",
                name: "Is any special preparation required for a Fetal Echo scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No special preparation is generally required. You may be advised to carry previous scan reports for reference.",
                },
              },
              {
                "@type": "Question",
                name: "Will the Fetal Echo scan be painful?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, the scan is painless and non-invasive, similar to a routine pregnancy ultrasound.",
                },
              },
              {
                "@type": "Question",
                name: "When will I receive the Fetal Echo scan report?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In most cases, the Fetal Echo report is provided on the same day or within a short time after the scan.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for Fetal Echo in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics in Girinagar offers advanced ultrasound equipment, experienced specialists, accurate reporting, and compassionate care for expecting mothers.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Fetal Echo Test in Girinagar"
          para="We ensures healthy heart development, early detection, expert care, and complete pregnancy reassurance."
          img={fetalEchoScan}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <FetalEchoHead />
            <div className="component-mainContent">
              <FetalEchoExpect />
              <FetalEchoPrepare />
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
        <FetalEchoFaq />
        <FetalEchoContent />
      </div>
    </>
  );
}

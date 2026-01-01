import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import fetalUrosonogram from "./../../Images/ObstetricScanServiceBanner/Fetal-Urosonogram.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import FetalUrosonogramHead from "../../components/ServicePages/FetalUrosonogram/FetalUrosonogramHead";
import FetalUrosonogramExpect from "../../components/ServicePages/FetalUrosonogram/FetalUrosonogramExpect";
import FetalUrosonogramPrepare from "../../components/ServicePages/FetalUrosonogram/FetalUrosonogramPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import FetalUrosonogramContent from "../../components/ServicePages/FetalUrosonogram/FetalUrosonogramContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import FetalUrosonogramFaq from "../../components/ServicePages/FetalUrosonogram/FetalUrosonogramFaq";
import Script from "next/script";
export const metadata = {
  title:
    "Fetal Urosonogram Test in Girinagar, Bangalore | Fetal Urosonogram Test near Me",
  description:
    "Fetal Urosonogram Test in Girinagar, Bangalore. Is a specialized ultrasound focused on examining the baby’s urinary system during pregnancy.",
  canonical:
    "https://auradiagnostics.co.in/fetal-urosonogram-test-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function FetalUrosonogram() {
  return (
    <>
      <Script
        id="fetal-urosonogram-test-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a Fetal Urosonogram test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Fetal Urosonogram is a specialized ultrasound scan that evaluates the baby’s urinary system, including the kidneys, bladder, and urinary tract during pregnancy.",
                },
              },
              {
                "@type": "Question",
                name: "Why is a Fetal Urosonogram recommended during pregnancy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It helps identify urinary tract abnormalities early, such as kidney dilation or blockages, allowing doctors to plan appropriate care and follow-up.",
                },
              },
              {
                "@type": "Question",
                name: "When is the Fetal Urosonogram test usually performed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The test is commonly done between 18 and 32 weeks of pregnancy, depending on clinical findings and the doctor’s advice.",
                },
              },
              {
                "@type": "Question",
                name: "Is the Fetal Urosonogram safe for the baby?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it is completely safe as it uses ultrasound technology without radiation or invasive procedures.",
                },
              },
              {
                "@type": "Question",
                name: "Is the Fetal Urosonogram test painful?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, the scan is painless and non-invasive, similar to a routine pregnancy ultrasound.",
                },
              },
              {
                "@type": "Question",
                name: "Who should undergo a Fetal Urosonogram test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is advised for pregnancies where routine scans show kidney or bladder concerns, low amniotic fluid, or in high-risk cases.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a Fetal Urosonogram take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The procedure usually takes between 20 and 40 minutes, depending on fetal position and scan details.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need any preparation before the test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No special preparation is required, but carrying previous scan reports may help in better evaluation.",
                },
              },
              {
                "@type": "Question",
                name: "When will I receive the Fetal Urosonogram report?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Reports are usually provided on the same day or shortly after the scan, as advised by the diagnostic center.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for Fetal Urosonogram in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics offers advanced ultrasound equipment, experienced specialists, accurate reporting, and patient-focused care for pregnancy diagnostics.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Fetal Urosonogram Test in Girinagar"
          para="We ensures healthy kidney and bladder development with precise screening and expert pregnancy care."
          img={fetalUrosonogram}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <FetalUrosonogramHead />
            <div className="component-mainContent">
              <FetalUrosonogramExpect />
              <FetalUrosonogramPrepare />
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
        <FetalUrosonogramFaq />
        <FetalUrosonogramContent />
      </div>
    </>
  );
}

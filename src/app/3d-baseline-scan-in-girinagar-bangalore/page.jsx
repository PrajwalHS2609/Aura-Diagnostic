import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import baseLineScan from "./../../Images/InfertilityScanServicesBanner/3D-Base-Line-Scan.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import BaselineScan3dHead from "../../components/ServicePages/BaselineScan3d/BaselineScan3dHead";
import BaselineScan3dPrepare from "../../components/ServicePages/BaselineScan3d/BaselineScan3dPrepare";
import BaselineScan3dExpect from "../../components/ServicePages/BaselineScan3d/BaselineScan3dExpect";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import BaselineScan3dContent from "../../components/ServicePages/BaselineScan3d/BaselineScan3dContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import BaselineScan3dFaq from "../../components/ServicePages/BaselineScan3d/BaselineScan3dFaq";
import Script from "next/script";
export const metadata = {
  title: "3D Baseline Scan in Girinagar, Bangalore | AFC Scan near Me",
  description:
    "3D Baseline Scan in Girinagar, Bangalore. Is an advanced ultrasound assessment used to evaluate a woman’s ovarian reserve and overall reproductive health.",
  canonical:
    "https://auradiagnostics.co.in/3d-baseline-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function BaseLine3DScan() {
  return (
    <>
      <Script
        id="3d-baseline-scan-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a 3D Base Line Scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 3D Base Line Scan is an advanced ultrasound test that provides detailed three-dimensional images of the uterus and ovaries, usually performed at the beginning of the menstrual cycle.",
                },
              },
              {
                "@type": "Question",
                name: "Why is a 3D Base Line Scan recommended?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This scan is recommended to assess reproductive health, evaluate uterine structure and ovarian reserve, and identify abnormalities before fertility treatment or pregnancy planning.",
                },
              },
              {
                "@type": "Question",
                name: "When is the best time to undergo a 3D Base Line Scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The scan is typically done between day 2 and day 5 of the menstrual cycle for the most accurate baseline assessment.",
                },
              },
              {
                "@type": "Question",
                name: "Is the 3D Base Line Scan safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, the scan is completely safe. It uses ultrasound waves and does not involve radiation, making it non-invasive and harmless.",
                },
              },
              {
                "@type": "Question",
                name: "Does the scan cause any pain or discomfort?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The scan is generally painless. Mild discomfort may be felt during a transvaginal scan, but it is brief and well tolerated.",
                },
              },
              {
                "@type": "Question",
                name: "How long does the 3D Base Line Scan take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The scan usually takes about 20 to 30 minutes, depending on the evaluation required.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need any special preparation before the scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Your doctor may advise an empty or partially filled bladder. Aura Diagnostics will provide clear preparation instructions before your appointment.",
                },
              },
              {
                "@type": "Question",
                name: "What conditions can be detected with a 3D Base Line Scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The scan can detect fibroids, polyps, ovarian cysts, uterine shape abnormalities, and assess follicle count for fertility evaluation.",
                },
              },
              {
                "@type": "Question",
                name: "When will I receive my scan results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Results are usually available on the same day or shortly after the scan and are shared with your doctor for further consultation.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for a 3D Base Line Scan in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics in Girinagar offers advanced 3D ultrasound technology, experienced radiologists, accurate reporting, and a patient-friendly care environment.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="3D Base Line Scan in Girinagar"
          para="Detailed reproductive insights, helping assess fertility health and guide effective treatment planning."
          img={baseLineScan}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <BaselineScan3dHead />
            <div className="component-mainContent">
              <BaselineScan3dExpect />
              <BaselineScan3dPrepare />
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
        <BaselineScan3dFaq />
        <BaselineScan3dContent />
      </div>
    </>
  );
}

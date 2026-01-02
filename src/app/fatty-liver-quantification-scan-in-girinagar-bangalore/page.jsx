import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import fattyLiver from "./../../Images/AdvancedUSGServices/Fatty-Liver-Quantification-Scan.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import FattyLiverQuantificationHead from "../../components/ServicePages/FattyLiverQuantification/FattyLiverQuantificationHead";
import FattyLiverQuantificationExpect from "../../components/ServicePages/FattyLiverQuantification/FattyLiverQuantificationExpect";
import FattyLiverQuantificationPrepare from "../../components/ServicePages/FattyLiverQuantification/FattyLiverQuantificationPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import FattyLiverQuantificationContent from "../../components/ServicePages/FattyLiverQuantification/FattyLiverQuantificationContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import FattyLiverQuantificationFaq from "../../components/ServicePages/FattyLiverQuantification/FattyLiverQuantificationFaq";
import Script from "next/script";

export const metadata = {
  title:
    "Fatty Liver Quantification Scan in Girinagar, Bangalore | Ultrasound Test near Me",
  description:
    "Fatty Liver Quantification Scan in Girinagar, Bangalore. Is an advanced, non-invasive ultrasound-based assessment used to measure the amount of fat deposited in the liver.",
  canonical:
    "https://auradiagnostics.co.in/fatty-liver-quantification-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function FattyLiverQuantification() {
  return (
    <>
      <Script
        id="fatty-liver-quantification-scan-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a Fatty Liver Quantification Scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Fatty Liver Quantification Scan is an advanced ultrasound test that accurately measures the amount of fat present in the liver to assess overall liver health.",
                },
              },
              {
                "@type": "Question",
                name: "Why has my doctor recommended this scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Doctors recommend this scan to detect fatty liver disease early, monitor liver fat levels, and prevent progression to serious liver conditions such as fibrosis or cirrhosis.",
                },
              },
              {
                "@type": "Question",
                name: "Is the Fatty Liver Quantification Scan painful?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, the scan is completely painless and non-invasive, similar to a routine ultrasound examination.",
                },
              },
              {
                "@type": "Question",
                name: "How should I prepare for the Fatty Liver Quantification Scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Patients are usually advised to fast for 6 to 8 hours before the scan. Aura Diagnostics will provide clear preparation instructions before the appointment.",
                },
              },
              {
                "@type": "Question",
                name: "How long does the Fatty Liver Quantification Scan take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The scan typically takes about 15 to 20 minutes and does not require hospital admission.",
                },
              },
              {
                "@type": "Question",
                name: "Is the Fatty Liver Quantification Scan safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it is a safe procedure that uses ultrasound technology and does not involve any radiation exposure.",
                },
              },
              {
                "@type": "Question",
                name: "What conditions can this scan help detect?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This scan helps detect and grade fatty liver disease, measure liver fat percentage, and monitor disease progression or improvement over time.",
                },
              },
              {
                "@type": "Question",
                name: "When will I receive the scan results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Scan reports are usually available on the same day or within 24 hours, depending on clinical requirements.",
                },
              },
              {
                "@type": "Question",
                name: "Who should undergo a Fatty Liver Quantification Scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Individuals with obesity, diabetes, high cholesterol, alcohol consumption, or abnormal liver function tests are commonly advised to undergo this scan.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics in Girinagar for this scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics in Girinagar offers advanced imaging technology, experienced radiologists, accurate reporting, and patient-focused care.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Fatty Liver Quantification Scan in Girinagar"
          para="Precise quantification helps detect fat levels early, ensuring accurate diagnosis, monitoring, and improved liver health."
          img={fattyLiver}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <FattyLiverQuantificationHead />
            <div className="component-mainContent">
              <FattyLiverQuantificationExpect />
              <FattyLiverQuantificationPrepare />
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
        <FattyLiverQuantificationFaq />
        <FattyLiverQuantificationContent />
      </div>
    </>
  );
}

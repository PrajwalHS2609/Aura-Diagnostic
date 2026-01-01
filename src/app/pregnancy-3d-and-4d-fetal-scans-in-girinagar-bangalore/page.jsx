import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import fetalScan from "./../../Images/PregnancyScanServiceBanner/3D-and-4D-Fetal-Scan.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import DFetalScansExpect from "../../components/ServicePages/DFetalScans/DFetalScansExpect";
import DFetalScansHead from "../../components/ServicePages/DFetalScans/DFetalScansHead";
import DFetalScansPrepare from "../../components/ServicePages/DFetalScans/DFetalScansPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import DFetalScansContent from "../../components/ServicePages/DFetalScans/DFetalScansContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import DFetalScanFaq from "../../components/ServicePages/DFetalScans/DFetalScanFaq";
import Script from "next/script";

export const metadata = {
  title:
    "Pregnancy 3D & 4D Fetal Scans in Girinagar, Bangalore | Fetal Scans near Me",
  description:
    "Pregnancy 3D & 4D Fetal Scans in Girinagar, Bangalore. Is an advanced pregnancy ultrasound that provides lifelike images and real-time videos of your baby inside the womb. ",
  canonical:
    "https://auradiagnostics.co.in/pregnancy-3d-and-4d-fetal-scans-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function DFetalScan() {
  return (
    <>
      <Script
        id="pregnancy-3d-4d-fetal-scan-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a 3D & 4D fetal scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 3D & 4D fetal scan is an advanced ultrasound that provides clear, lifelike images and real-time views of the baby’s face, body, and movements inside the womb.",
                },
              },
              {
                "@type": "Question",
                name: "When is the best time to do a 3D or 4D scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The ideal time for a 3D or 4D fetal scan is between 24 to 30 weeks of pregnancy, when the baby’s features are well developed.",
                },
              },
              {
                "@type": "Question",
                name: "Is a 3D & 4D fetal scan safe for the baby?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, 3D & 4D fetal scans use safe ultrasound technology and are completely non-invasive for both the mother and the baby.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between a 3D scan and a 4D scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 3D scan provides still three-dimensional images of the baby, while a 4D scan shows real-time movements such as smiling, yawning, or hand movements.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need any preparation before a 3D or 4D scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Usually, no special preparation is required. Aura Diagnostics will inform you in advance if any simple instructions are needed.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a 3D & 4D fetal scan take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The scan typically takes about 20 to 30 minutes, depending on the baby’s position and movement.",
                },
              },
              {
                "@type": "Question",
                name: "Can family members watch the 3D & 4D scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, family members are usually allowed to view the scan, making it a joyful and memorable experience for parents.",
                },
              },
              {
                "@type": "Question",
                name: "Can a 3D & 4D scan detect birth defects?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "3D & 4D scans help visualize physical features clearly, but they do not replace medical anomaly scans recommended by doctors.",
                },
              },
              {
                "@type": "Question",
                name: "Will I receive images or videos after the scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Aura Diagnostics usually provides printed images or digital photos/videos as part of the 3D & 4D scan service.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for 3D & 4D fetal scans in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics offers advanced ultrasound technology, experienced radiologists, high-quality imaging, and a caring environment for expectant parents.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="3D & 4D Fetal Scans in Girinagar"
          para="See your baby’s tiny features and movements clearly with advanced 3D & 4D fetal scans for unforgettable bonding."
          img={fetalScan}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />

            <DFetalScansHead />
            <div className="component-mainContent">
              <DFetalScansExpect />
              <DFetalScansPrepare />
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
        <DFetalScanFaq />
        <DFetalScansContent />
      </div>
    </>
  );
}

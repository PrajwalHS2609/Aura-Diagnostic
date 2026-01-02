import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import pelvisScan from "./../../Images/InfertilityScanServicesBanner/3D-Pelvis-Scan.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import Pelvis3dHead from "../../components/ServicePages/Pelvis3d/Pelvis3dHead";
import Pelvis3dExpect from "../../components/ServicePages/Pelvis3d/Pelvis3dExpect";
import Pelvis3dPrepare from "../../components/ServicePages/Pelvis3d/Pelvis3dPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import Pelvis3dContent from "../../components/ServicePages/Pelvis3d/Pelvis3dContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import Pelvis3dFaq from "../../components/ServicePages/Pelvis3d/Pelvis3dFaq";
import Script from "next/script";
export const metadata = {
  title: "3D Pelvis Scan in Girinagar, Bangalore | Pelvis Scan near Me",
  description:
    "3D Pelvis Scan in Girinagar, Bangalore. Is an advanced ultrasound imaging technique used to create three-dimensional views of the pelvic region for clearer and more detailed evaluation.",
  canonical:
    "https://auradiagnostics.co.in/3d-pelvis-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function Pelvis3D() {
  return (
    <>
      <Script
        id="3d-pelvis-scan-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a 3D Pelvis Scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 3D Pelvis Scan is an advanced ultrasound test that creates detailed three-dimensional images of pelvic organs such as the uterus, ovaries, bladder, and surrounding structures.",
                },
              },
              {
                "@type": "Question",
                name: "Why has my doctor recommended a 3D pelvis scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Doctors recommend a 3D pelvis scan to evaluate pelvic pain, infertility issues, fibroids, cysts, uterine abnormalities, or other gynecological conditions with higher accuracy.",
                },
              },
              {
                "@type": "Question",
                name: "Is a 3D pelvis scan safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, a 3D pelvis scan uses ultrasound technology, which is safe, non-invasive, and does not involve radiation.",
                },
              },
              {
                "@type": "Question",
                name: "Does the 3D pelvis scan cause pain?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The scan is generally painless. Mild discomfort may occur if a transvaginal scan is performed, but it is usually well tolerated.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a 3D pelvis scan take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The procedure usually takes about 20 to 30 minutes to complete.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to prepare before a 3D pelvis scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Preparation may vary depending on the scan type. You may be advised to have a full bladder or follow specific instructions given by your doctor.",
                },
              },
              {
                "@type": "Question",
                name: "Who should undergo a 3D pelvis scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This scan is recommended for women experiencing pelvic pain, menstrual irregularities, infertility issues, or as advised by a gynecologist.",
                },
              },
              {
                "@type": "Question",
                name: "When will I receive the 3D pelvis scan results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Scan results are often reviewed immediately after the procedure or shared shortly thereafter by your doctor.",
                },
              },
              {
                "@type": "Question",
                name: "Are there any side effects after a 3D pelvis scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There are no known side effects, and patients can resume normal activities immediately after the scan.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for 3D Pelvis Scans in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics in Girinagar provides 3D pelvis scans using advanced ultrasound technology, experienced radiologists, accurate reporting, and compassionate patient care.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="3D Pelvis Scans in Girinagar"
          para="Scans deliver detailed, high-clarity imaging for accurate diagnosis, fertility assessment, and confident treatment planning. "
          img={pelvisScan}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <Pelvis3dHead />
            <div className="component-mainContent">
              <Pelvis3dExpect />
              <Pelvis3dPrepare />
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
        <Pelvis3dFaq />
        <Pelvis3dContent />
      </div>
    </>
  );
}

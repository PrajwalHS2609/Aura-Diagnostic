import Script from "next/script";
import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import PregnancyFaq from "../../components/ServicePages/PregnancyScan/PregnancyFaq";
import PregnancyScanContent from "../../components/ServicePages/PregnancyScan/PregnancyScanContent";
import PregnancyScanExpect from "../../components/ServicePages/PregnancyScan/PregnancyScanExpect";
import PregnancyScanHead from "../../components/ServicePages/PregnancyScan/PregnancyScanHead";
import PregnancyScanPrepare from "../../components/ServicePages/PregnancyScan/PregnancyScanPrepare";
import PregnancyScanService from "../../components/ServicePages/PregnancyScan/PregnancyScanService";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
export const metadata = {
  title:
    "Pregnancy Scans in Girinagar, Bangalore for Dating, Anomaly, NT, 3D & 4D Scans",
  description:
    "Pregnancy Scans in Girinagar, Bangalore for Dating Scan, Anomaly Scan, NT Scan, 3D & 4D Fetal Scans. Book your Appointment Today!",
  canonical:
    "https://auradiagnostics.co.in/pregnancy-scans-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function PregnancyScan() {
  return (
    <>
      {" "}
      <Script
        id="pregnancy-scans-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What types of pregnancy scans are available at Aura Diagnostics in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics offers early pregnancy scans, dating scans, NT scans, anomaly scans (Level 2), growth scans, and Doppler studies as part of Pregnancy Ultrasound in Girinagar.",
                },
              },
              {
                "@type": "Question",
                name: "When should I schedule my first pregnancy ultrasound in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The first ultrasound scan is usually recommended between 6–8 weeks to confirm pregnancy, check fetal heartbeat, and ensure normal development.",
                },
              },
              {
                "@type": "Question",
                name: "Are pregnancy ultrasound scans safe for the baby?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Pregnancy ultrasound scans are completely safe, non-invasive, and radiation-free, making them safe for both mother and baby.",
                },
              },
              {
                "@type": "Question",
                name: "What is an anomaly scan and why is it important?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An anomaly scan, usually done between 18–22 weeks, checks the baby’s organs and growth to detect any structural abnormalities early.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a doctor’s prescription for pregnancy scans?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Most pregnancy ultrasound scans require a valid doctor’s prescription as per medical regulations.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a pregnancy ultrasound scan take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most pregnancy ultrasound scans take between 15 to 30 minutes, depending on the type of scan and fetal position.",
                },
              },
              {
                "@type": "Question",
                name: "Are Doppler scans available for high-risk pregnancies?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Aura Diagnostics provides Doppler and specialized fetal scans near Girinagar for high-risk pregnancies such as diabetes or blood pressure issues.",
                },
              },
              {
                "@type": "Question",
                name: "Will I receive my pregnancy scan report on the same day?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In most cases, pregnancy ultrasound reports are provided on the same day or within a short time for quick doctor consultation.",
                },
              },
              {
                "@type": "Question",
                name: "Is prior appointment required for pregnancy scans in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Appointments are recommended to avoid waiting time and ensure timely ultrasound scanning, especially for detailed scans.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for pregnancy scans in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics offers experienced radiologists, advanced ultrasound machines, accurate reports, hygienic facilities, and compassionate care for pregnancy scans.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Pregnancy Scan in Girinagar"
          para="Accurate pregnancy scans with expert care, ensuring healthy monitoring and for mother and baby every step."
          img={ultrasound}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <PregnancyScanHead />
            <div className="component-mainContent">
              <PregnancyScanExpect />
              <PregnancyScanPrepare />
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
        <PregnancyScanService />
        <BloodTestCities />
        <HomeWhy />
        <HomeTestimonial />
        <PregnancyFaq />
        <PregnancyScanContent />
      </div>
    </>
  );
}

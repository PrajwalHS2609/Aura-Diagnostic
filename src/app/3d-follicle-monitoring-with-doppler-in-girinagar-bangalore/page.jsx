import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import follicleMonitoring from "./../../Images/InfertilityScanServicesBanner/3D-Follicle-Monitoring-With-Doppler.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import FollicleMonitoringHead from "../../components/ServicePages/FollicleMonitoring/FollicleMonitoringHead";
import FollicleMonitoringExpect from "../../components/ServicePages/FollicleMonitoring/FollicleMonitoringExpect";
import FollicleMonitoringPrepare from "../../components/ServicePages/FollicleMonitoring/FollicleMonitoringPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import FollicleMonitoringContent from "../../components/ServicePages/FollicleMonitoring/FollicleMonitoringContent";
import FollicleMonitoringFaq from "../../components/ServicePages/FollicleMonitoring/FollicleMonitoringFaq";
import Script from "next/script";
export const metadata = {
  title:
    "3D Follicle Monitoring with Doppler in Girinagar, Bangalore | Doppler Scan near Me",
  description:
    "3D Follicle Monitoring with Doppler in Girinagar, Bangalore. Is an advanced ultrasound technique used to track the growth, size, and health of ovarian follicles during a woman’s menstrual cycle or fertility treatment.",
  canonical:
    "https://auradiagnostics.co.in/3d-follicle-monitoring-with-doppler-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function FollicleMonitoring3D() {
  return (
     <>
      <Script
        id="3d-follicle-monitoring-with-doppler-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                  {
      "@type": "Question",
      "name": "What is 3D Follicle Monitoring with Doppler?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3D Follicle Monitoring with Doppler is an advanced ultrasound scan that tracks follicle growth and evaluates blood flow to the ovaries and uterus during the menstrual cycle."
      }
    },
    {
      "@type": "Question",
      "name": "Why is 3D Follicle Monitoring with Doppler recommended?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It helps doctors accurately determine ovulation timing, assess follicle maturity, and evaluate blood supply, which is essential for fertility planning and treatment."
      }
    },
    {
      "@type": "Question",
      "name": "Who should undergo 3D Follicle Monitoring with Doppler?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This scan is recommended for women trying to conceive naturally, undergoing fertility treatments like IUI or IVF, or those with irregular menstrual cycles or ovulation issues."
      }
    },
    {
      "@type": "Question",
      "name": "Is 3D Follicle Monitoring with Doppler safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the scan is completely safe. It uses ultrasound and Doppler technology without radiation or harmful side effects."
      }
    },
    {
      "@type": "Question",
      "name": "When is the 3D Follicle Monitoring scan performed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The scan is usually performed multiple times during the menstrual cycle, often starting from day 8 to day 10, as advised by the doctor."
      }
    },
    {
      "@type": "Question",
      "name": "Does the scan cause pain or discomfort?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The scan is generally painless. Mild discomfort may occur during a transvaginal scan, but it is brief and well tolerated."
      }
    },
    {
      "@type": "Question",
      "name": "What additional information does Doppler provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Doppler imaging evaluates blood flow to the follicles and uterus, helping assess follicle health, endometrial receptivity, and ovulation readiness."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a 3D Follicle Monitoring scan take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each scan session typically takes about 20 to 30 minutes, depending on the number of follicles being evaluated."
      }
    },
    {
      "@type": "Question",
      "name": "Is any preparation required before the scan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Minimal preparation is required. Patients may be advised to have an empty bladder, and specific instructions are provided before the appointment."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose Aura Diagnostics for 3D Follicle Monitoring with Doppler in Girinagar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aura Diagnostics offers advanced 3D and Doppler ultrasound technology, experienced radiologists, accurate reports, and compassionate patient care in Girinagar."
      }
    }

            ],
          }),
        }}
      />
    <div className="">
      {" "}
      <ServiceHeader
        title="3D Follicle Monitoring With Doppler in Girinagar"
        para="Ensures precise ovulation tracking, improved fertility planning, and enhanced conception success."
        img={follicleMonitoring}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <FollicleMonitoringHead />
          <div className="component-mainContent">
            <FollicleMonitoringExpect />
            <FollicleMonitoringPrepare />
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
      <FollicleMonitoringFaq/>
      <FollicleMonitoringContent />
    </div>
    </>
  );
}

import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import Saline from "./../../Images/USGGuidedProcedureServicesBanner/Saline-Infusion-Sonohystersalphingography.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import SalineInfusionHead from "../../components/ServicePages/SalineInfusion/SalineInfusionHead";
import SalineInfusionExpect from "../../components/ServicePages/SalineInfusion/SalineInfusionExpect";
import SalineInfusionPrepare from "../../components/ServicePages/SalineInfusion/SalineInfusionPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import SalineInfusionContent from "../../components/ServicePages/SalineInfusion/SalineInfusionContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import SalineInfusionFaq from "../../components/ServicePages/SalineInfusion/SalineInfusionFaq";
import Script from "next/script";
export const metadata = {
  title:
    "Saline Infusion Sonohysterosalpingography Test in Girinagar, Bangalore ",
  description:
    "Saline Infusion Sonohysterosalpingography Test in Girinagar, Bangalore. Is an advanced ultrasound-based procedure used to evaluate the uterus and fallopian tubes with greater clarity.",
  canonical: "https://auradiagnostics.co.in/saline-infusion-sonohysterosalpingography-test-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function SalineInfusion() {
  return (
    <>
      <Script
        id="saline-infusion-sonohysterosalpingography-test-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a Saline Infusion Sonohysterosalpingography (SIS/SSG) test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Saline Infusion Sonohysterosalpingography (SIS/SSG) is a specialized ultrasound test that examines the uterus and fallopian tubes using sterile saline to detect blockages or abnormalities.",
                },
              },
              {
                "@type": "Question",
                name: "Why has my doctor recommended the SIS/SSG test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Doctors recommend this test to evaluate infertility, assess fallopian tube patency, detect uterine abnormalities, or investigate repeated pregnancy loss.",
                },
              },
              {
                "@type": "Question",
                name: "Is the SIS/SSG test painful?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The test may cause mild discomfort or cramping similar to menstrual pain, but most patients tolerate the procedure well.",
                },
              },
              {
                "@type": "Question",
                name: "How long does the SIS/SSG procedure take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The procedure typically takes about 20 to 30 minutes to complete.",
                },
              },
              {
                "@type": "Question",
                name: "Is Saline Infusion Sonohysterosalpingography safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, SIS/SSG is a safe diagnostic procedure when performed by trained specialists using sterile techniques.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need any preparation before the SIS/SSG test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The test is usually scheduled after your menstrual period and before ovulation. Inform your doctor about infections, allergies, or medications beforehand.",
                },
              },
              {
                "@type": "Question",
                name: "Can I go home after the SIS/SSG test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, SIS/SSG is an outpatient procedure, and patients can return home immediately after the test.",
                },
              },
              {
                "@type": "Question",
                name: "Are there any side effects after the SIS/SSG test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Some patients may experience mild cramping or light spotting after the procedure, which usually resolves quickly.",
                },
              },
              {
                "@type": "Question",
                name: "When will I receive the SIS/SSG test results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Results are often discussed immediately after the scan or shared shortly thereafter by your doctor.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for SIS/SSG Test in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics in Girinagar offers SIS/SSG tests with experienced radiologists, advanced ultrasound technology, accurate reporting, and compassionate patient care.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Saline Infusion Sonohysterosalpingography Test in Girinagar"
          para="Detailed test visualizes uterus and tubes clearly, aiding infertility diagnosis with safe, precise, minimally invasive imaging."
          img={Saline}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <SalineInfusionHead />
            <div className="component-mainContent">
              <SalineInfusionExpect />
              <SalineInfusionPrepare />
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
        <SalineInfusionFaq />
        <SalineInfusionContent />
      </div>
    </>
  );
}

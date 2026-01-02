import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import amniocentesisTest from "./../../Images/USGGuidedProcedureServicesBanner/Amniocentesis-Test.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import AmniocentesisExpect from "../../components/ServicePages/Amniocentesis/AmniocentesisExpect";
import AmniocentesisHead from "../../components/ServicePages/Amniocentesis/AmniocentesisHead";
import AmniocentesisPrepare from "../../components/ServicePages/Amniocentesis/AmniocentesisPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import AmniocentesisContent from "../../components/ServicePages/Amniocentesis/AmniocentesisContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import AmniocentesisFaq from "../../components/ServicePages/Amniocentesis/AmniocentesisFaq";
import Script from "next/script";

export const metadata = {
  title:
    "Amniocentesis Ultrasound Test in Girinagar, Bangalore – Aura Diagnostics",
  description:
    "Amniocentesis Ultrasound Test in Girinagar, Bangalore. Is a specialized prenatal diagnostic procedure used to evaluate the health and development of an unborn baby.",
  canonical:
    "https://auradiagnostics.co.in/amniocentesis-ultrasound-test-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function Amniocentesis() {
  return (
    <>
     <Script
        id="amniocentesis-ultrasound-test-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                  {
      "@type": "Question",
      "name": "What is an Amniocentesis ultrasound test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Amniocentesis is a prenatal diagnostic procedure in which a small amount of amniotic fluid is collected under ultrasound guidance to assess the baby’s genetic and chromosomal health."
      }
    },
    {
      "@type": "Question",
      "name": "Why has my doctor recommended an amniocentesis test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Doctors recommend amniocentesis to detect genetic disorders, chromosomal abnormalities, or certain birth defects when screening tests indicate a higher risk."
      }
    },
    {
      "@type": "Question",
      "name": "Is the amniocentesis test safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, when performed by experienced specialists using ultrasound guidance, amniocentesis is considered a safe procedure with minimal risk."
      }
    },
    {
      "@type": "Question",
      "name": "Does the amniocentesis procedure cause pain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You may feel mild discomfort or brief cramping during the procedure, similar to an injection, which usually subsides quickly."
      }
    },
    {
      "@type": "Question",
      "name": "How long does the amniocentesis test take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The procedure typically takes about 20 to 30 minutes, including ultrasound scanning and fluid collection."
      }
    },
    {
      "@type": "Question",
      "name": "Is any preparation required before the amniocentesis test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually, no special preparation is required. Your doctor may provide specific instructions based on your medical history."
      }
    },
    {
      "@type": "Question",
      "name": "Can I go home after the amniocentesis test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, amniocentesis is generally an outpatient procedure, and patients can go home the same day after a short rest period."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any side effects after amniocentesis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some women may experience mild cramping or discomfort after the test, which usually resolves quickly. Serious complications are rare."
      }
    },
    {
      "@type": "Question",
      "name": "When will I receive the amniocentesis test results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Preliminary results may be available within a few days, while detailed genetic reports can take 1 to 3 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose Aura Diagnostics for Amniocentesis Test in Girinagar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aura Diagnostics in Girinagar offers amniocentesis tests with expert radiologists, advanced ultrasound technology, strict safety protocols, and compassionate maternal care."
      }
    }

            ],
          }),
        }}
      />
    <div className="">
      {" "}
      <ServiceHeader
        title="Amniocentesis ultrasound Test in Girinagar"
        para="Ultrasound provides accurate genetic insights early, ensuring informed decisions and expert care throughout pregnancy."
        img={amniocentesisTest}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <AmniocentesisHead />
          <div className="component-mainContent">
            <AmniocentesisExpect />
            <AmniocentesisPrepare />
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
      <BloodTestCities/>
      <HomeWhy />
      <HomeTestimonial />
      <AmniocentesisFaq/>
      <AmniocentesisContent />
    </div>
    </>
  );
}

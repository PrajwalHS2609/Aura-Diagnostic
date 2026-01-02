import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import uterine from "./../../Images/InfertilityScanServicesBanner/Uterine-Biophysical-Profile.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import UterineBiophysicalProfileHead from "../../components/ServicePages/UterineBiophysicalProfile/UterineBiophysicalProfileHead";
import UterineBiophysicalProfileExpect from "../../components/ServicePages/UterineBiophysicalProfile/UterineBiophysicalProfileExpect";
import UterineBiophysicalProfilePrepare from "../../components/ServicePages/UterineBiophysicalProfile/UterineBiophysicalProfilePrepare";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import UterineBiophysicalProfileContent from "../../components/ServicePages/UterineBiophysicalProfile/UterineBiophysicalProfileContent";
import UterineBiophysicalProfileFaq from "../../components/ServicePages/UterineBiophysicalProfile/UterineBiophysicalProfileFaq";
import Script from "next/script";
export const metadata = {
  title:
    "Uterine Biophysical Profile Scan in Girinagar, Bangalore | Ultrasound Scan near Me",
  description:
    "Uterine Biophysical Profile Scan in Girinagar, Bangalore. Is an advanced ultrasound assessment used to evaluate the health, structure, and function of the uterus, especially in women undergoing fertility evaluation or treatment.",
  canonical:
    "https://auradiagnostics.co.in/uterine-biophysical-profile-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function UterineBiophysical() {
  return (
    <>
      <Script
        id="uterine-biophysical-profile-scan-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a Uterine Biophysical Profile (UBPP) Scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Uterine Biophysical Profile Scan is an advanced ultrasound test that evaluates uterine health by assessing blood flow, uterine lining, and overall uterine function.",
                },
              },
              {
                "@type": "Question",
                name: "Why is a Uterine Biophysical Profile Scan done?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It helps doctors assess uterine receptivity for implantation and pregnancy, especially in women with infertility or repeated IVF failures.",
                },
              },
              {
                "@type": "Question",
                name: "Who needs a Uterine Biophysical Profile Scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The scan is recommended for women planning pregnancy, undergoing fertility treatments, facing recurrent miscarriages, or unexplained infertility.",
                },
              },
              {
                "@type": "Question",
                name: "Is the Uterine Biophysical Profile Scan safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it is completely safe and uses ultrasound and Doppler technology without radiation exposure.",
                },
              },
              {
                "@type": "Question",
                name: "When is the best time to undergo this scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is usually performed during the mid to late menstrual cycle as advised by the fertility specialist for accurate results.",
                },
              },
              {
                "@type": "Question",
                name: "Does the Uterine Biophysical Profile Scan cause pain?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The scan is generally painless, though mild temporary discomfort may be felt during a transvaginal scan.",
                },
              },
              {
                "@type": "Question",
                name: "What parameters are checked during this scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It assesses uterine blood flow, endometrial thickness, uterine contractions, and overall uterine receptivity.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need any preparation before the scan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Usually no special preparation is required. You may be asked to come with an empty bladder if a transvaginal scan is planned.",
                },
              },
              {
                "@type": "Question",
                name: "How long does the Uterine Biophysical Profile Scan take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The procedure typically takes around 20 to 30 minutes depending on individual assessment needs.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for a Uterine Biophysical Profile Scan in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics offers experienced radiologists, advanced ultrasound technology, accurate reports, and patient-focused care in Girinagar.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Uterine Biophysical Profile Scan in Girinagar"
          para="Evaluates uterine health, blood flow, and receptivity for improved fertility and implantation success."
          img={uterine}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <UterineBiophysicalProfileHead />
            <div className="component-mainContent">
              <UterineBiophysicalProfileExpect />
              <UterineBiophysicalProfilePrepare />
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
        <UterineBiophysicalProfileFaq />
        <UterineBiophysicalProfileContent />
      </div>
    </>
  );
}

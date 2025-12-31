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
import BloodTestContent from "../../components/ServicePages/BloodTest/BloodTestContent";
import BloodTestExpect from "../../components/ServicePages/BloodTest/BloodTestExpect";
import BloodTestFaq from "../../components/ServicePages/BloodTest/BloodTestFaq";
import BloodTestHead from "../../components/ServicePages/BloodTest/BloodTestHead";
import BloodTestPrepare from "../../components/ServicePages/BloodTest/BloodTestPrepare";
import BloodTestServices from "../../components/ServicePages/BloodTest/BloodTestServices";
import bloodTest from "./../../Images/BloodTestServiceBanner/Blood-Tests.png";
export const metadata = {
  title: "Blood Tests in Girinagar, Bangalore with Free Home Visit – Call Now!",
  description:
    "Book Blood Tests in Girinagar, Bangalore with free home visit. Call Now! Accurate reports, expert lab analysis, timely results, and convenient sample collection at your doorstep.",
  canonical:
    "https://auradiagnostics.co.in/blood-tests-in-girinagar-bangalore-with-free-home-visit",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function BloodTest() {
  return (
    <>
      <Script
        id="blood-tests-in-girinagar-bangalore-with-free-home-visit"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Are blood tests at home in Girinagar really free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Aura Diagnostics offers free home sample collection for blood tests in Girinagar. You only pay for the test with no additional collection charges.",
                },
              },
              {
                "@type": "Question",
                name: "Which areas are covered under Blood Tests at Home near Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics provides Blood Tests at Home in Girinagar and nearby localities, ensuring quick and reliable home sample collection.",
                },
              },
              {
                "@type": "Question",
                name: "How do I book a Blood Test at Home in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can book by calling Aura Diagnostics, booking online, or scheduling through WhatsApp at your preferred date and time.",
                },
              },
              {
                "@type": "Question",
                name: "How soon will I receive my blood test reports?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most blood test reports are delivered within 24 hours, depending on the test. Reports are shared digitally via WhatsApp or email.",
                },
              },
              {
                "@type": "Question",
                name: "Are blood tests accurate when samples are collected at home?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Samples collected at home are processed in certified laboratories using advanced equipment, ensuring accurate and reliable results.",
                },
              },
              {
                "@type": "Question",
                name: "What types of blood tests are available at home in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics offers CBC, blood sugar tests, thyroid profile, lipid profile, vitamin tests, liver and kidney function tests, and preventive health packages.",
                },
              },
              {
                "@type": "Question",
                name: "Is Blood Test at Home in Girinagar safe and hygienic?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. All home collections follow strict hygiene protocols with sterile, single-use needles and trained phlebotomists.",
                },
              },
              {
                "@type": "Question",
                name: "Can senior citizens and bedridden patients book blood tests at home?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Blood Tests at Home near Girinagar are ideal for senior citizens, bedridden patients, pregnant women, and those with mobility issues.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a doctor’s prescription for blood tests?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Some tests require a prescription, while many routine and preventive blood tests can be done without one. Our team will guide you during booking.",
                },
              },
              {
                "@type": "Question",
                name: "Can I choose flexible or early morning time slots for blood tests?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Aura Diagnostics offers flexible and early morning time slots for Blood Test at Home in Girinagar to suit your schedule.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Blood Tests in Girinagar"
          para="Accurate reports, expert lab analysis, timely results, and convenient sample collection at your doorstep."
          img={bloodTest}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <BloodTestHead />
            <div className="component-mainContent">
              <BloodTestExpect />
              <BloodTestPrepare />
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
        <BloodTestServices />
        <BloodTestCities />
        <HomeWhy />
        <HomeTestimonial />
        <BloodTestFaq />
        <BloodTestContent />
      </div>
    </>
  );
}

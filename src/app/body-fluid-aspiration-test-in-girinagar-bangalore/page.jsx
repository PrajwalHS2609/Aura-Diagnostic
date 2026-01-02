import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import BodyFluid from "./../../Images/USGGuidedProcedureServicesBanner/Body-Fluid-Aspiration.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import BodyFluidAspirationHead from "../../components/ServicePages/BodyFluidAspiration/BodyFluidAspirationHead";
import BodyFluidAspirationExpect from "../../components/ServicePages/BodyFluidAspiration/BodyFluidAspirationExpect";
import BodyFluidAspirationPrepare from "../../components/ServicePages/BodyFluidAspiration/BodyFluidAspirationPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import BodyFluidAspirationContent from "../../components/ServicePages/BodyFluidAspiration/BodyFluidAspirationContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import BodyFluidAspirationFaq from "../../components/ServicePages/BodyFluidAspiration/BodyFluidAspirationFaq";
import Script from "next/script";

export const metadata = {
  title:
    "Body Fluid Aspiration Test in Girinagar, Bangalore – Aura Diagnostics",
  description:
    "Body Fluid Aspiration Test in Girinagar, Bangalore. Is a minimally invasive diagnostic procedure used to examine lumps, swellings, or abnormal tissue growths in the body.",
  canonical: "https://auradiagnostics.co.in/body-fluid-aspiration-test-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function BodyFluidAspiration() {
  return (
    <>
      <Script
        id="body-fluid-aspiration-test-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is a Body Fluid Aspiration Test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A Body Fluid Aspiration Test is a diagnostic procedure used to collect fluid from areas such as the chest, abdomen, or joints to detect infections, inflammation, or other medical conditions.",
                },
              },
              {
                "@type": "Question",
                name: "Why has my doctor advised a body fluid aspiration test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Doctors recommend this test to identify the cause of fluid buildup, check for infections, cancer cells, or investigate unexplained swelling.",
                },
              },
              {
                "@type": "Question",
                name: "Is the body fluid aspiration test painful?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The procedure usually causes minimal discomfort. Local anesthesia is often used to reduce pain, and most patients tolerate the test well.",
                },
              },
              {
                "@type": "Question",
                name: "How long does the body fluid aspiration procedure take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The procedure generally takes about 15 to 30 minutes, depending on the location and amount of fluid collected.",
                },
              },
              {
                "@type": "Question",
                name: "Is the body fluid aspiration test safe?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it is a safe and commonly performed procedure when carried out by trained specialists, often with ultrasound guidance for accuracy.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to prepare before the body fluid aspiration test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Usually, no special preparation is required. Patients should inform the doctor if they are taking blood-thinning medications or have bleeding disorders.",
                },
              },
              {
                "@type": "Question",
                name: "Can I go home after the body fluid aspiration test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, it is typically an outpatient procedure, and patients can go home the same day after a brief observation period.",
                },
              },
              {
                "@type": "Question",
                name: "Are there any side effects after the body fluid aspiration test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Some patients may experience mild pain, tenderness, or swelling at the aspiration site, which usually resolves quickly.",
                },
              },
              {
                "@type": "Question",
                name: "When will I receive the body fluid aspiration test results?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Test results are typically available within 24 to 48 hours, depending on the type of laboratory analysis required.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose Aura Diagnostics for Body Fluid Aspiration Test in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics in Girinagar provides body fluid aspiration tests with experienced specialists, advanced imaging support, accurate reporting, and patient-focused care.",
                },
              },
            ],
          }),
        }}
      />
      <div className="">
        {" "}
        <ServiceHeader
          title="Body Fluid Aspiration Test in Girinagar"
          para="Provides accurate diagnosis of infections and conditions through safe, precise, minimally invasive sampling"
          img={BodyFluid}
        />
        <HomeCerti />
        <div className="component-container">
          <div className="component-main">
            <ServiceNav />
            <BodyFluidAspirationHead />
            <div className="component-mainContent">
              <BodyFluidAspirationExpect />
              <BodyFluidAspirationPrepare />
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
        <BodyFluidAspirationFaq />
        <BodyFluidAspirationContent />
      </div>
    </>
  );
}

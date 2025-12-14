import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import USGGuidedProcedureService from "../../components/ServicePages/USGGuidedProcedure/USGGuidedProcedureService";
import USGGuided from "./../../Images/USGGuidedProcedureServicesBanner/USG-Guided-Procedure.png";
import USGGuidedProcedureHead from "../../components/ServicePages/USGGuidedProcedure/USGGuidedProcedureHead";
import USGGuidedProcedureExpect from "../../components/ServicePages/USGGuidedProcedure/USGGuidedProcedureExpect";
import USGGuidedProcedurePrepare from "../../components/ServicePages/USGGuidedProcedure/USGGuidedProcedurePrepare";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import USGGuidedProcedureContent from "../../components/ServicePages/USGGuidedProcedure/USGGuidedProcedureContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
export const metadata = {
  title: "USG Guided Procedure in Girinagar, Bangalore | Ultrasound Test near Me",
  description: "USG Guided Procedure in Girinagar, Bangalore. Is a minimally invasive technique in which ultrasound imaging is used in real time to accurately guide needles or instruments to a specific area inside the body.",
  canonical: "https://auradiagnostics.co.in/usg-guided-procedure-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function USGGuidedProcedure() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="USG Guided Procedure in Girinagar"
        para="Offers quick, accurate cell diagnosis, enabling early detection and guiding effective, timely treatment decisions."
        img={USGGuided}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />

          <USGGuidedProcedureHead />
          <div className="component-mainContent">
            <USGGuidedProcedureExpect />
            <USGGuidedProcedurePrepare />
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
      <USGGuidedProcedureService />
      <BloodTestCities/>
      <HomeWhy />
      <HomeTestimonial />
      <USGGuidedProcedureContent/>
    </div>
  );
}

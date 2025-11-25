import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "./../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "./../../components/ServiceComponents/ServiceMap/ServiceMap";
import USGGuidedProcedureService from "../../components/ServicePages/USGGuidedProcedure/USGGuidedProcedureService";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
import USGGuidedProcedureHead from "../../components/ServicePages/USGGuidedProcedure/USGGuidedProcedureHead";
import USGGuidedProcedureExpect from "../../components/ServicePages/USGGuidedProcedure/USGGuidedProcedureExpect";
import USGGuidedProcedurePrepare from "../../components/ServicePages/USGGuidedProcedure/USGGuidedProcedurePrepare";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
export default function USGGuidedProcedure() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="USG Guided Procedure"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
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
      <USGGuidedProcedureService />
      <HomeWhy />
      <HomeTestimonial />
      <ServiceMap />
    </div>
  );
}

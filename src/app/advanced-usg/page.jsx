import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from './../../components/ServiceComponents/ServiceHeader/ServiceHeader';
import ServiceMap from './../../components/ServiceComponents/ServiceMap/ServiceMap';
import AdvancedUSGService from "../../components/ServicePages/AdvancedUSG/AdvancedUSGService";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import AdvancedUSGExpect from "../../components/ServicePages/AdvancedUSG/AdvancedUSGExpect";
import AdvancedUSGPrepare from "../../components/ServicePages/AdvancedUSG/AdvancedUSGPrepare";
import AdvancedUSGHead from "../../components/ServicePages/AdvancedUSG/AdvancedUSGHead";

export default function AdvancedUSG() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Advanced USG"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />

          <AdvancedUSGHead />
          <div className="component-mainContent">
            <AdvancedUSGExpect />
            <AdvancedUSGPrepare />
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
      <AdvancedUSGService />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}

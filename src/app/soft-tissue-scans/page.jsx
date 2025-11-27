import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import SoftTissueScansExcept from "../../components/ServicePages/SoftTissueScans/SoftTissueScansExcept";
import SoftTissueScansHead from "../../components/ServicePages/SoftTissueScans/SoftTissueScansHead";
import SoftTissueScansPrepare from "../../components/ServicePages/SoftTissueScans/SoftTissueScansPrepare";
import ServiceHeader from "./../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "./../../components/ServiceComponents/ServiceMap/ServiceMap";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";

export default function SoftTissueScans() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Soft Tissue Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />

          <SoftTissueScansHead />
          <div className="component-mainContent">
            <SoftTissueScansExcept />
            <SoftTissueScansPrepare />
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
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}

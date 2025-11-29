import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "./../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "./../../components/ServiceComponents/ServiceMap/ServiceMap";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "./../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import BaselineScan3dHead from "./../../components/ServicePages/BaselineScan3d/BaselineScan3dHead";
import BaselineScan3dPrepare from "./../../components/ServicePages/BaselineScan3d/BaselineScan3dPrepare";
import BaselineScan3dExpect from "./../../components/ServicePages/BaselineScan3d/BaselineScan3dExpect";

export default function BaseLine3DScan() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title=" 3D And 4D Base Line Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <BaselineScan3dHead />
          <div className="component-mainContent">
            <BaselineScan3dExpect />
            <BaselineScan3dPrepare />
            <ServiceBilling />
            <ServiceBook />
          </div>
        </div>
        <div className="component-sidebar">
          <ServiceSidebarBrochure />
          <ServiceSidebarLinks />
        </div>
      </div>
      <HomeWhy />
      <HomeTestimonial />
      <ServiceMap />
    </div>
  );
}

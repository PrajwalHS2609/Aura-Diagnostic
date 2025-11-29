import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import DFetalScansExpect from "./../../components/ServicePages/DFetalScans/DFetalScansExpect";
import DFetalScansHead from "./../../components/ServicePages/DFetalScans/DFetalScansHead";
import DFetalScansPrepare from "../../components/ServicePages/DFetalScans/DFetalScansPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";

export default function DFetalScan() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Musculoskeletal Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />

          <DFetalScansHead />
          <div className="component-mainContent">
            <DFetalScansExpect />
            <DFetalScansPrepare />
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

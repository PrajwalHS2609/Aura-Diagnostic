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
import PregnancyScanExpect from "../../components/ServicePages/PregnancyScan/PregnancyScanExpect";
import PregnancyScanHead from "../../components/ServicePages/PregnancyScan/PregnancyScanHead";
import PregnancyScanPrepare from "../../components/ServicePages/PregnancyScan/PregnancyScanPrepare";
import PregnancyScanService from "../../components/ServicePages/PregnancyScan/PregnancyScanService";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";

export default function PregnancyScan() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Pregnancy Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />

          <PregnancyScanHead />
          <div className="component-mainContent">
            <PregnancyScanExpect />
            <PregnancyScanPrepare />
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
      <PregnancyScanService />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}

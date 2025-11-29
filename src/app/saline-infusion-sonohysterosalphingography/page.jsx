import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "./../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "./../../components/ServiceComponents/ServiceMap/ServiceMap";
import MusculoskeletalScanHead from "../../components/ServicePages/MusculoskeletalScan/MusculoskeletalScanHead";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "./../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import SalineInfusionHead from './../../components/ServicePages/SalineInfusion/SalineInfusionHead';
import SalineInfusionExpect from './../../components/ServicePages/SalineInfusion/SalineInfusionExpect';
import SalineInfusionPrepare from "../../components/ServicePages/SalineInfusion/SalineInfusionPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";

export default function SalineInfusion() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Saline Infusion Sonohystersalphingography"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav/>
          <SalineInfusionHead />
          <div className="component-mainContent">
            <SalineInfusionExpect />
            <SalineInfusionPrepare />
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

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
import FattyLiverQuantificationHead from './../../components/ServicePages/FattyLiverQuantification/FattyLiverQuantificationHead';
import FattyLiverQuantificationExpect from './../../components/ServicePages/FattyLiverQuantification/FattyLiverQuantificationExpect';
import FattyLiverQuantificationPrepare from './../../components/ServicePages/FattyLiverQuantification/FattyLiverQuantificationPrepare';
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";

export default function FattyLiverQuantification() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Fatty Liver Quantification"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <FattyLiverQuantificationHead />
          <div className="component-mainContent">
            <FattyLiverQuantificationExpect />
            <FattyLiverQuantificationPrepare />
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

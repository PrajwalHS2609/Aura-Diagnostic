import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
import DatingScanHead from './../../components/ServicePages/DatingScan/DatingScanHead';
import DatingScanExpect from './../../components/ServicePages/DatingScan/DatingScanExpect';
import DatingScanPrepare from './../../components/ServicePages/DatingScan/DatingScanPrepare';
import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";

export default function DatingScan(){
    return(
<div className="">
      {" "}
      <ServiceHeader
        title="Dating Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <DatingScanHead />
          <div className="component-mainContent">
            <DatingScanExpect />
            <DatingScanPrepare />
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
    </div>    )
}
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
import LiverElastographyHead from './../../components/ServicePages/LiverElastography/LiverElastographyHead';
import LiverElastographyExpect from './../../components/ServicePages/LiverElastography/LiverElastographyExpect';
import LiverElastographyPrepare from './../../components/ServicePages/LiverElastography/LiverElastographyPrepare';
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";

export default function LiverElastography() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Liver Elastography"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav/>
          <LiverElastographyHead />
          <div className="component-mainContent">
            <LiverElastographyExpect />
            <LiverElastographyPrepare />
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

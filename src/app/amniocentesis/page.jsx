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
import AmniocentesisExpect from './../../components/ServicePages/Amniocentesis/AmniocentesisExpect';
import AmniocentesisHead from './../../components/ServicePages/Amniocentesis/AmniocentesisHead';
import AmniocentesisPrepare from "../../components/ServicePages/Amniocentesis/AmniocentesisPrepare";

export default function Amniocentesis() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Amniocentesis"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <AmniocentesisHead />
          <div className="component-mainContent">
            <AmniocentesisExpect />
            <AmniocentesisPrepare />
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

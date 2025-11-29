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
import FetalUrosonogramHead from './../../components/ServicePages/FetalUrosonogram/FetalUrosonogramHead';
import FetalUrosonogramExpect from './../../components/ServicePages/FetalUrosonogram/FetalUrosonogramExpect';
import FetalUrosonogramPrepare from './../../components/ServicePages/FetalUrosonogram/FetalUrosonogramPrepare';
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";

export default function FetalUrosonogram() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Fetal Urosonogram"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <FetalUrosonogramHead />
          <div className="component-mainContent">
            <FetalUrosonogramExpect />
            <FetalUrosonogramPrepare />
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

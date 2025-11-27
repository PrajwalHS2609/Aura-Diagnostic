import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import InfertilityScanExpect from "../../components/ServicePages/InfertilityScan/InfertilityScanExpect";
import InfertilityScanHead from "../../components/ServicePages/InfertilityScan/InfertilityScanHead";
import InfertilityScanPrepare from "../../components/ServicePages/InfertilityScan/InfertilityScanPrepare";
import InfertilityScanService from "../../components/ServicePages/InfertilityScan/InfertilityScanService";
import ServiceHeader from './../../components/ServiceComponents/ServiceHeader/ServiceHeader';
import ServiceMap from './../../components/ServiceComponents/ServiceMap/ServiceMap';
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";

export default function InfertilityScan() {
  return (
 <div className="">
      {" "}
      <ServiceHeader
        title="Infertility Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />

          <InfertilityScanHead />
          <div className="component-mainContent">
            <InfertilityScanExpect />
            <InfertilityScanPrepare />
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
      <InfertilityScanService />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}

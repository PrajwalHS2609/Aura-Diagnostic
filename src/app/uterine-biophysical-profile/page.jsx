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
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import UterineBiophysicalProfileHead from './../../components/ServicePages/UterineBiophysicalProfile/UterineBiophysicalProfileHead';
import UterineBiophysicalProfileExpect from './../../components/ServicePages/UterineBiophysicalProfile/UterineBiophysicalProfileExpect';
import UterineBiophysicalProfilePrepare from './../../components/ServicePages/UterineBiophysicalProfile/UterineBiophysicalProfilePrepare';

export default function UterineBiophysical() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Uterine Biophysical Profile"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav/>
          <UterineBiophysicalProfileHead />
          <div className="component-mainContent">
            <UterineBiophysicalProfileExpect />
            <UterineBiophysicalProfilePrepare />
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

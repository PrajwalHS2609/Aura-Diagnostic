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
import HematologyHead from "../../components/ServicePages/Hematology/HematologyHead";
import HematologyPrepare from "../../components/ServicePages/Hematology/HematologyPrepare";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
import HematologyExpect from "./../../components/ServicePages/Hematology/HematologyExpect";

export default function HematologyTest() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Hematology Tests in Girinagar"
        para="Accurate Blood Test with expert care, ensuring healthy monitoring in every step."
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <HematologyHead />
          <div className="component-mainContent">
            <HematologyExpect />
            <HematologyPrepare />
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
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}

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
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
import SerologyExpect from "../../components/ServicePages/Serology/SerologyExpect";
import SerologyPrepare from "../../components/ServicePages/Serology/SerologyPrepare";
import SerologyHead from "../../components/ServicePages/Serology/SerologyHead";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";

export default function SerologyBloodTest(){
    return(
<div className="">
      {" "}
      <ServiceHeader
        title="Serology Blood Test"
        para="Accurate Blood Test with expert care, ensuring healthy monitoring in every step."
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <SerologyHead />
          <div className="component-mainContent">
            <SerologyExpect />
            <SerologyPrepare />
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
      <BloodTestCities/>
      <HomeWhy />
      <HomeTestimonial />
    </div>
    )
}
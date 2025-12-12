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
import BiochemistryHead from './../../components/ServicePages/Biochemistry/BiochemistryHead';
import BiochemistryExpect from './../../components/ServicePages/Biochemistry/BiochemistryExpect';
import BiochemistryPrepare from "../../components/ServicePages/Biochemistry/BiochemistryPrepare";

export default function BiochemistryTest(){
    return(
<div className="">
      {" "}
      <ServiceHeader
        title="Biochemistry Tests in Girinagar"
        para="Accurate Blood Test with expert care, ensuring healthy monitoring in every step."
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <BiochemistryHead />
          <div className="component-mainContent">
            <BiochemistryExpect />
            <BiochemistryPrepare />
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
    )
}
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
import UpperLowerLimbDopplerHead from './../../components/ServicePages/UpperLowerLimbDoppler/UpperLowerLimbDopplerHead';
import UpperLowerLimbDopplerExpect from './../../components/ServicePages/UpperLowerLimbDoppler/UpperLowerLimbDopplerExpect';
import UpperLowerLimbDopplerPrepare from './../../components/ServicePages/UpperLowerLimbDoppler/UpperLowerLimbDopplerPrepare';

export default function MusculoskeletalScan() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Upper and Lower Limb Doppler"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav/>
          <UpperLowerLimbDopplerHead />
          <div className="component-mainContent">
            <UpperLowerLimbDopplerExpect />
            <UpperLowerLimbDopplerPrepare />
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

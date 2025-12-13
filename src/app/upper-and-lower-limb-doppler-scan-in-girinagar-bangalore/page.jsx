import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import UpperLowerLimbDopplerHead from '../../components/ServicePages/UpperLowerLimbDoppler/UpperLowerLimbDopplerHead';
import UpperLowerLimbDopplerExpect from '../../components/ServicePages/UpperLowerLimbDoppler/UpperLowerLimbDopplerExpect';
import UpperLowerLimbDopplerPrepare from '../../components/ServicePages/UpperLowerLimbDoppler/UpperLowerLimbDopplerPrepare';
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import UpperLowerLimbDopplerContent from "../../components/ServicePages/UpperLowerLimbDoppler/UpperLowerLimbDopplerContent";
export const metadata = {
  title: "Upper & Lower Limb Doppler in Girinagar, Bangalore | Doppler Scan near Me",
  description: "Upper & Lower Limb Doppler in Girinagar, Bangalore. Is a non-invasive ultrasound test used to evaluate the blood flow in the arteries and veins of the arms and legs.",
  canonical: "https://auradiagnostics.co.in/upper-and-lower-limb-doppler-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
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
       <ServiceMap />
      <BloodTestCities/>
      <HomeWhy />
      <HomeTestimonial />
     <UpperLowerLimbDopplerContent/>
    </div>
  );
}

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
import Pelvis3dHead from "../../components/ServicePages/Pelvis3d/Pelvis3dHead";
import Pelvis3dExpect from "../../components/ServicePages/Pelvis3d/Pelvis3dExpect";
import Pelvis3dPrepare from "../../components/ServicePages/Pelvis3d/Pelvis3dPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import Pelvis3dContent from "../../components/ServicePages/Pelvis3d/Pelvis3dContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
export const metadata = {
  title: "3D Pelvis Scan in Girinagar, Bangalore | Pelvis Scan near Me",
  description:
    "3D Pelvis Scan in Girinagar, Bangalore. Is an advanced ultrasound imaging technique used to create three-dimensional views of the pelvic region for clearer and more detailed evaluation.",
  canonical:
    "https://auradiagnostics.co.in/3d-pelvis-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function Pelvis3D() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="3D Pelvis Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <Pelvis3dHead />
          <div className="component-mainContent">
            <Pelvis3dExpect />
            <Pelvis3dPrepare />
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
      <Pelvis3dContent />
    </div>
  );
}

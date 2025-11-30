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
import BaselineScan3dHead from "../../components/ServicePages/BaselineScan3d/BaselineScan3dHead";
import BaselineScan3dPrepare from "../../components/ServicePages/BaselineScan3d/BaselineScan3dPrepare";
import BaselineScan3dExpect from "../../components/ServicePages/BaselineScan3d/BaselineScan3dExpect";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
export const metadata = {
  title: "3D Baseline Scan in Girinagar, Bangalore | AFC Scan near Me",
  description: "3D Baseline Scan in Girinagar, Bangalore. Is an advanced ultrasound assessment used to evaluate a woman’s ovarian reserve and overall reproductive health.",
  canonical: "https://auradiagnostics.co.in/3d-baseline-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function BaseLine3DScan() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title=" 3D Base Line Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <BaselineScan3dHead />
          <div className="component-mainContent">
            <BaselineScan3dExpect />
            <BaselineScan3dPrepare />
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

import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import baseLineScan from "./../../Images/InfertilityScanServicesBanner/3D-Base-Line-Scan.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import BaselineScan3dHead from "../../components/ServicePages/BaselineScan3d/BaselineScan3dHead";
import BaselineScan3dPrepare from "../../components/ServicePages/BaselineScan3d/BaselineScan3dPrepare";
import BaselineScan3dExpect from "../../components/ServicePages/BaselineScan3d/BaselineScan3dExpect";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import BaselineScan3dContent from "../../components/ServicePages/BaselineScan3d/BaselineScan3dContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
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
        title="3D Base Line Scan in Girinagar"
        para="Detailed reproductive insights, helping assess fertility health and guide effective treatment planning."
        img={baseLineScan}
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
            <ServiceMap />
                  <BloodTestCities/>

      <HomeWhy />
      <HomeTestimonial />
      <BaselineScan3dContent/>
    </div>
  );
}

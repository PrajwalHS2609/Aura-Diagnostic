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
import SalineInfusionHead from "../../components/ServicePages/SalineInfusion/SalineInfusionHead";
import SalineInfusionExpect from "../../components/ServicePages/SalineInfusion/SalineInfusionExpect";
import SalineInfusionPrepare from "../../components/ServicePages/SalineInfusion/SalineInfusionPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import SalineInfusionContent from "../../components/ServicePages/SalineInfusion/SalineInfusionContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
export const metadata = {
  title:
    "Saline Infusion Sonohysterosalpingography Test in Girinagar, Bangalore ",
  description:
    "Saline Infusion Sonohysterosalpingography Test in Girinagar, Bangalore. Is an advanced ultrasound-based procedure used to evaluate the uterus and fallopian tubes with greater clarity.",
  canonical: "https://auradiagnostics.co.in/",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function SalineInfusion() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Saline Infusion Sonohystersalphingography"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <SalineInfusionHead />
          <div className="component-mainContent">
            <SalineInfusionExpect />
            <SalineInfusionPrepare />
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
      <SalineInfusionContent />
    </div>
  );
}

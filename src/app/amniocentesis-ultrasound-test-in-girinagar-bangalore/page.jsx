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
import AmniocentesisExpect from "../../components/ServicePages/Amniocentesis/AmniocentesisExpect";
import AmniocentesisHead from "../../components/ServicePages/Amniocentesis/AmniocentesisHead";
import AmniocentesisPrepare from "../../components/ServicePages/Amniocentesis/AmniocentesisPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import AmniocentesisContent from "../../components/ServicePages/Amniocentesis/AmniocentesisContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";

export const metadata = {
  title:
    "Amniocentesis Ultrasound Test in Girinagar, Bangalore – Aura Diagnostics",
  description:
    "Amniocentesis Ultrasound Test in Girinagar, Bangalore. Is a specialized prenatal diagnostic procedure used to evaluate the health and development of an unborn baby.",
  canonical:
    "https://auradiagnostics.co.in/amniocentesis-ultrasound-test-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function Amniocentesis() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Amniocentesis"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <AmniocentesisHead />
          <div className="component-mainContent">
            <AmniocentesisExpect />
            <AmniocentesisPrepare />
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
      <AmniocentesisContent />
    </div>
  );
}

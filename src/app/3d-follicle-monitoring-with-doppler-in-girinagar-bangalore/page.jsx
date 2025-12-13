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
import FollicleMonitoringHead from "../../components/ServicePages/FollicleMonitoring/FollicleMonitoringHead";
import FollicleMonitoringExpect from "../../components/ServicePages/FollicleMonitoring/FollicleMonitoringExpect";
import FollicleMonitoringPrepare from "../../components/ServicePages/FollicleMonitoring/FollicleMonitoringPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
export const metadata = {
  title:
    "3D Follicle Monitoring with Doppler in Girinagar, Bangalore | Doppler Scan near Me",
  description:
    "3D Follicle Monitoring with Doppler in Girinagar, Bangalore. Is an advanced ultrasound technique used to track the growth, size, and health of ovarian follicles during a woman’s menstrual cycle or fertility treatment.",
  canonical:
    "https://auradiagnostics.co.in/3d-follicle-monitoring-with-doppler-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function FollicleMonitoring3D() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="3D Follicle Monitoring With Doppler"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <FollicleMonitoringHead />
          <div className="component-mainContent">
            <FollicleMonitoringExpect />
            <FollicleMonitoringPrepare />
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
  );
}

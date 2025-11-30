import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import ObstetricsExpect from "../../components/ServicePages/Obstetrics/ObstetricsExpect";
import ObstetricsHead from "../../components/ServicePages/Obstetrics/ObstetricsHead";
import ObstetricsPrepare from "../../components/ServicePages/Obstetrics/ObstetricsPrepare";
import ObstetricsService from "../../components/ServicePages/Obstetrics/ObstetricsService";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
import ServiceHeader from '../../components/ServiceComponents/ServiceHeader/ServiceHeader';
import ServiceMap from '../../components/ServiceComponents/ServiceMap/ServiceMap';
export const metadata = {
  title: "Obstetrics Scan in Girinagar, Bangalore | Obstetrics Scans near Me",
  description: "Obstetrics Scan in Girinagar, Bangalore. Is a specialized branch of medicine that focuses on pregnancy, childbirth, and the postpartum period.",
  canonical: "https://auradiagnostics.co.in/obstetrics-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function Obstetrics() {
  return (
     <div className="">
      {" "}
      <ServiceHeader
        title="Obstetrics"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />

          <ObstetricsHead />
          <div className="component-mainContent">
            <ObstetricsExpect />
            <ObstetricsPrepare />
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
      <ObstetricsService />
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}

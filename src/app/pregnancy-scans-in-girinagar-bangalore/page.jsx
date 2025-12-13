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
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import PregnancyScanContent from "../../components/ServicePages/PregnancyScan/PregnancyScanContent";
import PregnancyScanExpect from "../../components/ServicePages/PregnancyScan/PregnancyScanExpect";
import PregnancyScanHead from "../../components/ServicePages/PregnancyScan/PregnancyScanHead";
import PregnancyScanPrepare from "../../components/ServicePages/PregnancyScan/PregnancyScanPrepare";
import PregnancyScanService from "../../components/ServicePages/PregnancyScan/PregnancyScanService";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
export const metadata = {
  title:
    "Pregnancy Scans in Girinagar, Bangalore for Dating, Anomaly, NT, 3D & 4D Scans",
  description:
    "Pregnancy Scans in Girinagar, Bangalore for Dating Scan, Anomaly Scan, NT Scan, 3D & 4D Fetal Scans. Book your Appointment Today!",
  canonical:
    "https://auradiagnostics.co.in/pregnancy-scans-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function PregnancyScan() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Pregnancy Scan in Girinagar"
        para="Accurate pregnancy scans with expert care, ensuring healthy monitoring and for mother and baby every step."
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <PregnancyScanHead />
          <div className="component-mainContent">
            <PregnancyScanExpect />
            <PregnancyScanPrepare />
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
      <PregnancyScanService />
      <BloodTestCities/>
      <HomeWhy />
      <HomeTestimonial />
      <PregnancyScanContent />
    </div>
  );
}

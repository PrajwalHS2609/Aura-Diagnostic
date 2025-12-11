import GrowthScanHead from "../../components/ServicePages/GrowthScan/GrowthScanHead";
import GrowthScanExpect from "../../components/ServicePages/GrowthScan/GrowthScanExpect";
import GrowthScanPrepare from "../../components/ServicePages/GrowthScan/GrowthScanPrepare";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import GrowthScanContent from "../../components/ServicePages/GrowthScan/GrowthScanContent";
export const metadata = {
  title:
    "Growth Scan with Doppler in Girinagar, Bangalore | Fetal Growth Scans near Me",
  description:
    "Growth Scan with Doppler in Girinagar, Bangalore. Is a specialized pregnancy ultrasound performed in the second or third trimester to monitor the baby’s growth, wellbeing, and blood circulation.",
  canonical:
    "https://auradiagnostics.co.in/growth-scan-with-doppler-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function GrowthScan() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Growth Scans with Doppler"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <GrowthScanHead />
          <div className="component-mainContent">
            <GrowthScanExpect />
            <GrowthScanPrepare />
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
      <HomeWhy />
      <HomeTestimonial />
      <GrowthScanContent />
    </div>
  );
}

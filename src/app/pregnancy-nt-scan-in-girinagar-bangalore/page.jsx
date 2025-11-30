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
import NtScanHead from "../../components/ServicePages/NtScan/NtScanHead";
import NtScanExpect from "../../components/ServicePages/NtScan/NtScanExpect";
import NtScanPrepare from "../../components/ServicePages/NtScan/NtScanPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
export const metadata = {
  title: "Pregnancy NT Scan in Girinagar, Bangalore | Fetal Scans near Me",
  description: "Pregnancy NT Scan in Girinagar, Bangalore. Is an essential early pregnancy ultrasound performed between 11 to 14 weeks to assess the baby’s risk of chromosomal abnormalities. ",
  canonical: "https://auradiagnostics.co.in/pregnancy-nt-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function NtScan() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="NT Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav/>
          <NtScanHead />
          <div className="component-mainContent">
            <NtScanExpect />
            <NtScanPrepare />
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

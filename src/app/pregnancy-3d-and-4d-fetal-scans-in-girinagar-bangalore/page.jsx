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
import DFetalScansExpect from "../../components/ServicePages/DFetalScans/DFetalScansExpect";
import DFetalScansHead from "../../components/ServicePages/DFetalScans/DFetalScansHead";
import DFetalScansPrepare from "../../components/ServicePages/DFetalScans/DFetalScansPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import DFetalScansContent from "../../components/ServicePages/DFetalScans/DFetalScansContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";

export const metadata = {
  title:
    "Pregnancy 3D & 4D Fetal Scans in Girinagar, Bangalore | Fetal Scans near Me",
  description:
    "Pregnancy 3D & 4D Fetal Scans in Girinagar, Bangalore. Is an advanced pregnancy ultrasound that provides lifelike images and real-time videos of your baby inside the womb. ",
  canonical:
    "https://auradiagnostics.co.in/pregnancy-3d-and-4d-fetal-scans-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function DFetalScan() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="3D & 4D Fetal Scans"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />

          <DFetalScansHead />
          <div className="component-mainContent">
            <DFetalScansExpect />
            <DFetalScansPrepare />
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
      <DFetalScansContent />
    </div>
  );
}

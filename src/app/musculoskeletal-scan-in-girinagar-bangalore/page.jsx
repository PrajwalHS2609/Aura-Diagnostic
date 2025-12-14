import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import MusculoskeletalScanHead from "../../components/ServicePages/MusculoskeletalScan/MusculoskeletalScanHead";
import musculoskeletalScan from "./../../Images/MusculoskeletalScanServicesBanner.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import MusculoskeletalScanExcept from "../../components/ServicePages/MusculoskeletalScan/MusculoskeletalScanExcept";
import MusculoskeletalScanPrepare from "../../components/ServicePages/MusculoskeletalScan/MusculoskeletalScanPrepare";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import MusculoskeletalScanContent from "../../components/ServicePages/MusculoskeletalScan/MusculoskeletalScanContent";
export const metadata = {
  title:
    "Musculoskeletal (MSK) Scan in Girinagar, Bangalore | Ultrasound Scan near Me",
  description:
    "Musculoskeletal (MSK) Scan in Girinagar, Bangalore. Is a specialized ultrasound used to examine the muscles, tendons, ligaments, joints, and soft tissues of the body.",
  canonical:
    "https://auradiagnostics.co.in/musculoskeletal-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function MusculoskeletalScan() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Musculoskeletal Scan in Girinagar"
        para="Delivers precise imaging of bones, joints, and soft tissues for accurate diagnosis and effective treatment planning."
        img={musculoskeletalScan}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <MusculoskeletalScanHead />
          <div className="component-mainContent">
            <MusculoskeletalScanExcept />
            <MusculoskeletalScanPrepare />
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
      <BloodTestCities />
      <HomeWhy />
      <HomeTestimonial />
      <MusculoskeletalScanContent/>  
    </div>
  );
}

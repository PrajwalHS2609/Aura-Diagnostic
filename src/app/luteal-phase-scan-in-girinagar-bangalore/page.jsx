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
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import LeutealPhaseScanExpect from '../../components/ServicePages/LeutealPhaseScan/LeutealPhaseScanExpect';
import LeutealPhaseScanHead from '../../components/ServicePages/LeutealPhaseScan/LeutealPhaseScanHead';
import LeutealPhaseScanPrepare from '../../components/ServicePages/LeutealPhaseScan/LeutealPhaseScanPrepare';
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import LeutealPhaseScanContent from "../../components/ServicePages/LeutealPhaseScan/LeutealPhaseScanContent";
export const metadata = {
  title: "Luteal Phase Scan in Girinagar, Bangalore | Ultrasound Scan near Me",
  description: "Luteal Phase Scan in Girinagar, Bangalore. Is an ultrasound performed during the second half of a woman’s menstrual cycle, typically after ovulation.",
  canonical: "https://auradiagnostics.co.in/luteal-phase-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function LeutealPhaseScan() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Leuteal Phase Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav/>
          <LeutealPhaseScanHead />
          <div className="component-mainContent">
            <LeutealPhaseScanExpect />
            <LeutealPhaseScanPrepare />
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
      <LeutealPhaseScanContent/>
    </div>
  );
}

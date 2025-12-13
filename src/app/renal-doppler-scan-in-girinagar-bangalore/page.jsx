import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import MusculoskeletalScanHead from "../../components/ServicePages/MusculoskeletalScan/MusculoskeletalScanHead";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";

import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import RenalDopplerExpect from "../../components/ServicePages/RenalDoppler/RenalDopplerExpect";
import RenalDopplerHead from "../../components/ServicePages/RenalDoppler/RenalDopplerHead";
import RenalDopplerPrepare from "../../components/ServicePages/RenalDoppler/RenalDopplerPrepare";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import RenalDopplerContent from "../../components/ServicePages/RenalDoppler/RenalDopplerContent";
export const metadata = {
  title: "Renal Doppler Scan in Girinagar, Bangalore | Doppler Scan near Me",
  description:
    "Renal Doppler Scan in Girinagar, Bangalore. Is a specialized ultrasound test used to evaluate the carotid arteries, the major blood vessels on both sides of the neck that supply oxygen-rich blood to the brain.",
  canonical:
    "https://auradiagnostics.co.in/renal-doppler-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function RenalDoppler() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Renal Doppler"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <RenalDopplerHead />
          <div className="component-mainContent">
            <RenalDopplerExpect />
            <RenalDopplerPrepare />
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
      <RenalDopplerContent />
    </div>
  );
}

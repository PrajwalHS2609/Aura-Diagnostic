import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import anomaly from "./../../Images/PregnancyScanServiceBanner/Pregnancy-Anomaly-Scan.png"
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import AnomalyScanHead from "../../components/ServicePages/AnomalyScan/AnomalyScanHead";
import AnomalyScanExpect from "../../components/ServicePages/AnomalyScan/AnomalyScanExpect";
import AnomalyScanPrepare from "../../components/ServicePages/AnomalyScan/AnomalyScanPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import AnomalyScanContent from "../../components/ServicePages/AnomalyScan/AnomalyScanContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";

export const metadata = {
  title: "Pregnancy Anomaly Scan in Girinagar, Bangalore | Fetal Scans near Me",
  description:
    "Pregnancy Anomaly Scan in Girinagar, Bangalore. The mid-pregnancy or level-2 ultrasound, is a detailed examination performed between 18 to 22 weeks of pregnancy to assess the baby’s overall development.",
  canonical:
    "https://auradiagnostics.co.in/pregnancy-anomaly-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing, Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function AnomalyScan() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Anomaly Scan in Girinagar"
        para="It ensure healthy fetal development, detecting abnormalities early for confident, well-informed pregnancy care."
        img={anomaly}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <AnomalyScanHead />
          <div className="component-mainContent">
            <AnomalyScanExpect />
            <AnomalyScanPrepare />
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
      <AnomalyScanContent />
    </div>
  );
}

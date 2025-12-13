import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import doppler from "../../Images/ServicesBanner/Doppler.png";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import DopplerScanExpect from "../../components/ServicePages/DopplerScan/DopplerScanExpect";
import DopplerScanService from "../../components/ServicePages/DopplerScan/DopplerScanService";
import DopplerScanPrepare from "../../components/ServicePages/DopplerScan/DopplerScanPrepare";
import DopplerScanHeader from "../../components/ServicePages/DopplerScan/DopplerScanHead";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";

export const metadata = {
  title: "Doppler Scan in Girinagar, Bangalore | Ultrasound Scan near Me",
  description: "Doppler Scan in Girinagar, Bangalore. Is a specialized ultrasound technique used to measure the flow of blood through vessels, including major arteries and veins.",
  canonical: "https://auradiagnostics.co.in/doppler-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function DopplerPage() {
  return (
    <div>
      <ServiceHeader
        title="Doppler Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={doppler}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />

          <DopplerScanHeader />
          <div className="component-mainContent">
            <DopplerScanExpect />
            <DopplerScanPrepare />
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
      <DopplerScanService />
      <BloodTestCities/>
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}

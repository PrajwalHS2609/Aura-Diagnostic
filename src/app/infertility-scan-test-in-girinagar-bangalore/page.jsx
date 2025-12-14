import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import InfertilityScanExpect from "../../components/ServicePages/InfertilityScan/InfertilityScanExpect";
import InfertilityScanHead from "../../components/ServicePages/InfertilityScan/InfertilityScanHead";
import InfertilityScanPrepare from "../../components/ServicePages/InfertilityScan/InfertilityScanPrepare";
import InfertilityScanService from "../../components/ServicePages/InfertilityScan/InfertilityScanService";
import ServiceHeader from '../../components/ServiceComponents/ServiceHeader/ServiceHeader';
import ServiceMap from '../../components/ServiceComponents/ServiceMap/ServiceMap';
import infertilityScan from "./../../Images/InfertilityScanServicesBanner/Infertility-Scan.png";
import InfertilityScanContent from "../../components/ServicePages/InfertilityScan/InfertilityScanContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
export const metadata = {
  title: "Infertility Scan Test in Girinagar, Bangalore | Infertility Scans near Me",
  description: "Infertility Scan Test in Girinagar, Bangalore. Is a specialized ultrasound used to assess reproductive health in women and men who are facing difficulty conceiving.",
  canonical: "https://auradiagnostics.co.in/infertility-scan-test-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function InfertilityScan() {
  return (
 <div className="">
      {" "}
      <ServiceHeader
        title="Infertility Scans in Girinagar"
        para="Provide precise reproductive insights, guiding effective treatment, improving conception chances, and supporting your fertility journey."
        img={infertilityScan}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />

          <InfertilityScanHead />
          <div className="component-mainContent">
            <InfertilityScanExpect />
            <InfertilityScanPrepare />
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
      <InfertilityScanService />
      <HomeWhy />
      <HomeTestimonial />
      <InfertilityScanContent/>
    </div>
  );
}

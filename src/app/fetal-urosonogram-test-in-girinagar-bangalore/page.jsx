import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import fetalUrosonogram from "./../../Images/ObstetricScanServiceBanner/Fetal-Urosonogram.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import FetalUrosonogramHead from "../../components/ServicePages/FetalUrosonogram/FetalUrosonogramHead";
import FetalUrosonogramExpect from "../../components/ServicePages/FetalUrosonogram/FetalUrosonogramExpect";
import FetalUrosonogramPrepare from "../../components/ServicePages/FetalUrosonogram/FetalUrosonogramPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import FetalUrosonogramContent from "../../components/ServicePages/FetalUrosonogram/FetalUrosonogramContent";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
export const metadata = {
  title:
    "Fetal Urosonogram Test in Girinagar, Bangalore | Fetal Urosonogram Test near Me",
  description:
    "Fetal Urosonogram Test in Girinagar, Bangalore. Is a specialized ultrasound focused on examining the baby’s urinary system during pregnancy.",
  canonical:
    "https://auradiagnostics.co.in/fetal-urosonogram-test-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function FetalUrosonogram() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Fetal Urosonogram Test in Girinagar"
        para="We ensures healthy kidney and bladder development with precise screening and expert pregnancy care."
        img={fetalUrosonogram}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <FetalUrosonogramHead />
          <div className="component-mainContent">
            <FetalUrosonogramExpect />
            <FetalUrosonogramPrepare />
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
      <FetalUrosonogramContent />
    </div>
  );
}

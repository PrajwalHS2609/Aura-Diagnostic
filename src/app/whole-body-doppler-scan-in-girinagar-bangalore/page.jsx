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
import WholeBodyDopplerHead from "../../components/ServicePages/WholeBodyDoppler/WholeBodyDopplerHead";
import WholeBodyDopplerExpect from "../../components/ServicePages/WholeBodyDoppler/WholeBodyDopplerExpect";
import WholeBodyDopplerPrepare from "../../components/ServicePages/WholeBodyDoppler/WholeBodyDopplerPrepare";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import WholeBodyDopplerContent from "../../components/ServicePages/WholeBodyDoppler/WholeBodyDopplerContent";
export const metadata = {
  title: "Whole Body Doppler in Girinagar, Bangalore | Doppler Scan near Me",
  description:
    "Whole Body Doppler in Girinagar, Bangalore. Is an ultrasound performed during the second half of a woman’s menstrual cycle, typically after ovulation.",
  canonical:
    "https://auradiagnostics.co.in/whole-body-doppler-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function WholeBodyDoppler() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Whole Body Doppler"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <WholeBodyDopplerHead />
          <div className="component-mainContent">
            <WholeBodyDopplerExpect />
            <WholeBodyDopplerPrepare />
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
      <WholeBodyDopplerContent />
    </div>
  );
}

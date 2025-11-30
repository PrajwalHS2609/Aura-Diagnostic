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
import CarotidDopplerHead from "../../components/ServicePages/CarotidDoppler/CarotidDopplerHead";
import CarotidDopplerExpect from "../../components/ServicePages/CarotidDoppler/CarotidDopplerExpect";
import CarotidDopplerPrepare from "../../components/ServicePages/CarotidDoppler/CarotidDopplerPrepare";

export const metadata = {
  title: "Carotid Doppler Scan in Girinagar, Bangalore | Doppler Scan near Me",
  description: "Carotid Doppler Scan in Girinagar, Bangalore. Is a specialized ultrasound test used to evaluate the carotid arteries, the major blood vessels on both sides of the neck that supply oxygen-rich blood to the brain.",
  canonical: "https://auradiagnostics.co.in/carotid-doppler-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function CarotidDoppler() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Carotid Doppler"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <CarotidDopplerHead />
          <div className="component-mainContent">
            <CarotidDopplerExpect />
            <CarotidDopplerPrepare />
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

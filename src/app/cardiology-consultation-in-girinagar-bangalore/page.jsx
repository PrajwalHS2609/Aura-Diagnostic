import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import carotidScan from "./../../Images/ConsultationImages/Cardiology-Consultation.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import ConsultationSidebar from '../../components/ServiceComponents/ConsultationSidebar';
import CardiologyExpect from "../../components/ConsultationPages/Cardiology/CardiologyExpect";
import CardiologyPrepare from "../../components/ConsultationPages/Cardiology/CardiologyPrepare";
import CardiologyHead from "../../components/ConsultationPages/Cardiology/CardiologyHead";

export const metadata = {
  title: "Cardiology Consultation in Girinagar, Bangalore – Aura Diagnostics",
  description: "Expert cardiology consultation in Girinagar, Bangalore with accurate diagnosis, advanced heart care, and personalized treatment for all cardiac conditions.",
  canonical: "https://auradiagnostics.co.in/cardiology-consultation-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function CarotidDoppler() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Cardiology Consultation in Girinagar"
        para="Expert cardiology consultation for heart health evaluation, diagnosis, and personalized treatment with experienced cardiac specialists."
        img={carotidScan}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <CardiologyHead />
          <div className="component-mainContent">
            <CardiologyExpect />
            <CardiologyPrepare />
            <ServiceBilling />
            <ServiceBook />
          </div>
        </div>
        <div className="component-sidebar">
          <ServiceSidebarBrochure />
          <ConsultationSidebar />
        </div>
      </div>
        <ServiceMap />
      <BloodTestCities/>
      <HomeWhy />
      <HomeTestimonial />
    </div>
  );
}

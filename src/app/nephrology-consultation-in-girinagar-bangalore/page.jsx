import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import nephrology from "./../../Images/ConsultationImages/Nephrology-Consultation.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import ConsultationSidebar from '../../components/ServiceComponents/ConsultationSidebar';
import NephrologyHead from '../../components/ConsultationPages/Nephrology/NephrologyHead';
import NephrologyExpect from '../../components/ConsultationPages/Nephrology/NephrologyExpect';
import NephrologyPrepare from '../../components/ConsultationPages/Nephrology/NephrologyPrepare';

export const metadata = {
  title: "Nephrology Consultation in Girinagar, Bangalore – Aura Diagnostics",
  description: "Advanced nephrology consultation in Girinagar, Bangalore offering expert kidney care, accurate diagnosis, and personalized treatment for all renal conditions.",
  canonical: "https://auradiagnostics.co.in/nephrology-consultation-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function Nephrology() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Nephrology Consultation in Girinagar"
        para="Comprehensive nephrology consultation for kidney health evaluation, diagnosis, and personalized treatment by experienced specialists."
        img={nephrology}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <NephrologyHead />
          <div className="component-mainContent">
            <NephrologyExpect />
            <NephrologyPrepare />
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

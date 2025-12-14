import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import urology from "./../../Images/ConsultationImages/urology-consultation.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import ConsultationSidebar from '../../components/ServiceComponents/ConsultationSidebar';
import UrologyHead from "../../components/ConsultationPages/Urology/UrologyHead";
import UrologyPrepare from "../../components/ConsultationPages/Urology/UrologyPrepare";
import UrologyExpect from './../../components/ConsultationPages/Urology/UrologyExpect';

export const metadata = {
  title: "Urology Consultation in Girinagar, Bangalore – Aura Diagnostics",
  description: "Expert urology consultation in Girinagar, Bangalore providing advanced diagnosis and personalized treatment for urinary, kidney, and prostate health conditions.",
  canonical: "https://auradiagnostics.co.in/urology-consultation-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function UrologyConsultation() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Urology Consultation in Girinagar"
        para="Expert urology consultation in Girinagar, Bangalore providing advanced diagnosis and personalized treatment for urinary, kidney, and prostate health conditions."
        img={urology}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <UrologyHead />
          <div className="component-mainContent">
            <UrologyExpect />
            <UrologyPrepare />
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

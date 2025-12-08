import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
import DatingScanHead from '../../components/ServicePages/DatingScan/DatingScanHead';
import DatingScanExpect from '../../components/ServicePages/DatingScan/DatingScanExpect';
import DatingScanPrepare from '../../components/ServicePages/DatingScan/DatingScanPrepare';
import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";

export const metadata = {
  title: "Pregnancy Dating Scan in Girinagar, Bangalore | Fetal Scan near Me",
  description: "Pregnancy Dating Scan in Girinagar, Bangalore. Is an early pregnancy ultrasound performed to determine the gestational age of the baby and calculate the expected due date.",
  canonical: "https://auradiagnostics.co.in/pregnancy-dating-scan-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function DatingScan(){
    return(
<div className="">
      {" "}
      <ServiceHeader
        title="Dating Scan"
        para="Precise dating scans to confirm pregnancy age, monitor early fetal development, and provide expecting parents reassurance with expert guidance and high-quality imaging from the start."
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <DatingScanHead />
          <div className="component-mainContent">
            <DatingScanExpect />
            <DatingScanPrepare />
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
    </div>    )
}
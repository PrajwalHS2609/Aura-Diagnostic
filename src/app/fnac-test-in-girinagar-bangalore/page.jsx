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
import FNACHead from '../../components/ServicePages/FNAC/FNACHead';
import FNACPrepare from '../../components/ServicePages/FNAC/FNACPrepare';
import FNACExpect from '../../components/ServicePages/FNAC/FNACExpect';
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
export const metadata = {
  title: "FNAC Test in Girinagar, Bangalore | FNAC Test near Me",
  description: "FNAC in Girinagar, Bangalore. Is a minimally invasive diagnostic procedure used to examine lumps, swellings, or abnormal tissue growths in the body.",
  canonical: "https://auradiagnostics.co.in/fnac-test-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function FNAC() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="FNAC (Fine Needle Aspiration Cytology)"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <FNACHead />
          <div className="component-mainContent">
            <FNACExpect />
            <FNACPrepare />
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

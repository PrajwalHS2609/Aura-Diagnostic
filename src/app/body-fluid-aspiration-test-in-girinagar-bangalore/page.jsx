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
import BodyFluidAspirationHead from "../../components/ServicePages/BodyFluidAspiration/BodyFluidAspirationHead";
import BodyFluidAspirationExpect from "../../components/ServicePages/BodyFluidAspiration/BodyFluidAspirationExpect";
import BodyFluidAspirationPrepare from "../../components/ServicePages/BodyFluidAspiration/BodyFluidAspirationPrepare";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import BodyFluidAspirationContent from "../../components/ServicePages/BodyFluidAspiration/BodyFluidAspirationContent";

export const metadata = {
  title:
    "Body Fluid Aspiration Test in Girinagar, Bangalore – Aura Diagnostics",
  description:
    "Body Fluid Aspiration Test in Girinagar, Bangalore. Is a minimally invasive diagnostic procedure used to examine lumps, swellings, or abnormal tissue growths in the body.",
  canonical: "https://auradiagnostics.co.in/",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function BodyFluidAspiration() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Body Fluid Aspiration"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <BodyFluidAspirationHead />
          <div className="component-mainContent">
            <BodyFluidAspirationExpect />
            <BodyFluidAspirationPrepare />
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
      <HomeWhy />
      <HomeTestimonial />
      <BodyFluidAspirationContent />
    </div>
  );
}

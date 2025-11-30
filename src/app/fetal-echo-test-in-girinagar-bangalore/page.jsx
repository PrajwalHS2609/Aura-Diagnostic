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
import FetalEchoHead from '../../components/ServicePages/FetalEcho/FetalEchoHead';
import FetalEchoExpect from '../../components/ServicePages/FetalEcho/FetalEchoExpect';
import FetalEchoPrepare from '../../components/ServicePages/FetalEcho/FetalEchoPrepare';
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
export const metadata = {
  title: "Fetal Echo Test in Girinagar, Bangalore | Fetal Echo Test near Me",
  description: "Fetal Echo Test in Girinagar, Bangalore. Is a specialized ultrasound used to examine the structure and function of a baby’s heart during pregnancy. ",
  canonical: "https://auradiagnostics.co.in/fetal-echo-test-in-girinagar-bangalore",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function FetalEcho() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Fetal Echo"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <FetalEchoHead />
          <div className="component-mainContent">
            <FetalEchoExpect />
            <FetalEchoPrepare />
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

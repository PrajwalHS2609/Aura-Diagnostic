import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeTestimonial from "../../components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";
import ServiceHeader from "../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceComponents/ServiceMap/ServiceMap";
import ServiceNav from "../../components/ServiceComponents/ServiceNav/ServiceNav";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
import TumorMarkersTestExpect from "../../components/ServicePages/TumorMarkersTest/TumorMarkersTestExpect";
import TumorMarkersTestHead from "../../components/ServicePages/TumorMarkersTest/TumorMarkersTestHead";
import TumorMarkersTestPrepare from "../../components/ServicePages/TumorMarkersTest/TumorMarkersTestPrepare";
import tumor from "./../../Images/BloodTestServiceBanner/Tumor-Markers-Blood-Test.png";
export const metadata = {
  title: "Tumor Markers Blood Test in Girinagar, Bangalore with Free Home Visit",
  description:
    "Get Tumor Markers Blood Test in Girinagar, Bangalore with free home visit. Accurate lab testing, timely reports, expert analysis, and convenient doorstep sample collection.",
  canonical:
    "https://auradiagnostics.co.in/tumor-markers-blood-tests-in-girinagar-bangalore-with-free-home-visit",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function TumorMarkersBloodTest(){
    return(
<div className="">
      {" "}
      <ServiceHeader
        title="Tumor Markers Blood Test in Girinagar"
        para="Accurate lab testing, timely reports, expert analysis, and convenient doorstep sample collection."
        img={tumor}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <TumorMarkersTestHead />
          <div className="component-mainContent">
            <TumorMarkersTestExpect />
            <TumorMarkersTestPrepare />
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
    </div>
    )
}
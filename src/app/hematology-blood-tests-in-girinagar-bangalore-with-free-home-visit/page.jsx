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
import HematologyHead from "../../components/ServicePages/Hematology/HematologyHead";
import HematologyPrepare from "../../components/ServicePages/Hematology/HematologyPrepare";
import hematology from "./../../Images/BloodTestServiceBanner/Hematology-Blood-Test.png";
import HematologyExpect from "../../components/ServicePages/Hematology/HematologyExpect";
export const metadata = {
  title: "Hematology Blood Test in Girinagar, Bangalore with Free Home Visit",
  description:
    "Book Hematology Blood Test in Girinagar, Bangalore with free home visit. Accurate reports, expert lab analysis, timely results, and convenient sample collection at your doorstep.",
  canonical:
    "https://auradiagnostics.co.in/hematology-blood-tests-in-girinagar-bangalore-with-free-home-visit",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function HematologyTest() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Hematology Tests in Girinagar"
        para="Book Hematology Blood Test in Girinagar, Bangalore with free home visit. Accurate reports, expert lab analysis, timely results, and convenient sample collection at your doorstep."
        img={hematology}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <HematologyHead />
          <div className="component-mainContent">
            <HematologyExpect />
            <HematologyPrepare />
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
  );
}

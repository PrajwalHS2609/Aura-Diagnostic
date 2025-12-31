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
import BloodTestContent from "../../components/ServicePages/BloodTest/BloodTestContent";
import BloodTestExpect from "../../components/ServicePages/BloodTest/BloodTestExpect";
import BloodTestFaq from "../../components/ServicePages/BloodTest/BloodTestFaq";
import BloodTestHead from "../../components/ServicePages/BloodTest/BloodTestHead";
import BloodTestPrepare from "../../components/ServicePages/BloodTest/BloodTestPrepare";
import BloodTestServices from "../../components/ServicePages/BloodTest/BloodTestServices";
import bloodTest from "./../../Images/BloodTestServiceBanner/Blood-Tests.png";
export const metadata = {
  title: "Blood Tests in Girinagar, Bangalore with Free Home Visit – Call Now!",
  description:
    "Book Blood Tests in Girinagar, Bangalore with free home visit. Call Now! Accurate reports, expert lab analysis, timely results, and convenient sample collection at your doorstep.",
  canonical:
    "https://auradiagnostics.co.in/blood-tests-in-girinagar-bangalore-with-free-home-visit",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function BloodTest(){
    return(
<div className="">
      {" "}
      <ServiceHeader
        title="Blood Tests in Girinagar"
        para="Accurate reports, expert lab analysis, timely results, and convenient sample collection at your doorstep."
        img={bloodTest}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <BloodTestHead />
          <div className="component-mainContent">
            <BloodTestExpect />
            <BloodTestPrepare />
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
      <BloodTestServices />
      <BloodTestCities/>
      <HomeWhy />
      <HomeTestimonial />
      <BloodTestFaq/>
      <BloodTestContent/>
    </div>
    )
}
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
import biochemistry from "./../../Images/BloodTestServiceBanner/Biochemistry-Blood-Test.png";
import BiochemistryHead from '../../components/ServicePages/Biochemistry/BiochemistryHead';
import BiochemistryExpect from '../../components/ServicePages/Biochemistry/BiochemistryExpect';
import BiochemistryPrepare from "../../components/ServicePages/Biochemistry/BiochemistryPrepare";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
export const metadata = {
  title: "Biochemistry Blood Test in Girinagar, Bangalore with Free Home Visit",
  description:
    "Get Biochemistry Blood Test in Girinagar, Bangalore with free home visit. Accurate lab testing, timely reports, expert analysis, and convenient doorstep sample collection.",
  canonical:
    "https://auradiagnostics.co.in/biochemistry-blood-tests-in-girinagar-bangalore-with-free-home-visit",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function BiochemistryTest(){
    return(
<div className="">
      {" "}
      <ServiceHeader
        title="Biochemistry Tests in Girinagar"
        para="Get Biochemistry Blood Test in Girinagar, Bangalore with free home visit. Accurate lab testing, timely reports, expert analysis, and convenient doorstep sample collection."
        img={biochemistry}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <BiochemistryHead />
          <div className="component-mainContent">
            <BiochemistryExpect />
            <BiochemistryPrepare />
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
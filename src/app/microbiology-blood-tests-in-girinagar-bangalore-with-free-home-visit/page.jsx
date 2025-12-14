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
import microbiology from "./../../Images/BloodTestServiceBanner/Microbiology-Blood-Test.png";
import MicrobiologyHead from '../../components/ServicePages/Microbiology/MicrobiologyHead';
import MicrobiologyExpect from '../../components/ServicePages/Microbiology/MicrobiologyExpect';
import MicrobiologyPrepare from "../../components/ServicePages/Microbiology/MicrobiologyPrepare";
import BloodTestCities from "../../components/ServicePages/BloodTest/BloodTestCities";
export const metadata = {
  title: "Microbiology Blood Test in Girinagar, Bangalore with Free Home Visit",
  description:
    "Get Microbiology Blood Test in Girinagar, Bangalore with free home visit. Accurate lab testing, timely reports, expert analysis, and convenient doorstep sample collection.",
  canonical:
    "https://auradiagnostics.co.in/microbiology-blood-tests-in-girinagar-bangalore-with-free-home-visit",
  keywords: [
    "Diagnostic testing,Clinical diagnostics,Differential diagnosis,Diagnostic accuracy,Ultrasound,Doppler scan",
  ],
};
export default function MicrobiologyBloodTest(){
    return(
<div className="">
      {" "}
      <ServiceHeader
        title="Microbiology Blood Test in Girinaga"
        para="Get Microbiology Blood Test in Girinagar, Bangalore with free home visit. Accurate lab testing, timely reports, expert analysis, and convenient doorstep sample collection."
        img={microbiology}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <ServiceNav />
          <MicrobiologyHead />
          <div className="component-mainContent">
            <MicrobiologyExpect />
            <MicrobiologyPrepare />
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
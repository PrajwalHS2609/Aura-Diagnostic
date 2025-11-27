import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import ServiceHeader from "./../../components/ServiceComponents/ServiceHeader/ServiceHeader";
import ServiceMap from "./../../components/ServiceComponents/ServiceMap/ServiceMap";
import MusculoskeletalScanHead from "../../components/ServicePages/MusculoskeletalScan/MusculoskeletalScanHead";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
import ServiceSidebarBrochure from "../../components/ServiceComponents/ServiceSidebarBrochure/ServiceSidebarBrochure";
import ServiceSidebarLinks from "../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks";
import MusculoskeletalScanExcept from "../../components/ServicePages/MusculoskeletalScan/MusculoskeletalScanExcept";
import MusculoskeletalScanPrepare from "../../components/ServicePages/MusculoskeletalScan/MusculoskeletalScanPrepare";
import HomeTestimonial from "./../../components/HomePage/HomeTestimonial/HomeTestimonial";
import ServiceBilling from "../../components/ServiceComponents/ServiceBilling/ServiceBilling";
import ServiceBook from "../../components/ServiceComponents/ServiceBook/ServiceBook";

export default function MusculoskeletalScan() {
  return (
    <div className="">
      {" "}
      <ServiceHeader
        title="Musculoskeletal Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <div className="component-container">
        <div className="component-main">
          <MusculoskeletalScanHead />
          <div className="component-mainContent">
            <MusculoskeletalScanExcept />
            <MusculoskeletalScanPrepare />
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

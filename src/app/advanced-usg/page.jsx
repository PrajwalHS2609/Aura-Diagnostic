import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import Reviews from "../../components/HomePage/Reviews/Reviews";
import ServiceHeader from './../../components/ServiceComponents/ServiceHeader/ServiceHeader';
import ServiceMap from './../../components/ServiceComponents/ServiceMap/ServiceMap';
import AdvancedUSGService from "../../components/ServicePages/AdvancedUSG/AdvancedUSGService";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";

export default function AdvancedUSG() {
  return (
    <div>
      <ServiceHeader
        title="Ultrasound Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <AdvancedUSGService />
      <HomeWhy />
      <ServiceMap />
      <Reviews />
    </div>
  );
}

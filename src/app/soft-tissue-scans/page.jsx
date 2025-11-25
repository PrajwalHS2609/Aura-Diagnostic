import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import Reviews from "../../components/HomePage/Reviews/Reviews";
import ServiceHeader from './../../components/ServiceComponents/ServiceHeader/ServiceHeader';
import ServiceMap from './../../components/ServiceComponents/ServiceMap/ServiceMap';
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";

export default function SoftTissueScans() {
  return <div>
     <ServiceHeader
        title="Ultrasound Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <HomeWhy />
      <ServiceMap />
      <Reviews />
  </div>;
}

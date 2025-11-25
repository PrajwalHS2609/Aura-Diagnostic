import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import Reviews from "../../components/HomePage/Reviews/Reviews";
import ObstetricsService from "../../components/ServicePages/Obstetrics/ObstetricsService";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
import ServiceHeader from './../../components/ServiceComponents/ServiceHeader/ServiceHeader';
import ServiceMap from './../../components/ServiceComponents/ServiceMap/ServiceMap';

export default function Obstetrics() {
  return (
    <div>
      {" "}
      <ServiceHeader
        title="Obstetrics Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <ObstetricsService />
      <HomeWhy />
      <ServiceMap />
      <Reviews />
    </div>
  );
}

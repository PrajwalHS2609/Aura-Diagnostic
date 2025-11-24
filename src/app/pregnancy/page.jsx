import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import Reviews from "../../components/HomePage/Reviews/Reviews";
import ServiceMap from "../../components/ServiceMap/ServiceMap";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";

export default function Pregnancy() {
  return (
    <div>
      {" "}
      <ServiceHeader
        title="Pregnancy Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      {/* <ObstetricsService /> */}
      <HomeWhy />
      <ServiceMap />
      <Reviews />
    </div>
  );
}

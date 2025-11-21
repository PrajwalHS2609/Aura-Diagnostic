"use client"
import HomeCerti from "../../components/HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../../components/HomePage/HomeWhy/HomeWhy";
import Reviews from "../../components/HomePage/Reviews/Reviews";
import ServiceHeader from "../../components/ServiceHeader/ServiceHeader";
import ServiceMap from "../../components/ServiceMap/ServiceMap";
import UltraSoundFooterContent from "../../components/UltraSoundPage/UltraSoundContent/UltraSoundFooterContent";
import UltraSoundHeaderContent from "../../components/UltraSoundPage/UltraSoundContent/UltraSoundHeaderContent";
import ultrasound from "./../../Images/ServicesBanner/Ultrasound.png";
export default function UltrasoundScan() {
  return (
    <div>
      <ServiceHeader
        title="Ultrasound Scan"
        para="Creating Life's masterpiece, one kick at a time"
        img={ultrasound}
      />
      <HomeCerti />
      <UltraSoundHeaderContent />
      <HomeWhy />
      <ServiceMap/>
      <Reviews />
      <UltraSoundFooterContent/>
    </div>
  );
}

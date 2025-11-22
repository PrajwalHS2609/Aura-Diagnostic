import React from "react";
import "./FetalScanPrepare.css";
import FetalScanPrepareCard from "./FetalScanPrepareCard";
import {
  faPersonDress,
  faHeart,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

const FetalScanPrepareMain = () => {
  return (
    <div className="fetalScanPrepareMain">
      <FetalScanPrepareCard
        icon={faDroplet}
        head="Stay Hydrated"
        para="Drinking plenty of water in the days leading up to your scan can help produce clearer images by ensuring that the amniotic fluid is at an optimal level."
      />
      <FetalScanPrepareCard
        icon={faPersonDress}
        head="Dress Comfortably"
        para="You’ll want to wear loose, comfortable clothing that makes it easy to expose your belly for the ultrasound."
      />
      <FetalScanPrepareCard
        icon={faHeart}
        head="Bring Loved Ones"
        para="Feel free to invite family members or friends to share in the joy of seeing your baby during the 3D & 4D fetal scan in Bangalore."
      />
    </div>
  );
};

export default FetalScanPrepareMain;

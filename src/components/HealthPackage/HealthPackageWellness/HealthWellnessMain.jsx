import React from "react";
import "./../HealthPackage.css";
import HealthWellnessMainList from "./HealthWellnessMainList";
import HealthWellness from "../../../Images/HealthWellness.png";
import Image from "next/image";
const HealthWellnessMain = () => {
  return (
    <div className="healthWellnessMain">
      <div className="healthWellnessMain-Content1">
        <Image src={HealthWellness} alt="HealthWellness" />
      </div>
      <div className="healthWellnessMain-Content2">
        <HealthWellnessMainList />
      </div>
    </div>
  );
};

export default HealthWellnessMain;

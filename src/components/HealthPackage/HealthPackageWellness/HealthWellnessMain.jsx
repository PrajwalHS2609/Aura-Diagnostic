import React from "react";
import "./../HealthPackage.css";
import HealthWellnessMainList from "./HealthWellnessMainList";
const HealthWellnessMain = () => {
  return (
    <div className="healthWellnessMain">
      <div className="healthWellnessMain-Content1">
        <img
          src="https://images.pexels.com/photos/5149758/pexels-photo-5149758.jpeg"
          alt=""
        />
      </div>
      <div className="healthWellnessMain-Content2">
        <HealthWellnessMainList />
      </div>
    </div>
  );
};

export default HealthWellnessMain;

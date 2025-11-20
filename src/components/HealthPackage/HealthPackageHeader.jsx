import React from "react";
import "./HealthPackage.css";
import packages from "./../../Images/package.jpg";

const HealthPackageHeader = () => {
  return (
    <div className="healthPackageHeader">
      <Image src={packages} alt="package" />{" "}
    </div>
  );
};

export default HealthPackageHeader;

import React from "react";
import "./HealthPackage.css";
import packages from "./../../Images/package.png";
import Image from "next/image";

const HealthPackageHeader = () => {
  return (
    <div className="healthPackageHeader">
      <Image src={packages} alt="package" width={1000} height={500}/>{" "}
    </div>
  );
};

export default HealthPackageHeader;

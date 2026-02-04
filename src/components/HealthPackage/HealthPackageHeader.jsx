import React from "react";
import "./HealthPackage.css";
import packages from "./../../Images/package.jpg";
import Image from "next/image";

const HealthPackageHeader = () => {
  return (
    <div className="healthPackageHeader">
      <Image src={packages} alt="package" width={300} height={200}/>{" "}
    </div>
  );
};

export default HealthPackageHeader;

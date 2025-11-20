import React from "react";
import "./HealthPackage.css";
import HealthPackageHeader from "./HealthPackageHeader";
import HealthPackageWellness from "./HealthPackageWellness/HealthPackageWellness";
import HealthPackageTable from "./HealthPackageTable/HealthPackageTable";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import Reviews from "../HomePage/Reviews/Reviews";
const HealthPackage = () => {
  return (
    <div className="healthPackage">
      <HealthPackageHeader />
      <HealthPackageWellness />
      <HealthPackageTable />
      <HomeWhy />
      <Reviews />
    </div>
  );
};

export default HealthPackage;

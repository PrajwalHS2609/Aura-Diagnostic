import React from "react";
import "./FetalScanPrepare.css";
import FetalScanPrepareHeader from "./FetalScanPrepareHeader";
import FetalScanPrepareMain from "./FetalScanPrepareMain";
const FetalScanPrepare = () => {
  return (
    <div className="fetalScanPrepare">
      <FetalScanPrepareHeader />
      <div className="fetalScanPrepareContent">
        <Image
          src="https://img.freepik.com/free-photo/full-shot-family-members-silhouettes-outdoors_23-2150039658.jpg?uid=R153459844&ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
          alt=""
        />
        <FetalScanPrepareMain />
      </div>
    </div>
  );
};

export default FetalScanPrepare;

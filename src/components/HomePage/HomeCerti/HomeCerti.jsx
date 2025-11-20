import React from "react";
import "./HomeCerti.css";
import certiLogo from "./../../../Images/NABL.png";
import Image from "next/image";

const HomeCerti = () => {
  return (
    <div className="homeCerti">
      <h2>Our Lab Certification</h2> <div className="homeCertiLine"></div>
      <div className="certi">
        <div className="certiImg">
          <Image src={certiLogo} alt="certiLogo" />
        </div>
        <h3>
          National Accreditation Board for Testing and Calibration Laboratories
        </h3>
      </div>
    </div>
  );
};

export default HomeCerti;

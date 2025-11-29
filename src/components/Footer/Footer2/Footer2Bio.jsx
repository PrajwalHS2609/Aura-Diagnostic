import React from "react";
import "../Footer.css";
import Image from "next/image";
import logo from "./../../../Images/logo.png";
const Footer2Bio = () => {
  return (
    <div className="footer2Bio">
      <div className="footer2BioImg">
        {" "}
        <Image src={logo} alt="logo" />
      </div>
      <p>
        Founded in 2025, Aura Diagnostics is a patient-centered healthcare
        facility led by Dr. Ramyashree R.M and Dr. Kiran Ramaiah, two highly
        skilled clinicians with over a decade of combined experience in medical
        diagnostics and clinical care.
      </p>
    </div>
  );
};

export default Footer2Bio;

import React from "react";
import "../Footer.css";
import Image from "next/image";
import logo from "./../../../Images/logo.png"
const Footer2Bio = () => {
  return (
    <div className="footer2Bio">
      <div className="footer2BioImg">
        {" "}
        <Image
          src={logo}
          alt="logo"
          
        />
      </div>
      <p>
        Aura Diagnostics, established in 2001, is a healthcare facility led
        by Dr. Ramyashree R M G N, a seasoned professional with 30 years of
        experience.
      </p>
    </div>
  );
};

export default Footer2Bio;

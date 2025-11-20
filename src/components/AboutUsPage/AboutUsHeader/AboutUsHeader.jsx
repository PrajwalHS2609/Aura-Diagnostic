import React from "react";
import "./AboutUsHeader.css";
import abtImgBanner from "./../../../Images/aboutUsImg.png"
import Image from "next/image";
const AboutUsHeader = () => {
  return (
    <div className="aboutUsHeader">
      <Image
        src={abtImgBanner}
        alt=""
      />
      <div className="aboutUsHeaderCover">
        <h1>About Us</h1>
      </div>
    </div>
  );
};

export default AboutUsHeader;

import React from "react";
import "./AboutUsImg.css";
import teamGroup from "./../../../Images/team-group.png";
const AboutUsImg = () => {
  return (
    <div className="aboutUsImg">
      <Image src={teamGroup} alt="" />
    </div>
  );
};

export default AboutUsImg;

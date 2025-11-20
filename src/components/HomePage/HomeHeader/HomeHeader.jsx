import React from "react";
import "./HomeHeader.css";
import HomeHeaderContent1 from "./HomeHeaderContent1";
// import banner from "./../../../Images/banner.png"
// import Image from "next/image";
const HomeHeader = () => {
  return (
    <div className="homeHeaderContainer">
      {/* <Image
        src={banner}
        alt=""
      /> */}
      <video src="/vid/PathaconVid.mp4" autoPlay muted loop></video>
      <div className="homeHeaderWrapper1">
        <HomeHeaderContent1 />
      </div>
    </div>
  );
};

export default HomeHeader;

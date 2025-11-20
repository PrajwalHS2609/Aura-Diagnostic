import React from "react";
import "./HomeWhy.css";
import microscope from "./../../../Images/microscope.jpg";
import HomeWhyContents from "./HomeWhyContents";
const HomeWhy = (props) => {
  return (
    <div className="homeWhyContainer" id={props.id}>
      {/* <div className="homeWhyWrapper1">
        <Image src={microscope} alt="" />
        <Image
          src="https://img.freepik.com/free-vector/microscope-realistic-illustration_1284-9503.jpg?t=st=1727634535~exp=1727638135~hmac=cdf1413dda4b1d24b117dda1c90c408623b92b61a505d70abbc2e1fa24806040&w=740"
          alt=""
        />
      </div> */}
      <div className="homeWhyWrapper2">
        <HomeWhyContents />
      </div>
    </div>
  );
};

export default HomeWhy;

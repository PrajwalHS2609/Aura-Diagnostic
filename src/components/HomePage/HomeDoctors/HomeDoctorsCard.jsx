import React from "react";
import "./HomeDoctors.css";
import Image from "next/image";

const HomeDoctorsCard = (props) => {
  return (
    <div className="homeDoctorsCard">
      <div className="homeDoctorsCard-content1">
        <Image
          src={props.img}
          alt={props.alt}
        />
      </div>
      <div className="homeDoctorsCard-content2">
        <h5>{props.name}</h5>
        <h6>{props.designation}</h6>
      </div>
    </div>
  );
};

export default HomeDoctorsCard;

import React from "react";
import "./../../HomePage/HomeServices/HomeServices.css";
const PathologyServiceCard = (props) => {
  return (
    <div className="homeServicesCard">
      <div className="homeServicesCardImg">
        <Image src={props.img} alt={props.alt} />
      </div>
      <div className="homeServicesCardTxt">
        <h4>{props.head}</h4>
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default PathologyServiceCard;

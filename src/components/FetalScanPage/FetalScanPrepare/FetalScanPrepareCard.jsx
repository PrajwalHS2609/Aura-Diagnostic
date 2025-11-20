import React from "react";
import "./FetalScanPrepare.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FetalScanPrepareCard = (props) => {
  return (
    <div className="fetalScanPrepareCard">
      <div className="fetalScanPrepareCard-Content">
        <FontAwesomeIcon
          icon={props.icon}
          className="fetalScanPrepareCardIco"
        ></FontAwesomeIcon>
        <h5>{props.head}</h5>
        <h6>{props.para}</h6>
      </div>
    </div>
  );
};

export default FetalScanPrepareCard;

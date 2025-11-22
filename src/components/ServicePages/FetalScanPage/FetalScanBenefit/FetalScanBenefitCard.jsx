import React from "react";
import "./FetalScanBenefit.css";
const FetalScanBenefitCard = (props) => {
  return (
    <div className="fetalScanBenefitCard-Container">
      {" "}
      <div className="fetalScanBenefitCard" id={props.id}>
        <div className="fetalScanBenefitCardImg">
          <Image src={props.img} alt="" />
        </div>
        <div className="fetalScanBenefitCardWrapper">
          {" "}
          <div className="fetalScanBenefitCardHead">
            <h5>{props.head}</h5>
          </div>
          <div className="fetalScanBenefitCardPara">
            <p>{props.para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FetalScanBenefitCard;

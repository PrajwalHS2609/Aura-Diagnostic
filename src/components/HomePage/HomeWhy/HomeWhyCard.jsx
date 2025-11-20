import Image from "next/image";
import React from "react";

const HomeWhyCard = (props) => {
  return (
    <div className="homeWhyCard">
      <div className="homeWhyCardImg">
        {" "}
        <Image src={props.img} alt={props.head} />
      </div>
      <h5>{props.head}</h5>
      <p>{props.para}</p>
    </div>
  );
};

export default HomeWhyCard;

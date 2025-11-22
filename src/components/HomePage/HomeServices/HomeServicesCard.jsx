import React from "react";
import "./HomeServices.css";
import Link from "next/link";
import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const HomeServicesCard = (props) => {
  return (
    <div className="homeServicesCard">
      <div className="homeServicesCardImg">
        <Image src={props.img} alt={props.head} />
      </div>
      <div className="homeServicesCardTxt">
        {" "}
        <h4>{props.head}</h4>
        <p>{props.para}</p>
        <Link href={"/"}>
          Learn More{" "}
          {/* <FontAwesomeIcon
            icon={faArrowRight}
            className="homeServIcon"
          ></FontAwesomeIcon> */}
        </Link>
      </div>
    </div>
  );
};

export default HomeServicesCard;

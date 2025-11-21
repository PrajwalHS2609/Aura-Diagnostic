import React from "react";
import "./ServiceHeader.css";import Image from "next/image";
const ServiceHeader = (props) => {
  return (
    <div className="service-header">
      <div className="service-headerCover">
        <h2>{props.title}</h2>
        <p>{props.para}</p>
        <div className="service-HeaderContentBtn">
          <button className="button1">
            <span>Book Appointment</span>
          </button>

          <a href="tel:9845605376">
            <button className="button2">Call Now</button>
          </a>
        </div>
      </div>
      <Image src={props.img} alt={props.title} />
    </div>
  );
};

export default ServiceHeader;

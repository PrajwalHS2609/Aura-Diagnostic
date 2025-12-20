"use client";
import React from "react";
import "./../ServiceComponents/ServiceHeader/ServiceHeader.css";
let handleAppointment = () => {
  document.querySelector(".bookPopUp").classList.add("showPopup");
};
const SanityHeader = (props) => {
  return (
    <div className="service-header">
      <div className="service-headerCover">
        <h2>{props.title}</h2>
        <div className="service-HeaderContentBtn">
          <button className="button1" onClick={handleAppointment}>
            <span>Book Appointment</span>
          </button>

          <a href="tel:9611156622">
            <button className="button2">Call Now</button>
          </a>
        </div>
      </div>
      <img src={props.img} alt={props.title} />
    </div>
  );
};

export default SanityHeader;

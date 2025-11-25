"use client";
import "./ServiceBook.css"
import React from "react";
import bookImg from "./../../../Images/team-group.png"
import Image from "next/image";
const ServiceBook = () => {
  let handleAppointment = () => {
    document.querySelector(".bookPopUp").classList.add("showPopup");
  };
  return (
    <div className="serviceBook-container">
      <div className="serviceBook-content">
        <h3>Book an Appointment</h3>
        <p>Creating Life's masterpiece, one kick at a time</p>
        <button className="cssbuttons-io-button" onClick={handleAppointment}>
          Book Now
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <div className="serviceBook-content">
        <Image src={bookImg} alt="book Img" />
      </div>
    </div>
  );
};

export default ServiceBook;

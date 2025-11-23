"use client";
import React, { useState } from "react";
import "./BookPopUp.css";
import { FaX } from "react-icons/fa6";

const BookPopUp = () => {
  const handleExit = () => {
    document.querySelector(".bookPopUp").classList.remove("showPopup");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="bookPopUp">
      <div className="popupContainer">
        <div className="exitForm">
          {" "}
          <FaX className="closeBtn" onClick={handleExit} />
        </div>

        <h3>Book Appointment</h3>

        <form onSubmit={handleSubmit}>
          <div className="formRow">
            <div className="inputGroup">
              <label>
                Name <span>*</span>
              </label>
              <input type="text" placeholder="First Name" />
            </div>

            <div className="inputGroup">
              <label>&nbsp;</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="formRow">
            <div className="inputGroup">
              <label>Mobile No *</label>
              <input type="tel" />
            </div>

            <div className="inputGroup">
              <label>Email *</label>
              <input type="email" />
            </div>
          </div>

          <div className="inputGroup">
            <label>Specific Test Name</label>
            <input type="text" />
          </div>

          <div className="inputGroup">
            <label>Date & Time</label>
            <input type="datetime-local" />
          </div>

          <div className="inputGroup">
            <label>Message</label>
            <textarea />
          </div>

          <button type="submit" className="bookBtn">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookPopUp;

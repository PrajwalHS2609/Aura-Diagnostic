"use client";
import React, { useState } from "react";
import "./BookPopUp.css";
import { FaX } from "react-icons/fa6";

const BookPopUp = () => {
  let handleExit = (e) => {
    e.preventDefault();
    document.querySelector(".bookPopUp").style.visibility = "hidden";
  };
  let handleSubmit = (e) => {
    e.preventSubmit();
  };
  return (
    <div className="bookPopUp">
      {" "}
      <FaX className="popUpIcon1" onClick={handleExit} />
      <form action="" onSubmit={handleSubmit}>
        <div className="popFormFirstLvl">
          <span>
            {" "}
            Name <span>*</span>
          </span>
          <div>
            {" "}
            <input type="text" name="" id="" placeholder="FirstName" />
            <input type="text" name="" id="" placeholder="LastName" />
          </div>
        </div>
        <div className="first">
          {" "}
          <div className="popFormFirstLvl">
            <span>
              Mobile No <span>*</span>
            </span>{" "}
            <input type="tel" name="" id="" />
          </div>
          <div className="popFormFirstLvl">
            <span>
              Email <span>*</span>
            </span>{" "}
            <input type="email" name="" id="" />
          </div>
        </div>
        <div className="popFormFirstLvl">
          <span>Specific Test Name</span> <input type="email" name="" id="" />
        </div>
        <div className="popFormFirstLvl">
          <span>Date & Time </span> <input type="datetime-local" />
        </div>{" "}
        <div className="popFormFirstLvl">
          <span>Message</span> <textarea name="" id=""></textarea>
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookPopUp;

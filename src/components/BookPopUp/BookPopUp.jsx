"use client";
import React, { useState } from "react";
import "./BookPopUp.css";
import { FaX } from "react-icons/fa6";
import Swal from "sweetalert2";

const BookPopUp = () => {
  const handleExit = () => {
    document.querySelector(".bookPopUp").classList.remove("showPopup");
  };
    const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // ✅ Add your Web3Forms access key
    formData.append("access_key", "467661ee-d1f5-4dde-8e74-08dd9887ed3f");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Mail Sent successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    }
  };  

  return (
    <div className="bookPopUp">
      <div className="popupContainer">
        <div className="exitForm">
          {" "}
          <FaX className="closeBtn" onClick={handleExit} />
        </div>

        <h3>Book Appointment</h3>

        <form onSubmit={onSubmit}>
          <div className="formRow">
            <div className="inputGroup">
              <label>
                Name <span>*</span>
              </label>
              <input type="text" placeholder="First Name" name="First Name"/>
            </div>

            <div className="inputGroup">
              <label>&nbsp;</label>
              <input type="text" placeholder="Last Name" name="Last Name"/>
            </div>
          </div>

          <div className="formRow">
            <div className="inputGroup">
              <label>Mobile No *</label>
              <input type="tel" name="Phone No"/>
            </div>

            <div className="inputGroup">
              <label>Email *</label>
              <input type="email" name="Email"/>
            </div>
          </div>

          <div className="inputGroup">
            <label>Specific Test Name</label>
            <input type="text" name="Test Name"/>
          </div>

          <div className="inputGroup">
            <label>Date & Time</label>
            <input type="datetime-local" name="Date-Time" />
          </div>

          <div className="inputGroup">
            <label>Message</label>
            <textarea  name="message"/>
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

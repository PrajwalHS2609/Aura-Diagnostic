"use client";
import React from "react";
import "./HomeAbout.css";
const HomeAbout2 = () => {
  let handleAppointment = () => {
    document.querySelector(".bookPopUp").classList.add("showPopup");
  };
  return (
    <div className="homeAbout-container" id="homeAbout2">
      <div className="homeAbout-content">
        <h2>Quality Care Starts with Accurate Diagnostics</h2>
        <p>
          Our radiologists are Fetal Medicine Specialists certified by the Fetal
          Medicine Foundation (FMF), London, UK — bringing evidence-based
          protocols, advanced anomaly screening, and compassionate counselling
          to every pregnancy scan.
        </p>
        <p>
          ✨ We are open on all days — no holidays, not even on Sundays or
          festivals! Your care never takes a break, and neither do we.
        </p>
        <p>
          At our center, we understand that every pregnancy is unique and every
          moment counts. That’s why our team is committed to providing
          personalized attention, ensuring that each expecting mother feels
          safe, informed, and cared for.
        </p>
        {/* <div className="aboutHeaderContentBtn">
          <button className="button1" onClick={handleAppointment}>
            <span>Book Appointment</span>
          </button>
        </div> */}
      </div>
      <div className="homeAbout-content">
        <img
          src="https://nisargadiagnostics.com/wp-content/uploads/2024/02/Banner-Image-2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeAbout2;

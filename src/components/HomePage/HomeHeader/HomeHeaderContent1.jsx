"use client";
import React from "react";
import icon from "./../../../Images/icon.png"
import Image from "next/image";
const HomeHeaderContent1 = () => {
let handleAppointment = () => {
  document.querySelector(".bookPopUp").classList.add("showPopup");
};
  return (
    <div className="homeHeaderContent1">
      <Image src={icon} alt="icon"/>

      <h1>
        Aura <span>Diagnostics</span>
      </h1>
      <p>
        Trusted Expertise in Healthcare Since 2001, Led by Dr. Ramyashree R M
        with 30 Years of Experience.
        <br />
        We specialize in Pathology, Sonography, X-Ray, Blood Testing, MRI, CT
        Scan, Doppler, ECG, TMT, PFT, Dental X-Ray, and Consultations. To make
        healthcare more accessible, we offer Home Visits throughout Bangalore,
        putting your well-being at the forefront of our service.
      </p>
      <div className="homeHeaderContentBtn">
        <button className="button1" onClick={handleAppointment}>
          <span>Book Appointment</span>
        </button>

        <a href="tel:9611156622">
          <button className="button2">Call Now</button>
        </a>
      </div>
    </div>
  );
};

export default HomeHeaderContent1;

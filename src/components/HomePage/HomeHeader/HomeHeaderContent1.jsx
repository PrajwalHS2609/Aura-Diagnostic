"use client";
import React from "react";
import icon from "./../../../Images/icon.png";
import Image from "next/image";
const HomeHeaderContent1 = () => {
  let handleAppointment = () => {
    document.querySelector(".bookPopUp").classList.add("showPopup");
  };
  return (
    <div className="homeHeaderContent1">
      <Image src={icon} alt="icon" />

      <h1>
        Aura <span>Diagnostics</span>
      </h1>
      <p>
        Led by Dr. Kiran Ramaiah (10+ years of experience), we deliver reliable
        healthcare and advanced diagnostics in Girinagar. From pregnancy and
        obstetric scans to USG-guided procedures, infertility scans, Doppler,
        ECG, and full blood test services with free home sample collection, we
        ensure safe, accurate, and patient-friendly care since 2025.
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

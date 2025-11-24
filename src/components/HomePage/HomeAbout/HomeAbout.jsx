"use client";
import React from "react";
import "./HomeAbout.css";
import homeAbt1 from "./../../../Images/homeAbout1img.png"
import Image from "next/image";
const HomeAbout = () => {
  let handleAppointment = () => {
    document.querySelector(".bookPopUp").classList.add("showPopup");
  };
  return (
    <div className="homeAbout-container">
      <div className="homeAbout-content">
        <Image
          src={homeAbt1}
          alt="homeAbt1"
        />
      </div>
      <div className="homeAbout-content">
        <p>
          At Aura Diagnostics, your pregnancy care is overseen by experts
          trained at India’s leading fetal medicine centers. Dr. Kiran Ramaiah
          has completed advanced training in Fetal Medicine at SONOSCAN,
          Coimbatore; specialized Fetal Echocardiography training at MediScan,
          Chennai; and a Fellowship in Adult Echocardiography. He also holds
          advanced training in Infertility Scans from Karu Fetal Medicine
          Centre, Tiruchirappalli.
        </p>
        <p>
          Our fetal medicine team follows globally aligned protocols, offering
          accurate anomaly screening and compassionate counselling. We
          understand that every pregnancy is unique, and we are committed to
          providing personalized care, evidence-based diagnostics, and a
          supportive environment where you feel safe and informed.
        </p>
        <div className="aboutHeaderContentBtn">
          <button className="button1" onClick={handleAppointment}>
            <span>Book Appointment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;

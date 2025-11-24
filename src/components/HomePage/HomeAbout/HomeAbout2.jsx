"use client";
import React from "react";
import "./HomeAbout.css";
import Image from "next/image";
import homeAbt2 from "./../../../Images/homeAbout2.png"
const HomeAbout2 = () => {
  let handleAppointment = () => {
    document.querySelector(".bookPopUp").classList.add("showPopup");
  };
  return (
    <div className="homeAbout-container" id="homeAbout2">
      <div className="homeAbout-content">
        <h2>Better Care Begins with the Right Diagnosis</h2>
        <p>
          With over a decade of commitment to quality healthcare, Aura
          Diagnostics has become a trusted name for accurate and reliable
          diagnostic services. Our experienced team has successfully processed
          more than 5 lakh tests, reflecting our focus on precision and patient
          care. We offer a comprehensive range of services including Pathology,
          Sonography, Blood Tests, Doppler, ECG, and Specialist Consultations.
          To enhance convenience, we also provide Free Home Sample Collection
          within a 5 km radius of Girinagar, Bangalore. At Aura Diagnostics,
          your health journey is supported with expertise, accuracy, and
          accessible diagnostic care you can rely on.
        </p>

        <div className="homeAbout-quote">
          <p>
            <span>“</span>At Aura Diagnostics, we deliver accurate, high-quality
            diagnostics with compassionate care. Our team ensures clarity,
            precision, and personalized support, helping every patient feel
            confident and well-guided throughout their healthcare journey.{" "}
            <span>”</span>
          </p>
          <b>Dr. Kiran Ramaiah </b>
          <p>
            MBBS MD Radio-Diagnosis. <br />
            Lead Radiologist and Co-founder.
          </p>
        </div>
      </div>
      <div className="homeAbout-content" id="homeAboutImg">
        <Image
          src={homeAbt2}
          alt="homeAbt2"
        />
      </div>
    </div>
  );
};

export default HomeAbout2;

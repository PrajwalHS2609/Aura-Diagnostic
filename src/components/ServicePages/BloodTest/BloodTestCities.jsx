"use client";
import React from "react";
import "./BloodTest.css";
const BloodTestCities = () => {
  let handleAppointment = () => {
    document.querySelector(".bookPopUp").classList.add("showPopup");
  };
  const cities = [
    "Nayanad Halli",
    "Hosakerehalli",
    "Banashankari",
    "Srinivasnagar",
    "Avalahalli",
    "Kathreguppe",
    "Byatarayanapura",
    "Azad Nagar",
    "Srinagar",
    "Bapuji Nagar",
    "Basavangudi",
    "Jayanagar",
    "AGS Layout",
    "Chikkalasandra",
    "Bank Colony",
    "Girinagar",
    "Timber Yard Layout",
    "Telecom Colony",
    "Hanumanth Nagar",
    "Vidyapeeth Layout",
    "Ittmadu",
    "Dwaraka Nagar",
    "Ganapati Nagar",
    "Guddadhalli",
    "KR Market",
    "Chickpet",
    "Mariyappana Palya",
    "Thyagaraja Nagar",
    "Chamrajpet",
    "Book a Free Visit",
  ];
  return (
    <section className="bloodtest-container">
      <h2 className="bloodtest-title">
        Get Your Blood Samples Collected at Home for Free
      </h2>

      <div className="bloodtest-grid">
        {cities.map((city, index) =>
          city === "Book a Free Visit" ? (
            <button
              key={index}
              className="city-card book-visit-btn"
              onClick={handleAppointment}
            >
              {city}
            </button>
          ) : (
            <div key={index} className="city-card">
              {city}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default BloodTestCities;

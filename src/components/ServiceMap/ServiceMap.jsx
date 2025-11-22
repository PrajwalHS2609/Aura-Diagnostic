"use client"
import React from "react";
import { FaClock, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import "./ServiceMap.css"
const ServiceMap = () => {
  let handleAppointment = () => {
    document.querySelector(".bookPopUp").style.visibility = "visible";
  };
  return (
    <div className="service-bookContainer">
        <div className="service-book">
      <div className="service-bookWrapper">
        <div className="serviceMap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31099.646353515112!2d77.54891000000002!3d13.006621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d7638f98105%3A0xd6b0ddf9c075abc8!2sAura%20Diagnostics!5e0!3m2!1sen!2sin!4v1729600754136!5m2!1sen!2sin"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Pathology Map"
      ></iframe>
    </div>
      </div>
      <div className="service-bookWrapper">
        <div className="service-bookContent">
          <h6>
            Aura Diagnostics, 1st R Block, Rajaji Nagar, 10, A/A-1, Chord
            Rd, Mahalakshmi Layout, Bengaluru, Karnataka 560010
          </h6>
          <FaLocationDot className="service-bookIoc" />
        </div>
        <div className="service-bookContent">
          <h6> auradiagnostics@gmail.com</h6>
          <FaEnvelope className="service-bookIoc" />
        </div>
        <div className="service-bookContent">
          <h6>
            <a href="tel:9611156622">+91 9611156622</a>,
            <a href="tel:9916443606">+91 9916443606</a>
          </h6>
          <FaPhone className="service-bookIoc" />
        </div>
        <div className="service-bookContent">
          <h6>
            <span>MON-SAT: 7:30 am - 9:00 pm</span>
            <span>SUN: 8:00 am - 1:00 pm</span>
          </h6>
          <h6></h6>
          <FaClock className="service-bookIoc" />
        </div>
        <div className="service-bookContent">
          <button onClick={handleAppointment}>Book Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ServiceMap;

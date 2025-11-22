import React from "react";
import ContactUsAddCard from "./ContactUsAddCard";
import "./ContactUsAdd.css";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import Image from "next/image";

const ContactUsAdd = () => {
  return (
   <div className="contactAddressSection">
  <div className="contactAddressCard">
    <FaPhone className="iconCircle" />
    <div>
      <h6>Call Us</h6>
      <a href="tel:9611156622">+91 96111 56622</a>
    </div>
  </div>

  <div className="contactAddressCard">
    <FaEnvelope className="iconCircle" />
    <div>
      <h6>Email Us</h6>
      <a href="mailto:Auradiagnostics@gmail.com">Auradiagnostics@gmail.com</a>
    </div>
  </div>

  <div className="contactAddressCard">
    <FaLocationDot className="iconCircle" />
    <div>
      <h6>Our Location</h6>
      <p>
        Aura Diagnostics, 1st R Block, Rajaji Nagar, 10, A/A-1, Chord Rd,
        Mahalakshmi Layout, Bengaluru, Karnataka 560010
      </p>
      <a
        href="https://maps.google.com/?q=Aura+Diagnostics+Rajajinagar"
        target="_blank"
      >
        <button className="directionBtn">Get Directions</button>
      </a>
    </div>
  </div>
</div>

  );
};

export default ContactUsAdd;

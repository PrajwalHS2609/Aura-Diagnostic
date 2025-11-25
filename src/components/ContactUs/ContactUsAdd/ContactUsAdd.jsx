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
          <a href="mailto:auradaignosticsandhealthcare@gmail.com">
            auradaignosticsandhealthcare@gmail.com
          </a>
        </div>
      </div>

      <div className="contactAddressCard">
        <FaLocationDot className="iconCircle" />
        <div>
          <h6>Our Location</h6>
          <p>
            Aura Diagnostics, 1st floor, Above HDFC bank (Girinagar branch),
            #175, BBMP PID No. 41-137-175. 5th main road. Avalhalli extension.
            Banashankari 3rd stage. Bangalore.560085.
          </p>
          <a href="https://maps.app.goo.gl/3jq26be1GjkpCmRW8" target="_blank">
            <button className="directionBtn">Get Directions</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsAdd;

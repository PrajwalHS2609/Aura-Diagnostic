import React from "react";
import ContactUsAddCard from "./ContactUsAddCard";
import "./ContactUsAdd.css";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import Image from "next/image";

const ContactUsAdd = () => {
  return (
    <div className="contactUsAdd">
      <div className="contactUsAddWrapper1"></div>
      <div className="contactUsAddWrapper2">
        <div className="contactUsAddContent1">
          <div className="contactUsAddCard">
            <FaPhone className="contactCardIcon" />
            <div>
              <h6>Call Us</h6>
              <li>
                <a href="tel:9845605376">+91 9845605376</a>
              </li>
            </div>
          </div>

          <div className="contactUsAddCard">
            <FaEnvelope className="contactCardIcon" />
            <div>
              <h6>Email Us</h6>
              <li>
                <a href="pathocondiagnostics@gmail.com">
                  pathocondiagnostics@gmail.com
                </a>
              </li>
            </div>
          </div>
          <FaLocationDot className="contactCardIcon1" />

          <div>
            <h6>Our Location</h6>
            <p>
              Pathocon Diagnostics, 1st R Block, Rajaji Nagar, 10, A/A-1, Chord
              Rd, Mahalakshmi Layout, Bengaluru, Karnataka 560010
            </p>
            <a href="">
              <button>Get Direction</button>
            </a>
          </div>
        </div>
        <div className="contactUsAddContent2">
          <img
            src="https://img.freepik.com/free-photo/contact-register-feedback-support-help-concept_53876-124243.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
            alt=""
          />
          <img
            src="https://img.freepik.com/premium-photo/customer-service-representative-professional-customer-support-aftersales-service-phone_71956-31413.jpg?ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsAdd;

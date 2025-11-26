"use client";
import React from "react";
import "../Footer.css";
import { FaLocationDot, FaYoutube } from "react-icons/fa6";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneVolume,
} from "react-icons/fa";
const Footer1Contact = () => {
  return (
    <div className="footer1Contact">
      <li>
        <div>
          <h4>
            <FaLocationDot className="footerSubIcon" />
            Address
          </h4>
          <p>
            <a href="">
              Aura Diagnostics, 1st floor, Above HDFC bank (Girinagar branch),
              #175, BBMP PID No. 41-137-175. 5th main road. Avalhalli extension.
              Banashankari 3rd stage. Bangalore.560085.
            </a>
          </p>
        </div>
      </li>
      <li>
        {" "}
        <div>
          <h4>
            <FaPhoneVolume className="footerSubIcon" />
            Contact Us
          </h4>
          <p>
            <a href="phone:9611156622">+91 9611156622</a>
          </p>
        </div>
      </li>
      <li>
        {" "}
        <div>
          <h4>
            <FaEnvelope className="footerSubIcon" />
            Email Us
          </h4>
          <p>
            <a href="mailto:auradaignosticsandhealthcare@gmail.com">
              auradaignosticsandhealthcare@gmail.com
            </a>
          </p>
        </div>
      </li>
      <li>
        {" "}
        <div className="footerSocialMedia">
          <h4>Social Media</h4>
          <p>
            <li>
              <a href="">
                <FaFacebook className="footerSocialIcon" />
              </a>
            </li>
            {/* <li>
              <a href="">
                {" "}
                <FaTwitter className="footerSocialIcon" />
              </a>
            </li> */}
            <li>
              <a href="">
                {" "}
                <FaInstagram className="footerSocialIcon" />
              </a>
            </li>
            {/* <li>
              <a href="">
                {" "}
                <FaLinkedin className="footerSocialIcon" />
              </a>
            </li> */}
            <li>
              <a href="">
                {" "}
                <FaYoutube className="footerSocialIcon" />
              </a>
            </li>
            {/* <li>
              <a href="">
                {" "}
                <FaPinterest className="footerSocialIcon" />
              </a>
            </li> */}
          </p>
        </div>
      </li>
    </div>
  );
};

export default Footer1Contact;

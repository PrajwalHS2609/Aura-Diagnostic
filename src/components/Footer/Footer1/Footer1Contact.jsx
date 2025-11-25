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
        <FaLocationDot className="footerSubIcon" />
        <div>
          <h4>Address</h4>
          <p>
            <a href="">India</a>
          </p>
        </div>
      </li>
      <li>
        {" "}
        <FaPhoneVolume className="footerSubIcon" />
        <div>
          <h4>Contact Us</h4>
          <p>
            <a href="phone:9611156622">+91 9611156622</a>
          </p>
        </div>
      </li>
      <li>
        {" "}
        <FaEnvelope className="footerSubIcon" />
        <div>
          <h4>Email Us</h4>
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

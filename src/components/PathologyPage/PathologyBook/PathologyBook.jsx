import React from "react";
import "./PathologyBook.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import PathologyMap from "./PathologyMap";
const PathologyBook = () => {
  let handleAppointment = () => {
    document.querySelector(".bookPopUp").style.visibility = "visible";
  };
  return (
    <div className="pathologyBook">
      <div className="pathologyBookWrapper">
        <PathologyMap />
      </div>
      <div className="pathologyBookWrapper">
        <div className="pathologyBookContent">
          <h6>
            Aura Diagnostics, 1st R Block, Rajaji Nagar, 10, A/A-1, Chord
            Rd, Mahalakshmi Layout, Bengaluru, Karnataka 560010
          </h6>
          <FontAwesomeIcon
            icon={faLocationDot}
            className="pathologyBookIoc"
          ></FontAwesomeIcon>
        </div>
        <div className="pathologyBookContent">
          <h6> Auradiagnostics@gmail.com</h6>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="pathologyBookIoc"
          ></FontAwesomeIcon>
        </div>
        <div className="pathologyBookContent">
          <h6>
            <a href="tel:9611156622">+91 9611156622</a>,
            <a href="tel:9916443606">+91 9916443606</a>
          </h6>
          <FontAwesomeIcon
            icon={faPhone}
            className="pathologyBookIoc"
          ></FontAwesomeIcon>
        </div>
        <div className="pathologyBookContent">
          <h6>
            <span>MON-SAT: 7:30 am - 9:00 pm</span>
            <span>SUN: 8:00 am - 1:00 pm</span>
          </h6>
          <h6></h6>
          <FontAwesomeIcon
            icon={faClock}
            className="pathologyBookIoc"
          ></FontAwesomeIcon>
        </div>
        <div className="pathologyBookContent">
          <button onClick={handleAppointment}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default PathologyBook;

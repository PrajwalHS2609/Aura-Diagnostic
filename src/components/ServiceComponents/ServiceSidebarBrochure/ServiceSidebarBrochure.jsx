import React from "react";
import { IoDownloadOutline } from "react-icons/io5";
import logo from "./../../../Images/logo.png"
import "./ServiceSidebarBrochure.css";
import Image from "next/image";
const ServiceSidebarBrochure = () => {
  return (
    <div className="serviceBrochure-container">
      <div className="serviceBrochure-content">
        <Image src={logo} alt="logo" />
      </div>
      <div className="serviceBrochure-content">
        <a href="/" download>
          <div className="serviceBrochure-item">
            <p>Download Brochure</p>{" "}
            <IoDownloadOutline className="serviceBrochure-icon" />
          </div>
          {/* <div className="serviceBrochure-item"></div> */}
        </a>
      </div>
    </div>
  );
};

export default ServiceSidebarBrochure;

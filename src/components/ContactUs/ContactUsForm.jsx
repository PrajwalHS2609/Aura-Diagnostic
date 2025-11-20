"use client"
import React from "react";
import "./ContactUs.css";
const ContactUsForm = () => {
  let handleSubmit = (e) => {
    e.preventSubmit();
  };
  return (
    <div className="ContactUsForm">
      <h3>Send Us Message</h3>
      <p>
        Whether you have inquiries, feedback, or specific requests, this quick
        and convenient form allows you to reach out to our dedicated team. Your
        messages matter, and we’re here to provide prompt assistance and
        support. Connect with us seamlessly, and let’s prioritize your health
        and well-being together
      </p>
      <form action="" onSubmit={handleSubmit}>
        <div className="formFirstLvl">
          <span>
            {" "}
            Name <span>*</span>
          </span>
          <div>
            {" "}
            <input type="text" name="" id="" placeholder="FirstName" />
            <input type="text" name="" id="" placeholder="LastName" />
          </div>
        </div>
        <div className="formFirstLvl">
          <span>
            Mobile No <span>*</span>
          </span>{" "}
          <input type="tel" name="" id="" />
        </div>
        <div className="formFirstLvl">
          <span>
            Email <span>*</span>
          </span>{" "}
          <input type="email" name="" id="" />
        </div>
        <div className="formRadio">
          <span>
            Diagnostics Services <span> *</span>
          </span>
          <div>
            {" "}
            <input type="radio" value="" name="" />
            Pathology
          </div>
          <div>
            {" "}
            <input type="radio" value="" name="" />
            3D & 4D Pregnancy Scan
          </div>
          <div>
            {" "}
            <input type="radio" value="" name="" />
            Digital X-Ray
          </div>
          <div>
            <input type="radio" value="" name="" />
            Doppler Scan
          </div>
          <div>
            {" "}
            <input type="radio" value="" name="" />
            Sonography
          </div>
          <div>
            {" "}
            <input type="radio" value="" name="" />
            Cardiology
          </div>
          <div>
            <input type="radio" value="" name="" />
            Radiological Procedures
          </div>
        </div>
        <div className="formFirstLvl">
          <span>Specific Test Name</span> <input type="email" name="" id="" />
        </div>
        <div className="formFirstLvl">
          <span>Message</span> <textarea name="" id=""></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUsForm;

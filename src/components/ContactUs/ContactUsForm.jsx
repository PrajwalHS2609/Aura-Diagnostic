"use client";
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
            Obstetrics
          </div>
          <div>
            {" "}
            <input type="radio" value="" name="" />
            USG guided procedure
          </div>
          <div>
            {" "}
            <input type="radio" value="" name="" />
            Infertility Scans
          </div>
          <div>
            <input type="radio" value="" name="" />
            Doppler Scan
          </div>
          <div>
            {" "}
            <input type="radio" value="" name="" />
            Advanced USG
          </div>
          <div>
            {" "}
            <input type="radio" value="" name="" />
            Musculoskeletal Scans
          </div>
          <div>
            <input type="radio" value="" name="" />
            Soft Tissue Scans{" "}
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

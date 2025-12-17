"use client";
import React from "react";
import "./ContactUs.css";
import Swal from "sweetalert2";
const ContactUsForm = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // ✅ Add your Web3Forms access key
    formData.append("access_key", "467661ee-d1f5-4dde-8e74-08dd9887ed3f");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Mail Sent successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    }
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
      <form action="" onSubmit={onSubmit}>
        <div className="formFirstLvl">
          <span>
            {" "}
            Name <span>*</span>
          </span>
          <div>
            {" "}
            <input type="text" name="First Name" id="" placeholder="FirstName" />
            <input type="text" name="Last Name" id="" placeholder="LastName" />
          </div>
        </div>
        <div className="formFirstLvl">
          <span>
            Mobile No <span>*</span>
          </span>{" "}
          <input type="tel" name="Phone No" id="" />
        </div>
        <div className="formFirstLvl">
          <span>
            Email <span>*</span>
          </span>{" "}
          <input type="email" name="Email" id="" />
        </div>
        <div className="formRadio">
          <span>
            Diagnostics Services <span> *</span>
          </span>
           <div>
            {" "}
            <input type="radio" value="" name="Blood Test" />
            Blood Test
          </div>
          <div>
            {" "}
            <input type="radio" value="" name="Obstetrics" />
            Obstetrics
          </div>
          <div>
            {" "}
            <input type="radio" value="" name="USG guided procedure" />
            USG guided procedure
          </div>
          <div>
            {" "}
            <input type="radio" value="" name="Infertility Scans" />
            Infertility Scans
          </div>
          <div>
            <input type="radio" value="" name="Doppler Scan" />
            Doppler Scan
          </div>
          <div>
            {" "}
            <input type="radio" value="" name="Advanced USG" />
            Advanced USG
          </div>
          <div>
            {" "}
            <input type="radio" value="" name="Musculoskeletal Scans" />
            Musculoskeletal Scans
          </div>
          <div>
            <input type="radio" value="" name="Soft Tissue Scans" />
            Soft Tissue Scans{" "}
          </div>
        </div>
        <div className="formFirstLvl">
          <span>Specific Test Name</span> <input type="text" name="Test Name" id="" />
        </div>
        <div className="formFirstLvl">
          <span>Message</span> <textarea name="Message" id=""></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUsForm;

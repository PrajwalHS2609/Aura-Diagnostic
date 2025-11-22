import React from "react";
import "./ContactUs.css";
import ContactUsHeader from "./ContactUsHeader/ContactUsHeader";
import ContactUsForm from "./ContactUsForm";
import ContactUsAdd from "./ContactUsAdd/ContactUsAdd";
const ContactUs = () => {
  return (
    <div className="contactUsContainer">
      <ContactUsHeader />
      <div className="contactUsWrapper">
        <div className="contactUsContent1">
          <ContactUsForm />
        </div>
        <div className="contactUsContent2">
          <ContactUsAdd />
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.146975165972!2d77.52408494057192!3d13.01740310323502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d7638f98105%3A0xd6b0ddf9c075abc8!2sAura%20Diagnostics!5e0!3m2!1sen!2sin!4v1728220234262!5m2!1sen!2sin"
          style={{ width: "100%", height: "100%" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="contactMap"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

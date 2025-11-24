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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3992320374637!2d77.54153199999999!3d12.9462861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ff4ada1ae69%3A0x2a5c3700450c9625!2sAura%20Diagnostics!5e0!3m2!1sen!2sin!4v1763996692456!5m2!1sen!2sin"
          width={600}
          height={450}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

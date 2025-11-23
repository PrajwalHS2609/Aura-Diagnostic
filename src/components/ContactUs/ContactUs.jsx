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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62215.30259524541!2d77.50343483795169!3d12.942620419219727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f63fc749bbf%3A0xfb3c4a8d589bc5af!2sAura%20Health%20Care%20%26%20Diagnostics!5e0!3m2!1sen!2sin!4v1763892756950!5m2!1sen!2sin"
          width={600}
          height={450}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

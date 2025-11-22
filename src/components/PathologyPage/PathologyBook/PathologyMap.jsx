import React from "react";
import "./PathologyBook.css"
const PathologyMap = () => {
  return (
    <div className="pathologyMap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31099.646353515112!2d77.54891000000002!3d13.006621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d7638f98105%3A0xd6b0ddf9c075abc8!2sAura%20Diagnostics!5e0!3m2!1sen!2sin!4v1729600754136!5m2!1sen!2sin"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Pathology Map"
      ></iframe>
    </div>
  );
};

export default PathologyMap;

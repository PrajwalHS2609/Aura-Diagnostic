import React from "react";
import "./PathologyHeader.css";
import pathology from "./../../../Images/ServicesBanner/Pathaology.png";
const PathologyHeader = () => {
  return (
    <div className="pathologyHeader">
      <div className="pathologyHeaderCover">
        <h2>Book Blood Test At Home</h2>
        <p>
          Discover the Convenience of a Healthier Life with our Complimentary
          Service
        </p>
        <a href="tel:">
          <button>Call Us</button>
        </a>
      </div>
      <Image src={pathology} alt="pathology" loading="lazy" />
    </div>
  );
};

export default PathologyHeader;

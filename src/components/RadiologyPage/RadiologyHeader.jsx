import React from "react";
import radiology from "./../../Images/ServicesBanner/Radiology.png";

const RadiologyHeader = () => {
  return (
    <div className="pathologyHeader">
      <div className="pathologyHeaderCover" id="pathologyHeaderCover2">
        <h2>Radiology Services in Rajajinagar, Bangalore</h2>
        <p>Creating Life's masterpiece, one kick at a time</p>
        <a href="tel:9845605376">
          <button>Call Us Now</button>
        </a>
      </div>
      <Image src={radiology} alt="radiology" loading="lazy" />
    </div>
  );
};

export default RadiologyHeader;

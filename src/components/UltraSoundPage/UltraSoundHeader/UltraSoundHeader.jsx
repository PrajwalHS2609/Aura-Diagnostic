import React from "react";
import ultraSound from "./../../../Images/ServicesBanner/Ultrasound.png";

const UltraSoundHeader = () => {
  return (
    <div className="pathologyHeader">
      <div className="pathologyHeaderCover" id="pathologyHeaderCover2">
        <h2> Ultrasound Scan Services in Bangalore</h2>
        <p>Creating Life's masterpiece, one kick at a time</p>
        <a href="tel:">
          <button>Call Us Now</button>
        </a>
      </div>
      <Image src={ultraSound} alt="ultraSound" loading="lazy" />
    </div>
  );
};

export default UltraSoundHeader;

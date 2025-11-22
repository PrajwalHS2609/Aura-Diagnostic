import React from "react";
import cardiology from "./../../Images/ServicesBanner/Cardiology.png";

const CardiologyHeader = () => {
  return (
    <div className="pathologyHeader">
      <div className="pathologyHeaderCover" id="pathologyHeaderCover2">
        <h2> Cardiology Test in Rajajinagar, Bangalore</h2>
        <p>Creating Life's masterpiece, one kick at a time</p>
        <a href="tel:9611156622">
          <button>Call Us Now</button>
        </a>
      </div>
      <Image src={cardiology} alt="cardiology" loading="lazy" />
    </div>
  );
};

export default CardiologyHeader;

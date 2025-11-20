import React from "react";
import ecg from "./../../Images/ServicesBanner/ECG.png";

const EcgHeader = () => {
  return (
    <div className="pathologyHeader">
      <div className="pathologyHeaderCover" id="pathologyHeaderCover2">
        <h2> ECG Test in Rajajinagar, Bangalore</h2>
        <p>Creating Life's masterpiece, one kick at a time</p>
        <a href="tel:9845605376">
          <button>Call Us Now</button>
        </a>
      </div>
      <Image src={ecg} alt="ecg" loading="lazy" />
    </div>
  );
};

export default EcgHeader;

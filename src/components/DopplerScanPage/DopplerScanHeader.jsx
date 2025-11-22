import React from "react";
import doppler from "./../../Images/ServicesBanner/Doppler.png";

const DopplerScanHeader = () => {
  return (
    <div className="pathologyHeader">
      <div className="pathologyHeaderCover" id="pathologyHeaderCover2">
        <h2>Doppler Scan in <br /> Bangalore, Bangalore </h2>
        <p>Creating Life's masterpiece, one kick at a time</p>
        <a href="tel:9611156622">
          <button>Call Us Now</button>
        </a>
      </div>
      <Image src={doppler} alt="doppler" loading="lazy" />
    </div>
  );
};

export default DopplerScanHeader;

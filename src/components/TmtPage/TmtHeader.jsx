import React from "react";
import tmt from "./../../Images/ServicesBanner/TMT.png";

const TmtHeader = () => {
  return (
    <div className="pathologyHeader">
      <div className="pathologyHeaderCover" id="pathologyHeaderCover2">
        <h2>TMT Test in Bangalore</h2>
        <p>Creating Life's masterpiece, one kick at a time</p>
        <a href="tel:9611156622">
          <button>Call Us Now</button>
        </a>
      </div>
      <Image src={tmt} alt="tmt" loading="lazy" />
    </div>
  );
};

export default TmtHeader;

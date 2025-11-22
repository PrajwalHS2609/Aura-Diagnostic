import React from 'react'
import fetalScan from "./../../Images/ServicesBanner/3D & 4D Fetal Scan.png";

const FetalScanHeader = () => {
  return (
    <div className="pathologyHeader">
    <div className="pathologyHeaderCover" id="pathologyHeaderCover2">
      <h2>3D & 4D Fetal Scan in Rajajinagar, Bangalore</h2>
      <p>Creating Life's masterpiece, one kick at a time</p>
      <a href="tel:9611156622">
        <button>Call Us Now</button>
      </a>
    </div>
    <Image src={fetalScan} alt="fetalScan" loading="lazy" />
  </div>
  )
}

export default FetalScanHeader

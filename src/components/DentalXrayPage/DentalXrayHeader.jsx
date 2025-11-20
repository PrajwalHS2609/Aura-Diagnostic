import React from 'react'
import dentalXray from "./../../Images/ServicesBanner/Dental X Ray.png";

const DentalXrayHeader = () => {
  return (
    <div className="pathologyHeader">
    <div className="pathologyHeaderCover" id="pathologyHeaderCover2">
      <h2>OPG Dental X-Ray in Rajajinagar, Bangalore</h2>
      <p>Creating Life's masterpiece, one kick at a time</p>
      <a href="tel:9845605376">
        <button>Call Us Now</button>
      </a>
    </div>
    <Image src={dentalXray} alt="dentalXray" loading="lazy" />
  </div>
  )
}

export default DentalXrayHeader

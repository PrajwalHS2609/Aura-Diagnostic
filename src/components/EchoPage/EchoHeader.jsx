import React from 'react'
import echo from "./../../Images/ServicesBanner/ECHO.png";

const EchoHeader = () => {
  return (
    <div className="pathologyHeader">
    <div className="pathologyHeaderCover" id="pathologyHeaderCover2">
      <h2>ECHO Test in Rajajinagar, Bangalore</h2>
      <p>Creating Life's masterpiece, one kick at a time</p>
      <a href="tel:9611156622">
        <button>Call Us Now</button>
      </a>
    </div>
    <Image src={echo} alt="echo" loading="lazy" />
  </div>
  )
}

export default EchoHeader

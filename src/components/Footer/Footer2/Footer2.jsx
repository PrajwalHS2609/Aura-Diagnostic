"use client"
import React from "react";
import "../Footer.css";
import Footer2Bio from "./Footer2Bio";
import Footer2Link from "./Footer2Link";
import Footer2Services from "./Footer2Services";

const Footer2 = () => {
  let handleGoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer2Container">
      <div className="footerTriangle">
        <div class="triangle-up" onClick={handleGoTop}></div>
      </div>
      <div className="footer2Content">
        <Footer2Bio />
        <Footer2Link />
        <Footer2Services />
      </div>
      <div className="footerLine"></div>
      <div className="footerCopy">
        <p>
          ©2024 | Made in India with
          <a href="https://tryseoservices.com/">TrySeoService</a>
        </p>
      </div>
    </div>
  );
};

export default Footer2;

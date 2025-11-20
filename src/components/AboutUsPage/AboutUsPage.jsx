import React from "react";
import "./AboutUsPage.css";
import AboutUsHeader from "./AboutUsHeader/AboutUsHeader";
import AboutUsContent from "./AboutUsContent/AboutUsContent";
import AboutUsImg from "./AboutUsImg/AboutUsImg";
import HomeDoctors from "../HomePage/HomeDoctors/HomeDoctors";
import Reviews from "../HomePage/Reviews/Reviews";
const AboutUsPage = () => {
  return (
    <div className="aboutUsPage">
      <AboutUsHeader />
      <AboutUsContent />
      {/* <AboutUsImg /> */}
      <HomeDoctors />
      <Reviews />
    </div>
  );
};

export default AboutUsPage;

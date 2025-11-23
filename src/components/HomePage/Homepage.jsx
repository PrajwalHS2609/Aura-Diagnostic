import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import "./HomePage.css";
import HomeServices from "./HomeServices/HomeServices";
import HomeWhy from "./HomeWhy/HomeWhy";
import HomeDoctors from "./HomeDoctors/HomeDoctors";
import HomeCerti from "./HomeCerti/HomeCerti";
import HomeTestimonial from "./HomeTestimonial/HomeTestimonial";
const Homepage = () => {
  return (
    <div className="homepage">
      <HomeHeader />
      <HomeCerti />
      <HomeServices />
      <HomeWhy />
      <HomeDoctors />
      <HomeTestimonial />
    </div>
  );
};

export default Homepage;

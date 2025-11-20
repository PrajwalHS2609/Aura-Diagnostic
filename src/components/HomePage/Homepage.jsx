import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import "./HomePage.css";
import HomeServices from "./HomeServices/HomeServices";
import HomeWhy from "./HomeWhy/HomeWhy";
import HomeDoctors from "./HomeDoctors/HomeDoctors";
import Reviews from "./Reviews/Reviews";
import HomeCerti from "./HomeCerti/HomeCerti";
import BookPopUp from "../BookPopUp/BookPopUp";
const Homepage = () => {
  return (
    <div className="homepage">
      <HomeHeader />
      <HomeCerti/>
      <HomeServices />
      <HomeWhy />
      <HomeDoctors />
      <Reviews />
    </div>
  );
};

export default Homepage;

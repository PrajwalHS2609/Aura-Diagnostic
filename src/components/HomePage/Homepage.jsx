import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import "./HomePage.css";
import HomeServices from "./HomeServices/HomeServices";
import HomeWhy from "./HomeWhy/HomeWhy";
import HomeDoctors from "./HomeDoctors/HomeDoctors";
import HomeCerti from "./HomeCerti/HomeCerti";
import HomeTestimonial from "./HomeTestimonial/HomeTestimonial";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeAbout2 from "./HomeAbout/HomeAbout2";
import HomeContent from "./HomeContent";
import BlogPage from "./../BlogPage/BlogPage.jsx";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomeHeader />
      <HomeCerti />
      <HomeAbout />
      <HomeServices />
      <HomeWhy />
      <HomeAbout2 />
      <HomeDoctors />
      <HomeTestimonial />
      <BlogPage />
      <HomeContent />
    </div>
  );
};

export default Homepage;

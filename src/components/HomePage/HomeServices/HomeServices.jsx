import React from "react";
import "./HomeServices.css";
import HomeServicesHead from "./HomeServicesHead";
import HomeServicesMain from "./HomeServicesMain";
import Link from "next/link";
const HomeServices = () => {
  return (
    <div className="homeService">
      <HomeServicesHead />
      <HomeServicesMain />
      {/* <div className="homeServiceContent">
        <h5>
          <Link class="fancy" href="/services" style={{textDecoration:"none"}}>
            <span className="top-key"></span>
            <span className="text">View All Services</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </Link>
        </h5>
      </div> */}
    </div>
  );
};

export default HomeServices;

import React from "react";
import HomeCerti from "../HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import Reviews from "../HomePage/Reviews/Reviews";
import PathologyBook from "../PathologyPage/PathologyBook/PathologyBook";
import UltraSoundHeader from "./UltraSoundHeader/UltraSoundHeader";
import UltraSoundFooterContent from "./UltraSoundContent/UltraSoundFooterContent";
import UltraSoundHeaderContent from "./UltraSoundContent/UltraSoundHeaderContent";
import UltraSoundService from "./UltraSoundService/UltraSoundService";
import { Helmet } from "react-helmet-async";

const UltraSoundPage = () => {
  return (
    <div className="homepage">
      <Helmet>
        <title>
          Ultrasound Scan in Bangalore, Bangalore - Book an Appointment{" "}
        </title>
        <meta
          name="description"
          content="Ultrasound Scan in Bangalore, Bangalore - Book an Appointment! Whether you need a pregnancy scan, an abdominal ultrasound, or a thyroid scan. "
        />
        <link
          rel="canonical"
          href="https://pathacondiagnostics.com/ultrasound-scan-in-Bangalore-bangalore"
        />
      </Helmet>
      <UltraSoundHeader />
      <UltraSoundHeaderContent />
      <UltraSoundService />
      <HomeCerti />
      <HomeWhy />
      <Reviews />
      <PathologyBook />
      <UltraSoundFooterContent />
    </div>
  );
};

export default UltraSoundPage;

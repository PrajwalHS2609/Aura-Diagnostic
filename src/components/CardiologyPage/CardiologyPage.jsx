import React from "react";
import CardiologyHeaderContent from "./CardiologyContent/CardiologyHeaderContent";
import CardiologyHeader from "./CardiologyHeader";
import CardiologyService from "./CardiologyService";
import Reviews from "../HomePage/Reviews/Reviews";
import PathologyBook from "../PathologyPage/PathologyBook/PathologyBook";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import CardiologyFooterContent from "./CardiologyContent/CardiologyFooterContent";
import { Helmet } from "react-helmet-async";

const CardiologyPage = () => {
  return (
    <div className="homepage">
      <Helmet>
        <title>
          Cardiology Test in Bangalore, Bangalore – ECHO, TMT & ECG{" "}
        </title>
        <meta
          name="description"
          content="Cardiology Test in Bangalore, Bangalore – Our tests are designed to evaluate the health of your heart, identify potential risks, and guide your doctor in making informed treatment decisions."
        />
        <link
          rel="canonical"
          href="https://pathacondiagnostics.com/cardiology-test-in-Bangalore-bangalore"
        />
      </Helmet>
      <CardiologyHeader />
      <CardiologyHeaderContent />
      <CardiologyService />
      <HomeWhy />
      <PathologyBook />
      <Reviews />
      <CardiologyFooterContent />
    </div>
  );
};

export default CardiologyPage;

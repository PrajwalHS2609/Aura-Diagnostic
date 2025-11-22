import React from "react";
import RadiologyHeader from "./RadiologyHeader";
import RadiologyHeaderContent from "./RadiologyContent/RadiologyHeaderContent";
import RadiologyService from "./RadiologyService";
import HomeCerti from "../HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import Reviews from "../HomePage/Reviews/Reviews";
import PathologyBook from "../PathologyPage/PathologyBook/PathologyBook";
import RadiologyFooterContent from "./RadiologyContent/RadiologyFooterContent";
import { Helmet } from "react-helmet-async";

const RadiologyPage = () => {
  return (
    <div className="homepage">
      <Helmet>
        <title>
          Radiology Services in Bangalore, Bangalore | Best Radiology in
          Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Radiology Services in Bangalore, Bangalore. Our commitment to delivering cutting-edge radiological imaging solutions positions us as a leading provider of comprehensive radiology services in the region."
        />
        <link
          rel="canonical"
          href="https://pathacondiagnostics.com/radiology-services-in-Bangalore-bangalore"
        />
      </Helmet>
      <RadiologyHeader />
      <RadiologyHeaderContent />
      <RadiologyService />
      <HomeCerti />
      <HomeWhy />
      <Reviews />
      <PathologyBook />
      <RadiologyFooterContent />
    </div>
  );
};

export default RadiologyPage;

import React from "react";
import HomeCerti from "../HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import Reviews from "../HomePage/Reviews/Reviews";
import PathologyBook from "../PathologyPage/PathologyBook/PathologyBook";
import DentalXrayHeader from "./DentalXrayHeader";
import DentalXrayHeaderContent from "./DentalXrayContent/DentalXrayHeaderContent";
import DentalXrayFooterContent from "./DentalXrayContent/DentalXrayFooterContent";
import { Helmet } from "react-helmet-async";

const DentalXrayPage = () => {
  return (
    <div className="homepage">
          <Helmet>
        <title>
        OPG Dental X-Ray in Rajajinagar, Bangalore | Best Dental X-Ray in Bangalore
        </title>
        <meta
          name="description"
          content="OPG Dental X-Ray in Rajajinagar, Bangalore. At Pathacon Diagnostics, we are proud to offer high-quality X-ray services that provide physicians with the detailed information needed to make informed medical decisions."
        />
        <link
          rel="canonical"
          href="https://pathacondiagnostics.com/opg-dental-x-ray-in-rajajinagar-bangalore"
        />
      </Helmet>
      <DentalXrayHeader />
      <DentalXrayHeaderContent />
      <HomeCerti />
      <HomeWhy />
      <Reviews />
      <PathologyBook />
      <DentalXrayFooterContent/>
    </div>
  );
};

export default DentalXrayPage;

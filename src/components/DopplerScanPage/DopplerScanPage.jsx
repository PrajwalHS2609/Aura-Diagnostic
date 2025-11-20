import React from "react";
import DopplerScanHeader from "./DopplerScanHeader";
import DopplerScanHeaderContent from "./DopplerScanContent/DopplerScanHeaderContent";
import HomeCerti from "../HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import Reviews from "../HomePage/Reviews/Reviews";
import PathologyBook from "../PathologyPage/PathologyBook/PathologyBook";
import DopplerScanService from "./DopplerScanService";
import DopplerScanFooterContent from "./DopplerScanContent/DopplerScanFooterContent";
import { Helmet } from "react-helmet-async";

const DopplerScanPage = () => {
  return (
    <div className="homepage">
      <Helmet>
        <title>
          Doppler Scan in Rajajinagar, Bangalore | Best Doppler Scan in
          Bangalore
        </title>
        <meta
          name="description"
          content="Doppler Scan in Rajajinagar, Bangalore, which plays a vital role in assessing and monitoring various medical conditions. Book an Appointment!"
        />
        <link
          rel="canonical"
          href="https://pathacondiagnostics.com/doppler-scan-in-rajajinagar-bangalore "
        />
      </Helmet>
      <DopplerScanHeader />
      <DopplerScanHeaderContent />
      <DopplerScanService />
      <HomeCerti />
      <HomeWhy />
      <Reviews />
      <PathologyBook />
      <DopplerScanFooterContent />
    </div>
  );
};

export default DopplerScanPage;

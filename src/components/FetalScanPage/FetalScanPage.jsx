import React from "react";
import HomeCerti from "../HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import Reviews from "../HomePage/Reviews/Reviews";
import PathologyBook from "../PathologyPage/PathologyBook/PathologyBook";
import FetalScanHeader from "./FetalScanHeader";
import FetalScanBenefit from "./FetalScanBenefit/FetalScanBenefit";
import FetalScanHeaderContent from "./FetalScanContent/FetalScanHeaderContent";
import FetalScanFooterContent from "./FetalScanContent/FetalScanFooterContent";
import FetalScanPrepare from "./FetalScanPrepare/FetalScanPrepare";
import { Helmet } from "react-helmet-async";

const FetalScanPage = () => {
  return (
    <div className="homepage">
      <Helmet>
        <title>
          3D & 4D Fetal Scan in Bangalore | Best Fetal Scan in
          Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Pathacon Diagnostics offers 3D & 4D fetal scan in Bangalore, giving expecting parents a vivid and emotional glimpse of their baby in the womb."
        />
        <link
          rel="canonical"
          href="https://pathacondiagnostics.com/3d-and-4d-fetal-scan-in-Bangalore-bangalore"
        />
      </Helmet>
      <FetalScanHeader />
      <FetalScanHeaderContent />
      <FetalScanPrepare />
      <HomeCerti />
      <HomeWhy />
      <Reviews />
      <PathologyBook />
      <FetalScanBenefit />
      <FetalScanFooterContent />
    </div>
  );
};

export default FetalScanPage;

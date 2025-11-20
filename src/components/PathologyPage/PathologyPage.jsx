import React from "react";
import PathologyHeader from "./PathologyHeader/PathologyHeader";
import HomeCerti from "../HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import Reviews from "../HomePage/Reviews/Reviews";
import PathologyService from "./PathologyService/PathologyService";
import PathologyHeadContent from "./PathologyContent/PathologyHeadContent";
import PathologyFooterContent from "./PathologyContent/PathologyFooterContent";
import PathologyBook from "./PathologyBook/PathologyBook";
import { Helmet } from "react-helmet-async";

const PathologyPage = () => {
  return (
    <div className="homepage">
      <Helmet>
        <title>Pathology Test in Bangalore with Home Visit </title>
        <meta
          name="description"
          content="Top 10 Reasons Why Every Business Needs an SEO Audit. Effectiveness of your current SEO strategy and identifies areas for improvement."
        />
        <link
          rel="canonical"
          href="https://pathacondiagnostics.com/pathology-test-in-bangalore-with-home-visit"
        />
      </Helmet>
      <PathologyHeader />
      <PathologyHeadContent />
      <PathologyService />
      <HomeCerti />
      <HomeWhy />
      <PathologyBook />
      <Reviews />
      <PathologyFooterContent />
    </div>
  );
};

export default PathologyPage;

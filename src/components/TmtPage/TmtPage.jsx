import React from "react";
import PathologyBook from "../PathologyPage/PathologyBook/PathologyBook";
import Reviews from "../HomePage/Reviews/Reviews";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import HomeCerti from "../HomePage/HomeCerti/HomeCerti";
import TmtHeader from "./TmtHeader";
import TmtHeaderContent from "./TmtContent/TmtHeaderContent";
import TmtFooterContent from "./TmtContent/TmtFooterContent";
import { Helmet } from "react-helmet-async";

const TmtPage = () => {
  return (
    <div className="homepage">
      <Helmet>
        <title>
          TMT Test in Rajajinagar, Bangalore | Best Treadmill Test in Bangalore{" "}
        </title>
        <meta
          name="description"
          content="TMT Test in Rajajinagar, Bangalore. The Treadmill Test (TMT), also known as a stress test, helps evaluate how well your heart functions during physical exertion, providing critical insights into your cardiovascular system. abnormalities."
        />
        <link
          rel="canonical"
          href="https://pathacondiagnostics.com/tmt-test-in-rajajinagar-bangalore"
        />
      </Helmet>
      <TmtHeader />
      <TmtHeaderContent />
      <HomeCerti />
      <HomeWhy />
      <Reviews />
      <PathologyBook />
      <TmtFooterContent />
    </div>
  );
};

export default TmtPage;

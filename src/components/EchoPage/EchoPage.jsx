import React from "react";
import { Helmet } from "react-helmet-async";
import HomeCerti from "../HomePage/HomeCerti/HomeCerti";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import Reviews from "../HomePage/Reviews/Reviews";
import PathologyBook from "../PathologyPage/PathologyBook/PathologyBook";
import EchoHeader from "./EchoHeader";
import EchoHeaderContent from "./EchoContent/EchoHeaderContent";
import EchoService from "./EchoService";
import EchoFooterContent from "./EchoContent/EchoFooterContent";
import EchoWho from "./EchoWho/EchoWho";

const EchoPage = () => {
  return (
    <div className="homepage">
      <Helmet>
        <title>
          ECHO Test in Rajajinagar, Bangalore | Best Echocardiogram in Bangalore
        </title>
        <meta
          name="description"
          content="Echo Test in Rajajinagar, Bangalore offered by Pathacon Diagnostics, is one of the most reliable and non-invasive ways to assess the heart's function and detect any abnormalities."
        />
        <link
          rel="canonical"
          href="https://pathacondiagnostics.com/echo-test-in-rajajinagar-bangalore"
        />
      </Helmet>
      <EchoHeader />
      <EchoHeaderContent />
      <EchoService />
      <HomeCerti />
      <HomeWhy />
      <Reviews />
      <PathologyBook />
      <EchoWho />
      <EchoFooterContent />
    </div>
  );
};

export default EchoPage;

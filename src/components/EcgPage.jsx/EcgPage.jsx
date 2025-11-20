import React from "react";
import { Helmet } from "react-helmet-async";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import PathologyBook from "../PathologyPage/PathologyBook/PathologyBook";
import Reviews from "../HomePage/Reviews/Reviews";
import EcgHeader from "./EcgHeader";
import EcgHeaderContent from "./EcgContent/EcgHeaderContent";
import EcgFooterContent from "./EcgContent/EcgFooterContent";

const EcgPage = () => {
  return (
    <div className="homepage">
      <Helmet>
        <title>
          ECG Test in Rajajinagar, Bangalore | Best Electrocardiogram Test in
          Bangalore{" "}
        </title>
        <meta
          name="description"
          content=" ECG Test in Rajajinagar, Bangalore. An Electrocardiogram (ECG) is a crucial tool for detecting heart conditions by measuring the electrical activity of your heart."
        />
        <link
          rel="canonical"
          href="https://pathacondiagnostics.com/ecg-test-in-rajajinagar-bangalore"
        />
      </Helmet>
      <EcgHeader/>
      <EcgHeaderContent/>
      <HomeWhy />
      <PathologyBook />
      <Reviews />
      <EcgFooterContent/>
    </div>
  );
};

export default EcgPage;

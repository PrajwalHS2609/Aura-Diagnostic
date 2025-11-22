import React from "react";
import "./EchoWho.css";
import EchoWhoHeader from "./EchoWhoHeader";
import EchoWhoMain from "./EchoWhoMain";
const EchoWho = () => {
  return (
    <div className="echoWho">
      <EchoWhoHeader
        head="Who Should Consider an ECHO Test in Bangalore, Bangalore?"
        para=" An ECHO Test in Bangalore, Bangalore is recommended for individuals
        who may be experiencing symptoms of heart disease or have been diagnosed
        with a heart condition. Some common reasons to undergo an ECHO Test in
        Bangalore, Bangalore include:"
      />
      <EchoWhoMain />
    </div>
  );
};

export default EchoWho;

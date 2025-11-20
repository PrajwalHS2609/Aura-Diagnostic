import React from "react";
import "./EchoWho.css";
const EchoWhoHeader = (props) => {
  return (
    <div className="echoWhoHeader">
      <h2>{props.head}</h2>
      <p>
       {props.para}
      </p>
    </div>
  );
};

export default EchoWhoHeader;

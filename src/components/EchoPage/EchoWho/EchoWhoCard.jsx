import React from "react";
import "./EchoWho.css";
const EchoWhoCard = (props) => {
  return (
    <div className="echoWhoCard">
      <div className="echoWhoCardContent">
        <Image
          src="https://img.freepik.com/free-photo/young-man-has-heart-attack-isolated-white-background_1150-2936.jpg?t=st=1729787945~exp=1729791545~hmac=ac44b423eeba8eb67ff282de9511f3d708a6a4c2c04dc3ef08d409df05210e7f&w=996"
          alt=""
        />
      </div>
      <div className="echoWhoCardContent">
        <h3>{props.head}</h3>
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default EchoWhoCard;

import React from "react";
import "./HomeDoctors.css";
import Image from "next/image";

const HomeDoctorsCard = (props) => {
  return (
    <div className="card">
      <div className="card__img">
        <img
          src="https://img.freepik.com/free-photo/hand-with-protective-gloves-holding-blood-samples-covid-test_23-2148958362.jpg?t=st=1763710552~exp=1763714152~hmac=069956863af05be54c1e1e3d5f9d900948e43e8634b9ec76823cb66240bc9fee&w=2000"
          alt=""
        />
      </div>
      <div className="card__avatar">
        <img
          src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1763712754~exp=1763716354~hmac=185cd1520ba4fa81d923ee3e0361f0a15dfcbb2ff5081e745fa64c15e98128a4&w=2000"
          alt=""
        />
      </div>
      <div className="card__content">
        <div className="card__title"><h4>{props.name}</h4></div>
        <div className="card__subtitle">{props.qualifications}</div>
        <div className="card__wrapper">
          <p>{props.training}</p>
          <strong>{props.position}</strong>
        </div>
      </div>
    </div>
  );
};

export default HomeDoctorsCard;

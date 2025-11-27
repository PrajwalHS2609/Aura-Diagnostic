import React from "react";
import { GiLiquidSoap } from "react-icons/gi";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";

const ObstetricsPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <LiaFilePrescriptionSolid />,
      description: "Bring previous medical records, scan reports, and doctor’s notes for better evaluation.",
    },
    {
      id: 2,
      icon: <GiLiquidSoap />,
      description:
        "Avoid applying lotions or oils on your abdomen on the day of the scan.",
    },
    {
      id: 3,
      icon: <HiOutlineClock />,
      description:
        "Arrive a little early to complete any required formalities calmly",
    },
    {
      id: 4,
      icon: <IoShirtOutline />,
      description:
        "Wear comfortable, loose clothing for easy abdominal access.",
    },
    
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Obstetrics?</h2>
      </div>
      <div className="service-prepareContent">
        {card.map((x) => (
          <div className="service-prepareCard" key={x.id}>
            <span className="service-prepareCardIcon">{x.icon}</span>{" "}
            <div className="service-prepareCardContent">
              <p>{x.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObstetricsPrepare;

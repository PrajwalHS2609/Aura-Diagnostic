import React from "react";
import { CiFaceSmile } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { GiLiquidSoap } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { LuGlassWater } from "react-icons/lu";

const AmniocentesisPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <LuGlassWater />,
      description:
        "Drink plenty of water in the days leading up to the scan to improve image clarity.",
    },
    {
      id: 2,
      icon: <CiFaceSmile />,
      description:
        "Arrange for someone to accompany you and drive you home after the procedure.",
    },
    {
      id: 3,
      icon: <FaUserDoctor />,
      description:
        "Inform your doctor about all medications, supplements, or blood thinners you are taking.",
    },
    {
      id: 4,
      icon: <LiaFilePrescriptionSolid />,
      description:
        "Bring previous pregnancy scan reports for better comparison.",
    },
    {
      id: 5,
      icon: <IoShirtOutline />,
      description:
        "Wear comfortable, loose-fitting clothes for easy access to your abdomen.",
    },
    {
      id: 6,
      icon: <GiLiquidSoap />,
      description:
        "Avoid applying lotions or oils on your abdomen on the day of the scan.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Amniocentesis?</h2>
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

export default AmniocentesisPrepare;

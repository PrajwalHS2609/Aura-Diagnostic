import React from "react";
import { FaRegSmileBeam } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { LuGlassWater, LuUserPlus, LuUsers } from "react-icons/lu";

const PregnancyScanPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <LuGlassWater />,
      description: "Drink plenty of water for early scans to keep your bladder full.",
    },
    {
      id: 2,
      icon: <LuUserPlus />,
      description:
        "Ask questions or share concerns with your sonographer before the scan",
    },
    {
      id: 3,
      icon: <HiOutlineClock />,
      description: "Arrive a little early to complete any formalities calmly.",
    },
    {
      id: 4,
      icon: <LiaFilePrescriptionSolid />,
      description: "Bring previous medical records or reports, if available.",
    },
    {
      id: 5,
      icon: <IoShirtOutline />,
      description:
        "Wear comfortable, loose-fitting clothes for easy access to your abdomen.",
    },
    {
      id: 6,
      icon: <FaRegSmileBeam />,
      description:
        "Stay relaxed—our team ensures a smooth, comfortable experience.",
    },

  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Pregnancy Scan?</h2>
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

export default PregnancyScanPrepare;

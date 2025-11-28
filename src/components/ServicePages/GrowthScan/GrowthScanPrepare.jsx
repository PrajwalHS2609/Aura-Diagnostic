import React from "react";
import { CiGlass } from "react-icons/ci";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { MdOutlineFoodBank } from "react-icons/md";

const GrowthScanPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <CiGlass />,
      description:
        "Drink some water before the appointment to stay hydrated, though a full bladder is usually not necessary.",
    },

    {
      id: 2,
      icon: <HiOutlineClock />,
      description:
        "Arrive 10–15 minutes early to complete formalities and discuss any concerns with the sonographer.",
    },
    {
      id: 3,
      icon: <LiaFilePrescriptionSolid />,
      description:
        "Bring previous pregnancy scan reports and medical records for comparison.",
    },
    {
      id: 4,
      icon: <IoShirtOutline />,
      description:
        "Wear comfortable, loose-fitting clothes for easy access to your abdomen.",
    },

    {
      id: 5,
      icon: <MdOutlineFoodBank />,
      description:
        "No fasting is required; you may eat normally unless advised otherwise.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Growth Scans with Doppler?</h2>
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

export default GrowthScanPrepare;

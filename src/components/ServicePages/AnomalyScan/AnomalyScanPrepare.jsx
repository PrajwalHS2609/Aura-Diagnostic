import React from "react";
import { CiGlass } from "react-icons/ci";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { LuUserPlus } from "react-icons/lu";
import { MdOutlineFoodBank } from "react-icons/md";

const AnomalyScanPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <CiGlass />,
      description:
        "Drink water beforehand if a full bladder is required for pregnancy-related Doppler scans.",
    },

    {
      id: 2,
      icon: <HiOutlineClock />,
      description:
        "Arrive 10–15 minutes early to complete registration and relax before the scan.",
    },
    {
      id: 3,
      icon: <LiaFilePrescriptionSolid />,
      description:
        "Bring earlier pregnancy scan reports, medical records, and prescriptions for comparison.",
    },
    {
      id: 4,
      icon: <IoShirtOutline />,
      description:
        "Wear comfortable, loose clothing for easy access to your abdomen.",
    },

    {
      id: 5,
      icon: <MdOutlineFoodBank />,
      description:
        "No fasting or full bladder is usually required unless advised by your doctor.",
    },
    {
      id: 6,
      icon: <LuUserPlus />,
      description:
        "Inform the sonographer about any pregnancy concerns, pain, or medical conditions.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Anomaly Scans?</h2>
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

export default AnomalyScanPrepare;

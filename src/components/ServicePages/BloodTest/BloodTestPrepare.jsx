import React from "react";
import { CiGlass } from "react-icons/ci";
import { FaBriefcaseMedical, FaHome } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid, LiaTabletsSolid } from "react-icons/lia";
import { MdNoDrinks, MdOutlineNoFood } from "react-icons/md";

const BloodTestPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <LiaTabletsSolid />,
      description:
        "Inform the technician about any medical conditions (diabetes, clotting issues, pregnancy, etc.).",
    },

    {
      id: 2,
      icon: <HiOutlineClock />,
      description:
        "Schedule the test in the morning for most accurate readings.",
    },
    {
      id: 3,
      icon: <LiaFilePrescriptionSolid />,
      description: "Bring previous test reports or prescriptions.",
    },
    {
      id: 4,
      icon: <IoShirtOutline />,
      description: "Wear loose sleeves for easy access to your arm.",
    },

    {
      id: 5,
      icon: <MdOutlineNoFood />,
      description:
        "Follow fasting instructions if required (typically 8–12 hours).",
    },
    {
      id: 6,
      icon: <CiGlass />,
      description: "Drink plenty of water to stay hydrated.",
    },
    {
      id: 7,
      icon: <FaHome />,
      description:
        "For home sample collection, stay ready 10 minutes before the scheduled time.",
    },
    {
      id: 8,
      icon: <MdNoDrinks />,
      description: "Avoid alcohol and heavy meals the day before.",
    },
    {
      id: 9,
      icon: <FaBriefcaseMedical />,
      description:
        "Continue or pause medications only if advised by your doctor.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Blood Test?</h2>
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

export default BloodTestPrepare;

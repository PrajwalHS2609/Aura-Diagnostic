import React from "react";
import { CiGlass } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { GiLiquidSoap } from "react-icons/gi";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";

const FetalUrosonogramPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <CiGlass />,
      description:
        "Drink water and stay lightly hydrated unless instructed otherwise.",
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
        "Bring previous medical reports, prescriptions, or scan results for comparison.",
    },
    {
      id: 4,
      icon: <IoShirtOutline />,
      description:
        "Wear loose and comfortable clothing to allow easy access to the area being examined.",
    },

    {
      id: 5,
      icon: <FaUserDoctor />,
      description:
        "Inform the sonographer about any specific concerns noted by your doctor.",
    },
    {
      id: 6,
      icon: <GiLiquidSoap />,
      description:
        "Avoid applying oils, creams, or lotions on your belly on the day of the scan.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Fetal Urosonogram?</h2>
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

export default FetalUrosonogramPrepare;

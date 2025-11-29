import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { GiLiquidSoap } from "react-icons/gi";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { MdOutlineNoFood } from "react-icons/md";

const WholeBodyDopplerPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <FaUserDoctor />,
      description:
        "Inform the specialist about symptoms like leg pain, swelling, dizziness, or known vascular issues.",
    },

    {
      id: 2,
      icon: <HiOutlineClock />,
      description:
        "Arrive early to relax, as the scan may take up to 90 minutes.",
    },
    {
      id: 3,
      icon: <LiaFilePrescriptionSolid />,
      description:
        "Bring previous Doppler or cardiovascular reports for comparison.",
    },
    {
      id: 4,
      icon: <IoShirtOutline />,
      description:
        "Wear loose and comfortable clothing to allow easy access to the area being examined.",
    },

    {
      id: 5,
      icon: <MdOutlineNoFood />,
      description:
        "Fast for 6–8 hours if advised, especially for abdominal vessel evaluation.",
    },
    {
      id: 6,
      icon: <GiLiquidSoap />,
      description:
        "Avoid lotions, oils, or powders on the skin before the scan.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Whole Body Doppler?</h2>
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

export default WholeBodyDopplerPrepare;

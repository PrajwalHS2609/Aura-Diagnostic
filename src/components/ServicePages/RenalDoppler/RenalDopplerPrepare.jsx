import React from "react";
import { CiGlass } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { MdOutlineNoFood } from "react-icons/md";

const RenalDopplerPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <CiGlass />,
      description:
        "Drink water if instructed, but avoid heavy meals before the test.",
    },

    {
      id: 2,
      icon: <HiOutlineClock />,
      description:
        "Arrive a little early to relax and complete any required paperwork.",
    },
    {
      id: 3,
      icon: <LiaFilePrescriptionSolid />,
      description:
        "Bring previous renal reports or ultrasound results for comparison.",
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
        "Fast for 6–8 hours before the scan to reduce gas in the abdomen for clearer images.",
    },
    {
      id: 6,
      icon: <FaUserDoctor />,
      description:
        "Inform the specialist about kidney-related conditions or hypertension.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Renal Doppler?</h2>
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

export default RenalDopplerPrepare;

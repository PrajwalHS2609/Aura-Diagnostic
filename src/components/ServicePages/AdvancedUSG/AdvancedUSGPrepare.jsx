import React from "react";
import { CiGlass } from "react-icons/ci";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { MdOutlineNoFood } from "react-icons/md";

const AdvancedUSGPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <CiGlass />,
      description:
        "Drink water before the appointment if your doctor advises a full bladder.",
    },

    {
      id: 2,
      icon: <HiOutlineClock />,
      description:
        "Arrive a few minutes early to complete any required formalities calmly.",
    },
    {
      id: 3,
      icon: <LiaFilePrescriptionSolid />,
      description:
        "Carry previous scan reports, medical records, and prescriptions for reference.",
    },
    {
      id: 4,
      icon: <IoShirtOutline />,
      description:
        "Wear loose and comfortable clothing for easy access during the scan.",
    },

    {
      id: 5,
      icon: <MdOutlineNoFood />,
      description:
        "Avoid heavy meals if fasting is recommended for specific types of USG.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Advanced USG?</h2>
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

export default AdvancedUSGPrepare;

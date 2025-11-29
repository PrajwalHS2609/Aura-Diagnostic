import React from "react";
import { CiGlass } from "react-icons/ci";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { MdOutlineNoFood } from "react-icons/md";

const Pelvis3dPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <CiGlass />,
      description:
        "Drink 3–4 glasses of water 45–60 minutes before the scan; a moderately full bladder improves image clarity.",
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
        "Wear loose, comfortable clothing for easy abdominal access.",
    },

    {
      id: 5,
      icon: <MdOutlineNoFood />,
      description:
        "Avoid heavy meals just before the scan to reduce discomfort.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for 3D Pelvis?</h2>
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

export default Pelvis3dPrepare;

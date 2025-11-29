import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { MdOutlineFoodBank, MdOutlineNoFood } from "react-icons/md";

const FattyLiverQuantificationPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <FaUserDoctor />,
      description:
        "Inform the radiologist about any medications or ongoing treatments.",
    },

    {
      id: 2,
      icon: <HiOutlineClock />,
      description:
        "Arrive 10–15 minutes early to complete formalities and discuss any concerns.",
    },
    {
      id: 3,
      icon: <LiaFilePrescriptionSolid />,
      description:
        "Bring previous liver function tests, ultrasounds, or medical reports for comparison.",
    },
    {
      id: 4,
      icon: <IoShirtOutline />,
      description:
        "Wear loose and comfortable clothing to allow easy access to the area being examined.",
    },

    {
      id: 5,
      icon: <MdOutlineFoodBank />,
      description:
        "Fast for 3–4 hours before the scan to ensure accurate liver fat measurements./",
    },
    {
      id: 6,
      icon: <MdOutlineNoFood />,
      description:
        "Avoid heavy meals and fatty foods the night before your appointment.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Fatty Liver Quantification?</h2>
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

export default FattyLiverQuantificationPrepare;

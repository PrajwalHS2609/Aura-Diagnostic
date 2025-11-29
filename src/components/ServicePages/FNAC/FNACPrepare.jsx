import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { GiLiquidSoap } from "react-icons/gi";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { MdOutlineFoodBank } from "react-icons/md";

const FNACPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <FaUserDoctor />,
      description:
        "Inform your doctor about any blood thinners or medications you are taking.",
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
      icon: <GiLiquidSoap />,
      description:
        "Avoid applying creams, powders, or lotions near the site of concern.",
    },
    {
      id: 6,
      icon: <MdOutlineFoodBank />,
      description:
        "Eat normally unless advised otherwise—fasting is usually not required.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for FNAC?</h2>
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

export default FNACPrepare;

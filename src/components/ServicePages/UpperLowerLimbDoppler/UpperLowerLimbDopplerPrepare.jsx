import React from "react";
import { CiGlass } from "react-icons/ci";
import { GiLiquidSoap } from "react-icons/gi";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { MdOutlineFoodBank } from "react-icons/md";

const UpperLowerLimbDopplerPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <CiGlass />,
      description:
        "Inform the specialist about symptoms like swelling, pain, numbness, or varicose veins.",
    },

    {
      id: 2,
      icon: <HiOutlineClock />,
      description:
        "Arrive a little early to relax before the procedure.",
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
      icon: <MdOutlineFoodBank />,
      description:
        "No fasting is required; eat and drink normally.",
    },
        {
      id: 6,
      icon: <GiLiquidSoap />,
      description:
        "Avoid applying lotions, creams, or oils on the limbs to ensure clear imaging.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Upper and Lower Limb Doppler?</h2>
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

export default UpperLowerLimbDopplerPrepare;

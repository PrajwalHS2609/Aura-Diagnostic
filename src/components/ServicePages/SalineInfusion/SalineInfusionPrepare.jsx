import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { LiaFilePrescriptionSolid, LiaTabletsSolid } from "react-icons/lia";
import { MdOutlineCalendarMonth, MdOutlineFoodBank } from "react-icons/md";

const SalineInfusionPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <MdOutlineCalendarMonth />,
      description:
        "Schedule the test after your menstrual period but before ovulation to ensure accurate results.",
    },
    {
      id: 2,
      icon: <FaRegHeart />,
      description:
        "Inform your doctor if you have pelvic infections, pregnancy suspicion, or allergies to medications.",
    },
    {
      id: 3,
      icon: <FaUserDoctor />,
      description:
        "Inform your doctor if you have pelvic infections, pregnancy suspicion, or allergies to medications.",
    },
    {
      id: 4,
      icon: <LiaFilePrescriptionSolid />,
      description:
        "Bring previous pregnancy scan reports for better comparison.",
    },
    {
      id: 5,
      icon: <LiaTabletsSolid />,
      description:
        "You may be advised to take a pain reliever 30–60 minutes prior to reduce cramping.",
    },
    {
      id: 6,
      icon: <MdOutlineFoodBank />,
      description: "Take a light meal and stay hydrated before the scan.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Saline Infusion Sonohystersalphingography?</h2>
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

export default SalineInfusionPrepare;

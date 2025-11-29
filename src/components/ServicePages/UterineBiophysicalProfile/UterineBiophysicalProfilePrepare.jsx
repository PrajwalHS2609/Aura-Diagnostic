import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid, LiaTabletsSolid } from "react-icons/lia";
import { MdOutlineCalendarMonth, MdOutlineFoodBank } from "react-icons/md";

const UterineBiophysicalProfilePrepare = () => {
  const card = [
    {
      id: 1,
      icon: <MdOutlineCalendarMonth />,
      description:
        "Schedule the scan as advised by your fertility specialist, often mid-cycle.",
    },
    {
      id: 2,
      icon: <IoShirtOutline />,
      description: "Wear comfortable clothing for easy movement.",
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
        "Bring previous ultrasound or fertility reports for comparison.",
    },
    {
      id: 5,
      icon: <LiaTabletsSolid />,
      description:
        "Inform the team about any fertility medications, hormonal treatments, or existing uterine conditions.",
    },
    {
      id: 6,
      icon: <MdOutlineFoodBank />,
      description: "No fasting or special dietary preparation is needed.",
    },
    {
      id: 7,
      icon: <HiOutlineClock />,
      description: "Arrive early to relax and reduce any pre-scan stress.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Uterine Biophysical Profile?</h2>
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

export default UterineBiophysicalProfilePrepare;

import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { MdOutlineNoFood } from "react-icons/md";

const LiverElastographyPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <FaUserDoctor />,
      description:
        "Inform the radiologist about any medications or ongoing liver treatments.",
    },

    {
      id: 2,
      icon: <HiOutlineClock />,
      description:
        "Arrive 10–15 minutes early to complete basic formalities and relax before the procedure.",
    },
    {
      id: 3,
      icon: <LiaFilePrescriptionSolid />,
      description:
        "Bring previous liver reports, ultrasound scans, or blood test results for comparison.",
    },
    {
      id: 4,
      icon: <IoShirtOutline />,
      description:
        "Wear loose, comfortable clothing for easy access to the upper abdomen.",
    },

    {
      id: 5,
      icon: <MdOutlineNoFood />,
      description:
        "Follow fasting instructions if your doctor recommends it for abdominal Doppler scans (usually 6–8 hours)",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Doppler Scans?</h2>
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

export default LiverElastographyPrepare;

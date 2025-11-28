import React from "react";
import { CiGlass } from "react-icons/ci";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { LuUserPlus } from "react-icons/lu";
import { MdOutlineNoFood } from "react-icons/md";

const DatingScanPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <CiGlass />,
      description:
        "Drink 3–4 glasses of water before the scan to keep your bladder full for clearer imaging.",
    },

    {
      id: 2,
      icon: <HiOutlineClock />,
      description:
        "Arrive 10–15 minutes early to relax and complete basic formalities.",
    },
    {
      id: 3,
      icon: <LiaFilePrescriptionSolid />,
      description:
        "Bring previous medical records, pregnancy test results, or doctor’s notes if available.",
    },
    {
      id: 4,
      icon: <IoShirtOutline />,
      description:
        "Wear comfortable clothing that allows easy access to your abdomen.",
    },

    {
      id: 5,
      icon: <MdOutlineNoFood />,
      description:
        "Follow fasting instructions if your doctor recommends it for abdominal Doppler scans (usually 6–8 hours)",
    },
    {
      id: 6,
      icon: <LuUserPlus />,
      description:
        "Inform the sonographer about any symptoms, spotting, or concerns for proper evaluation.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Dating Scans?</h2>
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

export default DatingScanPrepare;

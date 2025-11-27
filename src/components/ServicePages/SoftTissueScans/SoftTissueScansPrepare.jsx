import React from "react";
import { GiLiquidSoap } from "react-icons/gi";
import { HiOutlineClock } from "react-icons/hi2";
import { IoDiamondOutline, IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";

const SoftTissueScansPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <IoDiamondOutline />,
      title: "Market Expansion",
      description: "Remove jewelry or accessories near the affected region.",
    },

    {
      id: 2,
      icon: <HiOutlineClock />,
      description:
        "Arrive 10–15 minutes early to complete basic formalities calmly.",
    },
    {
      id: 3,
      icon: <LiaFilePrescriptionSolid />,
      description:
        "Bring previous medical reports, scan records, or prescriptions for comparison.",
    },
    {
      id: 4,
      icon: <IoShirtOutline />,
      description:
        "Wear loose, comfortable clothing to allow easy access to the area being scanned.",
    },

    {
      id: 5,
      icon: <GiLiquidSoap />,
      description:
        "Avoid applying lotions, creams, or oils on the targeted area before the scan.",
    },
    {
      id: 6,
      icon: <LuUsers />,
      description:
        "Inform the sonographer about any recent injuries, surgeries, or ongoing symptoms.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Soft Tissue Scans?</h2>
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

export default SoftTissueScansPrepare;

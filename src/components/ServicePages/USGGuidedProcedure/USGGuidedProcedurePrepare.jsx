import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { FaTurnUp } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import { IoDiamondOutline, IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { MdOutlineNoFood } from "react-icons/md";
import { TbFileImport } from "react-icons/tb";
const USGGuidedProcedurePrepare = () => {
  const card = [
    {
      id: 1,
      icon: <TbFileImport />,
      title: "Online Presence 24/7",
      description: "Bring the referral your Doctor or Specialist gave you.",
    },
    {
      id: 2,
      icon: <IoDiamondOutline />,
      title: "Market Expansion",
      description: "Remove all jewellery.",
    },
    {
      id: 3,
      icon: <FiCopy />,
      title: "Assists Keep Up with Competitors",
      description:
        "Advise the administration team if you have had relevant imaging outside of St Vincent’s.",
    },
    {
      id: 4,
      icon: <LiaFilePrescriptionSolid />,
      title: "Online Customer Service",
      description:
        "Follow the instructions provided to you — you may be asked to fast or to drink water and not go to the toilet before the procedure.",
    },
    {
      id: 5,
      icon: <IoShirtOutline />,
      title: "Provides a Better First Impression",
      description:
        "Wear comfortable clothing and leave any valuables at home where possible.",
    },
    {
      id: 6,
      icon: <CiCreditCard1 />,
      title: "Boosts Revenue",
      description:
        "Bring your Medicare card, healthcare card or insurance details as applicable.",
    },
    {
      id: 7,
      icon: <MdOutlineNoFood />,
      title: "Enhances Search Rankings",
      description:
        "You may be asked to fast or have a full bladder for your examination. All detailed instructions will be provided to you at the time of your booking.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare</h2>
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

export default USGGuidedProcedurePrepare;

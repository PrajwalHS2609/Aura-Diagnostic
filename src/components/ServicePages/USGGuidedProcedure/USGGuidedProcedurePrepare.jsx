import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { HiOutlineClock } from "react-icons/hi2";
import { FaRegSmileBeam } from "react-icons/fa";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { MdOutlineNoFood } from "react-icons/md";
import { TbFileImport } from "react-icons/tb";
import { LuUsers } from "react-icons/lu";

const USGGuidedProcedurePrepare = () => {
  const card = [
    {
      id: 1,
      icon: <TbFileImport />,
      description: "Bring the referral your Doctor or Specialist gave you.",
    },
    {
      id: 2,
      icon: <LuUsers />,
      description:
        "Discuss blood thinners (like Aspirin, Warfarin); you may need special guidance.",
    },
    {
      id: 3,
      icon: <HiOutlineClock />,
      description:
        "Arrive a few minutes early to complete basic paperwork and settle in.",
    },
    {
      id: 4,
      icon: <LiaFilePrescriptionSolid />,
      description:
        "Bring previous reports, scans, prescriptions, and blood test results",
    },
    {
      id: 5,
      icon: <IoShirtOutline />,
      description:
        "Wear loose, comfortable clothing for easy access to the scan area.",
    },
    {
      id: 6,
      icon: <FaRegSmileBeam />,
      description:
        "Stay relaxed — USG-guided procedures are safe, quick, and minimally invasive.",
    },
    {
      id: 7,
      icon: <MdOutlineNoFood />,
      description:
        "Follow fasting instructions if advised (usually for abdominal procedures).",
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

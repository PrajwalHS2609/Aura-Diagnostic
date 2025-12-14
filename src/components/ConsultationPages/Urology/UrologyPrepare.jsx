import React from "react";
import { BsExclamationOctagon } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import {
  MdHistory,
  MdOutlineMedication,
  MdOutlineNoFood,
} from "react-icons/md";
import { PiDropSlash } from "react-icons/pi";

const UrologyPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <CgNotes />,
      description:
        "Note down your symptoms, including when they started and how often they occur.",
    },

    {
      id: 2,
      icon: <HiOutlineClock />,
      description: "Arrive early to complete registration or paperwork",
    },
    {
      id: 3,
      icon: <LiaFilePrescriptionSolid />,
      description: "Carry previous medical records, reports, and test results",
    },
    {
      id: 4,
      icon: <IoShirtOutline />,
      description:
        "Wear comfortable clothing for examination or diagnostic tests",
    },

    {
      id: 5,
      icon: <MdOutlineNoFood />,
      description:
        "Follow any fasting or test preparation guidelines if advised",
    },
    {
      id: 6,
      icon: <MdHistory />,
      description:
        "Inform the doctor about any history of kidney stones or prostate issues",
    },

    {
      id: 7,
      icon: <MdOutlineMedication />,
      description: "Prepare a list of current medications and supplements",
    },
    {
      id: 8,
      icon: <FaRegQuestionCircle />,
      description: "Prepare questions or concerns to discuss openly",
    },
    {
      id: 9,
      icon: <PiDropSlash />,
      description:
        "Avoid urinating just before the appointment unless instructed",
    },
    {
      id: 10,
      icon: <BsExclamationOctagon />,
      description: "Be aware of urinary habits, pain, or changes in urine flow",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Urology Consultation?</h2>
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

export default UrologyPrepare;

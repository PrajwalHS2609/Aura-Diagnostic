import React from "react";
import { CgNotes } from "react-icons/cg";
import { CiCircleList, CiGlass } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import {
  MdHistory,
  MdOutlineMedication,
  MdOutlineNoFood,
} from "react-icons/md";

const NephrologyPrepare = () => {
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
      description: "Arrive early to complete registration or documentation",
    },
    {
      id: 3,
      icon: <LiaFilePrescriptionSolid />,
      description:
        "Carry previous medical records,lab reports, and imaging results",
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
      description: "Follow any fasting or test-related instructions",
    },
    {
      id: 6,
      icon: <CiGlass />,
      description:
        "Drink fluids as advised unless instructed otherwise, and exercise",
    },
    {
      id: 7,
      icon: <MdHistory />,
      description:
        "Be aware of any history of diabetes, high blood pressure, or kidney disease",
    },
    {
      id: 8,
      icon: <MdOutlineMedication />,
      description: "Prepare a list of current medications and supplements",
    },
    {
      id: 9,
      icon: <FaRegQuestionCircle />,
      description: "Prepare questions you want to ask the nephrologist",
    },
    {
      id: 10,
      icon: <CiCircleList />,
      description: "Track recent changes in urination, swelling, or weight",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Nephrology Consultation?</h2>
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

export default NephrologyPrepare;

import React from "react";
import { BiClinic } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { FaHome, FaRegQuestionCircle } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { MdOutlineMedication, MdOutlineNoFood } from "react-icons/md";

const CardiologyPrepare = () => {
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
      description: "Avoid caffeine or heavy meals if advised before tests",
    },
    {
      id: 6,
      icon: <FaUserDoctor />,
      description:
        "Inform the doctor about lifestyle habits like smoking, diet, and exercise",
    },
    {
      id: 7,
      icon: <FaHome />,
      description:
        "Know your family history of heart disease or related conditions",
    },
    {
      id: 8,
      icon: <MdOutlineMedication />,
      description: "Prepare a list of current medications and supplements",
    },
    {
      id: 9,
      icon: <FaRegQuestionCircle />,
      description: "Prepare questions you want to ask the cardiologist",
    },
    {
      id: 10,
      icon: <BiClinic />,
      description:
        "Follow any pre-appointment instructions given by the clinic",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Cardiology Consultation?</h2>
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

export default CardiologyPrepare;

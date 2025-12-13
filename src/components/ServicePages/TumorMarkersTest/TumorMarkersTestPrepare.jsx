import React from "react";
import { CiGlass } from "react-icons/ci";
import { FaSmokingBan } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GrYoga } from "react-icons/gr";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid, LiaTabletsSolid } from "react-icons/lia";
import { MdNoDrinks, MdOutlineNoFood } from "react-icons/md";

const TumorMarkersTestPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <LiaTabletsSolid />,
      description:
        "Inform the doctor about all medications, supplements, and ongoing treatments",
    },

    {
      id: 2,
      icon: <HiOutlineClock />,
      description:
        "Arrive a few minutes early to settle comfortably before the test.",
    },
    {
      id: 3,
      icon: <LiaFilePrescriptionSolid />,
      description: "Bring previous test reports or prescriptions.",
    },
    {
      id: 4,
      icon: <IoShirtOutline />,
      description: "Wear loose sleeves for easy access to your arm.",
    },

    {
      id: 5,
      icon: <MdOutlineNoFood />,
      description:
        "Follow fasting instructions if your doctor recommends it (usually 8–12 hours).",
    },
    {
      id: 6,
      icon: <CiGlass />,
      description: "Drink plenty of water to stay hydrated.",
    },
    {
      id: 7,
      icon: <GrYoga />,
      description: "Avoid strenuous exercise before the test.",
    },
    {
      id: 8,
      icon: <MdNoDrinks />,
      description: "Avoid alcohol 24 hours prior.",
    },
    {
      id: 9,
      icon: <FaSmokingBan />,
      description: "Refrain from smoking before the test if instructed",
    },
    {
      id: 10,
      icon: <FaUserDoctor />,
      description: "Notify the technician if you have a history of fainting or difficult veins",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Tumor Markers Blood Test?</h2>
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

export default TumorMarkersTestPrepare;

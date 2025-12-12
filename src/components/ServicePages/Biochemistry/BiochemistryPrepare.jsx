import React from "react";
import { CiGlass } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { GiChickenLeg } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid, LiaTabletsSolid } from "react-icons/lia";
import { MdNoDrinks, MdOutlineNoFood } from "react-icons/md";

const BiochemistryPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <LiaTabletsSolid />,
      description:
        "Inform the lab/doctor about all medications or supplements you take.",
    },

    {
      id: 2,
      icon: <HiOutlineClock />,
      description:
        "Arrive on time and remain calm to avoid temporary changes in readings.",
    },
    {
      id: 3,
      icon: <LiaFilePrescriptionSolid />,
      description:
        "Inform the lab/doctor about all medications or supplements you take./",
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
        "Follow fasting instructions if required (typically 8–12 hours).",
    },
    {
      id: 6,
      icon: <CiGlass />,
      description:
        "Drink only water during the fasting period—avoid tea, coffee, or juice.",
    },
    {
      id: 7,
      icon: <FaHome />,
      description:
        "For home sample collection, stay ready 10 minutes before the scheduled time.",
    },
    {
      id: 8,
      icon: <MdNoDrinks />,
      description: "Avoid alcohol and heavy meals the day before.",
    },
    {
      id: 9,
      icon: <GiChickenLeg />,
      description:
        "Do not consume high-fat or heavy meals the night before.",
    },
    {
      id: 10,
      icon: <FaDroplet />,
      description:
        "Drink only water during the fasting period—avoid tea, coffee, or juice.",
    },
    {
      id: 11,
      icon: <GrYoga />,
      description: "Avoid strenuous exercise before the test",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Biochemistry Blood Test?</h2>
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

export default BiochemistryPrepare;

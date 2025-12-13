import React from "react";
import { BiHappyBeaming } from "react-icons/bi";
import { CiGlass } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid, LiaTabletsSolid } from "react-icons/lia";
import { MdNoDrinks, MdOutlineMedication, MdOutlineNoFood } from "react-icons/md";

const MicrobiologyPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <LiaTabletsSolid />,
      description: "Inform the lab about current medications or antibiotics.",
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
      description: "Follow fasting instructions if your doctor recommends.",
    },
    {
      id: 6,
      icon: <CiGlass />,
      description: "Drink plenty of water to stay hydrated.",
    },
    {
      id: 7,
      icon: <MdOutlineMedication />,
      description: "Do not take vitamin or herbal supplements unless advised.",
    },
    {
      id: 8,
      icon: <MdNoDrinks />,
      description: "Avoid caffeine and alcohol 24 hours prior.",
    },
    {
      id: 9,
      icon: <BiHappyBeaming />,
      description: "Relax and stay calm before the sample collection.",
    },
    {
      id: 10,
      icon: <FaUserDoctor />,
      description:
        "Inform the phlebotomist about any previous reactions to blood tests.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Microbiology Blood Test?</h2>
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

export default MicrobiologyPrepare;

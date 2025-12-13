import React from 'react'
import { CiGlass } from 'react-icons/ci';
import { FaUserDoctor } from 'react-icons/fa6';
import { GrYoga } from 'react-icons/gr';
import { IoShirtOutline } from 'react-icons/io5';
import { LiaFilePrescriptionSolid, LiaTabletsSolid } from 'react-icons/lia';
import { MdNoDrinks, MdOutlineFoodBank, MdOutlineMedication, MdOutlineNoFood } from 'react-icons/md';

const SerologyPrepare = () => {
      const card = [
        {
          id: 1,
          icon: <LiaTabletsSolid />,
          description:
            "Inform the lab about any ongoing medications",
        },
    
        {
          id: 2,
          icon: <MdOutlineMedication  />,
          description:
            "Inform the lab about any ongoing medications",
        },
        {
          id: 3,
          icon: <LiaFilePrescriptionSolid />,
          description: "Follow specific instructions if your doctor ordered specialized serology panels",
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
          description: "Avoid caffeine and alcohol 24 hours prior.",
        },
        {
          id: 9,
          icon: <FaUserDoctor  />,
          description: "Inform the phlebotomist if you have a history of fainting",
        },
        {
          id: 10,
          icon: <MdOutlineFoodBank />,
          description: "No fasting required unless advised by your doctor",
        },
      ];
  return (
 <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Blood Test?</h2>
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
  )
}

export default SerologyPrepare

import React from 'react'
import { CiGlass } from 'react-icons/ci';
import { HiOutlineClock } from 'react-icons/hi2';
import { IoShirtOutline } from 'react-icons/io5';
import { LiaTabletsSolid } from "react-icons/lia";
import { MdOutlineNoFood } from 'react-icons/md';

const InfertilityScanPrepare = () => {
    const card = [
        {
          id: 1,
          icon: <CiGlass />,
          description:
            "Drink 3–4 glasses of water before your appointment if an abdominal scan is required, and avoid emptying your bladder.",
        },
    
        {
          id: 2,
          icon: <HiOutlineClock />,
          description:
            "Arrive 10–15 minutes early to complete basic formalities.",
        },
        {
          id: 3,
          icon: <LiaTabletsSolid />,
          description:
            "Inform the radiologist about any medications, fertility treatments, or ongoing symptoms.",
        },
        {
          id: 4,
          icon: <IoShirtOutline />,
          description:
            "Wear loose and comfortable clothing for easy access during the scan.",
        },
    
        {
          id: 5,
          icon: <MdOutlineNoFood />,
          description:
            "Avoid heavy meals if fasting is recommended for specific types of USG.",
        },
      ];
  return (
<div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Infertility Scans?</h2>
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

export default InfertilityScanPrepare

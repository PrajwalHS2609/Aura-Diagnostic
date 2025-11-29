import React from 'react'
import { BsDroplet } from 'react-icons/bs';
import { FaUserDoctor } from 'react-icons/fa6';
import { HiOutlineClock } from 'react-icons/hi2';
import { IoShirtOutline } from 'react-icons/io5';
import { LiaFilePrescriptionSolid } from 'react-icons/lia';
import { MdOutlineCalendarMonth, MdOutlineFoodBank } from 'react-icons/md';

const LeutealPhaseScanPrepare = () => {
  const card = [
      {
        id: 1,
        icon: <MdOutlineCalendarMonth />,
        description:
          "Schedule the scan 5–7 days after ovulation, as advised by your doctor.",
      },
  
      {
        id: 2,
        icon: <HiOutlineClock />,
        description:
          "Arrive a little early to relax before the procedure.",
      },
      {
        id: 3,
        icon: <LiaFilePrescriptionSolid />,
        description:
          "Bring previous scan or cycle monitoring reports for comparison.",
      },
      {
        id: 4,
        icon: <IoShirtOutline />,
        description:
          "Wear comfortable clothing for easy movement.",
      },
  
      {
        id: 5,
        icon: <MdOutlineFoodBank />,
        description:
          "No fasting or special diet is required.",
      },
            {
        id: 6,
        icon: <FaUserDoctor />,
        description:
          "Inform the specialist about hormonal medications or fertility treatments.",
      },
                  {
        id: 7,
        icon: <BsDroplet/>,
        description:
          "Empty your bladder before the scan for clearer imaging.",
      },
    ];
  return (
<div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Leuteal Phase Scan?</h2>
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

export default LeutealPhaseScanPrepare

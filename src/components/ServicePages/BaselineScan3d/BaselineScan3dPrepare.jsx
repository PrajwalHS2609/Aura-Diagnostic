import React from 'react'
import { BsDroplet } from 'react-icons/bs';
import { FaUserDoctor } from 'react-icons/fa6';
import { IoShirtOutline } from 'react-icons/io5';
import { LiaFilePrescriptionSolid } from 'react-icons/lia';
import { MdOutlineCalendarMonth, MdOutlineFoodBank } from 'react-icons/md';

const BaselineScan3dPrepare = () => {
    const card = [
      {
        id: 1,
        icon: <MdOutlineCalendarMonth />,
        description:
          "Schedule the scan during Day 2–5 of your menstrual cycle.",
      },
      {
        id: 2,
        icon: <BsDroplet/>,
        description:
          "Empty your bladder before the scan for better imaging clarity.",
      },
      {
        id: 3,
        icon: <FaUserDoctor />,
        description:
          "Inform the specialist about any ongoing fertility treatments or hormone medications.",
      },
      {
        id: 4,
        icon: <LiaFilePrescriptionSolid />,
        description:
          "Bring previous pregnancy scan reports for better comparison.",
      },
      {
        id: 5,
        icon: <IoShirtOutline />,
        description:
          "Wear comfortable clothing for easy movement.",
      },
      {
        id: 6,
        icon: <MdOutlineFoodBank />,
        description: "No fasting or special diet is required.",
      },
    ];
  return (
 <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for 3D Baseline Scan/AFC Scans?</h2>
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

export default BaselineScan3dPrepare

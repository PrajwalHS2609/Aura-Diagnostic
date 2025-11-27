import React from 'react'
import { CiGlass } from 'react-icons/ci';
import { HiOutlineClock } from 'react-icons/hi2';
import { IoShirtOutline } from 'react-icons/io5';
import { LiaFilePrescriptionSolid } from 'react-icons/lia';
import { MdOutlineNoFood } from 'react-icons/md';

const DopplerScanPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <CiGlass />,
      description:
        "Drink water beforehand if a full bladder is required for pregnancy-related Doppler scans.",
    },

    {
      id: 2,
      icon: <HiOutlineClock />,
      description:
        "Arrive 10–15 minutes early to complete registration and relax before the scan.",
    },
    {
      id: 3,
      icon: <LiaFilePrescriptionSolid />,
      description:
        "Bring previous medical reports, prescriptions, or scan results for comparison.",
    },
    {
      id: 4,
      icon: <IoShirtOutline />,
      description:
        "Wear loose and comfortable clothing to allow easy access to the area being examined.",
    },

    {
      id: 5,
      icon: <MdOutlineNoFood />,
      description:
        "Follow fasting instructions if your doctor recommends it for abdominal Doppler scans (usually 6–8 hours)",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Doppler Scans?</h2>
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

export default DopplerScanPrepare

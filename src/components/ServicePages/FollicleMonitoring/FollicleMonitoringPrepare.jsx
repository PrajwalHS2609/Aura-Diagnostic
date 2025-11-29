import React from "react";
import { BsDroplet } from "react-icons/bs";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid, LiaTabletsSolid } from "react-icons/lia";
import { MdOutlineFoodBank } from "react-icons/md";

const FollicleMonitoringPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <BsDroplet />,
      description: "Empty your bladder before the scan for better clarity.",
    },
    {
      id: 2,
      icon: <MdOutlineFoodBank />,
      description: "No fasting is required; eat normally.",
    },
    {
      id: 3,
      icon: <HiOutlineClock />,
      description: "Arrive a little early to relax before the procedure.",
    },
    {
      id: 4,
      icon: <LiaFilePrescriptionSolid />,
      description: "Bring previous follicle scan reports for comparison.",
    },
    {
      id: 5,
      icon: <IoShirtOutline />,
      description: "Wear comfortable clothing for easy movement.",
    },
    {
      id: 6,
      icon: <LiaTabletsSolid />,
      description:
        "Inform the team about hormone medications or IVF/IUI cycles.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for 3D & 4D Fetal Scans?</h2>
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

export default FollicleMonitoringPrepare;

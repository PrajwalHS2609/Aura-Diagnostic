import React from "react";
import { GiLiquidSoap } from "react-icons/gi";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { LuGlassWater } from "react-icons/lu";
import { MdOutlineFoodBank } from "react-icons/md";

const DFetalScansPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <LuGlassWater />,
      description:
        "Drink plenty of water in the days leading up to the scan to improve image clarity.",
    },
    {
      id: 2,
      icon: <MdOutlineFoodBank />,
      description:
        "Eat a light snack 20–30 minutes before your appointment to encourage fetal movement.",
    },
    {
      id: 3,
      icon: <HiOutlineClock />,
      description: "Arrive 10–15 minutes early to relax before the procedure.",
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
        "Wear comfortable, loose-fitting clothes for easy access to your abdomen.",
    },
    {
      id: 6,
      icon: <GiLiquidSoap />,
      description:
        "Avoid applying lotions or oils on your abdomen on the day of the scan.",
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

export default DFetalScansPrepare;

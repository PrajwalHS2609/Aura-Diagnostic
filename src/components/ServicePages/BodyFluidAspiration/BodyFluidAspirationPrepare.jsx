import React from "react";
import { GiLiquidSoap } from "react-icons/gi";
import { HiOutlineClock } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { LiaFilePrescriptionSolid, LiaTabletsSolid } from "react-icons/lia";
import { MdOutlineNoFood } from "react-icons/md";

const BodyFluidAspirationPrepare = () => {
  const card = [
    {
      id: 1,
      icon: <LiaTabletsSolid />,
      description:
        "Inform your doctor about all medications, especially blood thinners, as you may need dose adjustments.",
    },

    {
      id: 2,
      icon: <HiOutlineClock />,
      description:
        "Arrive early to complete formalities and clarify any concerns.",
    },
    {
      id: 3,
      icon: <LiaFilePrescriptionSolid />,
      description:
        "Bring previous scan reports (ultrasound/CT), blood tests, and medical history for accurate evaluation.",
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
        "Follow fasting instructions only if recommended for your specific procedure.",
    },
    {
      id: 6,
      icon: <GiLiquidSoap />,
      description:
        "Do not apply creams, oils, or powders on the area being examined.",
    },
  ];
  return (
    <div className="service-prepareContainer">
      <div className="service-prepareHead">
        <h2>How to prepare for Body Fluid Aspiration?</h2>
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

export default BodyFluidAspirationPrepare;

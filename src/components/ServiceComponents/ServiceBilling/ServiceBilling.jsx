import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { FaRegFileLines } from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";
import { WiTime3 } from "react-icons/wi";

const ServiceBilling = () => {
  const card = [
    {
      id: 1,
      icon: <FaRegFileLines />,
      title: "Quick Reports",
      description:
        "Get your results instantly on WhatsApp and as a printed physical copy",
    },
    {
      id: 2,
      icon: <MdCurrencyRupee />,
      title: "Affordable Pricing",
      description: "Transparent, patient-friendly rates for all procedures.",
    },
    {
      id: 3,
      icon: <GiBullseye />,
      title: "Accurate Diagnostics",
      description: "High-quality imaging and expert interpretation",
    },
    {
      id: 4,
      icon: <MdOutlineLocationOn />,
      title: "Convenient Location",
      description: "Easily accessible center in Girinagar, Bangalore South.",
    },
    {
      id: 5,
      icon: <WiTime3 />,
      title: "Support Anytime",
      description: "Friendly staff to assist with reports and queries.",
    },
  ];
  return (
    <div className="service-prepareContainer" id="result">
      {card.map((x) => (
        <div className="service-prepareCard" id="billing-card" key={x.id}>
          <span className="service-prepareCardIcon">{x.icon}</span>{" "}
          <div className="service-prepareCardContent">
            <h4>{x.title}</h4>
            <p>{x.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceBilling;

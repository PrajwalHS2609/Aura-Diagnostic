import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { FaRegFileLines } from "react-icons/fa6";

const ServiceBilling = () => {
  const card = [
    {
      id: 1,
      icon: <FaRegFileLines />,
      title: "Accessing your results",
      description:
        "All results can be downloaded electronically by your Doctor.",
    },
    {
      id: 2,
      icon: <MdCurrencyRupee />,
      title: "Billing and Medicare",
      description:
        "We offer low out-of-pocket fees that are highly competitive.For rebatable exams, we bulk bill all pension or health care card holders and full-time tertiary students.For any billing queries, you can contact our administration team to discuss applicable fees.",
    },
  ];
  return (
    <div className="service-prepareContainer" id="billing-container">
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

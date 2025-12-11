import Image from "next/image";
import Link from "next/link";
import React from "react";
import liver from "./../../../Images/AdvancedUSGServices/Liver-Elastography-Scan.png";
import fatty from "./../../../Images/AdvancedUSGServices/Fatty-Liver-Quantification-Scan.png";


const AdvancedUSGService = () => {
  const service = [
    {
      id: 1,
      img:liver,
      title: "Liver Elastography",
      para: "Measures liver stiffness to detect fibrosis and early liver disease, offering a non-invasive, accurate, and painless assessment for improved diagnosis and treatment planning.",
      link: "/liver-elastography-scan-in-girinagar-bangalore",
    },
    {
      id: 2,
      img:fatty,
      title: "Fatty Liver Quantification",
      para: "Accurately measures liver fat levels, helping diagnose steatosis early, monitor disease progression, and guide effective lifestyle or medical treatment decisions.",
      link: "/fatty-liver-quantification-scan-in-girinagar-bangalore",
    },
  ];
  return (
    <div className="serviceComponent">
      <div className="serviceComponentHead">
        <h2>Comprehensive & Precision Diagnostics Service</h2>
        <p>
          Experience top-quality healthcare with our Comprehensive & Precision
          Diagnostics Service. From advanced testing to accurate results, we
          provide a wide range of diagnostic solutions tailored to meet your
          health needs, ensuring timely and reliable care.
        </p>
      </div>
      <div className="serviceComponentMain">
        {service.map((x) => (
          <div className="serviceComponentCard" key={x.id}>
            <div className="serviceComponentCardImg">
              <Image src={x.img} alt={x.title} />
            </div>
            <div className="serviceComponentCardTxt">
              {" "}
              <h4>{x.title}</h4>
              <p>{x.para}</p>
              <Link href={x.link}>Learn More </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvancedUSGService;

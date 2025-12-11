import React from "react";
import bodyFluid from "./../../../Images/USGGuidedProcedureServices/Body-Fluid-Aspiration-Test.png";
import saline from "./../../../Images/USGGuidedProcedureServices/Saline-Infusion-Sonohystersalphingography-scan.png";
import fnac from "./../../../Images/USGGuidedProcedureServices/FNAC-Test.png";
import amniocentesis from "./../../../Images/USGGuidedProcedureServices/Amniocentesis-scan-in-Bangalore.png";
import Link from "next/link";
import Image from "next/image";
const USGGuidedProcedureService = () => {
  const service = [
    {
      id: 1,
      img: fnac,
      title: "FNAC",
      para: "Is a minimally invasive diagnostic test that collects cell samples to detect tumors, infections, and abnormalities with quick, accurate results.",
      link: "/fnac-test-in-girinagar-bangalore",
    },
    {
      id: 2,
      img: bodyFluid,
      title: " Body Fluid Aspiration",
      para: "Safely removes and analyzes fluid from affected areas, helping diagnose infections, inflammation, and medical conditions with precise, minimally invasive testing.",
      link: "/body-fluid-aspiration-test-in-girinagar-bangalore",
    },
    {
      id: 3,
      img: saline,
      title: "Saline Infusion Sonohysterosalphingography",
      para: "Evaluates the uterus and fallopian tubes, detecting polyps, fibroids, and blockages using a safe, detailed, and minimally invasive ultrasound technique.",
      link: "/saline-infusion-sonohysterosalpingography-test-in-girinagar-bangalore",
      idToChange:"widthToChange"
    },
    {
      id: 4,
      img: amniocentesis,
      title: "Amniocentesis",
      para: "Is a prenatal diagnostic test that analyzes amniotic fluid to detect genetic conditions, chromosomal abnormalities, infections, and ensure informed pregnancy care decisions.",
      link: "/amniocentesis-ultrasound-test-in-girinagar-bangalore",
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
          <div className="serviceComponentCard" key={x.id} id={x.idToChange}>
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

export default USGGuidedProcedureService;

import React from "react";
import DopplerScanning from "./../../../Images/ServiceImgs/Doppler Scanning.png";
import Link from "next/link";
import Image from "next/image";
import ntScan from "./../../../Images/PregnancyServices/nt Scan.png"
import anomaly from "./../../../Images/PregnancyServices/anomaly scan.png"
import fetalEcho from "./../../../Images/ObstetricsServices/Fetal Echo.png"
import fetalUrosonogram from "./../../../Images/ObstetricsServices/Fetal Urosonogram.png"
import growthScanDoppler from "./../../../Images/ObstetricsServices/Growth Scans with Doppler.png"

const ObstetricsService = () => {
  const service = [
    {
      id: 1,
      img: ntScan,
      title: "NT Scan",
      para: "NT scan measures fetal neck thickness, screens for chromosomal conditions early, and ensures expecting parents receive accurate guidance for a healthy pregnancy journey.",
      link: "/pregnancy-nt-scan-in-girinagar-bangalore",
    },
    {
      id: 2,
      img: anomaly,
      title: "Anomaly Scan",
      para: "Detailed anomaly scans check fetal growth, organ development, and detect abnormalities early, providing expecting parents confidence and essential guidance for a healthy pregnancy journey.",
      link: "/pregnancy-anomaly-scan-in-girinagar-bangalore",
    },
    {
      id: 3,
      img: growthScanDoppler,
      title: "Growth Scan with Doppler",
      para: "Measures your baby’s development, movement, and blood flow, ensuring healthy growth, proper nourishment, and early detection of complications during pregnancy.",
      link: "/growth-scan-with-doppler-in-girinagar-bangalore",
    },
    {
      id: 4,
      img: fetalEcho,
      title: "Fetal echo",
      para: "Is a detailed ultrasound assessing your baby’s heart structure and function, detecting congenital abnormalities early for expert guidance, reassurance, and better pregnancy care.",
      link: "/fetal-echo-test-in-girinagar-bangalore",
    },
    {
      id: 5,
      img: fetalUrosonogram,
      title: "Fetal Urosonogram",
      para: "Evaluates your baby’s kidneys, bladder, and urinary system, helping detect structural issues early for timely medical care and confident pregnancy monitoring.",
      link: "/fetal-urosonogram-test-in-girinagar-bangalore",
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

export default ObstetricsService;

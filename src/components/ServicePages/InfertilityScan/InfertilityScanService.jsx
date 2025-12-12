import React from "react";
import pelvis3d from "./../../../Images/InfertilityScanServices/3D-Pelvis-Scan.png";
import baseline3d from "./../../../Images/InfertilityScanServices/3D-Base-line-scan.png";
import follicleMonitoring from "./../../../Images/InfertilityScanServices/3D-Follicle-Monitoring.png";
import leuteal from "./../../../Images/InfertilityScanServices/Leuteal-Phase-Scan.png";
import uterine from "./../../../Images/InfertilityScanServices/Uterine-Biophysical.png";

import Link from 'next/link';
import Image from 'next/image';
const InfertilityScanService = () => {
  const service = [
    {
      id: 1,
      img: pelvis3d,
      title: "3D Pelvis Scan",
      para: "Provides detailed, high-resolution imaging of pelvic organs, helping diagnose abnormalities, assess structures accurately, and guide effective treatment with enhanced clarity.",
      link: "/3d-pelvis-scan-in-girinagar-bangalore",
    },
    {
      id: 2,
      img: baseline3d,
      title: "3D Base line Scan/ AFC Scans",
      para: "This Scan offers clear, detailed imaging of pelvic and reproductive organs, helping evaluate structural health, detect abnormalities early, and guide personalized fertility or treatment planning.",
      link: "/3d-baseline-scan-in-girinagar-bangalore",
    },
    {
      id: 3,
      img: follicleMonitoring,
      title: "3D Follicle Monitoring with Doppler",
      para: "Accurately tracks follicle growth and blood flow, helping optimize fertility treatment timing and enhancing chances of successful ovulation and conception.",
      link: "/3d-follicle-monitoring-with-doppler-in-girinagar-bangalore",
    },
    {
      id: 4,
      img: leuteal,
      title: "Leuteal Phase Scan",
      para: "Evaluates uterine lining thickness, corpus luteum function, and overall cycle health, helping assess implantation readiness and support fertility planning.",
      link: "/luteal-phase-scan-in-girinagar-bangalore",
    },
    {
      id: 5,
      img: uterine,
      title: "Uterine biophysical profile",
      para: "Assesses blood flow, uterine lining, and structural health, helping evaluate fertility potential, implantation readiness, and overall reproductive well-being with precision.",
      link: "/uterine-biophysical-profile-scan-in-girinagar-bangalore",
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

export default InfertilityScanService;

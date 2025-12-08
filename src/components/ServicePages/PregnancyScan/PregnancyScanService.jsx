import React from "react";
import scan3d4d from "./../../../Images/PregnancyServices/3d4d Scan.png"
import dating from "./../../../Images/PregnancyServices/Dating Scan.png"
import ntScan from "./../../../Images/PregnancyServices/nt Scan.png"
import anomaly from "./../../../Images/PregnancyServices/anomaly scan.png"

import Link from "next/link";
import Image from "next/image";
const PregnancyScanService = () => {
  const service = [
    {
      id: 1,
      img: dating,
      title: "Dating Scan",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/pregnancy-dating-scan-in-girinagar-bangalore",
    },
    {
      id: 2,
      img: anomaly,
      title: " Anomaly Scan",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/pregnancy-anomaly-scan-in-girinagar-bangalore",
    },
    {
      id: 3,
      img: scan3d4d,
      title: "3D and 4D Scan",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/pregnancy-3d-and-4d-fetal-scans-in-girinagar-bangalore",
    },
    {
      id: 4,
      img: ntScan,
      title: "NT Scan",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/pregnancy-nt-scan-in-girinagar-bangalore",
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

export default PregnancyScanService;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import DopplerScanning from "./../../../Images/ServiceImgs/Doppler Scanning.png";

const DopplerScanService = () => {
  const service = [
    {
      id: 1,
      img: DopplerScanning,
      title: "Carotid Doppler",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/carotid-doppler",
    },
    {
      id: 2,
      img: DopplerScanning,
      title: "Renal Doppler",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/renal-doppler",
    },
    {
      id: 3,
      img: DopplerScanning,
      title: "Upper and Lower Limb Doppler",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/upper-and-lower-limb-doppler",
    },
    {
      id: 4,
      img: DopplerScanning,
      title: "Leuteal Phase Scan",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/leuteal-phase-scan",
    },
    {
      id: 5,
      img: DopplerScanning,
      title: "Whole Body Doppler",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/upper-and-lower-limb-doppler",
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

export default DopplerScanService;

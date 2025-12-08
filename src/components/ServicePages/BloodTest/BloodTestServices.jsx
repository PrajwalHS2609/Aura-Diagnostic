import React from "react";
import DopplerScanning from "./../../../Images/ServiceImgs/Doppler Scanning.png";
import Image from "next/image";
import Link from "next/link";

const BloodTestServices = () => {
  const service = [
    {
      id: 1,
      img: DopplerScanning,
      title: "Hematology",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/hematology-in-girinagar-bangalore",
    },
    {
      id: 2,
      img: DopplerScanning,
      title: "Biochemistry",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/biochemistry-in-girinagar-bangalore",
    },
    {
      id: 3,
      img: DopplerScanning,
      title: "Tumor Markers Test",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/tumor-markers-test-in-girinagar-bangalore",
    },
    {
      id: 4,
      img: DopplerScanning,
      title: "Microbiology",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/microbiology-in-girinagar-bangalore",
    },
    {
      id: 5,
      img: DopplerScanning,
      title: "Serology",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/serology-in-girinagar-bangalore",
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

export default BloodTestServices;

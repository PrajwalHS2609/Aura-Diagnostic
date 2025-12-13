import React from "react";
import Image from "next/image";
import Link from "next/link";
import biochemistry from "./../../../Images/bloodTest/Biochemistry.png";
import microbiology from "./../../../Images/bloodTest/Microbiology.png";
import tumorMarker from "./../../../Images/bloodTest/Tumor-Markers-Blood.png";
import hematology from "./../../../Images/bloodTest/Hematology.png";
import serology from "./../../../Images/bloodTest/Serology.png";

const BloodTestServices = () => {
  const service = [
    {
      id: 1,
      img: hematology,
      title: "Hematology",
      para: "Eevaluates red and white blood cells, platelets, and overall blood health to diagnose anemia, infections, clotting disorders, and various medical conditions accurately.",
      link: "/hematology-in-girinagar-bangalore",
    },
    {
      id: 2,
      img: biochemistry,
      title: "Biochemistry",
      para: "Measures enzymes, hormones, electrolytes, and organ function markers, helping diagnose metabolic disorders, liver and kidney issues, diabetes, and overall health conditions accurately.",
      link: "/biochemistry-in-girinagar-bangalore",
    },
    {
      id: 3,
      img: tumorMarker,
      title: "Tumor Markers Test",
      para: "Measures specific proteins and substances in the blood to help detect cancers early, monitor treatment response, and track disease progression accurately.",
      link: "/tumor-markers-test-in-girinagar-bangalore",
    },
    {
      id: 4,
      img: microbiology,
      title: "Microbiology",
      para: "Identifies bacteria, viruses, fungi, and parasites to diagnose infections accurately, guide effective treatment, and monitor patient health through detailed laboratory analysis.",
      link: "/microbiology-in-girinagar-bangalore",
    },
    {
      id: 5,
      img: serology,
      title: "Serology",
      para: "Detects antibodies and antigens in the blood, helping diagnose infections, immune responses, autoimmune conditions, and past exposure to specific diseases accurately.",
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

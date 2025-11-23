import React from "react";
import "./HomeDoctors.css";
import HomeDoctorsCard from "./HomeDoctorsCard";
import Doc1 from "./../../../Images/Doctors/Dr.G.N.Keshava Murthy.png";
import Doc2 from "./../../../Images/Doctors/Dr.Kiran Nidagundi.png";
import Doc3 from "./../../../Images/Doctors/B. L. Shashi Bhushan.png";

const HomeDoctorsMain = () => {
  return (
    <div className="homeDoctorsMain">
      <HomeDoctorsCard
        img={Doc2}
        alt="Dr. Ramyashree R M"
        name="Dr. Ramyashree R M"
        qualifications="MBBS MD Anaesthesia"
        training="Fellowship in paediatric Anaesthesia"
        position="( Founder and Managing Director)"
      />
      <HomeDoctorsCard
        img={Doc1}
        alt=" Dr. Kiran Ramaiah"
        name="Dr. Kiran Ramaiah"
        qualifications="MBBS MD Radio-Diagnosis"
        training="Lead Radiologist and Co-founder."
        position=""
      />
    </div>
  );
};

export default HomeDoctorsMain;

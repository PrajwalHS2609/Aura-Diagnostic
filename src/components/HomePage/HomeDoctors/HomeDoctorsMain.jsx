import React from "react";
import "./HomeDoctors.css";
import HomeDoctorsCard from "./HomeDoctorsCard";
import doc1 from "./../../../Images/fav.png"

const HomeDoctorsMain = () => {
  return (
    <div className="homeDoctorsMain">
      <HomeDoctorsCard
        img={doc1}
        alt="Dr. Ramyashree R M"
        name="Dr. Ramyashree R M"
        qualifications="MBBS MD Anaesthesia"
        training="Fellowship in paediatric Anaesthesia"
        position="( Founder and Managing Director)"
      />
      <HomeDoctorsCard
        img={doc1}
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

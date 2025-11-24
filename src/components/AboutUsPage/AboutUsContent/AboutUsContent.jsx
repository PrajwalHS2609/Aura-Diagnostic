import React from "react";
import "./AboutUsContent.css";
import mission from "./../../../Images/Vision & Mission/mission.png";
import vision from "./../../../Images/Vision & Mission/vision.png";
import Image from "next/image";

const AboutUsContent = () => {
  return (
    <div className="aboutUsContent">
      <div>
        {" "}
        <p>
          Founded in 2025, Aura Diagnostics is a patient-centered healthcare
          facility led by Dr. Ramyashree R.M and Dr. Kiran Ramaiah, two highly
          skilled clinicians with over a decade of combined experience in
          medical diagnostics and clinical care. Guided by their expertise, Aura
          Diagnostics delivers accurate, timely, and reliable diagnostic
          services across a wide range of modalities.
        </p>
        <p>
          Equipped with advanced technology, evidence-based protocols, and a
          compassionate team, we perform high-precision procedures including
          ultrasound scans, Doppler studies, ECG, laboratory investigations, and
          specialized diagnostic assessments. Dr. Kiran Ramaiah’s extensive
          training and commitment to quality further elevate the standard of
          care we provide.
        </p>
        <p>
          At Aura Diagnostics, we prioritize precision, integrity, and patient
          well-being. Our holistic approach ensures that every patient receives
          clear communication, personalized attention, and trustworthy
          results—making us a preferred choice for those seeking dependable and
          comprehensive diagnostic services.
        </p>
      </div>
      <div className="aboutUsContentWrapper">
        <div className="aboutUsContentItem">
          <div className="aboutUsContentItem-img">
            <Image src={mission} alt="mission" />
          </div>
          <p>
            <h6>Our Mission</h6>
            We aim to offer high-quality, dependable diagnostic services powered
            by advanced technology and a caring, patient-focused approach.
          </p>
        </div>
        <div className="aboutUsContentItem">
          <div className="aboutUsContentItem-img">
            <Image src={vision} alt="vision" />
          </div>
          <p>
            <h6> Our Vision </h6>
            To be a leader in diagnostic healthcare through innovation,
            integrity, and excellence—delivering precise diagnostics and
            building a culture of trust, care, and improved health outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;

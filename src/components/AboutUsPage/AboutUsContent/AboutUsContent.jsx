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
          Founded in 2001, Aura Diagnostics is a trusted healthcare facility
          under the leadership of Dr. Ramyashree R M G N, a highly experienced
          professional with over 30 years of expertise in the medical field.
          Aura Diagnostics offers a wide range of medical treatments and
          services, specializing in diagnostics to ensure accurate and timely
          results for patients.
        </p>
        <p>
          With a deep commitment to providing top-quality healthcare, Aura
          Diagnostics is equipped with advanced technology and skilled
          professionals to perform various diagnostic procedures. Dr. Keshav
          Murthy's vast experience and dedication enhance the quality of patient
          care, making Aura a reliable choice for individuals seeking
          comprehensive diagnostic services.
        </p>
        <p>
          At Aura Diagnostics, we prioritize precision and excellence,
          delivering a holistic approach to healthcare that ensures the
          well-being of every patient.
        </p>
      </div>
      <div className="aboutUsContentWrapper">
        <div className="aboutUsContentItem">
          <div className="aboutUsContentItem-img">
            <Image src={mission} alt="mission" />
          </div>
          <p>
            <h6>Our Mission</h6>
            Is to deliver accurate, reliable, and timely diagnostic services
            using advanced technology and a compassionate approach.
          </p>
        </div>
        <div className="aboutUsContentItem">
          <div className="aboutUsContentItem-img">
            <Image src={vision} alt="vision" />
          </div>
          <p>
            <h6> Our Vision </h6>
            Is to lead in diagnostic healthcare through innovation, integrity,
            and excellence, providing precise diagnostics and fostering a
            culture of trust and care for better health outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContent;

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
        img={Doc1}
        alt="Dr.G.N.Keshava Murthy"
        name="Dr.G.N.Keshava Murthy"
        designation="Founder & Consultant Pathologist"
      />
      <HomeDoctorsCard
        img={Doc2}
        alt="Dr.Kiran Nidagundi"
        name="Dr.Kiran Nidagundi"
        designation="Consultant Diabetologist & Physician"
      />
      <HomeDoctorsCard
        img={Doc3}
        alt="Dr.B.L.Shashi Bhushan"
        name="Dr.B.L.Shashi Bhushan"
        designation="Consultant Pulmonologist"
      />
      {/* <HomeDoctorsCard img={"/"} alt="" name="" designation="" />
      <HomeDoctorsCard img={"/"} alt="" name="" designation="" />
      <HomeDoctorsCard img={"/"} alt="" name="" designation="" /> */}
    </div>
  );
};

export default HomeDoctorsMain;

import React from "react";
import "./HomeWhy.css";
import HomeWhyHead from "./HomeWhyHead";
import HomeWhyCard from "./HomeWhyCard";
import Expertise from "./../../../Images/WhyImgs/Expertise_and_Experience.png";
import CuttingEdge from "./../../../Images/WhyImgs/Cutting-Edge_Technology.png";
import Comprehensive from "./../../../Images/WhyImgs/Comprehensive_Services.png";
import Patient_centric from "./../../../Images/WhyImgs/Patient-Centric_Care.png";
import Commitment from "./../../../Images/WhyImgs/Commitment_to_Quality.png";
import Transparent from "./../../../Images/WhyImgs/Transparent_Processes.png";
import Positive from "./../../../Images/WhyImgs/Positive_Patient_Experience.png";
import Community from "./../../../Images/WhyImgs/Community_Trust.png";
import Continuous from "./../../../Images/WhyImgs/Continuous_Improvement.png";
import Holistic from "./../../../Images/WhyImgs/Holistic_Health_Focus.png";

const HomeWhyContents = () => {
  return (
    <div className="homeWhyContents">
      <HomeWhyHead />
      <div className="homeWhyContents-container">
        <HomeWhyCard
          head="Expertise and Experience"
          img={Expertise}
          para="With over 30 years of experience in the healthcare industry, Dr. Ramyashree R M G N and our skilled team bring a wealth of knowledge and proficiency to diagnostics."
        />
        <HomeWhyCard
          head="Cutting-Edge Technology"
          img={CuttingEdge}
          para="We utilize advanced diagnostic equipment and techniques to ensure accurate and timely results, enhancing the quality of patient care."
        />
        <HomeWhyCard
          head="Comprehensive Services"
          img={Comprehensive}
          para="Our wide range of diagnostic services caters to diverse healthcare needs, providing a holistic approach to patient health."
        />
        <HomeWhyCard
          head="Patient-Centric Care"
          img={Patient_centric}
          para=" We prioritize our patients' comfort and well-being, offering personalized attention and clear communication throughout their diagnostic journey."
        />
        <HomeWhyCard
          head="Commitment to Quality"
          img={Commitment}
          para="Our unwavering commitment to high standards in healthcare ensures that every patient receives precise diagnostics and reliable information."
        />
        <HomeWhyCard
          head="Transparent Processes"
          img={Transparent}
          para="We believe in open communication, providing patients with clear information about their tests, results, and any necessary follow-up"
        />
        <HomeWhyCard
          head="Positive Patient Experience"
          img={Positive}
          para="Our dedicated staff is focused on creating a welcoming and supportive environment, making every visit as comfortable as possible"
        />
        <HomeWhyCard
          head="Community Trust"
          img={Community}
          para="As a well-established healthcare facility in the community, we have built strong relationships based on trust and reliability with our patients."
        />
        <HomeWhyCard
          head="Continuous Improvement"
          img={Continuous}
          para="We are dedicated to ongoing training and development for our team, ensuring they stay updated on the latest advancements in diagnostics and patient care."
        />
        <HomeWhyCard
          head="Holistic Health Focus"
          img={Holistic}
          para="Our approach emphasizes not just diagnostics but overall health, guiding patients in maintaining their well-being beyond the testing phase."
        />
      </div>
    </div>
  );
};

export default HomeWhyContents;

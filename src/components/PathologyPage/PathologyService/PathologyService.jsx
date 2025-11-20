import React from "react";
import "./PathologyService.css";
import PathologyServiceCard from "./PathologyServiceCard";
import Hematology from "./../../../Images/PathologyServices/Hematology.png";
import Biochemistry from "./../../../Images/PathologyServices/Biochemistry.png";
import HormonalTest from "./../../../Images/PathologyServices/Hormonal Test.png";
import Microbiology from "./../../../Images/PathologyServices/Microbiology.png";
import Serology from "./../../../Images/PathologyServices/Serology.png";
import TumorMarkersTest from "./../../../Images/PathologyServices/Tumor Markers Test.png";
import ClinicalPathology from "./../../../Images/PathologyServices/Clinical Pathology.png";
import BloodTest from "./../../../Images/PathologyServices/Blood Tests at Home.png";

const PathologyService = () => {
  return (
    <div className="pathologyService">
      <PathologyServiceCard
        head="Hematology"
        img={Hematology}
        alt="Hematology"
        para="Hematology is the branch of medicine that focuses on the study, diagnosis, and treatment of blood-related disorders. Our expert team ensures precise hematology services for comprehensive healthcare."
      />
      <PathologyServiceCard
        head="Biochemistry"
        img={Biochemistry}
        alt="Biochemistry"
        para="Biochemistry is the scientific study of chemical processes within and related to living organisms. Our advanced biochemistry services provide accurate insights for optimal health assessment and care."
      />
      <PathologyServiceCard
        head="Hormonal Test"
        img={HormonalTest}
        alt="HormonalTest"
        para="Hormonal tests at Pathocon Diagnostics help assess and balance crucial hormones, providing valuable insights for personalized healthcare and maintaining overall well-being."
      />
      <PathologyServiceCard
        head="Tumor Markers Test"
        img={TumorMarkersTest}
        alt="TumorMarkersTest"
        para="Tumor marker tests at Pathocon Diagnostics aid in the early detection and monitoring of cancer, enabling proactive healthcare and personalized treatment strategies for optimal outcomes."
      />
      <PathologyServiceCard
        head="Micorbiology"
        img={Microbiology}
        alt="Microbiology"
        para="Microbiology at Pathocon Diagnostics employs advanced techniques to identify and analyze microorganisms, facilitating accurate diagnoses and tailored treatment plans for infectious diseases."
      />
      <PathologyServiceCard
        head="Serology"
        img={Serology}
        alt="Serology"
        para="Serology at Pathocon Diagnostics investigates blood serum for antibodies, aiding in the diagnosis of various infections and autoimmune disorders with precision and comprehensive understanding."
      />
      <PathologyServiceCard
        head="Clinical Pathology"
        img={ClinicalPathology}
        alt="ClinicalPathology"
        para="Clinical Pathology at Pathocon Diagnostics focuses on analyzing bodily fluids and tissues, providing crucial insights for accurate disease diagnosis and optimal patient care."
      />
      <PathologyServiceCard
        head="Book Blood Tests at Home"
        img={BloodTest}
        alt="BloodTest"
        para="Experience convenience with Pathocon Diagnostics –  Blood Tests at Home. Book now for accurate and hassle-free healthcare services in the comfort of your space."
      />
    </div>
  );
};

export default PathologyService;

import React from "react";
import PathologyServiceCard from "../../../PathologyPage/PathologyService/PathologyServiceCard";

const UltraSoundService = () => {
  return (
    <div className="pathologyService">
      <PathologyServiceCard
        head="Pregnancy Ultrasound"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Dating-Scan.png"
        para="Expecting mothers in Bangalore can rely on our 3D and 4D Ultrasound Scans for routine pregnancy monitoring. These scans provide clear images of the baby, offering both emotional connection and vital insights into the pregnancy's progress."
      />
      <PathologyServiceCard
        head="Abdominal Ultrasound"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/NT-Scan-New.png"
        para=" Our abdominal Ultrasound Scan in Bangalore helps in diagnosing conditions affecting the liver, kidneys, gallbladder, pancreas, and other internal organs. It is a vital tool for detecting abnormalities like gallstones, kidney stones, liver disease, and more."
      />
      <PathologyServiceCard
        head="Pelvic Ultrasound"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Anomaly-Scan.png"
        para=" For women, a pelvic ultrasound is often used to assess reproductive health and diagnose conditions such as ovarian cysts, fibroids, or other abnormalities. Our Ultrasound Scan in Bangalore provides detailed images that help in identifying and managing these conditions effectively."
      />
      <PathologyServiceCard
        head="Thyroid Ultrasound"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Echo.png"
        para=" Thyroid issues are common, and our Ultrasound Scan in Bangalore offers a non-invasive way to examine the thyroid gland. This scan can help in diagnosing conditions like thyroid nodules, goiters, or thyroid cancer."
      />
      <PathologyServiceCard
        head="Vascular Ultrasound"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Well-being.png"
        para="Blood flow abnormalities can be detected using our vascular Ultrasound Scan in Bangalore. This type of ultrasound is critical for diagnosing conditions such as deep vein thrombosis (DVT) or peripheral artery disease (PAD)."
      />
      <PathologyServiceCard
        head="Breast Ultrasound"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-3D4D.png"
        para=" For women who are undergoing breast cancer screenings or who have detected lumps, a breast ultrasound can provide important diagnostic insights. Our Ultrasound Scan in Bangalore is part of our comprehensive women’s health services."
      />
    </div>
  );
};

export default UltraSoundService;

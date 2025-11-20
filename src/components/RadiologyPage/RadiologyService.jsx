import React from "react";
import PathologyServiceCard from "../PathologyPage/PathologyService/PathologyServiceCard";

const RadiologyService = () => {
  return (
    <div className="pathologyService">
      <PathologyServiceCard
        head="X-Ray Services"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Dating-Scan.png"
        para="Our advanced X-ray services in Rajajinagar, Bangalore offer quick, painless imaging to diagnose fractures, infections, and more. Skilled radiologists ensure accurate interpretations for effective treatment planning."
      />
      <PathologyServiceCard
        head="Ultrasound Imaging"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/NT-Scan-New.png"
        para="At Pathacon Diagnostics in Rajajinagar, Bangalore, we offer advanced ultrasound imaging for pregnancy monitoring and assessing internal organs, providing clear and accurate results for optimal patient care."
      />
      <PathologyServiceCard
        head=" Computed Tomography (CT) Sca"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Anomaly-Scan.png"
        para="Our high-resolution CT scans in Rajajinagar, Bangalore provide detailed cross-sectional images to diagnose conditions like tumors, internal injuries, and neurological disorders, ensuring minimal radiation exposure with advanced imaging techniques."
      />
      <PathologyServiceCard
        head="Magnetic Resonance Imaging (MRI)"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Echo.png"
        para="At Pathacon Diagnostics in Rajajinagar, Bangalore, we offer advanced MRI imaging for detailed views of soft tissues, including the brain, spine, and joints. Our expert team ensures accurate results for effective diagnosis and treatment."
      />
      <PathologyServiceCard
        head="FVascular Ultrasound"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Well-being.png"
        para="Blood flow abnormalities can be detected using our vascular Ultrasound Scan in Rajajinagar, Bangalore. This type of ultrasound is critical for diagnosing conditions such as deep vein thrombosis (DVT) or peripheral artery disease (PAD)."
      />
      <PathologyServiceCard
        head="Breast Ultrasound"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-3D4D.png"
        para=" For women who are undergoing breast cancer screenings or who have detected lumps, a breast ultrasound can provide important diagnostic insights. Our Ultrasound Scan in Rajajinagar, Bangalore is part of our comprehensive women’s health services."
      />
      <PathologyServiceCard
        head="Musculoskeletal Ultrasound"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-3D4D.png"
        para="This specialized ultrasound scan is used to diagnose injuries or conditions affecting the muscles, joints, ligaments, and tendons. Athletes and individuals with musculoskeletal pain can benefit from this Ultrasound Scan in Rajajinagar, Bangalore."
      />
    </div>
  );
};

export default RadiologyService;

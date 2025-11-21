import React from "react";
import HomeServicesCard from "./HomeServicesCard";
import "./HomeServices.css";
import Pathology from "./../../../Images/ServiceImgs/Pathology.png";
import PulmonaryFunctionTest from "./../../../Images/ServiceImgs/Pulmonary Function Test.png";
import RadiologicalProcedures from "./../../../Images/ServiceImgs/Radiological Procedures.png";
import Sonography from "./../../../Images/ServiceImgs/Sonography.png";
import DopplerScanning from "./../../../Images/ServiceImgs/Doppler Scanning.png";
import DigitalXRay from "./../../../Images/ServiceImgs/Digital X-Ray.png";
import EchoCardiography from "./../../../Images/ServiceImgs/Echo Cardiography.png";
import Pregnancy from "./../../../Images/ServiceImgs/3D & 4D Pregnancy.png";
import DentalXRay from "./../../../Images/ServiceImgs/Dental X-Ray.png";

const HomeServicesMain = () => {
  return (
    <div className="homeServicesMain">
      <HomeServicesCard
        link="/"
        img={Sonography}
        head="Obstetrics"
        para="Discover fast and precise diagnostics with our Digital X-Ray services at Pathocon Diagnostics. Utilizing advanced technology, we provide comprehensive imaging for accurate insights, ensuring better health outcomes."
      />
      <HomeServicesCard
        link="/"
        img={Pregnancy}
        head="Infertility scans"
        para="Delve into detailed health insights with our advanced Sonography services at Pathocon Diagnostics. Offering precision and clarity, we ensure comprehensive diagnostics you can rely on."
      />
      {/* <HomeServicesCard
        link="/"
        img={DigitalXRay}
        head="Digital X-Ray"
        para="Experience fast and precise diagnostics with our state-of-the-art Digital X-Ray services at Pathocon Diagnostics. Harnessing advanced technology, we provide detailed insights for improved health outcomes."
      /> */}
      <HomeServicesCard
        link="/"
        img={Pregnancy}
        head="Advanced USG"
        para="Embrace the journey of parenthood with our state-of-the-art 3D & 4D Pregnancy Ultrasound. Capture unforgettable moments and create a deeper connection with your baby in remarkable detail."
      />
      <HomeServicesCard
        link="/"
        img={DopplerScanning}
        head="Doppler Scanning"
        para="Maintain your vascular health with our advanced Doppler Scan service. Using cutting-edge technology, we assess blood flow, offering vital insights for accurate diagnosis and tailored care."
      />
      <HomeServicesCard
        link="/"
        img={RadiologicalProcedures}
        head="USG guided procedure"
        para="Enhancing women’s health with our comprehensive radiological services. Our state-of-the-art imaging solutions address specific diagnostic needs, ensuring precise results and personalized care for every woman."
      />
      <HomeServicesCard
        link="/"
        img={DentalXRay}
        head="Musculoskeletal scans"
        para="Achieve precise insights into dental health with our OPG dental X-rays. Our advanced imaging technology guarantees thorough diagnostics, facilitating effective dental care and comprehensive treatment planning."
      />
      <HomeServicesCard
        link="/"
        img={EchoCardiography}
        head="soft tissue/ small parts scans"
        para="Explore the intricate details of your heart with Echocardiography at Pathocon Diagnostics. Our state-of-the-art technology provides precise evaluations, ensuring thorough cardiac care and accurate diagnoses."
      />
      {/* <HomeServicesCard
        link="/"
        img={PulmonaryFunctionTest}
        head="Pulmonary Function Test"
        para="Enhance your respiratory health with the Pulmonary Function Test at Pathocon Diagnostics. Our accurate evaluations help you understand lung function, enabling tailored care and effective treatment options."
      /> */}
    </div>
  );
};

export default HomeServicesMain;

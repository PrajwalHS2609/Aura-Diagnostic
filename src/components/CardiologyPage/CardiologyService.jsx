import React from "react";
import PathologyServiceCard from "../PathologyPage/PathologyService/PathologyServiceCard";
import ECG from "./../../Images/CardiologyServices/ECG.png";
import Echocardiogram from "./../../Images/CardiologyServices/Echo.png";
import StressTest from "./../../Images/CardiologyServices/Stress Test.png";
import HolterMonitoring from "./../../Images/CardiologyServices/Holter Monitoring.png";
import CTScan from "./../../Images/CardiologyServices/CT Scan.png";
import MRIScan from "./../../Images/CardiologyServices/MRI Scan.png";

const CardiologyService = () => {
  return (
    <div className="pathologyService">
      <PathologyServiceCard
        head="ECG"
        img={ECG}
        alt="ECG"
        para="An electrocardiogram, commonly referred to as an ECG, is one of the most fundamental cardiology tests in Rajajinagar, Bangalore. This test records the electrical activity of your heart and helps identify any irregularities in your heartbeat, rhythm, or overall heart function. An ECG can detect conditions like arrhythmias, heart attacks, and other heart-related issues."
      />
      <PathologyServiceCard
        head="Echocardiogram"
        img={Echocardiogram}
        alt="Echocardiogram"
        para="An echocardiogram is a key diagnostic tool that uses ultrasound waves to create a detailed image of the heart. This cardiology test in Rajajinagar, Bangalore allows your doctor to visualize the structure and function of your heart, assess the strength of heart muscle contractions, and identify conditions such as valve disorders, cardiomyopathy, and heart failure."
      />
      <PathologyServiceCard
        head="Stress Test"
        img={StressTest}
        alt="StressTest"
        para="Also known as an exercise stress test, this cardiology test in Rajajinagar, Bangalore evaluates how your heart functions during physical activity. It helps determine whether your heart is receiving enough blood and oxygen when it’s working harder than normal. Stress tests are commonly used to detect coronary artery disease and assess your heart’s overall fitness level."
      />
      <PathologyServiceCard
        head="Holter Monitoring"
        img={HolterMonitoring}
        alt="HolterMonitoring"
        para="Holter monitoring is a cardiology test in Rajajinagar, Bangalore, where a small portable device records heart activity for 24 to 48 hours. It helps detect irregular heartbeats, arrhythmias, and other issues not visible during a standard ECG."
      />
      <PathologyServiceCard
        head="CT Scan"
        img={CTScan}
        alt="CTScan"
        para="A cardiac CT scan is a non-invasive cardiology test in Rajajinagar, Bangalore that uses advanced imaging technology to create detailed 3D images of your heart and its blood vessels. This test is highly effective in detecting coronary artery disease, identifying blockages, and assessing the risk of a heart attack."
      />
      <PathologyServiceCard
        head="MRI Scan"
        img={MRIScan}
        alt="MRIScan"
        para="A cardiac MRI is another sophisticated imaging test used to assess the structure and function of your heart. This cardiology test in Rajajinagar, Bangalore provides detailed images of the heart’s tissues, allowing your doctor to diagnose conditions such as heart disease, inflammation, and congenital heart defects."
      />
    </div>
  );
};

export default CardiologyService;

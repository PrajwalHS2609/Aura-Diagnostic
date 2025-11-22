import React from "react";
import "./EchoWho.css";
import EchoWhoCard from "./EchoWhoCard";
const EchoWhoMain = () => {
  return (
    <div className="echoWhoMain">
      <div className="echoWhoMainImg">
        <Image
          src="https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191355.jpg?t=st=1729786255~exp=1729789855~hmac=82bff012a2cdac674944b560d345c6a54340a5c0cad5dbacc7683e9750c754bd&w=996"
          alt=""
        />
      </div>
      <div className="echoWhoMainContent">
        <EchoWhoCard
          head="Shortness of breath"
          para="If you experience difficulty breathing, especially during physical activity, it may indicate heart failure or valve problems."
        />
        <EchoWhoCard
          head="Chest pain: "
          para="Persistent or recurring chest pain can be a sign of a heart issue, and an ECHO Test in Bangalore, Bangalore can help identify the cause."
        />
        <EchoWhoCard
          head="Irregular heartbeat (arrhythmia)"
          para="If you have an abnormal heart rhythm, an ECHO Test in Bangalore, Bangalore can evaluate how it affects your heart's function."
        />
        <EchoWhoCard
          head="Swelling in the legs or abdomen"
          para="Fluid retention can be a symptom of heart failure, which can be detected through an ECHO Test in Bangalore, Bangalore."
        />
        <EchoWhoCard
          head="Fatigue"
          para="Chronic fatigue, particularly when accompanied by other heart disease symptoms, may warrant an ECHO Test in Bangalore, Bangalore to assess your heart’s health."
        />
        <EchoWhoCard
          head="Heart murmur"
          para="If your doctor detects a heart murmur during a physical exam, they may recommend an ECHO Test in Bangalore, Bangalore to evaluate the condition of your heart valves."
        />
      </div>
    </div>
  );
};

export default EchoWhoMain;

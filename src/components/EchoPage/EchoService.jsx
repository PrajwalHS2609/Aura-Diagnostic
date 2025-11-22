import React from "react";
import PathologyServiceCard from "../PathologyPage/PathologyService/PathologyServiceCard";

const EchoService = () => {
  return (
    <div className="pathologyService">
      <PathologyServiceCard
        head=" Transthoracic Echocardiogram (TTE)"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Dating-Scan.png"
        para="This is the most common type of ECHO Test in Bangalore. During the procedure, a transducer is placed on the chest, and ultrasound waves are used to create images of the heart. It is a painless and quick test that provides essential information about heart function, valve movement, and overall structure."
      />
      <PathologyServiceCard
        head="Transesophageal Echocardiogram (TEE)"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/NT-Scan-New.png"
        para="In cases where more detailed images are required, a Transesophageal ECHO Test in Bangalore may be performed. This involves passing a specialized probe down the esophagus to get closer to the heart, providing clearer and more precise images, especially of the heart’s back structures."
      />
      <PathologyServiceCard
        head="Stress Echocardiogram"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Anomaly-Scan.png"
        para="A Stress ECHO Test in Bangalore is performed to assess how well the heart functions under physical stress. The test is conducted both at rest and after exercise, allowing doctors to evaluate how the heart responds to increased demand."
      />
      <PathologyServiceCard
        head=" Doppler Echocardiogram:"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Echo.png"
        para="A Doppler ECHO Test in Bangalore focuses on evaluating blood flow through the heart and major blood vessels. It helps in detecting issues such as blood clots, poor blood flow, and valve leaks, which can contribute to heart disease."
      />
      <PathologyServiceCard
        head="Fetal Echocardiogram:"
        img="https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Well-being.png"
        para="For pregnant women, a Fetal ECHO Test in Bangalore is performed to check the heart of the unborn baby. This test helps detect congenital heart defects and ensures that the baby’s heart is developing properly."
      />
    </div>
  );
};

export default EchoService;

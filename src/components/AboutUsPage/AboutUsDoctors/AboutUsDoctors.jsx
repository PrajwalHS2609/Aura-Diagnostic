import React from "react";
import "./AboutUsDoctors.css";
const AboutUsDoctors = () => {
  return (
    <div className="aboutUsDoctors-container">
      <h2>About Doctors</h2>
      <div className="aboutUsDoctors-content">
        <div className="aboutUsDoctors-wrapper">
          <span>
            {" "}
            <h3>Dr. Ramyashree RM.</h3>
            <strong>
              Founder and managing director of Right Aura Diagnostics.
            </strong>
          </span>
          <span>
            {" "}
            <p>
              She completed her MBBS from SDUMC University, MD in Anesthesia
              from yenepoya University.
            </p>
            <p>
              She also completed her RGUHS certified fellowship in paediatric
              Anaesthesia from Bangalore medical College.
            </p>
            <p>
              Dr. Ramyashree is a versatile Anesthesia specialist practicing
              Periopertive patient care, ICU, paediatric Anaesthesia and Pain
              medicine.
            </p>
            <p>
              She is founding member and director of Right Aura
              Diagnostics in Girinagar.
            </p>
          </span>
        </div>
        <div className="aboutUsDoctors-imgContainer">
          <img
            src="https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg"
            alt=""
          />
        </div>
      </div>
      <div className="aboutUsDoctors-content">
        <div className="aboutUsDoctors-imgContainer">
          <img
            src="https://images.pexels.com/photos/5726706/pexels-photo-5726706.jpeg"
            alt=""
          />
        </div>
        <div className="aboutUsDoctors-wrapper">
          <span>
            {" "}
            <h3>Dr. Kiran Ramaiah </h3>
            <strong>
              Consultant Radiologist with over 10 + years of experience in
              Diagnostics and Non vascular interventional radiology.
            </strong>
          </span>
          <span>
            {" "}
            <p>
              After completing MBBS from JSSMC Mysore and MD in Radio-Diagnosis
              from SDM medical college, Dharwad, he served as a Senior resident
              from ESIC Medical College Bangalore, and also worked as
              consultant Radiologist at PMSSY building, Victoria hospital. BMC
              for 5 years reporting and gaining experience in all modalities of
              radiology including Interventions.
            </p>
            <p>
              He also worked as consultant at Hindlabs in KCG hospital.
              Malleshwaram.
            </p>
            <p>
              Dr. Kiran Ramaiah has obtained his training in fetal medicine from
              SONOSCAN center coimbatore and training in Fetal echo from
              MediScan Chennai.
            </p>
            <p>
              Dr. Kiran Ramaiah also done fellowship in adult echocardiography.
            </p>
            <p>
              Training in Infertility scans from Karu fetal medicine centre,
              Tirchy.
            </p>
            <p>
              Now Dr. Kiran Ramaiah has started his own diagnostic center AURA
              diagnostics at Girinagar.
            </p>
            <ul>
              <h4>Specialtized in :</h4>
              <li>Abdominal Imaging.</li>
              <li>Feltal imaging and Amniocentesis.</li>
              <li>Advanced Infertility scans.(2D and 3D)</li>
              <li>MSK Imaging.</li>
              <li>Transvaginal and Transrectal scans</li>
              <li>USG guided interventions.</li>
              <li>Whole body Doppler.</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUsDoctors;

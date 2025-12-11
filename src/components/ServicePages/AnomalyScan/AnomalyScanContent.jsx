"use client";
import React, { useState } from "react";

const AnomalyScanContent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="contentHead">
      <div className="contentHead-wrapper">
        <div className="contentHead-content">
          <h1>
            Pregnancy Anomaly Scans in Girinagar, Bangalore – Aura Diagnostics
          </h1>
          <p>
            Aura Diagnostics is a trusted name for Pregnancy Anomaly Scans in
            Girinagar, Bangalore, offering advanced ultrasound imaging to assess
            fetal development during the crucial mid-pregnancy stage. Known as a
            reliable <a href="">anomaly scan center Girinagar Bangalore</a>, Aura Diagnostics
            combines modern diagnostic technology with expert medical
            professionals to support healthy pregnancy outcomes.
          </p>
          <p>
            An anomaly scan is a detailed ultrasound examination that evaluates
            the baby’s physical development and checks for any structural
            abnormalities. Expectant parents searching for the best anomaly scan
            clinic Girinagar can rely on Aura Diagnostics for accurate insights
            delivered in a caring and comfortable environment.
          </p>
        </div>
        <div className="contentHead-content">
          <h2>Understanding Fetal Anomaly Scans</h2>
          <p>
            A fetal anomaly scan Girinagar is typically performed between 18 and
            24 weeks of pregnancy. This scan allows doctors to closely examine
            the baby’s organs, bones, spine, heart, brain, and facial features.
            It plays a vital role in detecting developmental conditions and
            monitoring overall fetal health.
          </p>
          <p>
            At Aura Diagnostics, the ultrasound anomaly scan Girinagar is
            conducted using high-resolution imaging technology, ensuring
            detailed visualization that supports precise medical assessment and
            early clinical planning.
          </p>
        </div>
        {expanded && (
          <>
            <div className="contentHead-content">
              {" "}
              <h2>Detailed & Level 2 Anomaly Scans in Girinagar</h2>
              <p>
                Aura Diagnostics specializes in providing <a href="">detailed anomaly scan
                Girinagar</a>, also known as a Level 2 scan in Girinagar. This scan
                provides an in-depth evaluation of fetal anatomy, allowing
                specialists to identify potential abnormalities with greater
                accuracy.
              </p>
              <p>
                Our advanced equipment and experienced radiologists ensure that
                the Level 2 scan delivers comprehensive findings while
                maintaining the highest safety standards for both mother and
                baby.
              </p>
              <h2>Mid-Pregnancy & Second Trimester Anomaly Scans</h2>
              <p>
                The anomaly scan is an essential <a href="">mid-pregnancy scan Girinagar</a>,
                giving crucial insights into fetal development during the second
                trimester. Aura Diagnostics offers expert second trimester
                anomaly scan Girinagar services designed to help expecting
                parents and referring doctors detect concerns early.
              </p>
              <p>
                This scan also helps verify placental position, amniotic fluid
                levels, and fetal growth patterns, ensuring complete pregnancy
                monitoring.
              </p>
            </div>
            <div className="contentHead-content">
              <h2>Advanced Ultrasound Technology for Accurate Results</h2>
              <p>
                Aura Diagnostics uses state-of-the-art ultrasound machines to
                deliver precise and reliable ultrasound anomaly scan Girinagar
                reports. Each scan is conducted by skilled sonographers trained
                in obstetric imaging, ensuring clarity, comfort, and accuracy.
              </p>
              <p>
                Our commitment to quality imaging makes Aura Diagnostics a
                preferred <a href="">anomaly scan center Girinagar Bangalore</a> for patients
                across the region.
              </p>
            </div>
            <div className="contentHead-content">
              <h2>Comfortable, Patient-Focused Care</h2>
              <p>
                We understand that anomaly scans can be emotionally significant
                for expectant parents. Aura Diagnostics ensures every visit is
                handled with sensitivity, privacy, and clear communication. Our
                team explains scan findings in an understandable manner while
                maintaining professional medical standards.
              </p>
              <p>
                As the best <a href="">anomaly scan clinic Girinagar</a>, Aura Diagnostics
                prioritizes patient comfort without compromising diagnostic
                excellence.
              </p>
            </div>
            <div className="contentHead-content">
              <h2>Trusted Diagnostic Center for Pregnancy Care in Girinagar</h2>
              <p>
                Aura Diagnostics has earned the trust of gynecologists and
                expectant mothers as a dependable provider of pregnancy anomaly
                scans in Girinagar, Bangalore. Our focus on precision,
                compassionate care, and advanced diagnostics ensures reliable
                support during this important stage of pregnancy.
              </p>
              <p>
                If you are seeking a <a href="">trusted anomaly scan center Girinagar
                Bangalore</a>, Aura Diagnostics offers expert imaging solutions that
                help guide healthier pregnancy outcomes.
              </p>
              <p>
                Schedule your anomaly scan at Aura Diagnostics today and receive
                accurate, caring prenatal diagnostic support.
              </p>
            </div>
          </>
        )}
        <button className="readMoreBtn" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Read Less ▲" : "Read More ▼"}
        </button>
      </div>
    </div>
  );
};

export default AnomalyScanContent;

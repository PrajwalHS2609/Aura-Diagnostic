"use client";
import React, { useState } from "react";

const PregnancyScanContent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="contentHead">
      <div className="contentHead-wrapper">
        <div className="contentHead-content">
          {" "}
          <h1>
            {" "}
            Pregnancy Dating Scans in Girinagar, Bangalore – Aura Diagnostics
          </h1>
          <p>
            Aura Diagnostics is a trusted diagnostic center offering accurate
            and reliable Pregnancy Dating Scans in Girinagar, Bangalore. An
            early pregnancy dating scan plays a crucial role in confirming
            gestational age, estimating the expected delivery date, and ensuring
            proper prenatal care from the very beginning. Recognized as the{" "}
            <a href="https://auradiagnostics.co.in/pregnancy-dating-scan-in-girinagar-bangalore">
              Best dating scan center Girinagar
            </a>
            , Aura Diagnostics delivers precise ultrasound imaging in a safe,
            comfortable, and supportive environment for expectant mothers.
          </p>
          <p>
            Our advanced ultrasound technology and experienced medical
            professionals make Aura Diagnostics the preferred choice for early
            pregnancy dating scan Girinagar services.
          </p>
        </div>
        <div className="contentHead-content">
          {" "}
          <h2>Importance of Early Pregnancy Dating Scans</h2>
          <p>
            An early{" "}
            <a href="https://auradiagnostics.co.in/pregnancy-dating-scan-in-girinagar-bangalore">
              fetal dating scan Girinagar
            </a>{" "}
            is usually performed during the first trimester to confirm
            pregnancy-related milestones. This scan is essential for determining
            how far along the pregnancy is, particularly when menstrual cycles
            are irregular or previous pregnancy history requires careful
            monitoring.
          </p>
          <p>
            At Aura Diagnostics, our{" "}
            <a href="https://auradiagnostics.co.in/pregnancy-anomaly-scan-in-girinagar-bangalore">
              dating ultrasound scan Girinagar
            </a>{" "}
            provides accurate measurements that help doctors assess fetal
            development and plan further prenatal care. Early dating scans also
            assist in identifying multiple pregnancies and ruling out
            complications at an early stage.
          </p>
        </div>
        {expanded && (
          <>
            <div className="contentHead-content">
              <h2>First Trimester Dating Scan Services in Girinagar</h2>
              <p>
                Aura Diagnostics specializes in{" "}
                <a href="https://auradiagnostics.co.in/pregnancy-anomaly-scan-in-girinagar-bangalore">
                  first trimester dating scan Girinagar
                </a>
                , typically conducted between 7 to 13 weeks of pregnancy. This
                scan measures crown-rump length (CRL) to provide precise
                gestational age calculation.
              </p>
              <p>
                Our expert sonographers ensure that every pregnancy week
                confirmation scan Girinagar is performed gently and accurately,
                giving expectant parents clarity and confidence about pregnancy
                progression.
              </p>
            </div>
            <div className="contentHead-content">
              {" "}
              <h2>Advanced Dating Ultrasound Scan in Girinagar</h2>
              <p>
                Using high-resolution ultrasound machines, Aura Diagnostics
                offers{" "}
                <a href="https://auradiagnostics.co.in/pregnancy-scans-in-girinagar-bangalore">
                  advanced dating ultrasound scan Girinagar services
                </a>{" "}
                for accurate fetal measurements and medical insights. These
                scans help gynecologists establish a reliable timeline for
                essential prenatal tests, including NT scans and anomaly scans
                in later stages.
              </p>
              <p>
                As a leading diagnostic provider, Aura Diagnostics focuses on
                delivering dependable reports that assist doctors in making
                informed clinical decisions.
              </p>
            </div>
            <div className="contentHead-content">
              {" "}
              <h2>Affordable Dating Scan in Girinagar</h2>
              <p>
                Aura Diagnostics believes quality prenatal diagnostics should be
                accessible to all families. We are known for providing
                affordable dating scan in Girinagar without compromising
                accuracy, safety, or reporting standards.
              </p>
              <p>
                Our transparent pricing and patient-focused services make us a
                preferred center for expectant mothers seeking reliable early
                pregnancy scans. Affordable packages and professional care
                ensure peace of mind during the early stages of pregnancy.
              </p>
            </div>
            <div className="contentHead-content">
              {" "}
              <h2>Early Fetal Dating Scan with Patient-Centered Care</h2>
              <p>
                Each early{" "}
                <a href="https://auradiagnostics.co.in">
                  fetal dating scan Girinagar at Aura Diagnostics
                </a>{" "}
                is conducted in a calm and hygienic setting. We understand that
                early pregnancy can be an emotional time, which is why our team
                prioritizes comfort, privacy, and clear communication during
                every scan.
              </p>
              <p>
                Our specialists explain scan results in simple terms and ensure
                accurate documentation required for medical follow-ups.
              </p>
            </div>
            <div className="contentHead-content">
              <h2>
                Trusted Center for Pregnancy Week Confirmation Scan in Girinagar
              </h2>
              <p>
                Aura Diagnostics has built a strong reputation as a dependable
                diagnostic provider for{" "}
                <a href="https://auradiagnostics.co.in/pregnancy-scans-in-girinagar-bangalore">
                  pregnancy week confirmation scan Girinagar services
                </a>
                . Our scans help ensure accurate pregnancy tracking, minimize
                discrepancies in due dates, and support timely prenatal
                planning.
              </p>
              <p>
                Expectant mothers and healthcare providers rely on Aura
                Diagnostics for consistency, quality, and diagnostic integrity.
              </p>
              <p>
                If you are looking for a reliable center for{" "}
                <a href="https://auradiagnostics.co.in">
                  Pregnancy Dating Scans in Girinagar, Bangalore
                </a>
                , Aura Diagnostics offers accurate, affordable, and
                professionally delivered ultrasound services focused on fetal
                health and maternal wellbeing.
              </p>
              <p>
                Book your dating ultrasound scan today at Aura Diagnostics and
                begin your pregnancy journey with confidence and expert care.
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

export default PregnancyScanContent;

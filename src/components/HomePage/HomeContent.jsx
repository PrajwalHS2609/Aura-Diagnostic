"use client";
import React, { useState } from "react";

const HomeContent = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="contentHead">
      <div className="contentHead-wrapper">
        <div className="contentHead-content">
          <h1>
            Diagnostics Center in Girinagar, Bangalore – Aura Diagnostics{" "}
          </h1>
          <p>
            Aura Diagnostics is a trusted Diagnostics Center in Girinagar,
            Bangalore, committed to delivering accurate, timely, and affordable
            diagnostic services for individuals and families. With advanced
            medical technology, experienced professionals, and patient-first
            care, Aura Diagnostics is widely recognized as the Best Diagnostic
            Centre Girinagar Bangalore. Whether you need routine blood tests,
            radiology scans, or complete health checkups, Aura Diagnostics
            ensures quality results you can rely on.
          </p>
        </div>
        <div className="contentHead-content">
          <h2> Top Rated Diagnostics in Girinagar for Accurate Results</h2>
          <p>
            As one of the top rated diagnostics in Girinagar, Aura Diagnostics
            follows strict quality standards and ethical practices. Our center
            is designed to support early diagnosis, preventive health care, and
            emergency medical testing under one roof. Patients searching for a
            reliable medical test lab in Girinagar can trust Aura Diagnostics
            for precision, transparency, and professional service.
          </p>
        </div>
        {expanded && (
          <>
            <div className="contentHead-listContent">
              <h3> Comprehensive Pathology and Blood Testing Services</h3>
              <p>
                Aura Diagnostics operates a well-equipped pathology lab in
                Girinagar offering a wide range of laboratory investigations.
                From routine tests to specialized panels, every report is
                handled with accuracy and confidentiality.
              </p>
              <p>
                If you are looking for a blood test in Girinagar, we provide
                fast processing and reliable reports for all age groups. Our
                popular laboratory services include:
              </p>
              <ul>
                <li> Thyroid test in Girinagar</li>
                <li> Diabetes test lab Girinagar</li>
                <li> Lipid profile and liver function tests</li>
                <li> Kidney function tests</li>
                <li> Hormone and vitamin deficiency tests</li>
              </ul>
              <p>
                Our pathology services ensure quick diagnosis and help doctors
                begin timely treatment.
              </p>
            </div>
            <div className="contentHead-content">
              <h2> NABL Certified Lab in Girinagar – Quality You Can Trust</h2>
              <p>
                Aura Diagnostics is a NABL certified lab Girinagar, which means
                all testing procedures meet nationally approved quality and
                safety benchmarks. Our certification reflects our commitment to
                reliable results, standardized testing methods, and continuous
                quality control. Patients searching for dependable diagnostic
                care prefer Aura Diagnostics for this reason.
              </p>
            </div>
            <div className="contentHead-content">
              <h2>Full Body & Preventive Health Checkups in Girinagar</h2>
              <p>
                Preventive healthcare plays a vital role in maintaining
                long-term wellbeing. Aura Diagnostics offers customized health
                checkup Girinagar Bangalore packages suitable for adults, senior
                citizens, and working professionals. Our full body checkup in
                Girinagar covers essential blood tests, imaging, and health
                indicators designed to detect issues early.
              </p>
              <p>
                For proactive wellness, we also offer preventive health checkup
                Girinagar packages tailored to lifestyle conditions such as
                stress, diabetes, thyroid imbalance, and cardiac risks.
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

export default HomeContent;

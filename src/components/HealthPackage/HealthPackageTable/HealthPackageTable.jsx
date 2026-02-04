"use client";

import React from "react";
import "./HealthPackageTable.css";

const packages = [
  {
    title: "Anaemia Profile (26 Tests)",
    tests: [
      "Complete Blood Picture (22)",
      "lron(1)",

      "TIBC (1)",

      "Folic Acid (1)",

      "Vitamin B12(1)",
    ],
    price: {
      original: "₹2400",
      offer: "₹2000",
    },
  },
  {
    title: "Rheumatoid Arthritis Profile (27 tests)",
    tests: [
      "Complete Blood Picture (22)",
      "Rheumatoid Factor (2)",
      "C Reactive Protein (1)",
      "ANTI - CCP (1)",
      "Anti Streptolysin O (1)",
    ],

    price: {
      original: "₹3700",
      offer: "₹2960",
    },
  },
  {
    title: "Autoimmune Disease Profile (27 Tests)",
    tests: [
      "Complete Blood Picture (22)",
      "CRP (1)",

      "RAF (1)",

      "ANTI-CCP (1)",

      " ASLO (1)",

      "ANA(IMF)1",
    ],
    price: {
      original: "₹4700",
      offer: "₹3290",
    },
  },
  {
    title: "Pre Employment Profile (44 Tests)",
    tests: [
      "RBS (1)",
      "Complete Blood Picture (22 )",
      "HbsAg (1)",
      "Urine Complete Examination (18)",
      "ECG",
      "Chest X-Ray",
      "Consultation - Physician",
    ],
    price: {
      original: "₹1925",
      offer: "₹1350",
    },
  },
  {
    title: "Pregnancy Profile (47 Tests)",
    tests: [
      "RBS (1)",
      " Complete Blood Picture (22)",
      "Blood Grouping (1)",
      "HIV (1)",
      " HbsAg (1)",
      "Urine Complete Examination (18)",
      "Pregnancy Scan",
      "VDRL (1)",
      "TSH (1)",
    ],
    price: {
      original: "₹3375",
      offer: "₹2360",
    },
  },

  {
    title: "Renal Profile Test (56 tests)",
    tests: [
      "Fasting Blood Sugar (1)",
      "Post Prandial Blood Sugar (1)",
      "Blood Urea (1)",
      "Creatinine (1)",
      "Lipid Profile (7)",
      "Electrolytes (3)",
      "Micro Albumin-urine (1)",
      "Complete Blood Picture (22)",
      "Uric Acid (1)",
      "Urine Complete Examination (18)",
    ],
    price: {
      original: "₹2370",
      offer: "₹1600",
    },
  },
  {
    title: "Pre-operative Profile",
    tests: [
      "Complete Blood Picture (22)",
      "HIV 1 & 2 Screening (1)",
      "HBSag (1)",
      "Hepatitis C Virus (1)",
      "RBS (1)",
      "Kidney Function Test (8)",
      "PT (1)",
      "APTT (1)",
      "VDRL (1)",
      "ECG (1)",
      "Chest X-Ray (1)",
    ],
    price: {
      original: "₹4665",
      offer: "3270",
    },
  },
  {
    title: "Diabetic Profile (57 Tests)",
    tests: [
      "Fasting Blood Sugar (1)",
      "Post Prandial Blood Sugar (1)",
      " Blood Urea (1)",
      "Creatinine (1)",
      "Lipid Profile (7)",
      "HBA1C - Glycosylated Hb (1)",
      "Electrolytes (3)",
      "Complete Blood Picture (22)",
      "Urine Complete Examination (18)",
      "Uric Acid (1)",
      "Urine for Microalbuminuria (1)",
      "Complete Blood Picture (22)",
    ],
    price: {
      original: "₹2920",
      offer: "₹2190",
    },
  },
  {
    title: "Hypertension Profile (58 Tests)",
    tests: [
      "Fasting Blood Sugar (1)",
      "Post Prandial Blood Sugar (1)",
      "Lipid Profile (7)",
      "Blood Urea (1)",
      "Creatinine (1)",
      "Uric Acid (1)",
      "Electrolytes (3)",
      "Complete Blood Picture (22)",
      "Urine Complete Examination (18)",
      "Echo",
      "Ultrasound Scan Abdomen and Pelvis",
      "ECG",
    ],
    price: {
      original: "₹4570",
      offer: "₹3200",
    },
  },
  {
    title: "Metabolic Profile (69 tests)",
    tests: [
      "Fasting Blood Sugar (1)",
      "Post Prandial Blood Sugar (1)",
      "Lipid Profile (7)",
      "TFT - Thyroid Function Test (3)",
      "LFT - Liver Function Test (10)",
      "Uric Acid (1)",
      "Blood Urea (1)",
      "Creatinine (1)",
      "Inorganic Phosphorus (1)",
      "Complete Blood Picture (22)",
      "Urine Complete Examination (18)",
      "Homocysteine (1)",
      "Calcium (1)",
      "Electrolytes (1)",
    ],
    price: {
      original: "₹4000",
      offer: "₹3360",
    },
  },
  {
    title: "Cardiac Package (70 tests)",
    tests: [
      "Fasting Blood Sugar (1)",
      "PPBS (1)",
      "HBAIC (1)",
      "Blood Urea (1)",
      "Serum Creatinine (1)",
      "Uric Acid (1)",
      "Electrolytes (3)",
      "Lipid Profile (7)",
      "Liver Function Test (10)",
      "TSH (1)",
      "Complete Blood Picture (22)",
      "Urine Complete Examination (18)",
      "USG Abdomen and Pelvis (1)",
      "X-Ray Chest PA View (1)",
      "Treadmill Test / 2D Echo (1)",
    ],
    price: {
      original: "₹6430",
      offer: "₹4800",
    },
  },
  {
    title: "Well Women Health Check (69 Tests)",
    tests: [
      "Random Blood Sugar (1)",
      "Creatinine (1)",
      "Lipid Profile (7)",
      "LFT - Liver Function Test (10)",
      "Calcium (1)",
      "TFT - Thyroid Function Test (3)",
      "Complete Blood Picture (22)",
      "Urine Complete Examination (18)",
      "Pap Smear Test (1)",
      "Vitamin D3 (1)",
      "Mammography both Breasts",
      "Ultrasound Abdomen & Pelvis",
      "Chest X-Ray",
      "ECG",
      "Consultation with Gynaecologist",
    ],
    price: {
      original: "₹8495",
      offer: "₹5300",
    },
  },
  {
    title: "General Health Check (55 Tests)",
    tests: [
      "Fasting Blood Sugar (1)",
      "Blood Urea (1)",
      "Serum Creatinine (1)",
      "Total Cholesterol",
      "TRiglycerides",
      "Uric Acid (1)",
      "Calcium",
      "Inorganic Phosphorus (1)",
      "Billirubin",
      "SGOT",
      "SGPT",
      "Complete Blood Picture (22)",
      "Urine Complete Examination (18)",
      "Chest X-Ray",
      "ECG",
      "Consultation with Physician",
    ],
    price: {
      original: "₹2785",
      offer: "₹1950",
    },
  },
  {
    title: "Master Health Checkup (Male) (71 tests)",
    tests: [
      "Fasting Blood Sugar (1)",
      "Post Prandial Blood Sugar (1)",
      "Blood Urea (1)",
      "Serum Creatinine (1)",
      "Lipid Profile (7)",
      "Uric Acid (1)",
      "Calcium (1)",
      "Inorganic Phosphorus (1)",
      "Liver Function Test (10)",
      "Electrolytes (3)",
      "TSH (1)",
      "Complete Blood Picture (22)",
      "Urine Complete Examination (18)",
      "Ultra Sound Scan Abdomen and Pelvis",
      "Chest X-Ray",
      "ECG",
      "Consultation with Physician",
    ],
    price: {
      original: "₹4760",
      offer: "₹3330",
    },
  },

  {
    title: "Master Health Checkup (Female) (72 tests)",
    tests: [
      "Fasting Blood Sugar (1)",
      "Post Prandial Blood Sugar (1)",
      "Blood Urea (1)",
      "Creatinine (1)",
      "Lipid Profile (7)",
      "Uric Acid (1)",
      "Calcium (1)",
      "Inorganic Phosphorus (1)",
      "LFT - Liver Function Test (10)",
      "Electrolytes (3)",
      "TSH (1)",
      "Complete Blood Picture (22)",
      "Urine Complete Examination (18)",
      "Ultrasound Scan Abdomen and Pelvis",
      "Chest X-ray",
      "ECG",
      "Pap Smear (1)",
      "Consultation - Physician",
    ],
    price: {
      original: "₹5010",
      offer: "₹3570",
    },
  },
  {
    title: "Executive Health Checkup (Male) (73 tests)",
    tests: [
      "Fasting Blood Sugar (1)",
      "Post Prandial Blood Sugar (1)",
      "Blood Urea (1)",
      "Serum Creatinine (1)",
      "Lipid Profile (7)",
      "Uric Acid (1)",
      "Calcium (1)",
      "Inorganic Phosphorus (1)",
      "Liver Function Test (10)",
      "Electrolytes (3)",
      "TSH (1)",
      "Complete Blood Picture (22)",
      "HBA1C(1)",
      "Urine Complete Examination (18)",
      "Ultra Sound Scan Abdomen and Pelvis",
      "Chest X-Ray",
      "ECG",
      "Consultation with Physician",
      "Tread Mill Test/ 2D Echo",
    ],
    price: {
      original: "₹6810",
      offer: "₹4770",
    },
  },
  {
    title: "Executive Health Checkup (Female) (74 tests)",
    tests: [
      "Fasting Blood Sugar (1)",
      "Post Prandial Blood Sugar (1)",
      "Blood Urea (1)",
      "Serum Creatinine (1)",
      "Lipid Profile (7)",
      "Uric Acid (1)",
      "Calcium (1)",
      "Inorganic Phosphorus (1)",
      "LFT - Liver Function Test (10)",
      "Electrolytes (3)",
      "TSH (1)",
      "Complete Blood Picture (22)",
      "HBA1C(1)",
      "Urine Complete Examination (18)",
      "Ultra Sound Scan Abdomen and Pelvis",
      "Chest X-Ray",
      "ECG",
      "Consultation with Physician",
      "Tread Mill Test/ 2D Echo",
    ],
    price: {
      original: "₹7110",
      offer: "₹4980",
    },
  },
  {
    title: "Super Executive Health Checkup (Male) (78 tests)",
    tests: [
      "Fasting Blood Sugar (1)",
      " Post Prandial Blood Sugar (1)",
      "HBA1C-Glycosylated HB (1)",
      "Complete Blood Picture (22)",
      "Blood Urea (1)",
      "Serum Creatinine (1)",
      "Serum Electrolytes (3)",
      "Uric Acid (1)",
      "Calcium (1)",
      "Inorganic Phosphorus (1)",
      "Vitamin B12 (1)",
      "Vitamin D 3 (1)",
      "PSA-Prostate Specific Antigen (1)",
      "Lipid Profile (7)",
      "LFT - Liver Function Test (10)",
      "TFT- Thyroid Function Test (3)",
      "Urine Complete Examination (18)",
      "Chest Xray",
      "ECG",
      "Ultrasound Abdomen and Pelvis",
      "Tread Mill Test/ 2D Echo",
      "Consultation - Physician",
    ],
    price: {
      original: "₹6010",
      offer: "₹4770",
    },
  },
  {
    title: "Super Executive Health Checkup (Female) (77 tests)",
    tests: [
      "Fasting Blood Sugar (1)",
      " Post Prandial Blood Sugar (1)",
      "HBA1C-Glycosylated HB (1)",
      "Complete Blood Picture (22)",
      "Blood Urea (1)",
      "Creatinine (1)",
      "Electrolytes (3)",
      "Uric Acid (1)",
      "Lipid Profile (7)",
      "Lft-liver Function Test (10)",
      "Calcium (1)",
      "Inorganic Phosphorous(1)",
      "Vitamin B12 (1)",
      "Inorganic Phosphorus (1)",
      "Vitamin B12 (1)",
      "Vitamin D 3 (1)",
      "PAP Smear Test(1)",
      "TFT- Thyroid Function Test (3)",
      "Urine Complete Examination (18)",
      "Chest Xray",
      "ECG",
      "Ultrasound Abdomen and Pelvis",
      "Tread Mill Test/ 2D Echo",
      "Consultation with Gynaecologist",
      "Consultation - Physician",
    ],
    price: {
      original: "₹9910",
      offer: "₹6950",
    },
  },
];

const HealthPackageTable = () => {
    const handleAppointment = () => {
    document.querySelector(".bookPopUp").classList.add("showPopup");
  };
  return (
    <div className="healthPackageTable">
      {packages.map((pkg, index) => (
        <table key={index}>
          <thead>
            <tr>
              <th>SL No</th>
              <th>{pkg.title}</th>
            </tr>
          </thead>

          <tbody>
            {pkg.tests.map((test, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{test}</td>
              </tr>
            ))}

            <tr className="price-row">
              <td>Price:</td>
              <td>
                <span className="old-price">{pkg.price.original}</span>{" "}
                {pkg.price.offer}
                <button onClick={handleAppointment} >Book Now</button>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default HealthPackageTable;

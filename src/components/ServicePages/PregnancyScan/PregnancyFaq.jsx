"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import faqImg from "./../../../Images/faq.png";
import Image from "next/image";
import Script from "next/script";
const PregnancyFaq = () => {
  return (
    <>
     <Script
        id="pregnancy-scans-in-girinagar-bangalore"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
                 {
      "@type": "Question",
      "name": "What types of pregnancy scans are available at Aura Diagnostics in Girinagar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aura Diagnostics offers early pregnancy scans, dating scans, NT scans, anomaly scans (Level 2), growth scans, and Doppler studies as part of Pregnancy Ultrasound in Girinagar."
      }
    },
    {
      "@type": "Question",
      "name": "When should I schedule my first pregnancy ultrasound in Girinagar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The first ultrasound scan is usually recommended between 6–8 weeks to confirm pregnancy, check fetal heartbeat, and ensure normal development."
      }
    },
    {
      "@type": "Question",
      "name": "Are pregnancy ultrasound scans safe for the baby?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Pregnancy ultrasound scans are completely safe, non-invasive, and radiation-free, making them safe for both mother and baby."
      }
    },
    {
      "@type": "Question",
      "name": "What is an anomaly scan and why is it important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An anomaly scan, usually done between 18–22 weeks, checks the baby’s organs and growth to detect any structural abnormalities early."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a doctor’s prescription for pregnancy scans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most pregnancy ultrasound scans require a valid doctor’s prescription as per medical regulations."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a pregnancy ultrasound scan take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most pregnancy ultrasound scans take between 15 to 30 minutes, depending on the type of scan and fetal position."
      }
    },
    {
      "@type": "Question",
      "name": "Are Doppler scans available for high-risk pregnancies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Aura Diagnostics provides Doppler and specialized fetal scans near Girinagar for high-risk pregnancies such as diabetes or blood pressure issues."
      }
    },
    {
      "@type": "Question",
      "name": "Will I receive my pregnancy scan report on the same day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, pregnancy ultrasound reports are provided on the same day or within a short time for quick doctor consultation."
      }
    },
    {
      "@type": "Question",
      "name": "Is prior appointment required for pregnancy scans in Girinagar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Appointments are recommended to avoid waiting time and ensure timely ultrasound scanning, especially for detailed scans."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose Aura Diagnostics for pregnancy scans in Girinagar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aura Diagnostics offers experienced radiologists, advanced ultrasound machines, accurate reports, hygienic facilities, and compassionate care for pregnancy scans."
      }
    }

            ],
          }),
        }}
      />
    <div className="serviceFaq-container">
      {/* <HeadingProps title="" para="" /> */}
      <div className="homeWhyHead">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="serviceFaq-wrapper">
        <div className="serviceFaq-content">
          <Accordion defaultActiveKey="0">
            <Accordion.Item className="serviceFaq-accItem" eventKey="0">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  1. What types of pregnancy scans are available at Aura
                  Diagnostics in Girinagar?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Aura Diagnostics offers early pregnancy scans, dating scans,
                    NT scans, anomaly scans (Level 2), growth scans, and Doppler
                    studies as part of comprehensive Pregnancy Ultrasound in
                    Girinagar.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="1">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  2. When should I schedule my first pregnancy ultrasound in
                  Girinagar?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    The first Ultrasound Scan in Girinagar is usually
                    recommended between 6–8 weeks to confirm pregnancy, check
                    fetal heartbeat, and rule out complications.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="2">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>3. Are pregnancy ultrasound scans safe for the baby?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Yes. Pregnancy Ultrasound in Girinagar is completely safe,
                    non-invasive, and radiation-free. Ultrasound uses sound
                    waves and poses no harm to the mother or baby.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="3">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>4. What is an anomaly scan and why is it important?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    An anomaly scan, usually done between 18–22 weeks, checks
                    the baby’s organs and development. It is one of the most
                    important Fetal Scans near Girinagar for detecting
                    structural abnormalities.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="4">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  5. Do I need a doctor’s prescription for pregnancy scans?{" "}
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Yes. Most Ultrasound Scans in Girinagar during pregnancy
                    require a valid doctor’s prescription, as per medical
                    guidelines.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="5">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>6. How long does a pregnancy ultrasound scan take?</h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Most pregnancy scans take between 15 to 30 minutes,
                    depending on the type of scan and fetal position.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="6">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  7. Are Doppler scans available for high-risk pregnancies?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Yes. Aura Diagnostics provides Doppler and specialized Fetal
                    Scans near Girinagar for high-risk pregnancies such as
                    diabetes, hypertension, or growth concerns.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="7">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  8. Will I receive my pregnancy scan report on the same
                  day?{" "}
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    In most cases, reports for Pregnancy Ultrasound in Girinagar
                    are provided on the same day or within a short time, making
                    it easy to consult your doctor promptly.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="9">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  9. Is prior appointment required for pregnancy scans in
                  Girinagar?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Appointments are recommended to avoid waiting time and
                    ensure timely scanning, especially for detailed Ultrasound
                    Scans in Girinagar like anomaly or Doppler scans.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="serviceFaq-accItem" eventKey="10">
              <Accordion.Header className="serviceFaq-accHeader">
                <h5>
                  10. Why choose Aura Diagnostics for pregnancy scans in
                  Girinagar?
                </h5>
              </Accordion.Header>
              <Accordion.Body className="serviceFaq-body">
                <div className="serviceFaq-item">
                  <p>
                    Aura Diagnostics offers experienced radiologists, advanced
                    ultrasound equipment, accurate reporting, hygienic
                    facilities, and compassionate care for all Pregnancy
                    Ultrasound in Girinagar needs.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>{" "}
          </Accordion>
        </div>
        <div className="serviceFaq-content">
          <Image src={faqImg} alt="faqImg" />
        </div>
      </div>
    </div>
    </>
  );
};

export default PregnancyFaq;

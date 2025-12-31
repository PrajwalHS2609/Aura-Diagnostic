"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import faqImg from "./../../../Images/faq.png";
import Image from "next/image";
import Script from "next/script";
const BloodTestFaq = () => {
  return (
    <>
      <Script
        id="blood-tests-in-girinagar-bangalore-with-free-home-visit"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Are blood tests at home in Girinagar really free?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Aura Diagnostics offers free home sample collection for blood tests in Girinagar. You only pay for the test with no additional collection charges.",
                },
              },
              {
                "@type": "Question",
                name: "Which areas are covered under Blood Tests at Home near Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics provides Blood Tests at Home in Girinagar and nearby localities, ensuring quick and reliable home sample collection.",
                },
              },
              {
                "@type": "Question",
                name: "How do I book a Blood Test at Home in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can book by calling Aura Diagnostics, booking online, or scheduling through WhatsApp at your preferred date and time.",
                },
              },
              {
                "@type": "Question",
                name: "How soon will I receive my blood test reports?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most blood test reports are delivered within 24 hours, depending on the test. Reports are shared digitally via WhatsApp or email.",
                },
              },
              {
                "@type": "Question",
                name: "Are blood tests accurate when samples are collected at home?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Samples collected at home are processed in certified laboratories using advanced equipment, ensuring accurate and reliable results.",
                },
              },
              {
                "@type": "Question",
                name: "What types of blood tests are available at home in Girinagar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aura Diagnostics offers CBC, blood sugar tests, thyroid profile, lipid profile, vitamin tests, liver and kidney function tests, and preventive health packages.",
                },
              },
              {
                "@type": "Question",
                name: "Is Blood Test at Home in Girinagar safe and hygienic?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. All home collections follow strict hygiene protocols with sterile, single-use needles and trained phlebotomists.",
                },
              },
              {
                "@type": "Question",
                name: "Can senior citizens and bedridden patients book blood tests at home?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Blood Tests at Home near Girinagar are ideal for senior citizens, bedridden patients, pregnant women, and those with mobility issues.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need a doctor’s prescription for blood tests?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Some tests require a prescription, while many routine and preventive blood tests can be done without one. Our team will guide you during booking.",
                },
              },
              {
                "@type": "Question",
                name: "Can I choose flexible or early morning time slots for blood tests?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Aura Diagnostics offers flexible and early morning time slots for Blood Test at Home in Girinagar to suit your schedule.",
                },
              },
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
                  <h5>1. Are blood tests at home in Girinagar really free?</h5>
                </Accordion.Header>
                <Accordion.Body className="serviceFaq-body">
                  <div className="serviceFaq-item">
                    <p>
                      Yes. Aura Diagnostics offers free home sample collection
                      for blood tests. You only pay for the test—there are no
                      additional visit or collection charges.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="serviceFaq-accItem" eventKey="1">
                <Accordion.Header className="serviceFaq-accHeader">
                  <h5>
                    2. Which areas are covered under Blood Tests at Home near
                    Girinagar?
                  </h5>
                </Accordion.Header>
                <Accordion.Body className="serviceFaq-body">
                  <div className="serviceFaq-item">
                    <p>
                      Aura Diagnostics covers Girinagar and nearby localities,
                      ensuring fast and reliable Blood Tests at Home near
                      Girinagar with timely sample collection.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="serviceFaq-accItem" eventKey="2">
                <Accordion.Header className="serviceFaq-accHeader">
                  <h5>3. How do I book a Blood Test at Home in Girinagar?</h5>
                </Accordion.Header>
                <Accordion.Body className="serviceFaq-body">
                  <div className="serviceFaq-item">
                    <p>
                      You can book easily by calling Aura Diagnostics, booking
                      online, or scheduling via WhatsApp. Choose your preferred
                      date and time for home collection.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="serviceFaq-accItem" eventKey="3">
                <Accordion.Header className="serviceFaq-accHeader">
                  <h5>4. How soon will I receive my blood test reports?</h5>
                </Accordion.Header>
                <Accordion.Body className="serviceFaq-body">
                  <div className="serviceFaq-item">
                    <p>
                      Most Blood Tests in Girinagar reports are delivered within
                      24 hours, depending on the test type. Reports are shared
                      digitally via WhatsApp or email.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="serviceFaq-accItem" eventKey="4">
                <Accordion.Header className="serviceFaq-accHeader">
                  <h5>5. Are the blood tests accurate when done at home?</h5>
                </Accordion.Header>
                <Accordion.Body className="serviceFaq-body">
                  <div className="serviceFaq-item">
                    <p>
                      Absolutely. Samples collected at home are processed in
                      certified labs using advanced technology, ensuring the
                      same accuracy as in-lab testing.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="serviceFaq-accItem" eventKey="5">
                <Accordion.Header className="serviceFaq-accHeader">
                  <h5>
                    6. What types of blood tests are available at home in
                    Girinagar?
                  </h5>
                </Accordion.Header>
                <Accordion.Body className="serviceFaq-body">
                  <div className="serviceFaq-item">
                    <p>
                      Aura Diagnostics offers a wide range of tests including
                      CBC, diabetes tests, thyroid profile, lipid profile,
                      vitamin tests, liver and kidney function tests, and
                      preventive health packages.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="serviceFaq-accItem" eventKey="6">
                <Accordion.Header className="serviceFaq-accHeader">
                  <h5>
                    7. Is Blood Test at Home in Girinagar safe and
                    hygienic?{" "}
                  </h5>
                </Accordion.Header>
                <Accordion.Body className="serviceFaq-body">
                  <div className="serviceFaq-item">
                    <p>
                      Yes. Trained phlebotomists follow strict hygiene protocols
                      using sterile, single-use needles and proper safety
                      measures during every home visit.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="serviceFaq-accItem" eventKey="7">
                <Accordion.Header className="serviceFaq-accHeader">
                  <h5>
                    8. Can senior citizens and bedridden patients use this
                    service?
                  </h5>
                </Accordion.Header>
                <Accordion.Body className="serviceFaq-body">
                  <div className="serviceFaq-item">
                    <p>
                      Yes. Blood Tests at Home near Girinagar are ideal for
                      senior citizens, bedridden patients, pregnant women, and
                      individuals with mobility challenges.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="serviceFaq-accItem" eventKey="9">
                <Accordion.Header className="serviceFaq-accHeader">
                  <h5>
                    9. Do I need a doctor’s prescription for blood tests at
                    home?
                  </h5>
                </Accordion.Header>
                <Accordion.Body className="serviceFaq-body">
                  <div className="serviceFaq-item">
                    <p>
                      Some tests require a prescription, while preventive and
                      routine Blood Tests in Girinagar can be done without one.
                      Our team will guide you during booking.
                    </p>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="serviceFaq-accItem" eventKey="10">
                <Accordion.Header className="serviceFaq-accHeader">
                  <h5>
                    10. Can I choose early morning or flexible time slots?
                  </h5>
                </Accordion.Header>
                <Accordion.Body className="serviceFaq-body">
                  <div className="serviceFaq-item">
                    <p>
                      Yes. Aura Diagnostics offers flexible time slots,
                      including early morning collections, for convenient Blood
                      Test at Home in Girinagar.
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

export default BloodTestFaq;

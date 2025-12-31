"use client";
import React from "react";
import { Accordion } from "react-bootstrap";
import faqImg from "./../../../Images/faq.png";
import Image from "next/image";
const BloodTestFaq = () => {
  return (
    
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
  );
};

export default BloodTestFaq;

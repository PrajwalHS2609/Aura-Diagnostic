"use client";
import React from "react";
import "./HomeTestimonial.css";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import sneha from  "./../../../Images/TestimonialImgs/Sneha Rao.png"
import ananya from  "./../../../Images/TestimonialImgs/Ananya Joseph.png"
import arjunMegha from  "./../../../Images/TestimonialImgs/Arjun & Megha.png"
import harish from  "./../../../Images/TestimonialImgs/Harish Nair.png"
import kavya from  "./../../../Images/TestimonialImgs/Kavya R.png"
import nisha from  "./../../../Images/TestimonialImgs/Nisha Kulkarni.png"
import priya from  "./../../../Images/TestimonialImgs/Priya S.png"
import rohan from  "./../../../Images/TestimonialImgs/Rohan Mehta.png"
const HomeTestimonialMain = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  const testimonial = [
    {
      id: 1,
      name: " Priya S",
      img: priya,
      para: "Aura Diagnostics made my pregnancy journey so much more comforting. I went for my fetal growth scan and NT scan, and the radiologist explained every detail with such patience. As a first-time mom, that clarity truly eased my nerves. I walked out feeling confident and reassured. Highly recommended for pregnancy scans in Girinagar.",
    },
    {
      id: 2,
      name: "Rohan Mehta",
      img: rohan,
      para: "I visited Aura Diagnostics for a Doppler scan and was really impressed with their professionalism. The technician ensured I was comfortable the entire time and provided a detailed report that helped my doctor adjust my treatment plan. One of the most reliable places for Doppler scans in Girinagar.",
    },
    {
      id: 3,
      name: "Sneha Rao",
      img: sneha,
      para: "The home blood sample collection service is excellent! The technician reached on time, followed all hygiene protocols, and I received my reports quicker than expected. Aura Diagnostics has made routine health checkups extremely convenient for my family.",
    },
     {
      id: 4,
      name: "Nisha Kulkarni",
      img: nisha,
      para: "My obstetric ultrasound was handled with complete care. The radiologist explained my baby’s development step-by-step, which was incredibly reassuring. The clinic is clean, modern, and ideal for expecting mothers who want a safe and clear ultrasound experience.",
    },
         {
      id: 5,
      name: "Kavya R",
      img: kavya,
      para: "Aura Diagnostics has been a huge support during my fertility evaluation phase. Their follicular study scans and Doppler monitoring were extremely accurate and helped my doctor decide the right course of treatment. The team is very kind and understands the sensitivity of infertility care.",
    },
         {
      id: 6,
      name: "Arjun & Megha",
      img: arjunMegha,
      para: "Our 3D/4D fetal scan experience was magical! The image clarity was unbelievable—we could literally see our baby’s expressions. The staff made the session memorable and emotional for both of us. Truly one of the best centers in Girinagar for advanced fetal scans.",
    },
         {
      id: 7,
      name: "Harish Nair",
      img: harish,
      para: "I had persistent shoulder pain and chose Aura Diagnostics for an MSK ultrasound. The scan was done quickly, and the report helped my orthopedician start treatment immediately. Highly precise and very professional—great place for muscle and sports injury scans. ",
    },
         {
      id: 8,
      name: "Ananya Joseph",
      img: ananya,
      para: "I’ve been visiting Aura Diagnostics regularly for pregnancy Doppler tests and growth scans. The reports are always clear and delivered on time, and the radiologist takes the effort to explain everything in detail. From ultrasound scans to pathology tests, they offer a smooth, dependable experience.",
    },
  ];
  return (
    <div className="homeTestimonialMain-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {testimonial.map((x) => (
          <Carousel.Item key={x.id}>
            <div className="homeTestimonialMain-content">
              <div className="homeTestimonialMain-wrapper">
                <div className="homeTestimonialMain-imgContainer">
                  <Image src={x.img} alt={x.name} />
                </div>
                <div className="homeTestimonialMain-textContainer">
                  <div className="homeTestimonialMain-textContent">
                    <ImQuotesLeft className="quoteIco"/>
                  </div>
                  <div className="homeTestimonialMain-textContent">
                    <h5>{x.name}</h5>
                  </div>
                  <div className="homeTestimonialMain-textContent">
                    <p>{x.para}</p>
                  </div>
                  <div className="homeTestimonialMain-textContent">
                    <ImQuotesRight className="quoteIco"/>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeTestimonialMain;

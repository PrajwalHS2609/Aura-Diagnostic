"use client";
import React from "react";
import "./HomeServices.css";
import HomeServicesHead from "./HomeServicesHead";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import obstetricsImg from "./../../../Images/HomeServiceImgs/Obstetrics.png";
import infertilityImg from "./../../../Images/HomeServiceImgs/Infertility scans.png";
import advancedUsgImg from "./../../../Images/HomeServiceImgs/Advanced USG.png";
import usgGuidedProcedureImg from "./../../../Images/HomeServiceImgs/USG guided procedure.png"
import musculoskeletalScansImg from "./../../../Images/HomeServiceImgs/Musculoskeletal scans.png";
import softTissueImg from "./../../../Images/HomeServiceImgs/Small Parts scans.png";
import pregnancyScans from "./../../../Images/HomeServiceImgs/Pregnancy scans.png";
import dopplerScanImg from "./../../../Images/ServiceImgs/Doppler Scanning.png";

import Image from "next/image";
const HomeServices = () => {
  const service = [
    {
      id: 1,
      img: obstetricsImg,
      title: "Obstetrics",
      para: "Obstetrics is the medical specialty dedicated to pregnancy management, fetal monitoring, labor, and postpartum care to ensure safe maternal and newborn health.",
      link: "/obstetrics",
    },
    {
      id: 2,
      img: infertilityImg,
      title: "Infertility scans",
      para: "Infertility scans assess reproductive organs, monitor ovulation, and detect conditions affecting conception, providing accurate insights for effective diagnosis and treatment planning.",
      link: "/infertility-scan",
    },
    {
      id: 3,
      img: advancedUsgImg,
      title: "Advanced USG",
      para: "Advanced USG uses high-resolution ultrasound technology to provide detailed imaging of internal organs and soft tissues, enabling accurate diagnosis, monitoring, and early detection of medical conditions.",
      link: "/advanced-usg",
    },
    {
      id: 4,
      img: dopplerScanImg,
      title: "Doppler Scanning",
      para: "A Doppler scan measures blood flow in vessels using advanced ultrasound technology, helping detect blockages, clot risks, and circulation issues with precise, real-time imaging.",
      link: "/doppler-scan",
    },
    {
      id: 5,
      img: usgGuidedProcedureImg,
      title: "USG guided procedure",
      para: "A USG-guided procedure uses real-time ultrasound imaging to accurately guide needles or instruments for biopsies, fluid drainage, and targeted treatments, ensuring precision and safety.",
      link: "/usg-guided-procedur",
    },
    {
      id: 6,
      img: musculoskeletalScansImg,
      title: "Musculoskeletal scans",
      para: "Musculoskeletal scans use high-resolution ultrasound to evaluate muscles, tendons, ligaments, and joints, helping diagnose injuries, inflammation, and structural abnormalities with precise imaging.",
      link: "/musculoskeletal-scans",
    },
    {
      id: 7,
      img: softTissueImg,
      title: "Soft Tissue/ Small Parts Scans",
      para: "Soft Tissue/Small Parts scans provide detailed ultrasound imaging of glands, lymph nodes, thyroid, breast, and other soft tissues, helping detect abnormalities, cysts, and early pathological changes with accuracy.",
      link: "/soft-tissue-scans",
    },
    {
      id: 8,
      img: pregnancyScans,
      title: "Pregnancy scans",
      para: "Pregnancy scans use ultrasound imaging to monitor fetal growth, check development, and assess maternal health, ensuring a safe and accurate evaluation throughout pregnancy.",
      link: "/pregnancy-scan",
    },
  ];
  return (
    <div className="homeService">
      <HomeServicesHead />
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          // Swiper-specific configuration
          onSwiper={(swiper) => {
            swiper.loopedSlides = 12; // Dynamically set loopedSlides on the Swiper instance
          }}
          breakpoints={{
            320: {
              slidesPerView: 1, // 1 slide per view on small screens (e.g., mobile)
            },
            768: {
              slidesPerView: 2, // 2 slides per view on medium screens (e.g., tablets)
            },
            1024: {
              slidesPerView: 3, // 3 slides per view on large screens (e.g., desktop)
            },
          }}
        >
          {service.map((x) => (
            <SwiperSlide key={x.id}>
              <div className="homeServiceMain-cardContainer" key={x.id}>
                <Link href={x.link}>
                  <div className="homeServiceMain-cardCover">
                    <div className="homeServiceMain-cardPara">
                      <p>{x.para}</p>
                    </div>
                  </div>
                  <div className="homeServiceMain-cardImg">
                    <Image src={x.img} alt={x.title} loading="lazy" />
                  </div>
                  <div className="homeServiceMain-cardHead">
                    <h3>{x.title}</h3>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
      {/* <div className="homeServiceContent">
        <h5>
          <Link class="fancy" href="/services" style={{textDecoration:"none"}}>
            <span className="top-key"></span>
            <span className="text">View All Services</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </Link>
        </h5>
      </div> */}
    </div>
  );
};

export default HomeServices;

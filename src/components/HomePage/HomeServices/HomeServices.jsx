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

import DopplerScanning from "./../../../Images/ServiceImgs/Doppler Scanning.png";

import Image from "next/image";
const HomeServices = () => {
  const service = [
    {
      id: 1,
      img: DopplerScanning,
      title: "Obstetrics",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/nt-scan",
    },
    {
      id: 2,
      img: DopplerScanning,
      title: "Infertility scans",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/anomaly-scan",
    },
    {
      id: 3,
      img: DopplerScanning,
      title: "Advanced USG",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/growth-scan",
    },
    {
      id: 4,
      img: DopplerScanning,
      title: "Doppler Scanning",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/fetal-echo",
    },
    {
      id: 5,
      img: DopplerScanning,
      title: "USG guided procedure",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/fetal-urosonogram",
    },
    {
      id: 6,
      img: DopplerScanning,
      title: "Musculoskeletal scans",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/fetal-urosonogram",
    },
    {
      id: 7,
      img: DopplerScanning,
      title: "soft tissue/ small parts scans",
      para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint adipisci dignissimos reiciendis, numquam dolorum perferendis ipsum quod libero amet suscipit? Exercitationem voluptates quisquam eligendi deleniti! Nulla esse obcaecati nam voluptatum?",
      link: "/fetal-urosonogram",
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

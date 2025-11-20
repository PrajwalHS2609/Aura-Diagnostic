import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./HomeTestimonial.css";
import quote from "./../../../Images/left-quote.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const HomeTestimonialCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <div>
          {" "}
          <Image src={quote} alt="" />
          <div className="carouselTxt">
            <h3>
              Best Diagnostic center Doctor was very humble with patients and
              treatment also excellent.
            </h3>
            <span>
              <FontAwesomeIcon
                icon={faUser}
                className="testIcon"
              ></FontAwesomeIcon>{" "}
              <div>
                {" "}
                <h5>Narmada Rao</h5>
                <h6>General Consultation</h6>
              </div>
            </span>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div>
          {" "}
          <Image src={quote} alt="" />
          <div className="carouselTxt">
            <h3>
              Best Diagnostic center Doctor was very humble with patients and
              treatment also excellent.
            </h3>
            <span>
              <FontAwesomeIcon
                icon={faUser}
                className="testIcon"
              ></FontAwesomeIcon>{" "}
              <div>
                {" "}
                <h5>Narmada Rao</h5>
                <h6>General Consultation</h6>
              </div>
            </span>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div>
          {" "}
          <Image src={quote} alt="" />
          <div className="carouselTxt">
            <h3>
              Best Diagnostic center Doctor was very humble with patients and
              treatment also excellent.
            </h3>
            <span>
              <FontAwesomeIcon
                icon={faUser}
                className="testIcon"
              ></FontAwesomeIcon>{" "}
              <div>
                {" "}
                <h5>Narmada Rao</h5>
                <h6>General Consultation</h6>
              </div>
            </span>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeTestimonialCarousel;

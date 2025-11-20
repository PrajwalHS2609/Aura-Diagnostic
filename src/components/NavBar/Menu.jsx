"use client";
import React, { useRef, useState } from "react";
import "./NavBar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Menu = () => {
  const pathname = usePathname(); // ✅ Get current path
  const [drop, setDrop] = useState(false);
  const dropRef = useRef();
  const dropRef2 = useRef();
  const ultraDropRef = useRef();
const mobileServicesRef = useRef();
const mobileUltraDropRef = useRef();
const mobileConsultationRef = useRef();

  const showSideBar = () => {
    document.querySelector(".respMenu").style.display = "flex";
  };
  const hideSideBar = () => {
    document.querySelector(".respMenu").style.display = "none";
  };

  const handleToggle = (ref) => {
    if (ref.current.style.display === "flex") {
      ref.current.style.display = "none";
    } else {
      ref.current.style.display = "flex";
    }
  };

  const handleAppointment = () => {
    document.querySelector(".bookPopUp").style.visibility = "visible";
  };

  return (
    <div className="menuContainer">
      <div className="menuContainerList">
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about-us"
            className={pathname === "/about-us" ? "active" : ""}
          >
            About Us
          </Link>
        </li>
        <li>
          <span className="service-text">
            Services
            <FaChevronDown
              className="menuDropIcon"
              onClick={() => handleToggle(dropRef)}
            />
          </span>
          <div className="menuDropDown" ref={dropRef}>
            <li>
              <Link
                href="/pathology-test-in-bangalore-with-home-visit"
                className={
                  pathname === "/pathology-test-in-bangalore-with-home-visit"
                    ? "active"
                    : ""
                }
              >
                Pathology
              </Link>
            </li>
            <li>
              <Link
                href="/ultrasound-scan-in-rajajinagar-bangalore"
                className={
                  pathname === "/ultrasound-scan-in-rajajinagar-bangalore"
                    ? "active"
                    : ""
                }
              >
                Ultrasound
                <FaChevronRight
                  className="menuDropIcon"
                  onClick={() => handleToggle(ultraDropRef)}
                />
              </Link>
              <div className="innerMenuDropDown" ref={ultraDropRef}>
                <li>
                  <Link
                    href="/3d-and-4d-fetal-scan-in-rajajinagar-bangalore"
                    className={
                      pathname ===
                      "/3d-and-4d-fetal-scan-in-rajajinagar-bangalore"
                        ? "active"
                        : ""
                    }
                  >
                    3D & 4D Foetal Ultrasound
                  </Link>
                </li>
                <li>
                  <Link
                    href="/doppler-scan-in-rajajinagar-bangalore"
                    className={
                      pathname === "/doppler-scan-in-rajajinagar-bangalore"
                        ? "active"
                        : ""
                    }
                  >
                    Doppler Scanning
                  </Link>
                </li>
              </div>
            </li>

            {/* Repeat same pattern for X-Ray, Cardiology, Radiology */}
          </div>
        </li>
        <li>
          <Link
            href="/health-packages"
            className={pathname === "/health-packages" ? "active" : ""}
          >
            Health Package
          </Link>
        </li>
        <li>
          <Link
            href="/consultation"
            className={pathname === "/consultation" ? "active" : ""}
          >
            Consultation
            <FaChevronDown
              className="menuDropIcon"
              onClick={() => handleToggle(dropRef2)}
            />
          </Link>
          <div className="menuDropDown" ref={dropRef2}>
            <li>
              <Link
                href="/neurology"
                className={pathname === "/neurology" ? "active" : ""}
              >
                Neurology
              </Link>
            </li>
            <li>
              <Link
                href="/nephrology"
                className={pathname === "/nephrology" ? "active" : ""}
              >
                Nephrology
              </Link>
            </li>
            <li>
              <Link
                href="/gynecology"
                className={pathname === "/gynecology" ? "active" : ""}
              >
                Gynecology
              </Link>
            </li>
            <li>
              <Link
                href="/urology"
                className={pathname === "/urology" ? "active" : ""}
              >
                Urology
              </Link>
            </li>
          </div>
        </li>
        <li>
          <Link
            href="/contact-us"
            className={pathname === "/contact-us" ? "active" : ""}
          >
            Contact Us
          </Link>
        </li>
      </div>
      <div>
        {" "}
        <a class="fancy" href="#" onClick={handleAppointment} id="non-repsBtn">
          <span class="top-key"></span>
          <span class="text">Book Appointment</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </a>
      </div>

      {/* ------------------------respMenuBar----------------------- */}
      <div className="respMenuBar">
        <FaBarsStaggered className="respMenuIcon" onClick={showSideBar} />
      </div>
      <div className="respMenu">
        <div className="respMenuScroll">
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
            <FaXmark onClick={hideSideBar} className="respMenuExit"/>
          </li>
          <li>
            <Link
              href="/about-us"
              className={pathname === "/about-us" ? "active" : ""}
            >
              About Us
            </Link>
          </li>
          <li>
            <span>
              Services
              <FaChevronDown
                className="respMenuDropIcon"
                onClick={() => handleToggle(mobileServicesRef)}
              />
            </span>
            <div className="menuDropDown" ref={mobileServicesRef}>
              <li>
                <Link
                  href="/pathology-test-in-bangalore-with-home-visit"
                  className={
                    pathname === "/pathology-test-in-bangalore-with-home-visit"
                      ? "active"
                      : ""
                  }
                >
                  Pathology
                </Link>
              </li>
              <li>
                <Link
                  href="/ultrasound-scan-in-rajajinagar-bangalore"
                  className={
                    pathname === "/ultrasound-scan-in-rajajinagar-bangalore"
                      ? "active"
                      : ""
                  }
                >
                  Ultrasound
                  <FaChevronRight
                    className="menuDropIcon"
                    onClick={() => handleToggle(mobileUltraDropRef)}
                  />
                </Link>
                <div className="innerMenuDropDown" ref={mobileUltraDropRef}>
                  <li>
                    <Link
                      href="/3d-and-4d-fetal-scan-in-rajajinagar-bangalore"
                      className={
                        pathname ===
                        "/3d-and-4d-fetal-scan-in-rajajinagar-bangalore"
                          ? "active"
                          : ""
                      }
                    >
                      3D & 4D Foetal Ultrasound
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/doppler-scan-in-rajajinagar-bangalore"
                      className={
                        pathname === "/doppler-scan-in-rajajinagar-bangalore"
                          ? "active"
                          : ""
                      }
                    >
                      Doppler Scanning
                    </Link>
                  </li>
                </div>
              </li>

              {/* Repeat same pattern for X-Ray, Cardiology, Radiology */}
            </div>
          </li>
          <li>
            <Link
              href="/health-packages"
              className={pathname === "/health-packages" ? "active" : ""}
            >
              Health Package
            </Link>
          </li>
          <li>
            <Link
              href="/consultation"
              className={pathname === "/consultation" ? "active" : ""}
            >
              Consultations
              <FaChevronDown
                className="respMenuDropIcon"
                onClick={() => handleToggle(mobileConsultationRef)}
              />
            </Link>
            <div className="menuDropDown" ref={mobileConsultationRef}>
              <li>
                <Link
                  href="/neurology"
                  className={pathname === "/neurology" ? "active" : ""}
                >
                  Neurology
                </Link>
              </li>
              <li>
                <Link
                  href="/nephrology"
                  className={pathname === "/nephrology" ? "active" : ""}
                >
                  Nephrology
                </Link>
              </li>
              <li>
                <Link
                  href="/gynecology"
                  className={pathname === "/gynecology" ? "active" : ""}
                >
                  Gynecology
                </Link>
              </li>
              <li>
                <Link
                  href="/urology"
                  className={pathname === "/urology" ? "active" : ""}
                >
                  Urology
                </Link>
              </li>
            </div>
          </li>
          <li>
            <Link
              href="/contact-us"
              className={pathname === "/contact-us" ? "active" : ""}
            >
              Contact Us
            </Link>
          </li>
          <li className="lastBlockList" id="respBtn">
            <a class="fancy" href="#" onClick={handleAppointment}>
              <span class="top-key"></span>
              <span class="text">Book Appointment</span>
              <span class="bottom-key-1"></span>
              <span class="bottom-key-2"></span>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Menu;

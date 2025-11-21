"use client";
import React, { useRef, useState } from "react";
import "./NavBar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Menu = () => {
  const pathname = usePathname(); // ✅ Get current path

  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    const sideBar2 = document.querySelector(".innerRespMenu");

    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(100%)";
    sideBar2.style.display = "flex";
    sideBar2.style.transform = "translateX(100%)";
  };
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
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
            <FaChevronDown className="menuDropIcon" />
          </span>
          <div className="menuDropDown">
            <li>
              <Link
                href="/obstetrics"
                className={pathname === "/obstetrics" ? "active" : ""}
              >
                Obstetrics
              </Link>
            </li>
            <li>
              <Link
                href="/ultrasound-scan"
                className={pathname === "/ultrasound-scan" ? "active" : ""}
              >
                Ultrasound Scan
              </Link>
              {/* <div className="innerMenuDropDown">
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
              </div> */}
            </li>
            <li>
              <Link
                href="/infertility-scans"
                className={pathname === "/infertility-scans" ? "active" : ""}
              >
                Infertility Scans
              </Link>
            </li>
            <li>
              <Link
                href="/doppler"
                className={pathname === "/doppler" ? "active" : ""}
              >
                Doppler
              </Link>
            </li>
            <li>
              <Link
                href="/ Musculoskeletal-scans"
                className={
                  pathname === "/ Musculoskeletal-scans" ? "active" : ""
                }
              >
                Musculoskeletal Scans
              </Link>
            </li>
            <li>
              <Link
                href="/soft-tissue-scans"
                className={pathname === "/soft-tissue-scans" ? "active" : ""}
              >
                Soft Tissue Scans
              </Link>
            </li>
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
            <FaChevronDown className="menuDropIcon" />
          </Link>
          <div className="menuDropDown">
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
        <a
          className="fancy"
          href="#"
          onClick={handleAppointment}
          id="non-repsBtn"
        >
          <span className="top-key"></span>
          <span className="text">Book Appointment</span>
          <span className="bottom-key-1"></span>
          <span className="bottom-key-2"></span>
        </a>
      </div>

      {/* ------------------------respMenuBar----------------------- */}
      <div className="respMenuBar">
        <FaBarsStaggered className="respMenuIcon" onClick={showSideBar} />
      </div>
      <div className="respMenu">
        <div className="innerRespMenu">
          {" "}
          <FaX className="closeX" onClick={hideSideBar} />
          <div className="innerMenu">
            <li className="">
              <Link
                id="menuNavLink"
                href={`/`}
                onClick={hideSideBar}
                className={pathname === "/" ? "active" : ""}
              >
                Home
              </Link>{" "}
            </li>
            <li className="">
              {" "}
              <Link
                id="menuNavLink"
                onClick={hideSideBar}
                href={`/about-us`}
                className={pathname === "/about-us" ? "active" : ""}
              >
                About Us
              </Link>
            </li>
            <li className="respDropdownList">
              {" "}
              <span>
                Service{" "}
                <FaChevronRight
                  className="menuNavDropIcon"
                  onClick={() => toggleDropdown("service")}
                />
              </span>
              {activeDropdown === "service" && (
                <div className="respDropDown">
                  <li>
                    <Link
                      id="menuNavLink"
                      onClick={hideSideBar}
                      href={`/obstetrics`}
                      className={pathname === "/obstetrics" ? "active" : ""}
                    >
                      Obstetrics{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="menuNavLink"
                      onClick={hideSideBar}
                      href={`/email-marketing-service-in-bangalore`}
                      className={
                        pathname === "/email-marketing-service-in-bangalore"
                          ? "active"
                          : ""
                      }
                    >
                      Ultrasound Scan
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="menuNavLink"
                      onClick={hideSideBar}
                      href={`/infertility-scans`}
                      className={
                        pathname === "/infertility-scans" ? "active" : ""
                      }
                    >
                      Infertility Scans
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="menuNavLink"
                      onClick={hideSideBar}
                      href={`/doppler`}
                      className={pathname === "/doppler" ? "active" : ""}
                    >
                      Doppler
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="menuNavLink"
                      onClick={hideSideBar}
                      href={`/infertility Scans`}
                      className={
                        pathname === "/infertility Scans" ? "active" : ""
                      }
                    >
                      Musculoskeletal Scans
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="menuNavLink"
                      onClick={hideSideBar}
                      href={`/infertility Scans`}
                      className={
                        pathname === "/infertility Scans" ? "active" : ""
                      }
                    >
                      Soft Tissue Scans
                    </Link>
                  </li>
                </div>
              )}
            </li>
            <li className="">
              {" "}
              <Link
                id="menuNavLink"
                onClick={hideSideBar}
                href={`/health-packages`}
                className={pathname === "/health-packages" ? "active" : ""}
              >
                Health Package
              </Link>
            </li>
            <li className="respDropdownList">
              {" "}
              <span>
                Consultation
                <FaChevronRight
                  className="menuNavDropIcon"
                  onClick={() => toggleDropdown("consultation")}
                />
              </span>
              {activeDropdown === "consultation" && (
                <div className="respDropDown">
                  <li>
                    <Link
                      id="menuNavLink"
                      onClick={hideSideBar}
                      href={`/payment-gateway-service-in-bangalore`}
                      className={
                        pathname === "/payment-gateway-service-in-bangalore"
                          ? "active"
                          : ""
                      }
                    >
                      Neurology{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="menuNavLink"
                      onClick={hideSideBar}
                      href={`/email-marketing-service-in-bangalore`}
                      className={
                        pathname === "/email-marketing-service-in-bangalore"
                          ? "active"
                          : ""
                      }
                    >
                      Nephrology{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="menuNavLink"
                      onClick={hideSideBar}
                      href={`/sms-and-whatsapp-marketing-services-in-bangalore`}
                      className={
                        pathname ===
                        "/sms-and-whatsapp-marketing-services-in-bangalore"
                          ? "active"
                          : ""
                      }
                    >
                      Gynecology{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="menuNavLink"
                      onClick={hideSideBar}
                      href={`/sms-and-whatsapp-marketing-services-in-bangalore`}
                      className={
                        pathname ===
                        "/sms-and-whatsapp-marketing-services-in-bangalore"
                          ? "active"
                          : ""
                      }
                    >
                      Urology{" "}
                    </Link>
                  </li>
                </div>
              )}
            </li>
            <li className="">
              {" "}
              <Link
                id="menuNavLink"
                href={`/contact-us`}
                onClick={hideSideBar}
                className={pathname === "/contact-us" ? "active" : ""}
              >
                Contact Us
              </Link>
            </li>
            <li>
              {" "}
              <a
                className="fancy"
                href="#"
                onClick={handleAppointment}
                id="repsBtn"
              >
                <span className="top-key"></span>
                <span className="text">Book Appointment</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

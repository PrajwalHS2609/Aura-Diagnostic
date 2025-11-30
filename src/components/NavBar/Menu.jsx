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
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };
  const toggleSubDropdown = (submenu) => {
    setActiveSubDropdown((prev) => (prev === submenu ? null : submenu));
  };
  let handleAppointment = () => {
    document.querySelector(".bookPopUp").classList.add("showPopup");
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
                href="/pregnancy-scans-in-girinagar-bangalore"
                className={pathname === "/pregnancy-scans-in-girinagar-bangalore" ? "active" : ""}
              >
                Pregnancy Scan
              </Link>
              <div className="innerMenuDropDown">
                <li>
                  <Link
                    href="/pregnancy-dating-scan-in-girinagar-bangalore"
                    className={pathname === "/pregnancy-dating-scan-in-girinagar-bangalore" ? "active" : ""}
                  >
                    Dating Scan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pregnancy-anomaly-scan-in-girinagar-bangalore"
                    className={pathname === "/pregnancy-anomaly-scan-in-girinagar-bangalore" ? "active" : ""}
                  >
                    Anomaly Scan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pregnancy-3d-and-4d-fetal-scans-in-girinagar-bangalore"
                    className={pathname === "/pregnancy-3d-and-4d-fetal-scans-in-girinagar-bangalore" ? "active" : ""}
                  >
                    3D and 4D Fetal Scan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pregnancy-nt-scan-in-girinagar-bangalore"
                    className={pathname === "/pregnancy-nt-scan-in-girinagar-bangalore" ? "active" : ""}
                  >
                    NT Scan
                  </Link>
                </li>
              </div>
            </li>
            <li>
              <Link
                href="/obstetrics-scan-in-girinagar-bangalore"
                className={pathname === "/obstetrics-scan-in-girinagar-bangalore" ? "active" : ""}
              >
                Obstetrics
              </Link>
              <div className="innerMenuDropDown">
                <li>
                  {" "}
                  <Link
                    href="/pregnancy-nt-scan-in-girinagar-bangalore"
                    className={pathname === "/pregnancy-nt-scan-in-girinagar-bangalore" ? "active" : ""}
                  >
                    NT scan
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/pregnancy-anomaly-scan-in-girinagar-bangalore"
                    className={pathname === "/pregnancy-anomaly-scan-in-girinagar-bangalore" ? "active" : ""}
                  >
                    Anomaly scan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/growth-scan-with-doppler-in-girinagar-bangalore"
                    className={pathname === "/growth-scan-with-doppler-in-girinagar-bangalore" ? "active" : ""}
                  >
                    Growth scan with Doppler
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fetal-echo-test-in-girinagar-bangalore"
                    className={pathname === "/fetal-echo-test-in-girinagar-bangalore" ? "active" : ""}
                  >
                    Fetal echo
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/fetal-urosonogram-test-in-girinagar-bangalore"
                    className={
                      pathname === "/fetal-urosonogram-test-in-girinagar-bangalore" ? "active" : ""
                    }
                  >
                    Fetal Urosonogram
                  </Link>
                </li>
              </div>
            </li>
            <li>
              <Link
                href="/advanced-usg-test-in-girinagar-bangalore"
                className={pathname === "/advanced-usg-test-in-girinagar-bangalore" ? "active" : ""}
              >
                Advanced USG
              </Link>
              <div className="innerMenuDropDown">
                <li>
                  <Link
                    href="/liver-elastography-scan-in-girinagar-bangalore"
                    className={
                      pathname === "/liver-elastography-scan-in-girinagar-bangalore" ? "active" : ""
                    }
                  >
                    Liver elastography
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fatty-liver-quantification-scan-in-girinagar-bangalore"
                    className={
                      pathname === "/fatty-liver-quantification-scan-in-girinagar-bangalore" ? "active" : ""
                    }
                  >
                    Fatty liver quantification
                  </Link>
                </li>
              </div>
            </li>
            <li>
              <Link
                href="/usg-guided-procedure-in-girinagar-bangalore"
                className={pathname === "/usg-guided-procedure-in-girinagar-bangalore" ? "active" : ""}
              >
                USG guided procedure
              </Link>
              <div className="innerMenuDropDown" id="subMenuDropDown">
                <li>
                  <Link
                    href="/fnac-test-in-girinagar-bangalore"
                    className={pathname === "/fnac-test-in-girinagar-bangalore" ? "active" : ""}
                  >
                    FNAC
                  </Link>
                </li>
                <li>
                  <Link
                    href="/body-fluid-aspiration-test-in-girinagar-bangalore"
                    className={
                      pathname === "/body-fluid-aspiration-test-in-girinagar-bangalore" ? "active" : ""
                    }
                  >
                    Body fluid aspiration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/saline-infusion-sonohysterosalpingography-test-in-girinagar-bangalore"
                    className={
                      pathname === "/saline-infusion-sonohysterosalpingography-test-in-girinagar-bangalore"
                        ? "active"
                        : ""
                    }
                  >
                    saline infusion sonohysterosalphingography
                  </Link>
                </li>
                <li>
                  <Link
                    href="/amniocentesis-ultrasound-test-in-girinagar-bangalore"
                    className={pathname === "/amniocentesis-ultrasound-test-in-girinagar-bangalore" ? "active" : ""}
                  >
                    Amniocentesis
                  </Link>
                </li>
              </div>
            </li>
            <li>
              <Link
                href="/infertility-scan-test-in-girinagar-bangalore"
                className={pathname === "/infertility-scan-test-in-girinagar-bangalore" ? "active" : ""}
              >
                Infertility Scans
              </Link>
              <div className="innerMenuDropDown">
                <li>
                  {" "}
                  <Link
                    href="/3d-pelvis-scan-in-girinagar-bangalore"
                    className={pathname === "/3d-pelvis-scan-in-girinagar-bangalore" ? "active" : ""}
                  >
                    3D pelvis
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/3d-baseline-scan-in-girinagar-bangalore"
                    className={
                      pathname === "/3d-baseline-scan-in-girinagar-bangalore" ? "active" : ""
                    }
                  >
                    3D Base line scan/ AFC scans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/3d-follicle-monitoring-with-doppler-in-girinagar-bangalore"
                    className={
                      pathname === "/3d-follicle-monitoring-with-doppler-in-girinagar-bangalore"
                        ? "active"
                        : ""
                    }
                  >
                    3D Follicle monitoring with Doppler.
                  </Link>
                </li>
                <li>
                  <Link
                    href="/luteal-phase-scan-in-girinagar-bangalore"
                    className={
                      pathname === "/luteal-phase-scan-in-girinagar-bangalore" ? "active" : ""
                    }
                  >
                    Leuteal phase scan
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/uterine-biophysical-profile-scan-in-girinagar-bangalore"
                    className={
                      pathname === "/uterine-biophysical-profile-scan-in-girinagar-bangalore"
                        ? "active"
                        : ""
                    }
                  >
                    Uterine biophysical profile
                  </Link>
                </li>
              </div>
            </li>
            <li>
              <Link
                href="/doppler-scan-in-girinagar-bangalore"
                className={pathname === "/doppler-scan-in-girinagar-bangalore" ? "active" : ""}
              >
                Doppler
              </Link>
              <div className="innerMenuDropDown">
                <li>
                  {" "}
                  <Link
                    href="/carotid-doppler-scan-in-girinagar-bangalore"
                    className={pathname === "/carotid-doppler-scan-in-girinagar-bangalore" ? "active" : ""}
                  >
                    Carotid Doppler
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/renal-doppler-scan-in-girinagar-bangalore"
                    className={pathname === "/renal-doppler-scan-in-girinagar-bangalore" ? "active" : ""}
                  >
                    Renal Doppler
                  </Link>
                </li>
                <li>
                  <Link
                    href="/upper-and-lower-limb-doppler-scan-in-girinagar-bangalore"
                    className={
                      pathname === "/upper-and-lower-limb-doppler-scan-in-girinagar-bangalore"
                        ? "active"
                        : ""
                    }
                  >
                    Upper and Lower Limb Doppler
                  </Link>
                </li>
                <li>
                  <Link
                    href="/luteal-phase-scan-in-girinagar-bangalore"
                    className={
                      pathname === "/luteal-phase-scan-in-girinagar-bangalore" ? "active" : ""
                    }
                  >
                    Leuteal phase scan
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/whole-body-doppler-scan-in-girinagar-bangalore"
                    className={
                      pathname === "/whole-body-doppler-scan-in-girinagar-bangalore" ? "active" : ""
                    }
                  >
                    Whole body Doppler
                  </Link>
                </li>
              </div>
            </li>
            <li>
              <Link
                href="/musculoskeletal-scan-in-girinagar-bangalore"
                className={
                  pathname === "/musculoskeletal-scan-in-girinagar-bangalore" ? "active" : ""
                }
              >
                Musculoskeletal Scans
              </Link>
            </li>
            <li>
              <Link
                href="/soft-tissue-scans-in-girinagar-bangalore"
                className={pathname === "/soft-tissue-scans-in-girinagar-bangalore" ? "active" : ""}
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
              <span>
                Service
                <FaChevronRight
                  className="menuNavDropIcon"
                  onClick={() => toggleDropdown("service")}
                />
              </span>
              {activeDropdown === "service" && (
                <div className="respDropDown">
                  <li>
                    <span>
                      {" "}
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/pregnancy-scans-in-girinagar-bangalore`}
                        className={
                          pathname === "/pregnancy-scans-in-girinagar-bangalore" ? "active" : ""
                        }
                      >
                        Pregnancy Scan
                      </Link>
                      <FaChevronRight
                        className="menuNavDropIcon"
                        onClick={() => toggleSubDropdown("pregnancy")}
                      />
                    </span>
                    {activeSubDropdown === "pregnancy" && (
                      <div className="innerRespMenuDropDown">
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/pregnancy-dating-scan-in-girinagar-bangalore`}
                            className={
                              pathname === "/pregnancy-dating-scan-in-girinagar-bangalore" ? "active" : ""
                            }
                          >
                            Dating Scan
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/pregnancy-anomaly-scan-in-girinagar-bangalore`}
                            className={
                              pathname === "/pregnancy-anomaly-scan-in-girinagar-bangalore" ? "active" : ""
                            }
                          >
                            Anomaly Scan
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/pregnancy-3d-and-4d-fetal-scans-in-girinagar-bangalore`}
                            className={
                              pathname === "/pregnancy-3d-and-4d-fetal-scans-in-girinagar-bangalore" ? "active" : ""
                            }
                          >
                            3D and 4D Fetal Scan
                          </Link>
                        </li>
                                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/pregnancy-nt-scan-in-girinagar-bangalore`}
                            className={
                              pathname === "/pregnancy-nt-scan-in-girinagar-bangalore" ? "active" : ""
                            }
                          >
                           NT Scan
                          </Link>
                        </li>
                      </div>
                    )}
                  </li>
                  <li>
                    <span>
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/obstetrics-scan-in-girinagar-bangalore`}
                        className={pathname === "/obstetrics-scan-in-girinagar-bangalore" ? "active" : ""}
                      >
                        Obstetrics{" "}
                      </Link>
                      <FaChevronRight
                        className="menuNavDropIcon"
                        onClick={() => toggleSubDropdown("obstetrics")}
                      />
                    </span>

                    {activeSubDropdown === "obstetrics" && (
                      <div className="innerRespMenuDropDown">
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/pregnancy-nt-scan-in-girinagar-bangalore`}
                            className={pathname === "/pregnancy-nt-scan-in-girinagar-bangalore" ? "active" : ""}
                          >
                            NT scan{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/pregnancy-anomaly-scan-in-girinagar-bangalore`}
                            className={
                              pathname === "/pregnancy-anomaly-scan-in-girinagar-bangalore" ? "active" : ""
                            }
                          >
                            Anomaly scan
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/growth-scan-with-doppler-in-girinagar-bangalore`}
                            className={
                              pathname === "/growth-scan-with-doppler-in-girinagar-bangalore" ? "active" : ""
                            }
                          >
                            Growth scan with Doppler
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/fetal-echo-test-in-girinagar-bangalore`}
                            className={
                              pathname === "/fetal-echo-test-in-girinagar-bangalore" ? "active" : ""
                            }
                          >
                            Fetal echo
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/fetal-urosonogram-test-in-girinagar-bangalore`}
                            className={
                              pathname === "/fetal-urosonogram-test-in-girinagar-bangalore" ? "active" : ""
                            }
                          >
                            Fetal Urosonogram
                          </Link>
                        </li>
                      </div>
                    )}
                  </li>
                  <li>
                    <span>
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/usg-guided-procedure-in-girinagar-bangalore`}
                        className={
                          pathname === "/usg-guided-procedure-in-girinagar-bangalore" ? "active" : ""
                        }
                      >
                        USG guided procedure
                      </Link>
                      <FaChevronRight
                        className="menuNavDropIcon"
                        onClick={() => toggleSubDropdown("USG")}
                      />
                    </span>
                    {activeSubDropdown === "USG" && (
                      <div className="innerRespMenuDropDown">
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/fnac-test-in-girinagar-bangalore`}
                            className={pathname === "/fnac-test-in-girinagar-bangalore" ? "active" : ""}
                          >
                            FNAC
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/body-fluid-aspiration-test-in-girinagar-bangalore`}
                            className={
                              pathname === "/body-fluid-aspiration-test-in-girinagar-bangalore"
                                ? "active"
                                : ""
                            }
                          >
                            Body fluid aspiration
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/saline-infusion-sonohysterosalpingography-test-in-girinagar-bangalore`}
                            className={
                              pathname ===
                              "/saline-infusion-sonohysterosalpingography-test-in-girinagar-bangalore"
                                ? "active"
                                : ""
                            }
                          >
                            saline infusion sonohysterosalphingography ( SIS)
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/amniocentesis-ultrasound-test-in-girinagar-bangalore`}
                            className={
                              pathname === "/amniocentesis-ultrasound-test-in-girinagar-bangalore" ? "active" : ""
                            }
                          >
                            Amniocentesis
                          </Link>
                        </li>
                      </div>
                    )}
                  </li>
                  <li>
                    <span>
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/infertility-scan-test-in-girinagar-bangalore`}
                        className={
                          pathname === "/infertility-scan-test-in-girinagar-bangalore" ? "active" : ""
                        }
                      >
                        Infertility Scans
                      </Link>
                      <FaChevronRight
                        className="menuNavDropIcon"
                        onClick={() => toggleSubDropdown("infertile")}
                      />
                    </span>
                    {activeSubDropdown === "infertile" && (
                      <div className="innerRespMenuDropDown">
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/3d-pelvis-scan-in-girinagar-bangalore`}
                            className={
                              pathname === "/3d-pelvis-scan-in-girinagar-bangalore" ? "active" : ""
                            }
                          >
                            3D pelvis
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/3d-baseline-scan-in-girinagar-bangalore`}
                            className={
                              pathname === "/3d-baseline-scan-in-girinagar-bangalore" ? "active" : ""
                            }
                          >
                            3D Base line scan/ AFC scans
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/3d-follicle-monitoring-with-doppler-in-girinagar-bangalore`}
                            className={
                              pathname ===
                              "/3d-follicle-monitoring-with-doppler-in-girinagar-bangalore"
                                ? "active"
                                : ""
                            }
                          >
                            3D Follicle monitoring with Doppler
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/luteal-phase-scan-in-girinagar-bangalore`}
                            className={
                              pathname === "/luteal-phase-scan-in-girinagar-bangalore" ? "active" : ""
                            }
                          >
                            Leuteal phase scan
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/uterine-biophysical-profile-scan-in-girinagar-bangalore`}
                            className={
                              pathname === "/uterine-biophysical-profile-scan-in-girinagar-bangalore"
                                ? "active"
                                : ""
                            }
                          >
                            Uterine biophysical profile
                          </Link>
                        </li>
                      </div>
                    )}
                  </li>
                  <li>
                    <span>
                      {" "}
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/doppler-scan-in-girinagar-bangalore`}
                        className={pathname === "/doppler-scan-in-girinagar-bangalore" ? "active" : ""}
                      >
                        Doppler
                      </Link>
                      <FaChevronRight
                        className="menuNavDropIcon"
                        onClick={() => toggleSubDropdown("doppler")}
                      />
                    </span>
                    {activeSubDropdown === "doppler" && (
                      <div className="innerRespMenuDropDown">
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/carotid-doppler-scan-in-girinagar-bangalore`}
                            className={
                              pathname === "/carotid-doppler-scan-in-girinagar-bangalore" ? "active" : ""
                            }
                          >
                            Carotid Doppler
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/renal-doppler-scan-in-girinagar-bangalore`}
                            className={
                              pathname === "/renal-doppler-scan-in-girinagar-bangalore" ? "active" : ""
                            }
                          >
                            Renal Doppler
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/upper-and-lower-limb-doppler-scan-in-girinagar-bangalore`}
                            className={
                              pathname === "/upper-and-lower-limb-doppler-scan-in-girinagar-bangalore"
                                ? "active"
                                : ""
                            }
                          >
                            Upper and Lower Limb Doppler
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/luteal-phase-scan-in-girinagar-bangalore`}
                            className={
                              pathname === "/luteal-phase-scan-in-girinagar-bangalore" ? "active" : ""
                            }
                          >
                            Leuteal phase scan
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/whole-body-doppler-scan-in-girinagar-bangalore`}
                            className={
                              pathname === "/whole-body-doppler-scan-in-girinagar-bangalore" ? "active" : ""
                            }
                          >
                            whole body Doppler
                          </Link>
                        </li>
                      </div>
                    )}
                  </li>
                  <li>
                    <span>
                      {" "}
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/advanced-usg-test-in-girinagar-bangalore`}
                        className={pathname === "/advanced-usg-test-in-girinagar-bangalore" ? "active" : ""}
                      >
                        Advanced USG
                      </Link>
                      <FaChevronRight
                        className="menuNavDropIcon"
                        onClick={() => toggleSubDropdown("advance")}
                      />
                    </span>
                    {activeSubDropdown === "advance" && (
                      <div className="innerRespMenuDropDown">
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/liver-elastography-scan-in-girinagar-bangalore`}
                            className={
                              pathname === "/liver-elastography-scan-in-girinagar-bangalore" ? "active" : ""
                            }
                          >
                            Liver elastography
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/fatty-liver-quantification-scan-in-girinagar-bangalore`}
                            className={
                              pathname === "/fatty-liver-quantification-scan-in-girinagar-bangalore"
                                ? "active"
                                : ""
                            }
                          >
                            Fatty liver quantification
                          </Link>
                        </li>
                      </div>
                    )}
                  </li>

                  <li>
                    <span>
                      {" "}
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/musculoskeletal-scan-in-girinagar-bangalore`}
                        className={
                          pathname === "/musculoskeletal-scan-in-girinagar-bangalore" ? "active" : ""
                        }
                      >
                        Musculoskeletal Scans
                      </Link>
                    </span>
                  </li>
                  <li>
                    <span>
                      {" "}
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/soft-tissue-scans-in-girinagar-bangalore`}
                        className={
                          pathname === "/soft-tissue-scans-in-girinagar-bangalore" ? "active" : ""
                        }
                      >
                        Soft Tissue Scans
                      </Link>
                    </span>
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

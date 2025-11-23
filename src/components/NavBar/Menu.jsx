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
              <div className="innerMenuDropDown">
                <li>
                  {" "}
                  <Link
                    href="/nt-scan"
                    className={pathname === "/nt-scan" ? "active" : ""}
                  >
                    NT scan
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/anomaly-scan"
                    className={pathname === "/anomaly-scan" ? "active" : ""}
                  >
                    Anomaly scan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/growth-scan"
                    className={pathname === "/growth-scan" ? "active" : ""}
                  >
                    Growth scan with Doppler
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fetal-echo"
                    className={pathname === "/fetal-echo" ? "active" : ""}
                  >
                    Fetal echo
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/fetal-urosonogram"
                    className={
                      pathname === "/fetal-urosonogram" ? "active" : ""
                    }
                  >
                    Fetal Urosonogram
                  </Link>
                </li>
              </div>
            </li>
            <li>
              <Link
                href="/advanced-usg"
                className={pathname === "/advanced-usg" ? "active" : ""}
              >
                Advanced USG
              </Link>
              <div className="innerMenuDropDown">
                <li>
                  <Link
                    href="/liver-elastography"
                    className={
                      pathname === "/liver-elastography" ? "active" : ""
                    }
                  >
                    Liver elastography
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fatty-liver-quantification"
                    className={
                      pathname === "/fatty-liver-quantification" ? "active" : ""
                    }
                  >
                    Fatty liver quantification
                  </Link>
                </li>
              </div>
            </li>
            <li>
              <Link
                href="/usg-guided-procedure"
                className={pathname === "/usg-guided-procedure" ? "active" : ""}
              >
                USG guided procedure
              </Link>
              <div className="innerMenuDropDown" id="subMenuDropDown">
                <li>
                  <Link
                    href="/fnac"
                    className={pathname === "/fnac" ? "active" : ""}
                  >
                    FNAC
                  </Link>
                </li>
                <li>
                  <Link
                    href="/body-fluid-aspiration"
                    className={
                      pathname === "/body-fluid-aspiration" ? "active" : ""
                    }
                  >
                    Body fluid aspiration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/saline-infusion-sonohysterosalphingography"
                    className={
                      pathname === "/saline-infusion-sonohysterosalphingography"
                        ? "active"
                        : ""
                    }
                  >
                    saline infusion sonohysterosalphingography
                  </Link>
                </li>
                <li>
                  <Link
                    href="/amniocentesis"
                    className={pathname === "/amniocentesis" ? "active" : ""}
                  >
                    Amniocentesis
                  </Link>
                </li>
              </div>
            </li>
            <li>
              <Link
                href="/infertility-scans"
                className={pathname === "/infertility-scans" ? "active" : ""}
              >
                Infertility Scans
              </Link>
              <div className="innerMenuDropDown">
                <li>
                  {" "}
                  <Link
                    href="/3d-pelvis"
                    className={pathname === "/3d-pelvis" ? "active" : ""}
                  >
                    3D pelvis
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/3d-base-line-scan"
                    className={
                      pathname === "/3d-base-line-scan" ? "active" : ""
                    }
                  >
                    3D Base line scan/ AFC scans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/3d-follicle-monitoring-with-doppler"
                    className={
                      pathname === "/3d-follicle-monitoring-with-doppler"
                        ? "active"
                        : ""
                    }
                  >
                    3D Follicle monitoring with Doppler.
                  </Link>
                </li>
                <li>
                  <Link
                    href="/leuteal-phase-scan"
                    className={
                      pathname === "/leuteal-phase-scan" ? "active" : ""
                    }
                  >
                    Leuteal phase scan
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/uterine-biophysical-profile"
                    className={
                      pathname === "/uterine-biophysical-profile"
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
                href="/doppler-scan"
                className={pathname === "/doppler-scan" ? "active" : ""}
              >
                Doppler
              </Link>
              <div className="innerMenuDropDown">
                <li>
                  {" "}
                  <Link
                    href="/carotid-doppler"
                    className={pathname === "/carotid-doppler" ? "active" : ""}
                  >
                    Carotid Doppler
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/renal-doppler"
                    className={pathname === "/renal-doppler" ? "active" : ""}
                  >
                    Renal Doppler
                  </Link>
                </li>
                <li>
                  <Link
                    href="/upper-and-lower-limb-doppler"
                    className={
                      pathname === "/upper-and-lower-limb-doppler"
                        ? "active"
                        : ""
                    }
                  >
                    Upper and Lower Limb Doppler
                  </Link>
                </li>
                <li>
                  <Link
                    href="/leuteal-phase-scan"
                    className={
                      pathname === "/leuteal-phase-scan" ? "active" : ""
                    }
                  >
                    Leuteal phase scan
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href="/whole-body-doppler"
                    className={
                      pathname === "/whole-body-doppler" ? "active" : ""
                    }
                  >
                    whole body Doppler
                  </Link>
                </li>
              </div>
            </li>
            <li>
              <Link
                href="/musculoskeletal-scans"
                className={
                  pathname === "/musculoskeletal-scans" ? "active" : ""
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
                      <Link
                        id="menuNavLink"
                        onClick={hideSideBar}
                        href={`/obstetrics`}
                        className={pathname === "/obstetrics" ? "active" : ""}
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
                            href={`/nt-scan`}
                            className={pathname === "/nt-scan" ? "active" : ""}
                          >
                            NT scan{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/anomaly-scan`}
                            className={
                              pathname === "/anomaly-scan" ? "active" : ""
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
                            href={`/growth-scan`}
                            className={
                              pathname === "/growth-scan" ? "active" : ""
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
                            href={`/fetal-echo`}
                            className={
                              pathname === "/fetal-echo" ? "active" : ""
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
                            href={`/fetal-urosonogram`}
                            className={
                              pathname === "/fetal-urosonogram" ? "active" : ""
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
                        href={`/email-marketing-service-in-bangalore`}
                        className={
                          pathname === "/email-marketing-service-in-bangalore"
                            ? "active"
                            : ""
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
                            href={`/fnac`}
                            className={pathname === "/fnac" ? "active" : ""}
                          >
                            FNAC
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/body-fluid-aspiration`}
                            className={
                              pathname === "/body-fluid-aspiration"
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
                            href={`/saline-infusion-sonohysterosalphingography`}
                            className={
                              pathname ===
                              "/saline-infusion-sonohysterosalphingography"
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
                            href={`/amniocentesis`}
                            className={
                              pathname === "/amniocentesis" ? "active" : ""
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
                        href={`/infertility-scans`}
                        className={
                          pathname === "/infertility-scans" ? "active" : ""
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
                            href={`/3d-pelvis`}
                            className={pathname === "/3d-pelvis" ? "active" : ""}
                          >
                            3D pelvis
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/3d-base-line-scan`}
                            className={
                              pathname === "/3d-base-line-scan" ? "active" : ""
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
                            href={`/3d-follicle-monitoring-with-doppler`}
                            className={
                              pathname === "/3d-follicle-monitoring-with-doppler" ? "active" : ""
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
                            href={`/leuteal-phase-scan`}
                            className={
                              pathname === "/leuteal-phase-scan" ? "active" : ""
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
                            href={`/uterine-biophysical-profile`}
                            className={
                              pathname === "/uterine-biophysical-profile" ? "active" : ""
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
                        href={`/doppler-scan`}
                        className={pathname === "/doppler-scan" ? "active" : ""}
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
                            href={`/carotid-doppler`}
                            className={pathname === "/carotid-doppler" ? "active" : ""}
                          >
                            Carotid Doppler
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            id="menuNavLink"
                            onClick={hideSideBar}
                            href={`/renal-doppler`}
                            className={
                              pathname === "/renal-doppler"
                                ? "active"
                                : ""
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
                            href={`/upper-and-lower-limb-doppler`}
                            className={
                              pathname ===
                              "/upper-and-lower-limb-doppler"
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
                            href={`/leuteal-phase-scan`}
                            className={
                              pathname === "/leuteal-phase-scan" ? "active" : ""
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
                            href={`/whole-body-doppler`}
                            className={
                              pathname === "/whole-body-doppler" ? "active" : ""
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
                        href={`/advanced-usg`}
                        className={pathname === "/advanced-usg" ? "active" : ""}
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
                            href={`/liver-elastography`}
                            className={
                              pathname === "/liver-elastography"
                                ? "active"
                                : ""
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
                            href={`/fatty-liver-quantification`}
                            className={
                              pathname ===
                              "/fatty-liver-quantification"
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
                        href={`/infertility Scans`}
                        className={
                          pathname === "/infertility Scans" ? "active" : ""
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
                        href={`/infertility Scans`}
                        className={
                          pathname === "/infertility Scans" ? "active" : ""
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

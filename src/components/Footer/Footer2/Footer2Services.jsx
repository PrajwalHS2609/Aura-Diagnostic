"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer2Services = () => {
  const pathname = usePathname();

  return (
    <div className="footer2Link">
      <ul>
        <h4>Our Services</h4>

        <li>
          <Link
            href={"/pathology"}
            className={pathname === "/pathology" ? "active" : ""}
          >
            Obstetrics{" "}
          </Link>
        </li>
        <li>
          <Link
            href={"/3d4d-ultrasound"}
            className={pathname === "/3d4d-ultrasound" ? "active" : ""}
          >
            Advanced USG
          </Link>
        </li>
        {/* <li>
          <Link
            href={"/"}
           className={pathname === "/" ? "active" : ""}
          >
            X-Ray
          </Link>
        </li> */}
        <li>
          <Link
            href={"/cardiology"}
            className={pathname === "/cardiology" ? "active" : ""}
          >
            USG guided procedure{" "}
          </Link>
        </li>

        <li>
          {" "}
          <Link href={"/ecg"} className={pathname === "/ecg" ? "active" : ""}>
            Infertility Scans{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link href={"/tmt"} className={pathname === "/tmt" ? "active" : ""}>
            Doppler{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link href={"/echo"} className={pathname === "/echo" ? "active" : ""}>
            Musculoskeletal Scans{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link href={"/echo"} className={pathname === "/echo" ? "active" : ""}>
            Soft Tissue Scans
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer2Services;

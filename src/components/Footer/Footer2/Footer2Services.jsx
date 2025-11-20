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
            Pathology{" "}
          </Link>
        </li>
        <li>
          <Link
            href={"/3d4d-ultrasound"}
            className={pathname === "/3d4d-ultrasound" ? "active" : ""}
          >
            3d & 4d Ultrasound
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
            Cardiology{" "}
          </Link>
        </li>

        <li>
          {" "}
          <Link href={"/ecg"} className={pathname === "/ecg" ? "active" : ""}>
            ECG{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link href={"/tmt"} className={pathname === "/tmt" ? "active" : ""}>
            TMT{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link href={"/echo"} className={pathname === "/echo" ? "active" : ""}>
            ECHO{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer2Services;

"use client";
import React from "react";
import "./ServiceSidebarLinks.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
const ServiceSidebarLinks = () => {
  const pathname = usePathname();

  return (
    <div className="serviceSideBarLinks">
      <li>
        <Link href={`/`} className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
      </li>
      <li>
        <Link
          href={`/pregnancy-scan`}
          className={
            pathname === "/pregnancy-scan"
              ? "active"
              : ""
          }
        >
          Pregnancy Scan
        </Link>
      </li>
      <li>
        <Link
          href={`/obstetrics`}
          className={pathname === "/obstetrics" ? "active" : ""}
        >
          Obstetrics
        </Link>
      </li>
      <li>
        <Link
          href={`/advanced-usg`}
          className={
            pathname === "/advanced-usg" ? "active" : ""
          }
        >
          Advanced USG{" "}
        </Link>
      </li>
      <li>
        <Link
          href={`/usg-guided-procedure`}
          className={
            pathname === "/usg-guided-procedure"
              ? "active"
              : ""
          }
        >
          USG guided procedure
        </Link>
      </li>
      <li>
        <Link
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
          href={`/doppler-scan`}
          className={
            pathname === "/doppler-scan" ? "active" : ""
          }
        >
          Doppler{" "}
        </Link>
      </li>
      <li>
        <Link
          href={`/musculoskeletal-scans`}
          className={
            pathname === "/musculoskeletal-scans" ? "active" : ""
          }
        >
          Musculoskeletal Scans
        </Link>
      </li>
      <li>
        {" "}
        <Link
          href={`/soft-tissue-scans`}
          className={
            pathname === "/soft-tissue-scans"
              ? "active"
              : ""
          }
        >
          Soft Tissue Scans
        </Link>
      </li>
    </div>
  );
};

export default ServiceSidebarLinks;

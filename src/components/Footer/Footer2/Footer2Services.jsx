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
            href={"/pregnancy-scans-in-girinagar-bangalore"}
            className={
              pathname === "/pregnancy-scans-in-girinagar-bangalore"
                ? "active"
                : ""
            }
          >
            Pregnancy Scan{" "}
          </Link>
        </li>
        <li>
          <Link
            href={"/obstetrics-scan-in-girinagar-bangalore"}
            className={
              pathname === "/obstetrics-scan-in-girinagar-bangalore"
                ? "active"
                : ""
            }
          >
            Obstetrics{" "}
          </Link>
        </li>
        <li>
          <Link
            href={"/advanced-usg-test-in-girinagar-bangalore"}
            className={
              pathname === "/advanced-usg-test-in-girinagar-bangalore"
                ? "active"
                : ""
            }
          >
            Advanced USG
          </Link>
        </li>

        <li>
          <Link
            href={"/usg-guided-procedure-in-girinagar-bangalore"}
            className={
              pathname === "/usg-guided-procedure-in-girinagar-bangalore"
                ? "active"
                : ""
            }
          >
            USG guided procedure{" "}
          </Link>
        </li>

        <li>
          {" "}
          <Link
            href={"/infertility-scan-test-in-girinagar-bangalore"}
            className={
              pathname === "/infertility-scan-test-in-girinagar-bangalore"
                ? "active"
                : ""
            }
          >
            Infertility Scans{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link
            href={"/doppler-scan-in-girinagar-bangalore"}
            className={
              pathname === "/doppler-scan-in-girinagar-bangalore"
                ? "active"
                : ""
            }
          >
            Doppler{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link
            href={"/musculoskeletal-scan-in-girinagar-bangalore"}
            className={
              pathname === "/musculoskeletal-scan-in-girinagar-bangalore"
                ? "active"
                : ""
            }
          >
            Musculoskeletal Scans{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link
            href={"/soft-tissue-scans-in-girinagar-bangalore"}
            className={
              pathname === "/soft-tissue-scans-in-girinagar-bangalore"
                ? "active"
                : ""
            }
          >
            Soft Tissue Scans
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer2Services;

"use client"
import React from "react";
import "./../../components/ServiceComponents/ServiceSidebarLinks/ServiceSidebarLinks.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ConsultationSidebar = () => {
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
          href={`/cardiology-consultation-in-girinagar-bangalore`}
          className={
            pathname ===
            "/cardiology-consultation-in-girinagar-bangalore"
              ? "active"
              : ""
          }
        >
          Cardiology Consultation
        </Link>
      </li>
      <li>
        <Link
          href={`/nephrology-consultation-in-girinagar-bangalore`}
          className={
            pathname === "/nephrology-consultation-in-girinagar-bangalore"
              ? "active"
              : ""
          }
        >
          Nephrology Consultation
        </Link>
      </li>
      <li>
        <Link
          href={`/urology-consultation-in-girinagar-bangalore`}
          className={
            pathname === "/urology-consultation-in-girinagar-bangalore"
              ? "active"
              : ""
          }
        >
          Urology Consultation
        </Link>
      </li>
    </div>
  );
};

export default ConsultationSidebar;

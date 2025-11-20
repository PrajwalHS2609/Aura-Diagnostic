"use client"
import React from "react";
import "../Footer.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer2Link = () => {
  const pathname = usePathname();

  return (
    <div className="footer2Link">
      <ul>
        <h4>Links</h4>

        <li>
          <Link href={"/about-us"} className={pathname === "/about-us" ? "active" : ""}>
            About Us
          </Link>
        </li>
        <li>
          <Link href={"/services"} className={pathname === "/services" ? "active" : ""}>
            Services
          </Link>
        </li>
        <li>
          <Link href={"/health-package"} className={pathname === "/health-package" ? "active" : ""}>
            Health Package
          </Link>
        </li>
        <li>
          <Link href={"/consultation"} className={pathname === "/consultation" ? "active" : ""}>
            Consultation
          </Link>
        </li>
        <li>
          <Link href={"/contact-us"} className={pathname === "/contact-us" ? "active" : ""}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer2Link;

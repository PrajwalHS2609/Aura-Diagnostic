"use client";
import "./globals.css";
import Footer from "./../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./../components/NavBar/NavBar";
import "./../components/style.css";
import BookPopUp from "../components/BookPopUp/BookPopUp";
import WhatsApp from "./../components/WhatsApp/WhatsApp";
import { useEffect, useState } from "react";
import Loader from './../components/Loader/Loader';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fake loading for animation effect
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <html lang="en">
      <head>
        {" "}
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>

      <body>
        <NavBar />
        {loading ? <Loader /> : children}
        <Footer />
        <BookPopUp />
        <WhatsApp />
      </body>
    </html>
  );
}

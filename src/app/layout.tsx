"use client";
import "./globals.css";
import Footer from "./../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./../components/NavBar/NavBar";
import "./../components/style.css";
import BookPopUp from "../components/BookPopUp/BookPopUp";
import WhatsApp from "./../components/WhatsApp/WhatsApp";
import { useEffect, useState } from "react";
import Loader from "./../components/Loader/Loader";
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
        <meta name="robots" content="max-image-preview:large"/>
        <meta
          name="google-site-verification"
          content="vRckV7aPf62nJjwHJ_VoC4FyBzbgGH-O3pdo3MIVaB4"
        />
        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-LD20P3DX5Z"
        ></script>
        <script>
          {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LD20P3DX5Z');`}
        </script>
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

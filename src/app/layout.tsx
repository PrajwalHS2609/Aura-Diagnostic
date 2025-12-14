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
        <meta name="robots" content="max-image-preview:large" />
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
        {/* --------------------------Rich Text---------------------------------------------------- */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalService",
            "@id":
              "https://auradiagnostics.co.in/pregnancy-scans-in-girinagar-bangalore",
            name: "Pregnancy & Fetal Scans in Girinagar, Bangalore",
            description:
              "Comprehensive pregnancy scans and fetal scans in Girinagar, Bangalore including 3D & 4D fetal scans, NT scan, anomaly scan, growth scan with Doppler, fetal echocardiography, and fetal urosonogram for expecting mothers.",
            serviceType: [
              "Pregnancy Scans",
              "Fetal Scans",
              "3D fetal scan in Bangalore",
              "4D fetal scan in Bangalore",
              "NT scan in Girinagar",
              "Anomaly scan in Girinagar",
              "Fetal growth scan Bangalore",
              "Maternity ultrasound scan Bangalore",
              "Prenatal ultrasound Bangalore",
              "Fetal Doppler scan in Girinagar",
              "Fetal Echocardiography in Girinagar",
              "Fetal Urosonogram Test in Girinagar",
            ],
            medicalSpecialty: ["Obstetrics", "Gynecology", "DiagnosticImaging"],
            url: "https://auradiagnostics.co.in/pregnancy-scans-in-girinagar-bangalore",
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Girinagar, Bangalore, Karnataka, India",
            },
            provider: {
              "@type": "MedicalOrganization",
              name: "Aura Diagnostics",
              url: "https://auradiagnostics.co.in",
              telephone: "‪+91 9611156622‬",
              logo: "https://auradiagnostics.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.18e2c931.png&w=3840&q=75",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "1st floor, Above HDFC bank (Girinagar branch), #175, BBMP PID No. 41-137-175. 5th main road. Avalhalli extension. Banashankari 3rd stage",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                postalCode: "560085",
                addressCountry: "IN",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "08:00",
                  closes: "20:00",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                telephone: "‪+91-9611156622‬",
                areaServed: "IN",
                availableLanguage: ["en", "hi", "kn"],
              },
            },
            availableService: [
              {
                "@type": "DiagnosticProcedure",
                name: "Early Pregnancy Scan in Girinagar",
                description:
                  "Early pregnancy scan to confirm gestational age, fetal heartbeat, and viability.",
              },
              {
                "@type": "DiagnosticProcedure",
                name: "Nuchal Translucency (NT) Scan in Girinagar",
                description:
                  "First trimester NT scan in Girinagar to assess risk of chromosomal abnormalities.",
                procedureType: "Nuchal translucency scan in Girinagar",
              },
              {
                "@type": "DiagnosticProcedure",
                name: "Anomaly Scan (Level 2 Fetal Scan)",
                description:
                  "Detailed fetal anomaly scan in Girinagar to examine baby’s organs, limbs, and growth.",
                procedureType: "Detailed anomaly scan Girinagar",
              },
              {
                "@type": "DiagnosticProcedure",
                name: "3D Fetal Scan in Bangalore",
                description:
                  "3D fetal scan for clear imaging of fetal features and development.",
                procedureType: "3D fetal scan in Bangalore",
              },
              {
                "@type": "DiagnosticProcedure",
                name: "4D Fetal Scan in Bangalore",
                description:
                  "4D fetal scan to visualize real-time fetal movements and bonding experience.",
                procedureType: "4D fetal scan in Bangalore",
              },
              {
                "@type": "DiagnosticProcedure",
                name: "Growth Scan with Doppler in Girinagar",
                description:
                  "Fetal growth scan with Doppler to monitor blood flow, placenta function, and baby’s well-being.",
                procedureType: "Fetal Doppler scan in Girinagar",
              },
              {
                "@type": "DiagnosticProcedure",
                name: "Fetal Echocardiography in Girinagar",
                description:
                  "Detailed fetal heart scan to evaluate cardiac structure and function.",
                procedureType: "Fetal Echocardiography in Girinagar",
              },
              {
                "@type": "DiagnosticProcedure",
                name: "Fetal Urosonogram Test in Girinagar",
                description:
                  "Fetal renal and urinary tract scan to assess kidneys, bladder, and urinary system.",
                procedureType: "Fetal urosonogram in Girinagar",
              },
            ],
            isAcceptingNewPatients: true,
            availableChannel: [
              {
                "@type": "ServiceChannel",
                name: "In-clinic Pregnancy & Fetal Scan Appointments",
                serviceUrl: "https://auradiagnostics.co.in/contact-us",
                availableLanguage: ["en", "hi", "kn"],
              },
            ],
            sameAs: [
              "https://www.facebook.com/yourclinicpage",
              "https://www.instagram.com/yourclinicpage",
              "https://www.google.com/maps?cid=YOUR_GMB_CID",
            ],
          })}
        </script>
        {/* ----------------------------------------------------------------------------------------- */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "Aura Diagnostics",
            image:
              "https://auradiagnostics.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.18e2c931.png&w=3840&q=75",
            description:
              "Led by Dr. Kiran Ramaiah (10+ years of experience), we deliver reliable healthcare and advanced diagnostics in Girinagar. From pregnancy and obstetric scans to USG-guided procedures, infertility scans, Doppler, ECG, and full blood test services with free home sample collection, we ensure safe, accurate, and patient-friendly care since 2025.",
            brand: {
              "@type": "Brand",
              name: "Aura Diagnostics",
            },
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "Rishi",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "692",
            },
          })}
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

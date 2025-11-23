import "./globals.css";
import Footer from "./../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./../components/NavBar/NavBar";
import "./../components/style.css";
import BookPopUp from "../components/BookPopUp/BookPopUp";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {" "}
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
        <BookPopUp/>
        
      </body>
    </html>
  );
}

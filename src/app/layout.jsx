import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amplop Duit",
  description: "Money Management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="max-w-screen-xl mx-auto p-6">
          <Navbar/>
        </header>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

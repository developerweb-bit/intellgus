import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Herosection from "@/components/home/Herosection/Herosection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Footer />
    </div>
  );
}

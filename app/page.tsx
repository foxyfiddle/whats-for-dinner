import React from "react";
import Header from "../component/Header";
import { Inter } from "next/font/google";
import HeroSection from "../component/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="${inter.className}">
        <Header />
        <HeroSection />
      </div>
    </>
  );
}

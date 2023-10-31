import React from "react";
import HeroSection from "./HeroSection";
import FirstProductsSection from "./FirstProductsSection";

export default function home() {
  return (
    <div className="h-[130vh] bg-primaryColor">
      <HeroSection />
      <FirstProductsSection />
    </div>
  );
}

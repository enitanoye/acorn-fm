import React from "react";
import { Badge } from "./ui/badge";

export default function HeroSectionSmall({ title, subtitle }) {
  return (
    <section
      className={`relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-28 overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[2rem] sm:text-[3.5rem] lg:text-[5rem] tracking-[-.025em] strong w-full font-bold leading-tight">
            {title}
          </p>
          <p className="text-[1.6rem] sm:text-[2rem] text-blue-100  w-full leading-[2rem] sm:leading-[3rem]">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

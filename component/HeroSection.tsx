import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className={`flex items-center justify-between h-screen px-5`}>
      {/* Left Side: <h1> */}
      <h1 className="text-left text-8xl font-black text-[#2C2C2C]">
        <span className="block">WHAT'S</span>
        <span className="block">FOR</span>
        <span className="block">DINNER?!</span>
      </h1>

      {/* Right Side: <p>, <h2>, and <button> */}
      <div className="flex flex-col items-end max-w-lg">
        <p className="text-right text-1xl font-black text-[#2C2C2C]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere.
        </p>
        <h2 className="mt-6 text-3xl font-black text-black max-md:text-4xl max-sm:text-3xl">
          CREATE YOUR FIRST RECIPE NOW
        </h2>
        <button className="mt-4 py-1 px-51 text-base text-white bg-black rounded-md cursor-pointer whitespace-nowrap">
          START NOW
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

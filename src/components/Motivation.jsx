import React from "react";
import BB from "../assets/bb.jpg";

export default function Motivation() {
  return (
    <div className="p-3 sm:p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center mt-10 sm:mt-12 md:mt-15 gap-6 md:gap-8">

      {/* Left part */}
      <div className="w-full md:w-1/2">
        <p className="text-base sm:text-lg md:text-xl px-1 sm:px-2 md:px-4 font-medium leading-snug">
          A global team of search-first content marketers{" "}
          <span className="hidden sm:inline"><br /></span>
          engineering semantic relevancy & category{" "}
          <span className="hidden sm:inline"><br /></span>
          signals for both the internet and people
        </p>
      </div>

      {/* Right part */}
      <div className="w-full md:w-1/2 md:flex md:flex-col md:items-end md:pr-10 lg:pr-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Driving Demand &{" "}
          <br />
          {/* Inline row for Discovery + Image */}
          <span className="flex items-center gap-2 sm:gap-3">
            Discovery
            <span className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] md:w-[60px] md:h-[60px] rounded-xl overflow-hidden shadow-lg flex-shrink-0">
              <img
                src={BB}
                alt="motivation"
                className="w-full h-full object-cover"
              />
            </span>
          </span>
        </h1>

        <div className="mt-3 flex gap-3 flex-wrap">
          {/* Button 1 */}
          <button className="group relative overflow-hidden border rounded-3xl px-4 py-2 bg-white cursor-pointer text-sm sm:text-base">
            <span className="block h-6 overflow-hidden">
              <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
                <span>Our Story ↗</span>
                <span>Our Story ↗</span>
              </span>
            </span>
          </button>

          {/* Button 2 */}
          <button className="group relative overflow-hidden bg-white cursor-pointer text-sm sm:text-base px-1">
            <span className="block h-6 overflow-hidden">
              <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
                <span>Our Services ↗</span>
                <span>Our Services ↗</span>
              </span>
            </span>
          </button>
        </div>
      </div>

    </div>
  );
}
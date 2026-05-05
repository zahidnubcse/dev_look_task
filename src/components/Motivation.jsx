import React from "react";
import BB from "../assets/bb.jpg";

export default function Motivation() {
  return (
    <div className="p-2 flex justify-between items-center mt-15">
      {/* Left part */}
      <div>
        <p className="text-xl p-4 font-medium">
          A global team of search-first content marketers <br />
          engineering semantic relevancy & category <br />
          signals for both the internet and people
        </p>
      </div>

      {/* Right part */}
      <div className="mr-20">
        <h1 className="text-6xl font-bold leading-tight">
          Driving Demand & <br />
          {/* Inline row for Discovery + Image */}
          <span className="flex items-center gap-3">
            Discovery
            <span className="w-[60px] h-[60px] rounded-xl overflow-hidden shadow-lg">
              <img
                src={BB}
                alt="motivation"
                className="w-full h-full object-cover"
              />
            </span>
          </span>
        </h1>

        <div className="mt-3 flex gap-3">
          {/* Button 1 */}
          <button className="group relative overflow-hidden border rounded-3xl px-4 py-2 bg-white cursor-pointer">
            <span className="block h-6 overflow-hidden">
              <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
                <span>Our Story ↗</span>
                <span>Our Story ↗</span>
              </span>
            </span>
          </button>

          {/* Button 2 */}
          <button className="group relative overflow-hidden bg-white cursor-pointer">
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

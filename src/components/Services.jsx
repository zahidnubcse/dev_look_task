import React from "react";
import BB from "../assets/bb.jpg";

import hero_1 from "../assets/hero_1.jpg";
import hero_2 from "../assets/hero_2.jpg";
import hero_3 from "../assets/hero_3.jpg";
import hero_4 from "../assets/icon_1.png";
import hero_5 from "../assets/icon_2.png";
import hero_6 from "../assets/icon_3.png";

export default function Services() {
  const leftItems = [
    { title: "Digital PR", img: hero_1 },
    { title: "Organic Social & Content", img: hero_2 },
    { title: "Search & Growth Strategy", img: hero_3 },
  ];

  const rightItems = [
    { title: "Content Experience", img: hero_4 },
    { title: "Data & Insight", img: hero_5 },
    { title: "Onsite SEO", img: hero_6 },
  ];

  const allItems = [...leftItems, ...rightItems];

  return (
    <div className="w-full px-4 sm:px-6 md:px-10">

      {/* 🔹 HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        {/* LEFT TITLE */}
        <div className="text-4xl sm:text-6xl lg:text-8xl font-semibold leading-none">
          <span className="inline-flex items-center flex-wrap gap-2 sm:gap-3">
            Our
            <span className="w-[38px] h-[38px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] rounded-xl overflow-hidden shadow-lg mt-8">
              <img src={BB} alt="" className="w-full h-full object-cover" />
            </span>
            Services
          </span>
        </div>

        {/* 🔥 DESKTOP BUTTON */}
        <div className="hidden md:flex md:justify-end w-full md:w-auto">
          <button className="group relative overflow-hidden border rounded-3xl px-4 py-2 bg-white cursor-pointer text-sm sm:text-base">
            <span className="block h-6 overflow-hidden">
              <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
                <span>View All Services ↗</span>
                <span>View All Services ↗</span>
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* 🔥 SERVICES SECTION */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

        {/* LEFT COLUMN (DESKTOP) */}
        <ul className="hidden md:block space-y-8 text-3xl lg:text-4xl font-semibold">
          {leftItems.map((item, i) => (
            <li
              key={i}
              className="relative group cursor-pointer py-6 px-6 border-b border-gray-300 overflow-hidden rounded-2xl transition-all duration-500 hover:rounded-full hover:scale-[1.02]"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-center bg-cover scale-110"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <span className="relative z-10 group-hover:text-white transition">
                {item.title}
              </span>
            </li>
          ))}
        </ul>

        {/* RIGHT COLUMN (DESKTOP) */}
        <ul className="hidden md:block space-y-8 text-3xl lg:text-4xl font-semibold text-right">
          {rightItems.map((item, i) => (
            <li
              key={i}
              className="relative group cursor-pointer py-6 px-6 border-b border-gray-300 overflow-hidden rounded-2xl transition-all duration-500 hover:rounded-full hover:scale-[1.02]"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-center bg-cover scale-110"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <span className="relative z-10 group-hover:text-white transition">
                {item.title}
              </span>
            </li>
          ))}
        </ul>

        {/* 📱 MOBILE LIST */}
        <div className="md:hidden flex flex-col gap-4">
          {allItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 border-b border-gray-300 rounded-xl"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img src={item.img} alt="" className="w-full h-full object-cover" />
              </div>

              <span className="text-lg sm:text-xl font-semibold">
                {item.title}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* 🔥 MOBILE BUTTON (BOTTOM) */}
      <div className="mt-8 md:hidden">
        <button className="group relative overflow-hidden border rounded-3xl px-4 py-3 bg-white cursor-pointer text-sm w-full">
          <span className="block h-6 overflow-hidden text-center">
            <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
              <span>View All Services ↗</span>
              <span>View All Services ↗</span>
            </span>
          </span>
        </button>
      </div>

    </div>
  );
}
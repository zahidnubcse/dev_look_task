import React, { useState } from "react";
import Img from "../assets/hero_3.jpg";
import Img2 from "../assets/hero_1.jpg";
import Img3 from "../assets/hero_2.jpg";
import Img4 from "../assets/bb.jpg";

const cards = [
  {
    image: Img2,
    author: "Ray Saddiq",
    time: "3 mins",
    title: "Rise at Seven Appoints Hollie Lovell as Senior Operations Lead",
  },
  {
    image: Img3,
    author: "Ray Saddiq",
    time: "2 mins",
    title: "Rise at Seven Exits Sheffield and Triples Manchester as new HQ",
  },
  {
    image: Img4,
    author: "Carrie Rose",
    time: "2 mins",
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    tag: "News",
  },
];

export default function Testimonial() {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  return (
    <>
      {/* Custom Cursor */}
      <div
        style={{
          position: "fixed",
          left: cursor.x,
          top: cursor.y,
          transform: "translate(-50%, -50%)",
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: " #009688",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          fontWeight: 600,
          pointerEvents: "none",
          zIndex: 9999,
          opacity: cursor.visible ? 1 : 0,
          scale: cursor.visible ? "1" : "0",
          transition:
            "opacity 0.2s ease, scale 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        ↗
      </div>

      <section className="mt-40 px-6 lg:px-10">

        {/* Top Heading */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          <div className="text-4xl sm:text-6xl lg:text-8xl font-semibold leading-none">
            <span className="inline-flex items-center flex-wrap gap-2 sm:gap-3">
              What's
              <span className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] rounded-xl overflow-hidden shadow-lg mt-4 sm:mt-8">
                <img
                  src={Img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </span>
              New
            </span>
          </div>

          <div>
            <button className="group relative overflow-hidden border border-black rounded-full px-6 py-3 bg-white cursor-pointer text-sm sm:text-base font-medium w-full">
              <span className="block h-6 overflow-hidden">
                <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
                  <span>↗ Explore more thoughts</span>
                  <span>↗ Explore more thoughts</span>
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-200 mt-8" />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group"
              style={{ cursor: "none" }}
              onMouseMove={(e) =>
                setCursor({ x: e.clientX, y: e.clientY, visible: true })
              }
              onMouseEnter={() =>
                setCursor((prev) => ({ ...prev, visible: true }))
              }
              onMouseLeave={() =>
                setCursor((prev) => ({ ...prev, visible: false }))
              }
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-[30px]">
                <img
                  src={card.image}
                  alt=""
                  className="w-full h-[500px] object-cover transition-all duration-700
                    group-hover:scale-105 group-hover:blur-sm group-hover:brightness-75"
                />
                {card.tag && (
                  <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">
                    {card.tag}
                  </span>
                )}
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mt-5">
                <div className="flex items-center gap-2 bg-[#f3f3f3] rounded-full px-3 py-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden">
                    <img
                      src={card.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">{card.author}</span>
                </div>
                <div className="bg-[#f3f3f3] rounded-full px-3 py-2 text-sm font-medium">
                  ⏱ {card.time}
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl leading-tight font-semibold mt-5 max-w-[95%] transition-all duration-300 group-hover:translate-x-1">
                {card.title}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
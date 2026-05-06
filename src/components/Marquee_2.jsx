import React from "react";
import Image_1 from "../assets/hero_1.jpg";
import Image_2 from "../assets/hero_2.jpg";
import Image_3 from "../assets/hero_3.jpg";
import zahid from "../assets/zahid_hasan.png";
import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default || MarqueeModule;

export default function Marquee_2() {
  const items = [
    { text: "Hello! I'm Zahid Hasan", img: zahid },
    { text: "I am a Web Developer", img: Image_1 },
    { text: "I build modern UI/UX", img: Image_2 },
    { text: "I create fast web apps", img: Image_3 },
  ];

  return (
    <div className="relative mt-20 w-full overflow-hidden py-6 bg-white group">

      {/* MARQUEE — sits behind */}
      <div className="relative z-0">
        <Marquee speed={60} gradient={false}>
          <div className="flex items-center gap-16 md:gap-24 px-4">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-4 whitespace-nowrap">
                <h1 className="text-6xl sm:text-9xl md:text-[9rem] font-semibold leading-none">
                  {item.text}
                </h1>
                <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl overflow-hidden shadow-md">
                  <img src={item.img} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* BUTTON — sits in front via z-10, pointer-events handled correctly */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <button className="
          pointer-events-auto
          opacity-0 group-hover:opacity-100
          scale-90 group-hover:scale-100
          transition-all duration-300 ease-out
          bg-black text-white px-6 py-3 rounded-full
          text-sm sm:text-base shadow-xl
          hover:bg-gray-800
        ">
          Send Us Your Brief
        </button>
      </div>

    </div>
  );
}
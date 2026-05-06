import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function MarqueeGSAP() {
  const containerRef = useRef(null);

  const items = [
    "Modern Websites",
    "UI/UX Design",
    "Fast Web Apps",
    "SEO Optimization",
    "Mobile First Development",
  ];

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = gsap.utils.toArray(container.children);

    let totalWidth = 0;
    elements.forEach((el) => {
      totalWidth += el.offsetWidth + 40; // account for gap-10 (40px)
    });

    gsap.set(elements, { x: 0 });

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "none" },
    });

    elements.forEach((el) => {
      tl.to(
        el,
        {
          x: -totalWidth,
          duration: 10,
        },
        0
      );
    });

    return () => tl.kill();
  }, []);

  return (
    <div className="w-full mt-4 sm:mt-6">

      {/* TOP TEXT */}
      <p className="text-center text-gray-800 text-xs sm:text-sm md:text-base font-medium mb-2">
        The agency behind
      </p>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden bg-transparent py-2 sm:py-3 rounded-2xl">

        {/* LEFT BLUR */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 sm:w-16 backdrop-blur-sm z-10" />

        {/* RIGHT BLUR */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 sm:w-16 backdrop-blur-sm z-10" />

        <div
          ref={containerRef}
          className="flex gap-8 sm:gap-10 w-max items-center h-10 sm:h-12"
        >
          {/* original */}
          {items.map((item, i) => (
            <span
              key={i}
              className="text-gray-800 whitespace-nowrap font-medium text-xs sm:text-sm md:text-base"
            >
              {item}
            </span>
          ))}

          {/* duplicate */}
          {items.map((item, i) => (
            <span
              key={`dup-${i}`}
              className="text-gray-800 whitespace-nowrap font-medium text-xs sm:text-sm md:text-base"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
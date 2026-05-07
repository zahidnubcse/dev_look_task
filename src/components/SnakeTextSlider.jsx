import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SnakeText() {
  const sliderRef = useRef(null);

  useEffect(() => {
    let currentX = 0;
    let targetX = 0;
    let lastScroll = window.scrollY;

    const update = () => {
      currentX += (targetX - currentX) * 0.08;

      gsap.set(sliderRef.current, {
        x: currentX,
      });

      requestAnimationFrame(update);
    };

    update();

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // SCROLL DOWN
      if (currentScroll > lastScroll) {
        targetX -= 120;
      }

      // SCROLL UP
      else {
        targetX += 120;
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="overflow-hidden bg-white py-20">
      <div
        ref={sliderRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        {[...Array(6)].map((_, i) => (
          <h1
            key={i}
            className="text-[12vw] font-black uppercase tracking-tight text-black mr-20"
          >
            READY TO RISE AT SEVEN
          </h1>
        ))}
      </div>
    </section>
  );
}
import React, { useEffect, useRef } from "react";

export default function SnakeText() {
  const lettersRef = useRef([]);
  const target = useRef(0);
  const current = useRef(0);
  const lastScroll = useRef(0);
  const rafRef = useRef(null);
  const started = useRef(false);

  const text = "READY TO RISE AT SEVEN";

  useEffect(() => {
    const start = () => {
      if (started.current) return;
      started.current = true;

      lastScroll.current = window.scrollY;

      const animate = () => {
        current.current += (target.current - current.current) * 0.12;

        const time = Date.now() * 0.0025;

        lettersRef.current.forEach((el, i) => {
          if (!el) return;

          const wave = Math.sin(time + i * 0.25) * 10;

          el.style.transform = `translate3d(${current.current + wave}px, 0, 0)`;
        });

        rafRef.current = requestAnimationFrame(animate);
      };

      rafRef.current = requestAnimationFrame(animate);
    };

    // wait until DOM paints (CRITICAL FIX)
    const frame = requestAnimationFrame(start);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const diff = scrollY - lastScroll.current;

      // smoother control (prevents “invisible jump” bug)
      target.current += diff * -0.7;

      lastScroll.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
      started.current = false;
    };
  }, []);

  return (
    <section className="overflow-hidden bg-white py-40">
      <div className="flex justify-center whitespace-nowrap font-black uppercase leading-none text-black">
        {text.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            className="inline-block text-8xl sm:text-9xl md:text-[10rem] will-change-transform"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </section>
  );
}
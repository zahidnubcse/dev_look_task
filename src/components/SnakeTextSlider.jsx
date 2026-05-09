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
    const init = () => {
      if (started.current) return; // prevent double init
      started.current = true;

      target.current = 0;
      current.current = 0;
      lastScroll.current = window.scrollY;

      const animate = () => {
        current.current += (target.current - current.current) * 0.1;

        const time = Date.now() * 0.003;

        lettersRef.current.forEach((el, i) => {
          if (!el) return; // IMPORTANT safety fix

          const wave = Math.sin(time + i * 0.3) * 14;

          el.style.transform = `translate3d(${current.current + wave}px, 0, 0)`;
        });

        rafRef.current = requestAnimationFrame(animate);
      };

      rafRef.current = requestAnimationFrame(animate);
    };

    // ✅ wait for layout paint (important fix)
    const frame = requestAnimationFrame(init);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const diff = scrollY - lastScroll.current;

      target.current += diff * -0.8;

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
      <div className="flex flex-nowrap justify-center whitespace-nowrap font-black uppercase leading-none text-black">
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
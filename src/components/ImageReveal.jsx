import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    num: "01",
    label: "PIONEERS",
    title: ["Search", "First."],
    body: "We engineer semantic relevancy before anyone else moves.",
    bg: "#0e0e0e",
    text: "#f5f0e8",
    accent: "#ff3c00",
    ghost: "rgba(255,255,255,0.05)",
    border: "rgba(255,255,255,0.08)",
  },
  {
    num: "02",
    label: "STRATEGY",
    title: ["Category", "Leaders."],
    body: "On every searchable platform — Google, TikTok, ChatGPT, Reddit.",
    bg: "#f5f0e8",
    text: "#0e0e0e",
    accent: "#ff3c00",
    ghost: "rgba(14,14,14,0.04)",
    border: "rgba(14,14,14,0.08)",
  },
  {
    num: "03",
    label: "SPEED",
    title: ["Ideas to", "Result."],
    body: "From concept to live in 60 minutes. We chase consumers, not algorithms.",
    bg: "#ff3c00",
    text: "#f5f0e8",
    accent: "#e8ff00",
    ghost: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.15)",
  },
  {
    num: "04",
    label: "LEGACY",
    title: ["Legacy in", "the Making."],
    body: "Paving the path others follow three years from now.",
    bg: "#0e0e0e",
    text: "#f5f0e8",
    accent: "#e8ff00",
    ghost: "rgba(255,255,255,0.05)",
    border: "rgba(255,255,255,0.08)",
  },
];

export default function ScrollCardFlip() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    const isMobile = window.innerWidth < 640;

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      const cardsEl = cardRefs.current;

      // INITIAL STACK
      cardsEl.forEach((card, i) => {
        gsap.set(card, {
          y: i * 30,
          scale: 1 - i * 0.04,
          zIndex: cards.length - i,
          opacity: 1,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: isMobile
            ? `+=${cards.length * 650}`
            : `+=${cards.length * 1100}`,
          scrub: 1.2,
          pin: true,
        },
      });

      cardsEl.forEach((card, i) => {
        tl.to(
          card,
          {
            y: -180,
            scale: 1.05,
            rotate: i % 2 === 0 ? -8 : 8,
            duration: 1,
            ease: "power3.inOut",
          },
          i
        ).to(
          card,
          {
            y: isMobile ? -500 : -900,
            opacity: 0,
            scale: 0.8,
            rotate: i % 2 === 0 ? -18 : 18,
            duration: 1,
            ease: "power4.inOut",
          },
          i + 0.45
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-white">
      <section
        ref={sectionRef}
        className="relative flex h-screen items-center justify-center overflow-hidden px-4"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {cards.map((c, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="absolute flex w-[92vw] max-w-[700px] h-[85vh] max-h-[820px] flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.18)] will-change-transform"
              style={{
                background: c.bg,
                color: c.text,
              }}
            >
              {/* WATERMARK */}
              <div
                className="absolute -bottom-6 -right-3 select-none font-black text-[7rem] sm:text-[10rem]"
                style={{ color: c.ghost }}
              >
                {c.num}
              </div>

              {/* TOP */}
              <div className="flex items-center justify-between">
                <span
                  className="rounded-md px-3 py-1 text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.15em]"
                  style={{
                    background:
                      c.bg === "#f5f0e8"
                        ? "rgba(0,0,0,0.06)"
                        : "rgba(255,255,255,0.08)",
                    color: c.accent,
                  }}
                >
                  {c.label}
                </span>

                <span className="text-[0.7rem] opacity-40">
                  {c.num}/04
                </span>
              </div>

              {/* TITLE */}
              <div>
                <h2 className="text-[2.2rem] sm:text-[3.5rem] md:text-[4.5rem] font-black uppercase leading-[0.9]">
                  {c.title[0]}
                  <br />
                  <span className="italic" style={{ color: c.accent }}>
                    {c.title[1]}
                  </span>
                </h2>

                <p className="mt-4 max-w-[30ch] text-[0.9rem] sm:text-[1rem] opacity-60 leading-7">
                  {c.body}
                </p>
              </div>

              {/* FOOTER */}
              <div
                className="flex items-center justify-between border-t pt-4"
                style={{ borderColor: c.border }}
              >
                <span className="text-[0.7rem] opacity-40">
                  Rise Studio
                </span>

                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full border"
                  style={{ borderColor: c.border }}
                >
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ background: c.accent }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Img_1 from "../assets/hero_1.jpg";
import Img_2 from "../assets/hero_2.jpg";
import Img_3 from "../assets/hero_3.jpg";
import Img_4 from "../assets/bb.jpg";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    src: Img_1,
    heading: "Pioneers",
    body: "We paved the path for creative SEO and multi-channel search.",
    moveX: "-38%",
    moveY: "-25%",
    moveZ: 320,
    moveR: -16,
    scale: 0.88,
  },
  {
    src: Img_2,
    heading: "Creators",
    body: "Building the industry narrative that others follow later.",
    moveX: "38%",
    moveY: "-22%",
    moveZ: 340,
    moveR: 14,
    scale: 0.9,
  },
  {
    src: Img_3,
    heading: "Disruptors",
    body: "Search-first ideas that reshape digital culture.",
    moveX: "-35%",
    moveY: "28%",
    moveZ: 300,
    moveR: -18,
    scale: 0.87,
  },
  {
    src: Img_4,
    heading: "Leaders",
    body: "Winning attention across Google, TikTok, Reddit & AI.",
    moveX: "35%",
    moveY: "26%",
    moveZ: 330,
    moveR: 16,
    scale: 0.92,
  },
];

export default function LegacyMaking() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    // 3D perspective
    gsap.set(sectionRef.current, {
      perspective: 1400,
    });

    // CARDS INITIAL STATE
    cardRefs.current.forEach((card, i) => {
      gsap.set(card, {
        x: 0,
        y: 0,
        z: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        transformOrigin: "center center",
        zIndex: i + 1,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=4500",
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // FLY OUT CARDS
    cardRefs.current.forEach((card, i) => {
      tl.to(
        card,
        {
          x: CARDS[i].moveX,
          y: CARDS[i].moveY,
          z: CARDS[i].moveZ,
          rotation: CARDS[i].moveR,
          scale: CARDS[i].scale,
          duration: 1.2,
          ease: "power4.out",
        },
        i * 0.4
      );
    });

    // HOVER EFFECT
    cardRefs.current.forEach((card) => {
      const move = (e) => {
        const rect = card.getBoundingClientRect();

        const x = (e.clientX - rect.left - rect.width / 2) / 18;
        const y = (e.clientY - rect.top - rect.height / 2) / 18;

        gsap.to(card, {
          rotationY: x * 2,
          rotationX: -y * 2,
          y: "-12px",
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const leave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle,#000 1px,transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* FIXED TITLE (NO ANIMATION) */}
      <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
          Legacy In The Making
        </h2>

        <p className="mt-2 text-sm md:text-base text-neutral-500">
          Scroll to watch cards fly in 3D space
        </p>
      </div>

      {/* CARDS */}
      <div className="relative w-full h-full flex items-center justify-center lg:pt-40">
        {CARDS.map((card, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="absolute will-change-transform cursor-grab"
          >
            <div
              className="
                bg-white
                rounded-[32px]

                w-[360px]
                sm:w-[420px]
                md:w-[520px]
                lg:w-[600px]

                p-7 md:p-8

                shadow-[0_25px_80px_rgba(0,0,0,0.18)]
                border border-neutral-200
              "
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-[26px] aspect-[16/10]">
                <img
                  src={card.src}
                  alt={card.heading}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="pt-10 md:pt-12 space-y-4">
                <h3 className="text-4xl md:text-6xl font-black text-black tracking-tight">
                  {card.heading}
                </h3>

                <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                  {card.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
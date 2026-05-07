import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Img_1 from "../assets/hero_1.jpg";
import Img_2 from "../assets/hero_2.jpg";
import Img_3 from "../assets/hero_3.jpg";
import Img_4 from "../assets/bb.jpg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CARDS = [
  {
    src: Img_1,
    heading: "Pioneers",
    body: "We paved the path for creative SEO and multi-channel search.",
    moveX: "-45%",
    moveY: "-28%",
    moveR: -10,
  },

  {
    src: Img_2,
    heading: "Creators",
    body: "Building the industry narrative that others follow later.",
    moveX: "42%",
    moveY: "-24%",
    moveR: 8,
  },

  {
    src: Img_3,
    heading: "Disruptors",
    body: "Search-first ideas that reshape digital culture.",
    moveX: "-38%",
    moveY: "28%",
    moveR: -12,
  },

  {
    src: Img_4,
    heading: "Leaders",
    body: "Winning attention across Google, TikTok, Reddit & AI.",
    moveX: "36%",
    moveY: "24%",
    moveR: 10,
  },
];

export default function LegacyMaking() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const titleRef = useRef(null);

  useGSAP(() => {
    // TITLE
    gsap.set(titleRef.current, {
      opacity: 0,
      y: 30,
    });

    // ALL CARDS START IN CENTER
    cardRefs.current.forEach((card, i) => {
      gsap.set(card, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        visibility: "visible",
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
      },
    });

    // TITLE REVEAL
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    // CARDS MOVE ONE BY ONE
    cardRefs.current.forEach((card, i) => {
      tl.to(
        card,
        {
          x: CARDS[i].moveX,
          y: CARDS[i].moveY,
          rotation: CARDS[i].moveR,
          duration: 1,
          ease: "power3.out",
        },
        i * 0.55
      );
    });

    // HOVER EFFECT
    cardRefs.current.forEach((card) => {
      const move = (e) => {
        const rect = card.getBoundingClientRect();

        const x =
          (e.clientX - (rect.left + rect.width / 2)) /
          (rect.width / 2);

        const y =
          (e.clientY - (rect.top + rect.height / 2)) /
          (rect.height / 2);

        gsap.to(card, {
          rotationY: x * 8,
          rotationX: -y * 8,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const leave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
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
      className="
        relative
        h-screen
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      {/* GRID */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
          pointer-events-none
        "
        style={{
          backgroundImage:
            "radial-gradient(circle,#000 1px,transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* TITLE */}

      <div
        ref={titleRef}
        className="
          absolute
          top-10
          left-1/2
          -translate-x-1/2
          z-50
          text-center
        "
      >
        <h2
          className="
            text-2xl
            md:text-4xl
            font-bold
            tracking-tight
            text-black
          "
        >
          Legacy In The Making
        </h2>

        <p
          className="
            mt-3
            text-sm
            md:text-base
            text-neutral-500
          "
        >
          Scroll to spread the cards
        </p>
      </div>

      {/* CARDS */}

      <div className="relative w-full h-full flex items-center justify-center">
        {CARDS.map((card, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="
              absolute
              invisible
              will-change-transform
              cursor-grab
            "
          >
            <div
              className="
                bg-white
                rounded-[28px]

                w-[280px]
                sm:w-[340px]
                md:w-[420px]
                lg:w-[500px]

                p-5
                md:p-6

                shadow-[0_15px_50px_rgba(0,0,0,0.12)]
                border
                border-neutral-200
              "
            >
              {/* IMAGE */}

              <div
                className="
                  overflow-hidden
                  rounded-[22px]
                  aspect-[4/3]
                "
              >
                <img
                  src={card.src}
                  alt={card.heading}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />
              </div>

              {/* CONTENT */}

              <div className="pt-5">
                <h3
                  className="
                    text-3xl
                    md:text-5xl
                    font-black
                    tracking-tight
                    text-black
                  "
                >
                  {card.heading}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    md:text-base
                    leading-relaxed
                    text-neutral-600
                  "
                >
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
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function StickyScrollAdvanced({ content }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      Math.floor(v * content.length),
      content.length - 1
    );
    setActiveIndex(idx);
  });

  return (
<div
  ref={containerRef}
  className="relative w-full mx-auto max-w-[1450px] rounded-2xl bg-[#0a0a0a]"
  style={{ height: `${content.length * 100}vh` }}
>

      {/* STICKY WRAPPER */}
   <div className="sticky top-0 h-screen flex overflow-hidden mx-8 rounded-2xl">

        {/* LEFT — sticky info panel */}
        <div className="w-[38%] h-full flex flex-col justify-between px-10 py-14 border-r border-white/10">

          {/* Top: counter */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-[0.25em] font-semibold mb-8">
              Featured Work
            </p>
            <div className="flex items-end gap-1">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[7rem] font-black leading-none text-white"
                style={{ lineHeight: 1 }}
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </motion.span>
              <span className="text-white/20 text-2xl font-black mb-3">
                /{String(content.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Middle: animated project info */}
          <div className="flex-1 flex flex-col justify-center">
            {content.map((item, i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: activeIndex === i ? 1 : 0,
                  y: activeIndex === i ? 0 : activeIndex > i ? -20 : 20,
                  pointerEvents: activeIndex === i ? "auto" : "none",
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute"
              >
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-semibold mb-3">
                  {item.client}
                </p>
                <h2 className="text-white text-3xl font-black leading-tight mb-6">
                  {item.title}
                </h2>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-black" style={{ color: item.accent }}>
                    {item.stat}
                  </span>
                  <span className="text-white/40 text-sm">{item.statLabel}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-white/20 text-white/50 px-3 py-1 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom: progress bar */}
          <div className="space-y-3">
            {content.map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-1 h-[1px] bg-white/10 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-white"
                    animate={{ width: activeIndex === i ? "100%" : activeIndex > i ? "100%" : "0%" }}
                    transition={{ duration: 0.4 }}
                    style={{ opacity: activeIndex === i ? 1 : activeIndex > i ? 0.3 : 0 }}
                  />
                </div>
                <span className={`text-[10px] font-semibold tabular-nums transition-colors duration-300 ${activeIndex === i ? "text-white" : "text-white/20"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — image panel, crossfades */}
        <div className="w-[62%] h-full relative">
          {content.map((item, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              animate={{ opacity: activeIndex === i ? 1 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Image */}
              <div className="absolute inset-0">{item.content}</div>

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0a0a0a]/30" />

              {/* Category badge */}
              <div className="absolute top-8 right-8">
                <span
                  className="text-xs font-semibold uppercase tracking-widest px-4 py-2"
                  style={{
                    background: item.accent + "18",
                    color: item.accent,
                    border: `1px solid ${item.accent}40`,
                  }}
                >
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
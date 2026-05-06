import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

export default function StickyScrollAdvanced({ content }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(Math.floor(v * content.length), content.length - 1);
    setActiveIndex(idx);
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full mx-auto max-w-[1450px] rounded-2xl bg-[#0a0a0a]"
      style={{ height: `${content.length * 100}vh` }}
    >
      {/* STICKY WRAPPER */}
      <div className="sticky top-0 h-screen flex flex-col md:flex-row overflow-hidden rounded-2xl">

        {/* ── MOBILE: stacked layout ── */}
        {/* LEFT — info panel */}
        <div className="w-full md:w-[38%] h-auto md:h-full flex flex-col justify-between px-4 sm:px-6 md:px-10 py-5 sm:py-8 md:py-14 border-b md:border-b-0 md:border-r border-white/10">

          {/* Counter */}
          <div>
            <p className="text-white/30 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold mb-3 sm:mb-6 md:mb-8">
              Featured Work
            </p>
            <div className="flex items-end gap-1">
              <motion.span
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-black leading-none text-white"
                style={{
                  fontSize: isMobile ? "3.5rem" : "7rem",
                  lineHeight: 1,
                }}
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </motion.span>
              <span className="text-white/20 text-lg sm:text-2xl font-black mb-2 sm:mb-3">
                /{String(content.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Animated project info */}
          <div className="flex-1 flex flex-col justify-center relative min-h-[140px] sm:min-h-[180px] md:min-h-0">
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
                <p className="text-white/40 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold mb-2 sm:mb-3">
                  {item.client}
                </p>
                <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-black leading-tight mb-3 sm:mb-5 md:mb-6">
                  {item.title}
                </h2>
                <div className="flex items-baseline gap-2 mb-3 sm:mb-5 md:mb-6">
                  <span
                    className="text-3xl sm:text-4xl md:text-5xl font-black"
                    style={{ color: item.accent }}
                  >
                    {item.stat}
                  </span>
                  <span className="text-white/40 text-xs sm:text-sm">
                    {item.statLabel}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] sm:text-xs border border-white/20 text-white/50 px-2 sm:px-3 py-0.5 sm:py-1 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="space-y-2 sm:space-y-3">
            {content.map((_, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-3">
                <div className="flex-1 h-[1px] bg-white/10 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-white"
                    animate={{
                      width:
                        activeIndex === i
                          ? "100%"
                          : activeIndex > i
                          ? "100%"
                          : "0%",
                    }}
                    transition={{ duration: 0.4 }}
                    style={{
                      opacity:
                        activeIndex === i ? 1 : activeIndex > i ? 0.3 : 0,
                    }}
                  />
                </div>
                <span
                  className={`text-[9px] sm:text-[10px] font-semibold tabular-nums transition-colors duration-300 ${
                    activeIndex === i ? "text-white" : "text-white/20"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — image panel */}
        <div className="w-full md:w-[62%] h-[40vh] sm:h-[50vh] md:h-full relative">
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
              <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8">
                <span
                  className="text-[9px] sm:text-xs font-semibold uppercase tracking-widest px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2"
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
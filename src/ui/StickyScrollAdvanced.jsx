// import React, { useRef, useState, useEffect, useCallback } from "react";
// import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// export default function StickyScrollAdvanced({ content }) {
//   const containerRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const rightRef = useRef(null);
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
//   const [showCursor, setShowCursor] = useState(false);

//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 640);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   const handleMouseMove = (e) => {
//     if (!rightRef.current) return;
//     const rect = rightRef.current.getBoundingClientRect();
//     setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//   };

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   useMotionValueEvent(scrollYProgress, "change", (v) => {
//     if (isMobile) return;
//     const idx = Math.min(Math.floor(v * content.length), content.length - 1);
//     setActiveIndex(idx);
//   });

//   const active = content[activeIndex];

//   const goPrev = () => setActiveIndex((i) => Math.max(0, i - 1));
//   const goNext = () => setActiveIndex((i) => Math.min(content.length - 1, i + 1));

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Barlow:wght@400;500;600;700&display=swap');

//         .r7 * { box-sizing: border-box; margin: 0; padding: 0; }
//         .r7 { font-family: 'Barlow', sans-serif; background: transparent; color: #111; }

//         /* ── STICKY SHELL ── */
//         .r7-sticky {
//           position: sticky;
//           top: 0;
//           height: 100vh;
//           max-height: 700px;
//           display: flex;
//           border-radius: 16px;
//           overflow: hidden;
//           box-shadow: 0 2px 40px rgba(0,0,0,0.12);
//         }

//         /* ── LEFT ── */
//         .r7-left {
//           flex: 0 0 42%;
//           background: #111;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//           padding: 40px 40px 36px;
//           border-right: 1px solid rgba(255,255,255,0.07);
//           overflow: hidden;
//         }
//         .r7-label {
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: 0.22em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.35);
//         }
//         .r7-mid {
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           position: relative;
//           min-height: 220px;
//           margin: 28px 0;
//         }
//         .r7-card {
//           position: absolute;
//           width: 100%;
//         }
//         .r7-client-row {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           margin-bottom: 18px;
//         }
//         .r7-client {
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.45);
//         }
//         .r7-pill {
//           font-size: 8px;
//           font-weight: 700;
//           letter-spacing: 0.14em;
//           text-transform: uppercase;
//           padding: 4px 10px;
//           border-radius: 2px;
//         }
//         .r7-headline {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: clamp(1.6rem, 3vw, 2.6rem);
//           font-weight: 900;
//           line-height: 1.05;
//           letter-spacing: -0.01em;
//           text-transform: uppercase;
//           color: #fff;
//           margin-bottom: 24px;
//         }
//         .r7-stat {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: clamp(2.4rem, 4.5vw, 4rem);
//           font-weight: 900;
//           line-height: 1;
//           letter-spacing: -0.04em;
//         }
//         .r7-stat-lbl {
//           font-size: 10px;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 0.14em;
//           color: rgba(255,255,255,0.4);
//           margin-left: 8px;
//         }
//         .r7-rule {
//           height: 3px;
//           width: 40px;
//           margin-top: 12px;
//           border-radius: 2px;
//         }
//         .r7-tags {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 7px;
//           margin-top: 20px;
//         }
//         .r7-tag {
//           font-size: 8px;
//           font-weight: 600;
//           letter-spacing: 0.15em;
//           text-transform: uppercase;
//           color: rgba(255,255,255,0.45);
//           border: 1px solid rgba(255,255,255,0.15);
//           padding: 5px 11px;
//         }
//         .r7-bottom {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }
//         .r7-dots {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }
//         .r7-dot-item {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 4px;
//         }
//         .r7-dot-num {
//           font-size: 8px;
//           font-weight: 700;
//           letter-spacing: 0.1em;
//           color: rgba(255,255,255,0.25);
//           transition: color 0.3s;
//         }
//         .r7-dot-num.on { color: rgba(255,255,255,0.8); }
//         .r7-cta {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           color: #fff;
//           background: none;
//           border: none;
//           border-bottom: 1.5px solid rgba(255,255,255,0.5);
//           padding-bottom: 3px;
//           cursor: pointer;
//           transition: opacity 0.2s;
//         }
//         .r7-cta:hover { opacity: 0.5; }

//         /* ── MOBILE NAV ── */
//         .r7-mobile-nav {
//           display: none;
//           align-items: center;
//           justify-content: center;
//           gap: 12px;
//           padding-bottom: 14px;
//         }
//         .r7-mobile-btn {
//           width: 34px; height: 34px; border-radius: 50%;
//           background: rgba(255,255,255,0.08);
//           border: 1px solid rgba(255,255,255,0.15);
//           color: rgba(255,255,255,0.6);
//           font-size: 18px;
//           display: flex; align-items: center; justify-content: center;
//           cursor: pointer; transition: background 0.2s;
//           line-height: 1;
//         }
//         .r7-mobile-btn:hover { background: rgba(255,255,255,0.16); }
//         .r7-mobile-idx {
//           font-size: 9px; font-weight: 700; letter-spacing: 0.15em;
//           color: rgba(255,255,255,0.4); min-width: 44px; text-align: center;
//         }

//         /* ── RIGHT ── */
//         .r7-right {
//           flex: 1;
//           position: relative;
//           overflow: hidden;
//           background: #1c1c1c;
//         }
//         .r7-slide { position: absolute; inset: 0; }
//         .r7-slide-inner { position: absolute; inset: 0; }
//         .r7-img-gradient {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to right, rgba(255,255,255,0.04) 0%, transparent 22%);
//         }
//         .r7-slide-counter {
//           position: absolute;
//           top: 24px; left: 24px;
//           font-size: 9px; font-weight: 700; letter-spacing: 0.24em;
//           text-transform: uppercase; color: rgba(255,255,255,0.55);
//           background: rgba(0,0,0,0.35); padding: 5px 12px; border-radius: 2px;
//         }
//         .r7-slide-footer {
//           position: absolute;
//           bottom: 0; left: 0; right: 0;
//           padding: 28px;
//           background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%);
//           display: flex; align-items: flex-end; justify-content: space-between;
//         }
//         .r7-slide-client {
//           font-size: 9px; font-weight: 600; letter-spacing: 0.2em;
//           text-transform: uppercase; color: rgba(255,255,255,0.45); margin-bottom: 3px;
//         }
//         .r7-slide-cat {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 1rem; font-weight: 700;
//           text-transform: uppercase; letter-spacing: 0.06em; color: #fff;
//         }
//         .r7-stat-chip {
//           display: flex; flex-direction: column; align-items: center;
//           padding: 8px 16px; border-radius: 2px; flex-shrink: 0;
//         }
//         .r7-chip-num {
//           font-family: 'Barlow Condensed', sans-serif;
//           font-size: 1.4rem; font-weight: 900; line-height: 1;
//           color: #000; letter-spacing: -0.03em;
//         }
//         .r7-chip-lbl {
//           font-size: 7px; font-weight: 700; letter-spacing: 0.12em;
//           text-transform: uppercase; color: rgba(0,0,0,0.5); margin-top: 2px;
//         }
//         .r7-progress-bar {
//           position: absolute; bottom: 0; left: 0; right: 0;
//           height: 3px; background: rgba(255,255,255,0.08);
//         }

//         /* ── TABLET ── */
//         @media (max-width: 900px) {
//           .r7-left { flex: 0 0 46%; padding: 28px 28px 24px; }
//         }

//         /* ── MOBILE ── */
//         @media (max-width: 639px) {
//           .r7-sticky {
//             flex-direction: column;
//             height: auto;
//             max-height: none;
//             position: relative;
//           }
//           .r7-left {
//             flex: none;
//             border-right: none;
//             border-bottom: 1px solid rgba(255,255,255,0.07);
//             padding: 24px 20px 20px;
//           }
//           .r7-mid { min-height: 180px; margin: 18px 0 0; }
//           .r7-right { flex: none; height: 52vw; min-height: 200px; }
//           .r7-cta { display: none; }
//           .r7-mobile-nav { display: flex; }
//           .r7-slide-footer { padding: 16px 18px; }
//         }
//       `}</style>

//       <div className="r7">
//         {/* Scroll spacer — hidden on mobile */}
//         <div
//           ref={containerRef}
//           style={{ position: "relative", height: isMobile ? "auto" : `${content.length * 100}vh` }}
//         >
//           <div className="r7-sticky">

//             {/* ── LEFT ── */}
//             <div className="r7-left">

//               <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//                 <span className="r7-label">Our Work</span>
//                 <motion.span
//                   key={activeIndex}
//                   initial={{ opacity: 0, x: 6 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="r7-label"
//                   style={{ color: active.accent }}
//                 >
//                   {active.category}
//                 </motion.span>
//               </div>

//               <div className="r7-mid">
//                 {content.map((item, i) => (
//                   <motion.div
//                     key={i}
//                     className="r7-card"
//                     animate={{
//                       opacity: activeIndex === i ? 1 : 0,
//                       y: activeIndex === i ? 0 : activeIndex > i ? -24 : 24,
//                       pointerEvents: activeIndex === i ? "auto" : "none",
//                     }}
//                     transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
//                   >
//                     <div className="r7-client-row">
//                       <span className="r7-client">{item.client}</span>
//                       <span
//                         className="r7-pill"
//                         style={{
//                           background: item.accent + "20",
//                           color: item.accent,
//                           border: `1px solid ${item.accent}50`,
//                         }}
//                       >
//                         {item.category}
//                       </span>
//                     </div>

//                     <h2 className="r7-headline">{item.title}</h2>

//                     <div style={{ display: "flex", alignItems: "baseline" }}>
//                       <span className="r7-stat" style={{ color: item.accent }}>{item.stat}</span>
//                       <span className="r7-stat-lbl">{item.statLabel}</span>
//                     </div>

//                     <div className="r7-rule" style={{ background: item.accent }} />

//                     <div className="r7-tags">
//                       {item.tags.map((tag) => (
//                         <span key={tag} className="r7-tag">{tag}</span>
//                       ))}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Mobile prev/next nav */}
//               <div className="r7-mobile-nav">
//                 <button
//                   className="r7-mobile-btn"
//                   onClick={goPrev}
//                   disabled={activeIndex === 0}
//                   aria-label="Previous"
//                   style={{ opacity: activeIndex === 0 ? 0.35 : 1 }}
//                 >
//                   ‹
//                 </button>
//                 <span className="r7-mobile-idx">
//                   {String(activeIndex + 1).padStart(2, "0")} / {String(content.length).padStart(2, "0")}
//                 </span>
//                 <button
//                   className="r7-mobile-btn"
//                   onClick={goNext}
//                   disabled={activeIndex === content.length - 1}
//                   aria-label="Next"
//                   style={{ opacity: activeIndex === content.length - 1 ? 0.35 : 1 }}
//                 >
//                   ›
//                 </button>
//               </div>

//               <div className="r7-bottom">
//                 <div className="r7-dots">
//                   {content.map((item, i) => (
//                     <div key={i} className="r7-dot-item">
//                       <motion.div
//                         animate={{
//                           width: activeIndex === i ? 32 : 6,
//                           height: 3,
//                           background: activeIndex === i ? item.accent : "rgba(255,255,255,0.18)",
//                           borderRadius: 99,
//                         }}
//                         transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
//                       />
//                       <span className={`r7-dot-num${activeIndex === i ? " on" : ""}`}>
//                         {String(i + 1).padStart(2, "0")}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 <button className="r7-cta">
//                   View Case Study
//                   <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
//                     <path d="M2 7.5h11M9 2.5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* ── RIGHT ── */}
//             <div
//               ref={rightRef}
//               className="r7-right"
//               onMouseMove={handleMouseMove}
//               onMouseEnter={() => setShowCursor(true)}
//               onMouseLeave={() => setShowCursor(false)}
//               style={{ cursor: "none" }}
//             >
//               {content.map((item, i) => (
//                 <motion.div
//                   key={i}
//                   className="r7-slide"
//                   animate={{ opacity: activeIndex === i ? 1 : 0 }}
//                   transition={{ duration: 0.6, ease: "easeInOut" }}
//                 >
//                   <div className="r7-slide-inner">{item.content}</div>
//                   <div className="r7-img-gradient" />

//                   <div className="r7-slide-counter">
//                     {String(i + 1).padStart(2, "0")}&nbsp;/&nbsp;
//                     {String(content.length).padStart(2, "0")}
//                   </div>

//                   <motion.div
//                     className="r7-slide-footer"
//                     animate={{ opacity: activeIndex === i ? 1 : 0 }}
//                     transition={{ duration: 0.4, delay: 0.2 }}
//                   >
//                     <div>
//                       <p className="r7-slide-client">{item.client}</p>
//                       <p className="r7-slide-cat">{item.category}</p>
//                     </div>
//                     <div className="r7-stat-chip" style={{ background: item.accent }}>
//                       <span className="r7-chip-num">{item.stat}</span>
//                       <span className="r7-chip-lbl">{item.statLabel}</span>
//                     </div>
//                   </motion.div>

//                   <div className="r7-progress-bar">
//                     <motion.div
//                       animate={{ scaleX: (activeIndex + 1) / content.length }}
//                       transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
//                       style={{
//                         height: "100%",
//                         background: active.accent,
//                         transformOrigin: "left",
//                       }}
//                     />
//                   </div>
//                 </motion.div>
//               ))}

//               {/* Custom cursor */}
//               {showCursor && (
//                 <motion.div
//                   animate={{ x: cursorPos.x - 15, y: cursorPos.y - 15 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                   style={{
//                     position: "absolute",
//                     width: "30px",
//                     height: "30px",
//                     borderRadius: "50%",
//                     background: "#14b8a6",
//                     boxShadow: "0 0 20px #14b8a6",
//                     pointerEvents: "none",
//                     zIndex: 50,
//                   }}
//                 />
//               )}
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
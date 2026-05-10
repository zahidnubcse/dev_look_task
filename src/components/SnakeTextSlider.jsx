import { useEffect, useRef } from "react";

export default function ScrollMarquee() {
  const marqueeRef = useRef(null);
  const positionRef = useRef(0);
  const lastScrollY = useRef(0);
  const rafRef = useRef(null);
  const speedRef = useRef(0);

  // Text repeated for seamless loop
  const text = "Ready To Rise At Seven ";
  const repeated = text.repeat(6);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const totalWidth = el.scrollWidth / 2;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      lastScrollY.current = currentScrollY;

      // scroll down = left
      // scroll up = right
      speedRef.current = delta * 2.5;
    };

    const animate = () => {
      positionRef.current -= speedRef.current;

      // smooth slowdown
      speedRef.current *= 0.92;

      // seamless loop
      if (positionRef.current <= -totalWidth) {
        positionRef.current += totalWidth;
      }

      if (positionRef.current >= 0) {
        positionRef.current -= totalWidth;
      }

      el.style.transform = `translateX(${positionRef.current}px)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "50px 0",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      <div
        ref={marqueeRef}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: "clamp(50px, 9vw, 170px)",
              fontWeight: 900,
              color: "#000",
              letterSpacing: "-0.05em",
              paddingRight: "0.4em",
              lineHeight: 1,
            }}
          >
            {repeated}
          </span>
        ))}
      </div>
    </div>
  );
}

// Full page demo
export function ScrollMarqueeDemo() {
  return (
    <div style={{ background: "#fff" }}>
      <section
        style={{
          height: "100vh",
          background: "#fff",
        }}
      />

      <ScrollMarquee />

      <section
        style={{
          height: "100vh",
          background: "#fff",
        }}
      />
    </div>
  );
}
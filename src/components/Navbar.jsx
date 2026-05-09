import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // hide navbar on scroll down
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setVisible(false);
        setMenuOpen(false); // close menu on scroll
      } else {
        setVisible(true);
      }

      setScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Services+",
    "International+",
    "About+",
    "Work",
    "Careers",
    "Blog",
    "Webinar",
  ];

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`mt-8 fixed left-[4px] right-[4px] z-50 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 flex items-center justify-between rounded-2xl transition-all duration-300
        ${visible ? "top-[8px]" : "-top-24"}
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-md text-black"
            : "bg-transparent text-white"
        }`}
      >
        {/* LOGO */}
        <h1 className="text-base sm:text-lg md:text-2xl font-semibold whitespace-nowrap">
          Rise at SeveN
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-4 xl:gap-6 font-semibold text-sm xl:text-base">
          {navItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer transition ${
                scrolled ? "hover:text-black/60" : "hover:text-white/60"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* BUTTON */}
          <button
            className={`hidden lg:block px-3 xl:px-4 py-1.5 xl:py-2 rounded-full border transition text-sm whitespace-nowrap
            ${
              scrolled
                ? "bg-black text-white border-black hover:bg-transparent hover:text-black"
                : "bg-white text-black border-white hover:bg-transparent hover:text-white"
            }`}
          >
            Get In Touch ↗
          </button>

          {/* MENU BUTTON (ONLY ONE TOGGLE) */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden text-xl sm:text-2xl p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed z-40 left-[4px] right-[4px] rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 lg:hidden transition-all duration-300
        ${menuOpen ? "opacity-100 visible top-[60px]" : "opacity-0 invisible top-[40px]"}
        bg-white text-black`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-1">
          <h2 className="font-semibold text-base sm:text-lg">Menu</h2>

          {/* SINGLE CLOSE BUTTON */}
          <button
            onClick={() => setMenuOpen(false)}
            className="text-xl sm:text-2xl font-bold"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* ITEMS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {navItems.map((item) => (
            <span
              key={item}
              className="font-semibold text-sm sm:text-base cursor-pointer hover:text-black/60 transition py-1"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button className="mt-2 bg-black text-white py-2.5 rounded-full text-sm font-semibold">
          Get In Touch ↗
        </button>
      </div>
    </>
  );
}
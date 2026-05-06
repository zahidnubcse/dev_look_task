import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false)
        setMenuOpen(false)
      } else {
        setVisible(true)
      }

      setScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navItems = ['Services+', 'International+', 'About+', 'Work', 'Careers', 'Blog', 'Webinar']

  return (
    <>
      {/* Navbar */}
      <div
        className={`mt-8 fixed left-[4px] right-[4px] z-50 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 flex items-center justify-between rounded-2xl transition-all duration-300
        ${visible ? 'top-[8px]' : '-top-24'}
        ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-md text-black'
            : 'bg-transparent text-white'
        }`}
      >
        {/* Logo */}
        <h1 className="text-base sm:text-lg md:text-2xl font-semibold whitespace-nowrap">
          Rise at SeveN
        </h1>

        {/* Desktop Menu — hidden below lg */}
        <ul className="hidden lg:flex gap-4 xl:gap-6 font-semibold text-sm xl:text-base">
          {navItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer transition ${
                scrolled ? 'hover:text-black/60' : 'hover:text-white/60'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Desktop Button */}
          <button
            className={`hidden lg:block px-3 xl:px-4 py-1.5 xl:py-2 rounded-full border transition text-sm whitespace-nowrap
            ${
              scrolled
                ? 'bg-black text-white border-black hover:bg-transparent hover:text-black'
                : 'bg-white text-black border-white hover:bg-transparent hover:text-white'
            }`}
          >
            Get In Touch ↗
          </button>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-xl sm:text-2xl p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>

        </div>
      </div>

      {/* Mobile/Tablet Dropdown */}
      {menuOpen && (
        <div
          className={`fixed z-40 left-[4px] right-[4px] rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 lg:hidden
          ${scrolled ? 'top-[60px] sm:top-[64px]' : 'top-[60px] sm:top-[64px]'}
          bg-white text-black`}
        >
          {/* Header row */}
          <div className="flex justify-between items-center mb-1">
            <h2 className="font-semibold text-base sm:text-lg">Menu</h2>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-xl sm:text-2xl font-bold"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Nav items — 2 columns on tablet */}
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

          <button className="mt-2 bg-black text-white py-2.5 rounded-full text-sm font-semibold">
            Get In Touch ↗
          </button>
        </div>
      )}
    </>
  )
}
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
      } else {
        setVisible(true)
      }

      setScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed mt-10 left-[4px] right-[4px] z-50 px-4 md:px-6 py-3 flex items-center justify-between rounded-2xl transition-all duration-300
        ${visible ? 'top-[8px]' : '-top-24'}
        ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-md text-black'
            : 'bg-transparent text-white'
        }`}
      >
        {/* Logo */}
        <h1 className="text-lg md:text-2xl font-semibold">
          Rise at SeveN
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-semibold">
          {['Services+', 'International+', 'About+', 'Work', 'Careers', 'Blog', 'Webinar'].map((item) => (
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
        <div className="flex items-center gap-3">

          {/* Desktop Button */}
          <button
            className={`hidden md:block px-4 py-2 rounded-full border transition text-sm
            ${
              scrolled
                ? 'bg-black text-white border-black hover:bg-transparent hover:text-black'
                : 'bg-white text-black border-white hover:bg-transparent hover:text-white'
            }`}
          >
            Get In Touch ↗
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

        </div>
      </div>

      {/* Mobile Dropdown */}
 {/* Mobile Dropdown */}
{menuOpen && (
  <div className="fixed top-[70px] left-[4px] right-[4px] z-40 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 md:hidden">

    {/* Top row with close button */}
    <div className="flex justify-between items-center mb-3">
      <h2 className="font-semibold text-lg">Menu</h2>

      <button
        onClick={() => setMenuOpen(false)}
        className="text-2xl font-bold"
      >
        ✕
      </button>
    </div>

    {['Services+', 'International+', 'About+', 'Work', 'Careers', 'Blog', 'Webinar'].map((item) => (
      <span key={item} className="font-semibold">
        {item}
      </span>
    ))}

    <button className="mt-4 bg-black text-white py-2 rounded-full">
      Get In Touch ↗
    </button>
  </div>
)}
    </>
  )
}
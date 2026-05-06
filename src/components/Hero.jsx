import React, { useState } from 'react'
import Navbar from './Navbar'
import Hero_1 from '../assets/hero_1.jpg'
import Hero_2 from '../assets/hero_2.jpg'
import Hero_3 from '../assets/hero_3.jpg'

const images = [Hero_1, Hero_2, Hero_3]

export default function HeroSection() {
  const [currentImage] = useState(() => {
    return images[Math.floor(Math.random() * images.length)]
  })

  return (
    <>
      <Navbar />

      <div className="pt-[4px] px-[4px]">
        <section className="relative w-full min-h-screen flex flex-col overflow-hidden rounded-2xl border border-white/10 shadow-2xl">

          {/* Background */}
          <div
            className="absolute inset-0 scale-110 blur-md"
            style={{
              backgroundImage: `url(${currentImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full min-h-screen">

            {/* Badge */}
            <div className="flex flex-col items-center mt-24 sm:mt-28 md:mt-32 mb-4 sm:mb-6 px-4 text-center">
              <p className="text-white text-[9px] sm:text-[10px] md:text-xs font-bold tracking-widest uppercase">
                #1 Most Recommended Content Marketing Agency
              </p>

              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-2 opacity-80">
                {['Global Search Awards', 'The Drum', 'UK Social Media Awards', 'Content Awards'].map((a) => (
                  <span
                    key={a}
                    className="text-white text-[8px] sm:text-[9px] md:text-[10px] border border-white/40 px-2 py-0.5 rounded-full"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero Text */}
            <div className="flex flex-col items-center justify-center flex-1 px-3 sm:px-4 md:px-6 text-center pb-4">
              <h1 className="text-white font-black leading-none w-full">

                <span className="block text-[clamp(32px,9vw,120px)]">
                  We Create
                </span>

                <span className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap text-[clamp(32px,9vw,120px)]">
                  <span>Category</span>

                  <span className="w-[clamp(40px,6vw,100px)] h-[clamp(40px,6vw,100px)] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                    <img src={currentImage} alt="hero" className="w-full h-full object-cover" />
                  </span>

                  <span>Leaders</span>
                </span>

                <span className="block text-white/80 text-xs sm:text-sm md:text-lg mt-2 sm:mt-3 md:mt-4 font-normal">
                  on every searchable platform
                </span>

              </h1>
            </div>

            {/* Bottom */}
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end px-4 sm:px-5 md:px-6 pb-5 sm:pb-6 gap-2 sm:gap-4 text-center sm:text-left">
              <p className="text-white/80 text-[11px] sm:text-xs md:text-sm max-w-[280px] sm:max-w-xs">
                Organic media planners creating, distributing & optimising search-first content
              </p>

              <p className="text-white/80 text-[11px] sm:text-xs md:text-sm">
                4 Global Offices serving <br />
                <span className="font-semibold">UK, USA (New York) & EU</span>
              </p>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}
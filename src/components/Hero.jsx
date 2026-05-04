import React, { useState } from 'react'
import Hero_1 from '../assets/hero_1.jpg'
import Hero_2 from '../assets/hero_2.jpg'
import Hero_3 from '../assets/hero_3.jpg'

const images = [Hero_1, Hero_2, Hero_3]

export default function HeroSection() {
  const [currentImage] = useState(() => {
    return images[Math.floor(Math.random() * images.length)]
  })

  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">

      {/* Blurred bg layer */}
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(12px)',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Badge */}
      <div className="relative z-10 flex flex-col items-center justify-center mt-32 mb-4">
        <p className="text-white text-xs font-bold tracking-widest uppercase text-center">
          #1 Most Recommended<br />Content Marketing Agency
        </p>
        <div className="flex items-center gap-3 mt-2 opacity-80">
          {['Global Search Awards', 'The Drum', 'UK Social Media Awards', 'Content Awards'].map((a) => (
            <span key={a} className="text-white text-[10px] border border-white/40 px-2 py-0.5 rounded-full">
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 -mt-8">
        <h1
          className="text-white text-center font-black leading-none select-none"
          style={{ fontSize: 'clamp(64px, 10vw, 140px)', fontFamily: 'Georgia, serif' }}
        >
          <span className="block">We Create</span>

          <span className="flex items-center justify-center gap-4 flex-wrap">
            <span>Category</span>

            {/* Sharp inline thumbnail */}
            <span
              className="inline-block rounded-2xl overflow-hidden"
              style={{
                width: 'clamp(60px, 7vw, 100px)',
                height: 'clamp(60px, 7vw, 100px)',
                flexShrink: 0,
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                position: 'relative',
                top: '-4px',
              }}
            >
              <img src={currentImage} alt="hero" className="w-full h-full object-cover" />
            </span>

            <span>Leaders</span>
          </span>

          <span className="block text-white/90" style={{ fontSize: '0.45em', fontWeight: 400, fontFamily: 'sans-serif' }}>
            on every searchable platform
          </span>
        </h1>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 w-full flex justify-between items-end px-6 pb-6">
        <p className="text-white/80 text-sm max-w-xs">
          Organic media planners creating, distributing & optimising search-first content
        </p>
        <p className="text-white/80 text-sm text-right">
          4 Global Offices serving<br />
          <span className="font-semibold">UK, USA (New York) & EU</span>
        </p>
      </div>

    </section>
  )
}
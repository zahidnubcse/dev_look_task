import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Image1 from '../assets/hero_1.jpg'
import Image2 from '../assets/hero_2.jpg'
import Image3 from '../assets/hero_3.jpg'

const projects = [
  {
    title: 'SIXT',
    year: '[2023-2025]',
    description:
      'Premium car rental experience with modern branding and elegant digital interaction.',
    image: Image1,
    tag: 'Carrental',
  },
  {
    title: 'Dojo - B2B',
    year: '[2021-2025]',
    description:
      'Business-focused platform designed for scalable growth and enterprise solutions.',
    image: Image2,
    tag: 'Creative Agency',
  },
  {
    title: 'Magnet',
    year: '[2023-2024]',
    description:
      'Immersive visual storytelling with modern motion and interactive experiences.',
    image: Image3,
    tag: 'Web Experience',
  },
]

export default function Practice() {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const progress = -rect.top

      if (progress < 400) {
        setActiveIndex(0)
      } else if (progress < 1000) {
        setActiveIndex(1)
      } else {
        setActiveIndex(2)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className='relative h-[260vh] px-2 md:px-4'
    >

      {/* Sticky Section */}
      <div className='sticky top-0 h-screen flex items-center'>

        <div className='relative w-full h-[700px] bg-black rounded-[40px] px-6 md:px-10 overflow-hidden flex flex-col md:flex-row justify-between items-center'>

          {/* Background Blur */}
          <div className='absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 opacity-90'></div>

          {/* Featured Work */}
          <div className='absolute top-10 left-10 z-20'>
            <h1 className='text-white text-3xl md:text-4xl font-semibold tracking-tight'>
              Featured Work
            </h1>
          </div>

          {/* Left Side */}
          <div className='relative z-10 w-full md:w-[38%] mt-20 md:mt-0 flex items-center h-full'>

            <AnimatePresence mode='wait'>

              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -80 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                <p className='text-zinc-500 text-sm mb-5'>
                  {projects[activeIndex].year}
                </p>

                <h1 className='text-white text-6xl md:text-8xl font-semibold leading-none tracking-tight'>
                  {projects[activeIndex].title}
                </h1>

                <p className='text-zinc-400 text-lg leading-relaxed mt-6 max-w-md'>
                  {projects[activeIndex].description}
                </p>

              </motion.div>

            </AnimatePresence>

          </div>

          {/* Right Side */}
          <div className='relative z-10 w-full md:w-[56%] flex justify-end'>

            <AnimatePresence mode='wait'>

              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.92, y: 60 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -60 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className='relative w-full md:w-[850px]'
              >

                {/* Floating Tag */}
                <div className='absolute bottom-5 right-5 z-20 flex items-center gap-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-5 py-3'>

                  <p className='text-white text-lg font-medium'>
                    {projects[activeIndex].tag}
                  </p>

                </div>

                {/* Image */}
                <img
                  className='w-full h-[500px] md:h-[620px] object-cover rounded-[30px]'
                  src={projects[activeIndex].image}
                  alt=""
                />

              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>

    </div>
  )
}
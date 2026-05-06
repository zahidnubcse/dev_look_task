import React from 'react'
import MarqueeModule from 'react-fast-marquee'

const Marquee = MarqueeModule.default || MarqueeModule

import Icon_1 from '../assets/icon_1.png'
import Icon_2 from '../assets/icon_2.png'
import Icon_3 from '../assets/icon_3.png'
import Icon_4 from '../assets/icon_4.png'
import Icon_5 from '../assets/icon_5.png'
import Icon_6 from '../assets/icon_6.png'

export default function Agency() {
  return (
    <div className="mt-6 w-full">
      <h1 className="px-2 sm:px-6 text-sm sm:text-base font-semibold mb-3">
        Our Partner
      </h1>

      <div className="relative overflow-hidden">

        {/* LEFT BLUR */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent backdrop-blur-sm z-10" />

        {/* RIGHT BLUR */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent backdrop-blur-sm z-10" />

        <Marquee pauseOnHover speed={40} gradient={false}>
          <div className="flex items-center gap-6 sm:gap-10 md:gap-14 px-3">
            <img src={Icon_1} alt="" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
            <img src={Icon_2} alt="" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
            <img src={Icon_3} alt="" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
            <img src={Icon_4} alt="" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
            <img src={Icon_5} alt="" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
            <img src={Icon_6} alt="" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
          </div>
        </Marquee>

      </div>
    </div>
  )
}
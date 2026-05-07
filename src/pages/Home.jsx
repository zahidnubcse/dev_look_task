import React from 'react'
import HeroSection from '../components/Hero'
import Motivation from '../components/Motivation'
// import FeaturedWork from '../components/FeaturedWork'
import Agency from '../components/Agency'
import Services from '../components/Services'
import Marquee_2 from '../components/Marquee_2'
import ImageReveal from '../components/ImageReveal'
import Testimonial from '../components/Testimonial'
import SnakeTextSlider from '../components/SnakeTextSlider'

export default function Home() {
  return (
    <div>     
     <HeroSection/>
     <Agency/>
     <Motivation/>
     {/* <FeaturedWork/> */}
     <Services/>
     <Marquee_2/>
     <ImageReveal/>
     <Testimonial/>
     <SnakeTextSlider/>
    </div>
  )
}

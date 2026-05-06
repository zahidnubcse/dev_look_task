import React from 'react'
import HeroSection from '../components/Hero'
import Motivation from '../components/Motivation'
import FeaturedWork from '../components/FeaturedWork'
import Agency from '../components/Agency'

export default function Home() {
  return (
    <div>     
     <HeroSection/>
     <Agency/>
     <Motivation/>
     <FeaturedWork/>
    </div>
  )
}

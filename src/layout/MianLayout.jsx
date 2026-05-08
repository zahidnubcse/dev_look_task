import React from 'react'
import { Outlet } from 'react-router-dom'
// import Navbar from '../components/Navbar'
import NoticeBar from '../components/NoticeBar'
import Footer from '../components/Footer'
// import Practice from '../components/Practice'

export default function MianLayout() {
  return (
    <div>
        <NoticeBar/>
        {/* <Navbar/> */}
      <Outlet/>
      <Footer/>
      {/* <Practice/> */}
    </div>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'
// import Navbar from '../components/Navbar'
import NoticeBar from '../components/NoticeBar'
import Footer from '../components/Footer'

export default function MianLayout() {
  return (
    <div>
        <NoticeBar/>
        {/* <Navbar/> */}
      <Outlet/>
      <Footer/>
    </div>
  )
}

import React from 'react'
// import Header from './components/Header/Header'
import Header from './Components/Header/Header'
// import Footer from './components/Footer/Footer'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
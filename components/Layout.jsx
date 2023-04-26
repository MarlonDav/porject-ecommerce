import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {

  return (
    <div style={{backgroundImage: "url('/background1.jpg')"}}>
    <Navbar/>
    {children}
    <Footer/>
    </div>
  )
}

export default Layout
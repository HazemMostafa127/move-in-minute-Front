import React from 'react'
import './App.css'

import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Popular from './components/Popular/Popular'
import Footer from './components/Footer/Footer'
import AboutUs from './components/About/About'
import ContactUs from './components/Contact/Contact'






const App = () => {
  return (
    <>
    
    {/* <SignUp/> */}
    {/* <Login/> */}
    <Navbar/>
    <Home/>
     <Popular/>
     <AboutUs/>
     <ContactUs/>
     <Footer/>
    {/* <About/> */}
    {/* <Contact/> */}
    {/* <Flight/> */}
    </>
  )
}

export default App
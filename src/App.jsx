import React from 'react'
import Home from './components/Home'
import Navbar from "./components/Navbar"
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import MyWork from './components/MyWork'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Home />
      <AboutMe/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
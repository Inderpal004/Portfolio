import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import Navbar from "./components/Navbar"
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import MyWork from './components/MyWork'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  const [darkMode,setDarkMode] = useState(false);

  useEffect(()=>{
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
  },[]);

  function toggleTheme(){
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark')){
      localStorage.theme = 'dark';
      setDarkMode(true);
    }else{
      localStorage.theme = 'light';
      setDarkMode(false);
    }
  }

  return (
    <div className='overflow-x-hidden font-Outfit leading-7 dark:bg-darkTheme dark:text-white'>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme}/>
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
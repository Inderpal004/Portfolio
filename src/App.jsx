import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode((prevMode) => !prevMode);
  }


  return (
    <div className='overflow-x-hidden font-Outfit leading-7 dark:bg-darkTheme dark:text-white'>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Home />
      <AboutMe darkMode={darkMode} />
      <Services />
      <MyWork darkMode={darkMode} />
      <Contact />
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;

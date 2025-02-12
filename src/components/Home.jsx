import React from 'react';
import profileImg from "/images/pf1.png";
import handIcon from "/images/hand-icon.png";
import rightArrowWhite from "/images/right-arrow-white.png";
import downloadIcon from "/images/download-icon.png";

function Home() {
  return (
    <>
      <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <img src={profileImg} alt="" className='sm:mt-7 rounded-full w-32 h-32 object-cover'/>
        <h3 className='flex items-center gap-2 text-xl md:text-2xl mb-2'>Hi! I'm Inderpal   <img src={handIcon} alt="" className='w-6'/> </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[55px]'>Frontend Web Developer from Barnala.</h1>
        <p className='max-w-2xl mx-auto'>I'm a frontend developer based in Barnala, Punjab, currently seeking opportunities to restart my career after a brief professional experience and a career break, eager to contribute, learn, and grow in web development.</p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'> 
            <a href="#contact" className='px-10 py-3 border text-white rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-wrap flex items-center gap-2 dark:border-none'>contact me <img src={rightArrowWhite} alt="" className='w-4'/></a>
            <a href="/inder-resume.pdf" download className='px-10 py-3 border bg-white rounded-full border-gray-500  text-wrap flex items-center gap-2 dark:text-black'>my resume <img src={downloadIcon} alt="" className='w-4'/></a>
        </div>
      </div>
    </>
  )
}

export default Home

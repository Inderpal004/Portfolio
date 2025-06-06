import React from 'react';
import handIcon from "/images/hand-icon.png";
import rightArrowWhite from "/images/right-arrow-white.png";
import downloadIcon from "/images/download-icon.png";

function Home() {
  return (
    <>
      <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <img loading="lazy" src="https://res.cloudinary.com/dicpowr4a/image/upload/v1748811875/mypic_edvdso.png" alt="Inderpal" className='sm:mt-7 rounded-full w-32 h-32 object-cover'/>
        <h2 className='flex items-center gap-2 text-xl md:text-2xl mb-2'>Hi! I'm Inderpal   <img loading="lazy" src={handIcon} alt="hello" className='w-6'/> </h2>
        <h1 className='text-3xl sm:text-6xl lg:text-[55px]'>Frontend Web Developer from Barnala.</h1>
        <p className='max-w-2xl mx-auto'>I specialize in building modern, responsive, and high-performance web applications using React.js, Next.js, and Tailwind CSS. Passionate about frontend development, I strive to create seamless user experiences while continuously learning and improving.</p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'> 
            <a aria-label='contact-link' href="#contact" className='px-10 py-3 border text-white rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-wrap flex items-center gap-2 dark:border-none'>contact me <img loading="lazy" src={rightArrowWhite} alt="" className='w-4'/></a>
            <a aria-label='cv-download' href="/Updated-inderpal-cv.pdf" download className='px-10 py-3 border bg-white rounded-full border-gray-500  text-wrap flex items-center gap-2 dark:text-black'>my resume <img loading="lazy" src={downloadIcon} alt="" className='w-4'/></a>
        </div>
      </div>
    </>
  )
}

export default Home

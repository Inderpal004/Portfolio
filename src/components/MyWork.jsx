import React from 'react';
import sendIcon from "/images/send-icon.png"
import rightArrow from "/images/right-arrow-bold.png"
import rightArrowDark from "/images/right-arrow-bold-dark.png"

function MyWork({darkMode}) {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h3 className='text-center mb-2 text-lg'>My portfolio</h3>
            <h2 className='text-center text-5xl'>My latest work</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>
      
        <div className='grid grid-cols-auto my-10 gap-5'>
            <div className={`aspect-square bg-[url('/images/bg-removal.jpg')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group`}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold dark:text-black'>Bg Removal</h2>
                        <p className='text-sm text-gray-700'>Background Removal Website</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <a target='__blank' aria-label='project-link' href="https://bg-removal-is.vercel.app/"><img loading="lazy" src={sendIcon} alt="" className='w-5'/></a>
                    </div>
                </div>
            </div>

            <div className={`aspect-square bg-[url('/images/gemini-2.0.jpg')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group`}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold dark:text-black'>Gemini 2.0</h2>
                        <p className='text-sm text-gray-700'>Gemini Chat Assistant</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <a target='__blank' aria-label='project-link' href="https://gemini-is.vercel.app/"><img loading="lazy" src={sendIcon} alt="" className='w-5'/></a>
                    </div>
                </div>
            </div>

            <div className={`aspect-square bg-[url('/images/vidtube.jpg')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group`}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold dark:text-black'>Vidtube</h2>
                        <p className='text-sm text-gray-700'>Youtube Video Streaming</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                       <a target='__blank' aria-label='project-link' href="https://vidtube-is.vercel.app/"> <img loading="lazy" src={sendIcon} alt="" className='w-5'/></a>
                    </div>
                </div>
            </div>

        </div>

        <a target='__blank' aria-label='repos-link' href="https://github.com/Inderpal004?tab=repositories" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500 dark:border-white dark:text-white dark:hover:bg-darkHover/50'>Show more <img loading="lazy" src={darkMode ? rightArrowDark : rightArrow} alt="" className='w-4'/></a>
    </div>
  )
}

export default MyWork

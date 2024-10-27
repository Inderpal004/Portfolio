import React from 'react';
import sendIcon from "/images/send-icon.png"
import rightArrow from "/images/right-arrow-bold.png"
import rightArrowDark from "/images/right-arrow-bold-dark.png"

function MyWork({darkMode}) {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg'>My portfolio</h4>
            <h2 className='text-center text-5xl'>My latest work</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>
      
        <div className='grid grid-cols-auto my-10 gap-5'>
            <div className={`aspect-square bg-[url('/images/work-1.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group`}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold dark:text-black'>Frontend Project</h2>
                        <p className='text-sm text-gray-700'>Web Design</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <img src={sendIcon} alt="" className='w-5'/>
                    </div>
                </div>
            </div>

            <div className={`aspect-square bg-[url('/images/work-2.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group`}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold dark:text-black'>Geo based app</h2>
                        <p className='text-sm text-gray-700'>mobile app</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <img src={sendIcon} alt="" className='w-5'/>
                    </div>
                </div>
            </div>

            <div className={`aspect-square bg-[url('/images/work-3.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group`}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold dark:text-black'>Photography site</h2>
                        <p className='text-sm text-gray-700'>Web Design</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <img src={sendIcon} alt="" className='w-5'/>
                    </div>
                </div>
            </div>

            <div className={`aspect-square bg-[url('/images/work-4.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group`}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold dark:text-black'>UI/UX designing</h2>
                        <p className='text-sm text-gray-700'>UI/UX Design</p>
                    </div>
                    <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <img src={sendIcon} alt="" className='w-5'/>
                    </div>
                </div>
            </div>

        </div>

        <a href="#" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500 dark:border-white dark:text-white dark:hover:bg-darkHover/50'>Show more <img src={darkMode ? rightArrowDark : rightArrow} alt="" className='w-4'/></a>
    </div>
  )
}

export default MyWork

import React from 'react'
import rightArrow from "/images/right-arrow.png"

function Services() {
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg'>What i offer</h4>
            <h2 className='text-center text-5xl'>My services</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>I'm a frontend developer from Barnala, Punjab. I'm a fresher exploring opportunities to grow and learn.</p>

            <div className='grid grid-cols-auto gap-6 my-10'>
                <div className='border cursor-pointer border-gray-400 rounded-lg px-8 py-12 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                    <div className='flex items-center justify-center w-12 h-12 bg-[#ff388b] rounded-md'>
                        <i className="ri-code-s-slash-line text-white text-[20px]"></i>
                    </div>
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>Custom Website Development</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white'>Emphasize your skills in building tailor-made websites from scratch, ensuring that they meet the unique needs and objectives of your clients...</p>
                    <a href="" className='flex items-center gap-2 text-sm mt-5'>Read more <img src={rightArrow} alt="" className='w-4' /></a>
                </div>
                <div className='border cursor-pointer border-gray-400 rounded-lg px-8 py-12 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                <div className='flex items-center justify-center w-12 h-12 bg-[#ff388b] rounded-md'>
                        <i className="ri-crop-line text-white text-[20px]"></i>
                    </div>
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>Responsive Web Design</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white'>Highlight your ability to create websites that look and function seamlessly on various devices, including desktops, tablets, and smartphones....</p>
                    <a href="" className='flex items-center gap-2 text-sm mt-5'>Read more <img src={rightArrow} alt="" className='w-4' /></a>
                </div>
                <div className='border cursor-pointer border-gray-400 rounded-lg px-8 py-12 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                <div className='flex items-center justify-center w-12 h-12 bg-[#ff388b] rounded-md'>
                        <i className="ri-window-fill text-white text-[20px]"></i>
                    </div>
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>Front-End Development</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white'>Specify your expertise in front-end technologies such as HTML, CSS, and JavaScript to create interactive and dynamic web applications...</p>
                    <a href="" className='flex items-center gap-2 text-sm mt-5'>Read more <img src={rightArrow} alt="" className='w-4' /></a>
                </div>
            </div>
        </div>
    )
}

export default Services
import React from 'react';
import rightArrowWhite from "/images/right-arrow-white.png"

function Contact() {
  return (
    <div id='contact' className={`w-full px-[12%] py-10 scroll-mt-20 bg-[url('/images/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center`}>
    <h4 className='text-center mb-2 text-lg'>Connect with me</h4>
    <h2 className='text-center text-5xl'>Get in touch</h2>
    <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>
      
      <form action="" className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <input type="text" placeholder='Enter your name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
                <input type="email" placeholder='Enter your email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
            </div>
            <textarea rows="6" placeholder='Enter your message' className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>
            <button className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit now <img src={rightArrowWhite} alt="" className='w-4 '/></button>
      </form>
    </div>
  )
}

export default Contact
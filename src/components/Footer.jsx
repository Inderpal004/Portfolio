import React from 'react'
import logo from "/images/logo.png";
import mailIcon from "/images/mail_icon.png"

function Footer() {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <img src={logo} alt="" className='w-36 mx-auto mb-2'/>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <img src={mailIcon} alt="" className='w-6'/> inderpalsingh4040@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex justify-between items-center border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2024 Inderpal. All rights reserved.</p>

            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a href="">Github</a></li>
                <li><a href="">Linkedin</a></li>
                <li><a href="">Twitter</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer 

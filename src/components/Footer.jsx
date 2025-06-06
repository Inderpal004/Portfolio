import React from 'react'
import mailIcon from "/images/mail_icon.png";
import mailIconDark from "/images/mail_icon_dark.png";
import logoBlack from "/images/logo-black.png";
import logoWhite from "/images/logo-white.png";

function Footer({darkMode}) {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <img loading="lazy" src={darkMode ? logoWhite : logoBlack} alt="logo" className='w-60 mx-auto mb-2'/>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <img loading="lazy" src={darkMode ? mailIconDark : mailIcon} alt="mail-icon" className='w-6'/> inderpalsingh4040@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex justify-between items-center border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Inderpal. All rights reserved.</p>

            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='__blank' aria-label='github-link' href="https://github.com/Inderpal004">Github</a></li>
                <li><a target='__blank' aria-label='linkedin-link' href="https://www.linkedin.com/in/inderpal-singh-in40440/">Linkedin</a></li>
                <li><a target='__blank' aria-label='twitter-link' href="https://x.com/i_am_inderpal">Twitter</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer 

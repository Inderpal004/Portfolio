import React from 'react';
import userImage from "/images/pf2.jpg";
import codeIcon from "/images/code-icon.png";
import eduIcon from "/images/edu-icon.png";
import projectIcon from "/images/project-icon.png";
import html from "/images/html.png";
import css from "/images/css.png";
import js from "/images/js.png";
import reactjs from "/images/reactjs.png";
import nextjs from "/images/nextjs.png";
import git from "/images/git.png";
import tailwind from "/images/tailwind.png";
import circularText from "/images/circular-text.png";
import devIcon from "/images/hacker.png"

function AboutMe() {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg'>Introduction</h4>
            <h2 className='text-center text-5xl'>About me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='max-w-max mx-auto relative'>
                    <img src={userImage} alt="" className='w-64 sm:w-80 rounded-3xl max-w-none' />

                    <div className='bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center'>
                        <img src={circularText} alt="" className="animate-spin_slow"/>
                        <img src={devIcon} className='w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="" />
                    </div>
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl'>I am a passionate frontend developer eager to kickstart my career. I look forward to gaining hands-on experience, contributing to impactful projects, and growing with dynamic organizations.</p>

                    <ul className='grid grid-cols-1 sm:grid-cols-auto gap-6 max-w-2xl'>
                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                            <img src={codeIcon} alt="" className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-700'>Languages</h3>
                            <p className='text-gray-600 text-sm'>HTML, CSS, Tailwind CSS, JavaScript, React Js, Next Js</p>
                        </li>

                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                            <img src={eduIcon} alt="" className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-700'>Education</h3>
                            <p className='text-gray-600 text-sm'>Bachelor's in Computer Applications</p>
                        </li>

                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                            <img src={projectIcon} alt="" className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-700'>Projects</h3>
                            <p className='text-gray-600 text-sm'>Built more than 5 projects</p>
                        </li>
                    </ul>

                    <ul className='my-6 flex items-center gap-3 sm:gap-5'>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'><img src={html} alt="" className='w-5 sm:w-7' /></li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'><img src={css} alt="" className='w-5 sm:w-7' /></li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'><img src={js} alt="" className='w-5 sm:w-7' /></li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'><img src={reactjs} alt="" className='w-5 sm:w-7' /></li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'><img src={nextjs} alt="" className='w-5 sm:w-7' /></li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'><img src={tailwind} alt="" className='w-5 sm:w-7' /></li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'><img src={git} alt="" className='w-5 sm:w-7' /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutMe

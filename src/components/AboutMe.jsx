import React from 'react';
import codeIcon from "/images/code-icon.png";
import codeIconDark from "/images/code-icon-dark.png";
import eduIcon from "/images/edu-icon.png";
import eduIconDark from "/images/edu-icon-dark.png";
import projectIcon from "/images/project-icon.png";
import projectIconDark from "/images/project-icon-dark.png";
import html from "/images/html.png";
import css from "/images/css.png";
import js from "/images/js.png";
import reactjs from "/images/reactjs.png";
import nextjs from "/images/nextjs.png";
import nextjsDark from "/images/nextjs-dark.png";
import git from "/images/git.png";
import tailwind from "/images/tailwind.png";

function AboutMe({ darkMode }) {

    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h3 className='text-center mb-2 text-lg'>Introduction</h3>
            <h2 className='text-center text-5xl'>About me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='max-w-max mx-auto relative'>
                    <img loading="lazy" src="https://res.cloudinary.com/dicpowr4a/image/upload/v1748811934/mypic2_awb1rz.png" alt="my-image" className='w-64 sm:w-80 rounded-3xl max-w-none' />

                    <div className='bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center'>
                        <img loading="lazy" src="https://res.cloudinary.com/dicpowr4a/image/upload/v1748812857/circular-text_nu31df.png" alt="frontend developer" className="animate-spin_slow" />
                        <img loading="lazy" src="https://res.cloudinary.com/dicpowr4a/image/upload/v1748812801/hacker_cui81v.png" className='w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt="dev image" />
                    </div>
                </div>

                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl'>
                    I specialize in developing dynamic, responsive, and high-performance web applications using React.js, Next.js, and Tailwind CSS. Eager to refine my skills, contribute to impactful projects, and grow within innovative teams.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                            <img loading="lazy" src={darkMode ? codeIconDark : codeIcon} alt="mode" className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Languages</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>
                                HTML, CSS, SCSS, Tailwind CSS, JavaScript, React Js, Next Js
                            </p>
                        </li>

                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                            <img loading="lazy" src={darkMode ? eduIconDark : eduIcon} alt="education" className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Education</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>Bachelor's in Computer Applications</p>
                        </li>

                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                            <img loading="lazy" src={darkMode ? projectIconDark : projectIcon} alt="projects" className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Projects</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>Built more than 5 projects</p>
                        </li>
                    </ul>

                    <ul className='my-6 flex flex-wrap items-center gap-3 sm:gap-5'>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img loading="lazy" src={html} alt="html" className='w-5 sm:w-7' />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img loading="lazy" src={css} alt="css" className='w-5 sm:w-7' />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img loading="lazy" src={js} alt="js" className='w-5 sm:w-7' />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img loading="lazy" src={reactjs} alt="react js" className='w-5 sm:w-7' />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img loading="lazy" src={darkMode ? nextjsDark : nextjs} alt="next js" className='w-5 sm:w-7' />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img loading="lazy" src={tailwind} alt="tailwind" className='w-5 sm:w-7' />
                        </li>
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                            <img loading="lazy" src={git} alt="git" className='w-5 sm:w-7' />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;

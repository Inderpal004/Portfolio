import React, { useEffect, useRef, useState } from 'react';
import logoBlack from "/images/logo-black.png";
import logoWhite from "/images/logo-white.png";
import arrowIcon from "/images/arrow-icon.png";
import arrowIconDark from "/images/arrow-icon-dark.png";
import moonIcon from "/images/moon_icon.png";
import headerBgColor from "/images/header-bg-color.png";
import menuBlack from "/images/menu-black.png";
import menuWhite from "/images/menu-white.png";
import closeBlack from "/images/close-black.png";
import closeWhite from "/images/close-white.png";
import sunIcon from "/images/sun_icon.png";

function Navbar({darkMode,toggleTheme}) {
    const [openMenu, setOpenMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef(null);
    const navLinks = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); 
    }, []);

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <img loading="lazy" src={headerBgColor} alt="header-bg-color" className="w-full" />
            </div>

            <nav ref={navRef} className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50  ${scrolled ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : ''}`}>
                <img loading="lazy" src={darkMode ? logoWhite : logoBlack} alt="logo" className="w-40 cursor-pointer mr-14" />

                <ul ref={navLinks} className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${scrolled ? '' : 'bg-white shadow-sm bg-opacity-50 dark:bg-transparent dark:border dark:border-white/50'}`}>
                    <li><a aria-label="home-link" href="#top">Home</a></li>
                    <li><a aria-label="about-link" href="#about">About me</a></li>
                    <li><a aria-label="services-link" href="#services">Services</a></li>
                    <li><a aria-label="portfolio-link" href="#work">My Work</a></li>
                    <li><a aria-label="contact-link" href="#contact">Contact me</a></li>
                </ul>

                <div className="flex items-center gap-4">
                    <button onClick={()=> toggleTheme()}>
                        <img loading="lazy" src={darkMode ? sunIcon : moonIcon} alt="mode" className="w-6" />
                    </button>
                    <a  aria-label="contact-link"
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
                        href="#contact"
                    >
                        Contact <img loading="lazy" className="w-3" src={darkMode ? arrowIconDark : arrowIcon} alt="arrow-icon" />
                    </a>
                    <button onClick={() => setOpenMenu(true)} className="block md:hidden ml-3">
                        <img loading="lazy" src={darkMode ? menuWhite : menuBlack} alt="menu" className="w-6" />
                    </button>
                </div>

                {/* Mobile Menu */}
                <ul
                    id="sideMenu"
                    className={`flex flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 right-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 ease-in-out transform ${
                        openMenu ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden dark:bg-darkHover`}
                >
                    <div className="absolute right-6 top-6">
                        <img loading="lazy" onClick={() => setOpenMenu(false)} src={darkMode ? closeWhite : closeBlack} alt="close" className="w-5 cursor-pointer" />
                    </div>

                    <li><a aria-label="home-link"  onClick={() => setOpenMenu(false)} href="#top">Home</a></li>
                    <li><a aria-label="about-link" onClick={() => setOpenMenu(false)} href="#about">About me</a></li>
                    <li><a aria-label="services-limk" onClick={() => setOpenMenu(false)} href="#services">Services</a></li>
                    <li><a aria-label="portfolio-link" onClick={() => setOpenMenu(false)} href="#work">My Work</a></li>
                    <li><a aria-label="contact-link" onClick={() => setOpenMenu(false)} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
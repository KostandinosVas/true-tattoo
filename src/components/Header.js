import React, { useState, useEffect } from 'react';
// import header data
import { headerData } from '../data';
// import components
import Nav from './Nav';
const Header = () => {
  // destructure header data
  const { logo, socials } = headerData;
  const [isActive, setIsActive] = useState(false);
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? 'h-[100px]' : 'h-[150px]'
      }  bg-white fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className='flex justify-between items-center h-full pl-[50px] pr-[60px]'>
        {/* logo */}
        <div data-aos='fade-down'>
          <img src={logo} alt='' />
        </div>
        {/* nav */}
        <Nav />
        {/* social icons */}
        <div>social</div>
      </div>
    </header>
  );
};

export default Header;

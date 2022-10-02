import React, { useState, useEffect } from 'react';
// import header data
import { headerData } from '../data';
// import components
import Nav from './Nav';
import NavMobile from './NavMobile';
// import icons
import { TiThMenuOutline } from 'react-icons/ti';

const Header = () => {
  // destructure header data
  const { logo, social } = headerData;
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? 'h-[100px] lg:h-[110px] shadow-lg' : 'h-[120px] lg:h-[150px]'
      }  bg-white fixed left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className='flex justify-between items-center h-full pl-[50px] pr-[60px]'>
        {/* logo */}
        <a className='mx-auto xl:mx-0' href='/'>
          <img src={logo} alt='' />
        </a>
        {/* nav - initially is hidden - show on desktop*/}
        <div className='hidden xl:flex'>
          <Nav />
        </div>
        {/* nav menu btn - is showing by default - hidden on desktop mode */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className='xl:hidden absolute right-[5%] bg-dark p-2 rounded-md cursor-pointer'
        >
          <TiThMenuOutline className='text-3xl text-white' />
        </div>
        {/* nav mobile - is showing by default - hidden on desktop mode */}
        <div
          className={`${
            navMobile ? 'max-h-[400px]' : 'max-h-0 overflow-hidden'
          } fixed -z-10 top-[148px]  left-0 w-full h-[400px] bg-pink-200 shadow-2xl transition-all duration-500`}
        >
          <NavMobile />
        </div>
        {/* social icons - initially hidden - is showing on desktop mode */}
        <ul className='hidden xl:flex gap-x-[30px]'>
          {social.map((item, index) => {
            // destructure item
            const { href, icon } = item;
            return (
              <li key={index}>
                <a href={href}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;

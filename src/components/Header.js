import React, { useEffect, useState } from 'react';

// import components
import Logo from '../img/header/logo.png';
import Nav from './Nav';
import NavMobile from './NavMobile';
import Socials from './Socials';

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-white ' : ' h-20 pt-12'
      } flex items-center h-24  fixed top-0 w-full text-black  z-10 transition-all duration-300`}
    >
      
      <div className='container mx-auto h-full flex  items-center justify-between'>
        {/* logo */}
        <a href='/'>
          <img src={Logo} alt='logo' className={`${
        bg ? ' h-24 ' : 'h-24 mb-6'
      } `} />
        </a>
    
        {/* nav */}
        <div className={'hidden lg:block'}>
          <Nav />
        </div>
        {/* Socials */}
        <div className='flex justify-around items-center gap-3'>
        <span className='text-sm hidden lg:block'>Follow Us</span>
        <div className='hidden lg:block text-lg'>
          <Socials />
        </div>
       
        </div>
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
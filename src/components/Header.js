import React, { useState, useEffect } from 'react';
// import header data
import { headerData } from '../data';
// import components
import Nav from './Nav';
const Header = () => {
  // destructure header data
  const { logo, social } = headerData;
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
        isActive ? 'h-[110px] shadow-lg' : 'h-[150px]'
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
        {/* social icons */}
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

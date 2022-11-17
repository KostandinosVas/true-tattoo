import React from 'react';

// import navigation data
import { navigation } from '../data';

// import Link
import { Link } from 'react-scroll';

const Nav = () => {
  const {items} = navigation
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px] '>
        {items.map((item, idx) => {
          
          return (
            <li
              className='text-gray-700 hover:scale-105  cursor-pointer text-lg '
              key={idx}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300 hover:text-red-500'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
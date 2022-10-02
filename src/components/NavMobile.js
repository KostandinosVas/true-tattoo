import React from 'react';
// nav data
import { navData } from '../data';
const NavMobile = () => {
  // destructure nav data
  const { items } = navData;
  return (
    <nav className='w-full h-full flex flex-col justify-end overflow-hidden'>
      <ul className='border-t flex flex-col justify-center items-center gap-y-6 py-6'>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a className='font-semibold' href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;

import React from 'react';
// import social data
import { socialData } from '../data';

const Socials = () => {
  return (
    <ul className='flex justify-center items-center gap-x-[20px] '>
      {socialData.map((item, index) => {
        return (
          <li key={index}  >
            <a className=' font-primary  uppercase hover:text-red-500 ' href={item.href} target="_blank" rel="noreferrer noopener" >
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;

import React from 'react';
// import footer data
import { footerData } from '../data';

const Footer = () => {
  // destructure footer data
  const { about, links, program, newsletter } = footerData;
  return (
    <footer className='bg-dark section'>
      <div className='container mx-auto'>
        {/* grid */}
        <div className='flex flex-col lg:flex-row lg:justify-between text-white'>
          {/* about */}
          <div className='flex-1 flex flex-col'>
            {/* title */}
            <div>{about.title}</div>
            {/* subtitle */}
            <div>{about.subtitle}</div>
            {/* address item */}
            <div className='flex items-center gap-x-[10px]'>
              <div>{about.address.icon}</div>
              <div>{about.address.name}</div>
            </div>
            {/* phone item */}
            <div className='flex items-center gap-x-[10px]'>
              <div>{about.phone.icon}</div>
              <div>{about.phone.number}</div>
            </div>
            {/* email item */}
            <div className='flex items-center gap-x-[10px]'>
              <div>{about.email.icon}</div>
              <div>{about.email.address}</div>
            </div>
          </div>
          {/* links */}
          <div className='flex-1 bg-blue-300'>links</div>
          {/* program */}
          <div className='flex-1 bg-yellow-300'>program</div>
          {/* newsletter */}
          <div className='flex-1 bg-red-300'>newsletter</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

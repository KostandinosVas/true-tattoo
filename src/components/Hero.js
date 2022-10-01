import React from 'react';
// import data
import { heroData } from '../data';
// import icons
import { IoMdArrowForward } from 'react-icons/io';
const Hero = () => {
  // destructure hero data
  const { title, subtitle, textBtn } = heroData;
  return (
    <section className='bg-hero bg-cover bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat relative'>
      <div className='container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end mt-[150px]'>
        {/* text & btn */}
        <div className='text-white text-center lg:text-left lg:max-w-[640px]'>
          <h1 className='h1' data-aos='fade-up' data-aos-delay='400'>
            {title}
          </h1>
          <p
            className='mb-8 lg:mb-16 max-w-lg leading-relaxed'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            {subtitle}
          </p>
          {/* btn */}
          <div className='' data-aos='fade-up' data-aos-delay='800'>
            <button className='btn btn-sm btn-outline lg:btn-lg flex items-center gap-x-[10px] mx-auto lg:mx-0'>
              {textBtn}
              <IoMdArrowForward className='text-xl' />
            </button>
          </div>
        </div>
        {/* outline text */}
        <div
          className='hidden xl:flex absolute -bottom-2 right-0 left-0 before:content-outlineText'
          data-aos='fade-right'
          data-aos-offset='-200'
          data-aos-delay='1200'
        ></div>
      </div>
    </section>
  );
};

export default Hero;

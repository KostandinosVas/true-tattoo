import React from 'react';
// import data
import { heroData } from '../data';

const Hero = () => {
  // destructure hero data
  const { title, subtitle, textBtn } = heroData;
  return (
    <section className='bg-hero bg-cover bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat relative'>
      <div className='container mx-auto min-h-[40vh] lg:h-full flex items-center lg:justify-end'>
        {/* text & btn */}
        <div className='text-white text-center lg:text-left lg:max-w-[640px]'>
          <h1 className='h1' data-aos='fade-up' data-aos-delay='400'>
            {title}
          </h1>
          <p className='mb-10 lg:mb-20' data-aos='fade-up' data-aos-delay='600'>
            {subtitle}
          </p>
          {/* btn */}
          <button
            className='bg-slate-50'
            data-aos='fade-up'
            data-aos-delay='800'
          >
            {textBtn}
          </button>
        </div>
        {/* outline text */}
        <div className='hidden xl:flex absolute -bottom-2 right-0 left-0 before:content-outlineText'></div>
      </div>
    </section>
  );
};

export default Hero;

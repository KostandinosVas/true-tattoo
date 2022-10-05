import React from 'react';
// import data
import { heroData } from '../data';
const Hero = () => {
  // destructure hero data
  const { title, subtitle, btnText, btnIcon } = heroData;
  return (
    <section className='bg-hero bg-cover bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px]'>
      <div className='container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end'>
        {/* text & btn */}
        <div className='text-white text-center lg:text-left lg:max-w-[640px]'>
          <h1 className='h1'>{title}</h1>
          <p className='mb-8 lg:mb-16 max-w-lg leading-relaxed'>{subtitle}</p>
          {/* btn */}
          <button className='btn btn-sm lg:btn-lg btn-outline'>
            {btnText}
            <div className='text-xl'>{btnIcon}</div>
          </button>
        </div>
        {/* outline text */}
        <div className='hidden xl:flex absolute -bottom-2 right-0 left-0 before:content-outlineText'></div>
      </div>
    </section>
  );
};

export default Hero;

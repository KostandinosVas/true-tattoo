import React from 'react';
// import data
import { heroData } from '../data';

const Hero = () => {
  // destructure hero data
  const { title } = heroData;
  return (
    <section className='bg-hero bg-cover bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat text-white relative'>
      <div className='container mx-auto'>
        <h1>{title}</h1>
        {/* outline text */}
        <div className='hidden xl:flex absolute -bottom-2 right-0 left-0 before:content-outlineText'></div>
      </div>
    </section>
  );
};

export default Hero;

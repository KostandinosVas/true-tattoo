import React from 'react';
// import about data
import { aboutData } from '../data';
const About = () => {
  // destructure about data
  const { title, subtitle1, subtitle2, textBtn } = aboutData;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-[70px] items-center h-[640px]'>
          <div className='flex flex-col lg:flex-row flex-1'>
            <div className='text-[360px] xl:text-[720px] leading-none font-tertiary lg:-tracking-[0.055em] bg-about bg-no-repeat bg-right bg-clip-text text-transparent'>
              01
            </div>
          </div>
          <div className='flex-1 h-full'>
            <h2 className='h2'>{title}</h2>
            <p className='mb-6'>{subtitle1}</p>
            <p>{subtitle2}</p>
            <button>{textBtn}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

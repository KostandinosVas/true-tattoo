import React from 'react';
// import testimonial data
import { testimonialData } from '../data';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import './styles.css';
// import required modules
import { Navigation } from 'swiper';

export const Testimonial = () => {
  return (
    <section className='pb-[40px] lg:pb-[160px]'>
      <div className='container mx-auto'>
        <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
          {testimonialData.map((slide, index) => {
            // destructure slide
            const { quoteImg, message, name, occupation } = slide;
            return (
              <SwiperSlide key={index}>
                <div className='max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-x-[38px]'>
                  <div className='w-[154px] h-[109px]'>
                    <img src={quoteImg} alt='' />
                  </div>
                  <div className='flex-1 mt-[60px]'>
                    <div className='text-2xl lg:text-[36px] leading-normal'>
                      {message}
                    </div>
                    <div>
                      <div>{name}</div>
                      <div>{occupation}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

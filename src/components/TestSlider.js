import React from 'react';

// testimonials data
import { testimonialData} from '../data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import '../swiper.css';

// import required modules
import { Autoplay, Pagination } from 'swiper';


const TestSlider = () => {

  return (
    <>
      <Swiper
       speed={2300}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
         
        }}
        
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {testimonialData.map((item, index) => {
          const { quoteImg, message, name } = item;
          return (
            <SwiperSlide key={index}>
              <div
                className='flex  flex-col lg:flex-row gap-12 lg:gap-32'
              >
                <div
                  className='w-48 h-48 lg:w-[328px] lg:h-[328px]'
                >
                  <img className='rounded-2xl w-3/4 mt-8' src={quoteImg} alt='' />
                </div>
                <div
                  className='flex flex-col max-w-3xl '
                >
                  <h5 className='font-body  text-xl mb-20 italic font-normal '>
                    {message}
                  </h5>
                  <div>
                    <p className='text-lg font-semibold border-b-2 text-accent mb-12'>{name} <p className='text-amber-400 p-5 text-2xl text-center'>⋆⋆⋆⋆⋆</p> </p>
                   
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestSlider;
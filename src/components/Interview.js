import React, { useState } from 'react';
// import data
import { interviewData } from '../data';
// import modal video
import ModalVideo from 'react-modal-video';
import '../modalVideo.scss';

const Interview = () => {
  // destructure interview data
  const { title, btnText, btnIcon } = interviewData;
  const [isOpen, setOpen] = useState(false);
  return (
    <section className='section bg-dark bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px]'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col justify-center h-full'>
          <div className='flex flex-col items-start max-w-[880px]'>
            <h3 className='text-white text-[40px] lg:text-[60px] leading-none font-tertiary -tracking-[1.5px] mb-8'>
              {title}
            </h3>
            {/* btn */}
            <div
              className='text-white flex items-center gap-x-5 cursor-pointer'
              onClick={() => setOpen(true)}
            >
              {/* border */}
              <div className='w-[91px] h-[91px] border rounded-full text-dark p-[10px]'>
                {/* inner */}
                <div className='bg-white w-full h-full rounded-full flex justify-center items-center hover:scale-105 transition-all duration-300'>
                  <div className='text-lg'>{btnIcon}</div>
                </div>
              </div>
              {/* btn text */}
              <div className='font-primary uppercase tracking-[0.1em]'>
                {btnText}
              </div>
            </div>
            {/* modal video */}
            <ModalVideo
              channel='youtube'
              autoplay
              isOpen={isOpen}
              videoId='_l1mqYQuNf8'
              onClose={() => setOpen(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interview;

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
    <section className='bg-dark bg-interview bg-no-repeat bg-cover h-[812px]'>
      <div className='container mx-auto'>
        <h3 className='text-white text-[60px] leading-none font-tertiary -tracking-[1.5px]'>
          {title}
        </h3>
        <button className='text-white flex' onClick={() => setOpen(true)}>
          {/* btn border */}
          <div
            className='w-[91px] h-[91px] border rounded-full
           text-dark p-[10px]'
          >
            {/* btn */}
            <button className='bg-white w-full h-full rounded-full flex justify-center items-center'>
              {btnIcon}
            </button>
          </div>
          {btnText}
        </button>
        {/* modal video */}
        <ModalVideo
          channel='youtube'
          autoplay
          isOpen={isOpen}
          videoId='_l1mqYQuNf8'
          onClose={() => setOpen(false)}
        />
      </div>
    </section>
  );
};

export default Interview;

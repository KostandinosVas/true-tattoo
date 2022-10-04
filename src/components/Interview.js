import React, { useState } from 'react';
// import modal video
import ModalVideo from 'react-modal-video';
// import modal video css
import '../modalVideo.scss';

const Interview = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className='bg-dark bg-interview bg-no-repeat bg-cover h-[812px]'>
      <div className='container mx-auto'>
        <h3 className='text-white text-[60px] leading-none font-tertiary -tracking-[1.5px]'>
          “Consider what you desire. Your tattoo artist will never tell you what
          tattoo to have.”
        </h3>
        <button className='text-white' onClick={() => setOpen(true)}>
          VIEW DEMO
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

import React, { useState } from 'react';
// import photo album & lightbox
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
// import data
import { galleryData } from '../data';

const slides = galleryData.images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

const GallerySection = () => {
  const [index, setIndex] = useState(-1);
  // destructure gallery data
  const { title, textBtn, iconBtn, images } = galleryData;
  return (
    <section className='bg-[#F9F9F9] section relative mt-[40px] lg:mt-0'>
      <div className='container mx-auto'>
        <h2 className='h2 max-w-[370px] lg:mb-20'>{title}</h2>
      </div>
      {/* photo album */}
      <div className='mb-8 lg:mb-20'>
        <PhotoAlbum
          layout='rows'
          photos={images}
          onClick={(event, photo, index) => setIndex(index)}
        />
        <Lightbox
          slides={slides}
          styles={{ container: { backgroundColor: 'rgba(0,0,0,.9)' } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
      <div className='flex justify-center'>
        <button className='btn btn-lg btn-dark'>
          {textBtn}
          <div className='text-xl'>{iconBtn}</div>
        </button>
      </div>
    </section>
  );
};

export default GallerySection;

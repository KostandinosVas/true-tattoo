import React, { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
// import { Gallery } from 'react-grid-gallery';
import 'yet-another-react-lightbox/styles.css';
import { galleryImages } from '../data';

const slides = galleryImages.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

const GallerySection = () => {
  const [index, setIndex] = useState(-1);
  // const handleClick = (index) => setIndex(index);
  return (
    <div>
      <PhotoAlbum
        layout='rows'
        photos={galleryImages}
        onClick={(event, photo, index) => setIndex(index)}
        componentsProps={{ imageProps: { loading: 'lazy' } }}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
};

export default GallerySection;

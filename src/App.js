import React from 'react';

// import components
import Hero from './components/Hero';

import About from './components/About';
import GallerySection from './components/GallerySection';
import Skills from './components/Skills';
import Interview from './components/Interview';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import Header from './components/Header';


const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-[white]'>
       <Header />
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <Testimonial />
      <Interview />
      <Contact />
      <Footer />
      <Copyright />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;

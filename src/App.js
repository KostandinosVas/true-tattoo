import React from 'react';
// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';
// import components
import Hero from './components/Hero';

const App = () => {
  // aos initialization
  Aos.init({
    duration: 1800,
    offset: 100,
  });
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden'>
      <Hero />
    </div>
  );
};

export default App;

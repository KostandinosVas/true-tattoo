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
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        odio ea. Nihil sunt, dolores dolor vitae culpa corrupti tenetur aliquid
        consectetur nesciunt consequatur distinctio officiis porro, ratione
        reprehenderit necessitatibus voluptatum quas architecto quia doloribus
        earum quisquam nobis? Officiis saepe fuga, nisi fugiat at, quod suscipit
        reprehenderit assumenda tenetur voluptate eveniet nobis expedita ex
        voluptatum reiciendis adipisci aperiam placeat omnis odit.
      </div>
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;

import React from 'react';
// import components
import Hero from './components/Hero';
import Header from './components/Header';

const App = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <Header />
      <Hero />
      <div className='h-[4000px]'></div>
    </div>
  );
};

export default App;

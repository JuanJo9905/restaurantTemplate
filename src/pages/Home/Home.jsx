import React from 'react';
import Hero from '../../components/sections/Hero/Hero';
import MenuPreview from '../../components/sections/MenuPreview/MenuPreview';
import About from '../../components/sections/About/About';
import Contact from '../../components/sections/Contact/Contact';

const Home = ({ navigate }) => {
  return (
    <>
      <Hero navigate={navigate} />
      <MenuPreview navigate={navigate} />
      <About />
      <Contact />
    </>
  );
};

export default Home;

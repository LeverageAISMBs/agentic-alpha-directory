import React from 'react';
import { Hero } from './components/Hero';
import { Directory } from './components/Directory';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Methodology } from './components/Methodology';
import { About } from './components/About';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Directory />
        <Methodology />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default App;

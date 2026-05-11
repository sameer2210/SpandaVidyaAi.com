import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Approach from './sections/Approach';
import Challenge from './sections/Challenge';
import Contact from './sections/Contact';
import Differentiation from './sections/Differentiation';
import Hero from './sections/Hero';
import HeroSection from './sections/HeroSection';
import Mission from './sections/Mission';
import PhilosophySection from './sections/PhilosophySection';
import Progress from './sections/Progress';
import TechSection from './sections/TechSection';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        <Hero />
        <Challenge />
        <Approach />
        <Progress />
        <Differentiation />
        <HeroSection />
        <Mission />
        <PhilosophySection />
        <TechSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

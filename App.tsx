import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import GlobalBackground from './components/GlobalBackground';
import Navbar from './components/Navbar';
import Approach from './sections/Approach';
import CataractDetection from './sections/CataractDetection';
import Challenge from './sections/Challenge';
import Contact from './sections/Contact';
import Differentiation from './sections/Differentiation';
import Hero from './sections/Hero';
import Mission from './sections/Mission';
import PhilosophySection from './sections/PhilosophySection';
import Progress from './sections/Progress';
import Team from './sections/Teams';
import TechSection from './sections/TechSection';
import PrivacyPolicy from './sections/PrivacyPolicy';
import TermsAndConditions from './sections/TermsAndConditions';
import { useSEO } from './hooks';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useSEO({
    title: currentPath === '/privacy'
      ? "Privacy Policy & Security | SpandaVidya"
      : currentPath === '/terms'
        ? "Terms & Conditions | SpandaVidya"
        : "spandaVidya | AI-Powered Ayurvedic Pulse Diagnosis & Digital Naadi Pariksha",
    description: currentPath === '/privacy'
      ? "Privacy Policy and Security guidelines for SpandaVidya AI Cataract Detection. Understand our data safety, authentication, and clinical disclosures."
      : currentPath === '/terms'
        ? "Terms and Conditions of service for the SpandaVidya AI Cataract Detection and Consultation platform."
        : "spandaVidya revolutionizes traditional Ayurvedic pulse diagnostics (Naadi Pariksha) with AI-powered signal intelligence. Get accurate, clinical-grade health assessments using advanced PPG sensors and machine learning for personalized Ayurvedic wellness.",
    path: currentPath === '/privacy' ? '/privacy' : currentPath === '/terms' ? '/terms' : '/'
  });

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    // Listen to custom navigation events
    window.addEventListener('navigate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('navigate', handleLocationChange);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('navigate'));
  };

  // Render specific layout blocks
  const renderContent = () => {
    if (currentPath === '/privacy') {
      return <PrivacyPolicy onNavigate={navigateTo} />;
    }
    if (currentPath === '/terms') {
      return <TermsAndConditions onNavigate={navigateTo} />;
    }
    return (
      <>
        <Hero />
        <Challenge />
        <CataractDetection />
        <Approach />
        <Progress />
        <Differentiation />
        <Mission />
        <PhilosophySection />
        <TechSection />
        <Team />
        <Contact />
      </>
    );
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <GlobalBackground />
      {currentPath === '/' && (
        <header>
          <Navbar />
        </header>
      )}
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        {renderContent()}
      </main>
      <Footer onNavigate={navigateTo} currentPath={currentPath} />
    </div>
  );
};

export default App;

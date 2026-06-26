import React, { useEffect } from 'react';
import { T } from '../theme';
import Card from '../components/Card';
import { termsAndConditionsContent, branding } from '@/data';
import { useSEO } from '../hooks';

interface TermsAndConditionsProps {
  onNavigate: (path: string) => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onNavigate }) => {
  useSEO({
    title: "Terms & Conditions | SpandaVidya",
    description: "Terms and Conditions of service for the SpandaVidya AI Cataract Detection and Consultation platform.",
    path: "/terms"
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <section className="py-32 px-6 md:px-[8vw] bg-transparent relative min-h-screen">
      <div className="max-w-4xl mx-auto z-10 relative">
        {/* Navigation / Header */}
        <div className="flex justify-between items-center mb-16 border-b pb-6" style={{ borderColor: "rgba(26, 24, 20, 0.08)" }}>
          <button 
            onClick={() => onNavigate('/')}
            className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: T.accent }}
            aria-label="Back to Home Page"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
          
          <div className="flex items-center gap-2.5">
            <img className="h-8 w-auto object-contain" src={branding.logo} alt="Logo" />
            <span className="font-serif text-lg font-bold" style={{ color: T.charcoal }}>{branding.title}</span>
          </div>
        </div>

        {/* Page Hero */}
        <div className="mb-20 text-center md:text-left">
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-widest uppercase border"
            style={{ 
              backgroundColor: "rgba(140, 107, 62, 0.05)",
              borderColor: "rgba(140, 107, 62, 0.15)",
              color: T.accent 
            }}
          >
            User Agreement
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-6 leading-tight" style={{ color: T.charcoal }}>
            Terms & Conditions
          </h1>
          <p className="text-lg leading-relaxed font-light max-w-2xl" style={{ color: T.muted }}>
            Please read these terms carefully. They govern your access and use of SpandaVidya's online platform, APIs, and the automated AI Cataract Detection services.
          </p>
        </div>

        {/* Terms Content List */}
        <div className="space-y-8">
          {termsAndConditionsContent.map((section, idx) => (
            <Card key={idx} className="p-8 text-left">
              <h2 className="font-serif text-xl font-bold mb-4" style={{ color: T.charcoal }}>
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.items.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-sm md:text-base leading-relaxed font-light" style={{ color: T.muted }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;

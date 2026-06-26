import React, { useEffect } from 'react';
import { T } from '../theme';
import Card from '../components/Card';
import { privacyPolicyContent, securityContent, branding } from '@/data';
import { useSEO } from '../hooks';

interface PrivacyPolicyProps {
  onNavigate: (path: string) => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  useSEO({
    title: "Privacy Policy & Security | SpandaVidya",
    description: "Privacy Policy and Security guidelines for SpandaVidya AI Cataract Detection. Understand our data safety, authentication, and clinical disclosures.",
    path: "/privacy"
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
            Legal Disclosures
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-6 leading-tight" style={{ color: T.charcoal }}>
            Privacy Policy & <br className="hidden md:block" />
            System Security
          </h1>
          <p className="text-lg leading-relaxed font-light max-w-2xl" style={{ color: T.muted }}>
            Please review our data practices and technical safety measures. This policy describes how the AI Cataract Detection platform and related chat consultations manage patient privacy, secure uploads, and user controls.
          </p>
        </div>

        {/* Content Tabs / Split */}
        <div className="space-y-24">
          
          {/* Part A: Privacy Policy */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3 border-b pb-3" style={{ color: T.charcoal, borderColor: "rgba(26, 24, 20, 0.08)" }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: T.accent }} />
              Privacy Policy
            </h2>
            <div className="space-y-8">
              {privacyPolicyContent.map((section, idx) => (
                <Card key={idx} className="p-8 text-left">
                  <h3 className="font-serif text-xl font-bold mb-4" style={{ color: T.charcoal }}>
                    {section.title}
                  </h3>
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

          {/* Part B: Security */}
          <div>
            <h2 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3 border-b pb-3" style={{ color: T.charcoal, borderColor: "rgba(26, 24, 20, 0.08)" }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: T.sage }} />
              System Security
            </h2>
            <div className="space-y-8">
              {securityContent.map((section, idx) => (
                <Card key={idx} className="p-8 text-left">
                  <h3 className="font-serif text-xl font-bold mb-4" style={{ color: T.charcoal }}>
                    {section.title}
                  </h3>
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

        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

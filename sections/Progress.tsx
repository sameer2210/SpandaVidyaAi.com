import React from 'react';
import { progressSteps } from '@/data';
import { T } from '../theme';
import Card from '../components/Card';

const steps = progressSteps;

const Progress: React.FC = () => {
  return (
    <section id="progress" className="py-32 px-6 md:px-[8vw] bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 reveal">
          <div 
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-widest uppercase border"
            style={{ 
              backgroundColor: "rgba(140, 107, 62, 0.05)",
              borderColor: "rgba(140, 107, 62, 0.15)",
              color: T.accent 
            }}
          >
            05 — Progress
          </div>
          <h2 className="font-serif text-5xl md:text-6xl font-semibold mb-4" style={{ color: T.charcoal }}>
            Evolution & Roadmap
          </h2>
          <p className="max-w-2xl mx-auto font-light text-base md:text-lg" style={{ color: T.muted }}>
            Tracking our journey from theoretical concept to a validated clinical system.
          </p>
        </div>
        
        <div className="relative">
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row items-center reveal stagger-${(idx % 4) + 1} ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div 
                  className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10" 
                  style={{ 
                    backgroundColor: T.accent,
                    boxShadow: `0 0 15px rgba(140, 107, 62, 0.5)`
                  }}
                />
                
                <div className="w-full md:w-[42%] group">
                  <Card className="p-8 text-left transition-all">
                    <div className="flex flex-col gap-3">
                      <span className="font-bold text-xs uppercase tracking-[0.2em]" style={{ color: T.accent }}>
                        {step.date}
                      </span>
                      <p className="text-lg font-medium leading-snug transition-colors duration-300 group-hover:text-[#8C6B3E]" style={{ color: T.charcoal }}>
                        {step.text}
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;

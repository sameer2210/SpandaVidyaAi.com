
import React from 'react';

const steps = [
  { text: "Conceptual framework for digitized SpandaVidya defined", date: "2023" },
  { text: "Multi-position radial pulse acquisition prototype built", date: "2024" },
  { text: "Pilot clinical data collection for signal validation", date: "2024" },
  { text: "Advanced signal processing pipeline optimization", date: "2025" },
  { text: "AI modeling & Multi-centric validation phase", date: "Active" }
];

const Progress: React.FC = () => {
  return (
    <section id="progress" className="py-32 px-6 md:px-[8vw] bg-brand-bg relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 reveal">
          <div className="text-brand-accent text-sm font-bold uppercase tracking-widest mb-4">Milestones</div>
          <h2 className="font-serif text-5xl md:text-6xl font-semibold mb-4 text-brand-text">
            Evolution & Roadmap
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto">Tracking our journey from theoretical concept to a validated clinical system.</p>
        </div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-brand-accent/30 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center reveal stagger-${(idx % 4) + 1} ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-accent z-10 shadow-[0_0_15px_rgba(181,139,42,0.5)]" />
                
                <div className="w-full md:w-[42%] group">
                  <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 hover:border-brand-accent/50 transition-all duration-500 hover:shadow-xl">
                    <div className="flex flex-col gap-3">
                      <span className="text-brand-accent font-bold text-xs uppercase tracking-[0.2em]">
                        {step.date}
                      </span>
                      <p className="text-lg font-medium text-brand-text leading-snug group-hover:text-brand-accent transition-colors">
                        {step.text}
                      </p>
                    </div>
                  </div>
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

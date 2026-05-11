
import React from 'react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-32 px-6 md:px-[8vw] bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-semibold mb-8 tracking-wider uppercase">
          Mission & Vision
        </div>
        <h2 className="font-serif text-4xl md:text-6xl font-semibold mb-12 text-brand-text leading-tight">
          Strengthening Diagnostics Through <br className="hidden md:block" />
          Responsible Technology
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="p-8 bg-brand-bg rounded-3xl border border-transparent hover:border-brand-accent/20 transition-all">
            <h3 className="text-brand-accent font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-accent rounded-full" /> Our Mission
            </h3>
            <p className="text-brand-muted text-lg leading-relaxed">
              To preserve, standardize, and scientifically strengthen SpandaVidya 
              through deep instrumentation and data-driven insights.
            </p>
          </div>
          <div className="p-8 bg-brand-bg rounded-3xl border border-transparent hover:border-brand-accent/20 transition-all">
            <h3 className="text-brand-accent font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-accent rounded-full" /> Our Vision
            </h3>
            <p className="text-brand-muted text-lg leading-relaxed">
              An integrative future where traditional functional diagnostics 
              complement modern healthcare systems at global scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

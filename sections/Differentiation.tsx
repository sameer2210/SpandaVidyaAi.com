
import React from 'react';

const differentiators = [
  "Not a black-box diagnosis engine",
  "Respects classical Ayurvedic principles",
  "Built for robustness, not demos",
  "Designed for real clinical environments"
];

const Differentiation: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-[8vw] bg-brand-text text-white overflow-hidden relative">
      <div className="relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-16 text-center">
          Why This Is Different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-accent transition-all duration-300 text-center flex items-center justify-center min-h-[160px]"
            >
              <p className="text-xl font-medium leading-snug group-hover:scale-105 transition-transform duration-300">
                {diff}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-10 pointer-events-none blur-[100px]">
        <div className="w-full h-full bg-brand-accent rounded-full" />
      </div>
    </section>
  );
};

export default Differentiation;

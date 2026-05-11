
import React from 'react';

const Challenge: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-[8vw] bg-[#fdfdfd] overflow-hidden">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <article className="reveal">
          <header>
            <div className="text-brand-accent text-sm font-bold uppercase tracking-widest mb-4">The Challenge</div>
            <h2 className="font-serif text-5xl md:text-6xl font-semibold mb-10 text-brand-text leading-tight">
              Bridging Ancient Wisdom <br />& Precise Instrumentation
            </h2>
          </header>
          <div className="space-y-8 text-lg text-brand-muted leading-relaxed">
            <p>
              Classical Naadi diagnostics offers profound systemic insights into a patient's functional health, yet its clinical wider utility has been limited by the inherent subjectivity of human touch.
            </p>
            <p>
              Modern healthcare excels in structural imaging but often misses the real-time, functional context provided by the arterial pulse. <strong>SpandaVidya</strong> bridges this gap by introducing objective signal data into traditional diagnostics.
            </p>
            <blockquote className="pt-6 border-l-4 border-brand-accent/40 pl-8 italic text-brand-text/80 text-xl font-serif">
              "Our mission is to empower Ayurvedic practitioners with digital vision while providing clinicians with holistic functional data."
            </blockquote>
          </div>
        </article>
        <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] mr-8  md:aspect-square shadow-2xl reveal stagger-1">
          <img 
            src="im2w.png" 
            alt="Scientific visualization of radial pulse signal intelligence used by Naadi Raksha" 
            loading="lazy"
            className="object-cover w-full h-full hover:scale-110 transition-transform duration-[1.5s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-text/40 to-transparent " />
          <div className="absolute bottom-10 left-10 text-white z-10">
            <div className="text-xs font-bold uppercase tracking-tighter opacity-80 mb-1">SpandaVidya Analytics</div>
            <div className="text-2xl font-serif italic">Precision Mapping</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;

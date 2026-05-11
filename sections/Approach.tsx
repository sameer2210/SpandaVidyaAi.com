
import React from 'react';
import Card from '../components/Card';

const approaches = [
  {
    title: "Sensing Excellence",
    description: "Proprietary non-invasive sensors capture the full waveform of the radial artery with unprecedented resolution.",
    icon: "📡"
  },
  {
    title: "Ayurvedic Logic",
    description: "Algorithms mapped to classical descriptors like Gati, Vega, and Tala—not just standard BPM.",
    icon: "🧬"
  },
  {
    title: "Clinical AI",
    description: "Deep learning models validated against expert clinical diagnoses to ensure predictive reliability.",
    icon: "🧠"
  }
];

const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-32 px-6 md:px-[8vw] bg-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-3xl mb-20 reveal">
          <div className="text-brand-accent text-sm font-bold uppercase tracking-widest mb-4">Methodology</div>
          <h2 className="font-serif text-5xl md:text-6xl font-semibold mb-8">Our Scientific Core</h2>
          <p className="text-xl text-brand-muted leading-relaxed">
            By digitizing the nuanced tactile sensations of a Vaidya, we create a reproducible dataset for holistic health assessment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {approaches.map((item, idx) => (
            <div key={idx} className={`reveal stagger-${idx + 1}`}>
              <Card className="group hover:bg-brand-text hover:text-white transition-all duration-700 h-full">
                <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-3xl mb-8 group-hover:bg-brand-accent transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-5 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-brand-muted group-hover:text-white/70 leading-relaxed text-lg transition-colors">
                  {item.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;

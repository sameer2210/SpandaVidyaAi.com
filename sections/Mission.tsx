import React from 'react';
import Card from '../components/Card';
import { T } from '../theme';

interface MissionCardProps {
  title: string;
  text: string;
}

const MissionCard: React.FC<MissionCardProps> = ({ title, text }) => {
  return (
    <Card className="flex flex-col text-left">
      <h3 className="font-serif text-2xl font-bold mb-4 flex items-center gap-2" style={{ color: T.accent }}>
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: T.accent }} /> 
        {title}
      </h3>
      <p className="text-lg leading-relaxed font-light" style={{ color: T.muted }}>
        {text}
      </p>
    </Card>
  );
};

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-32 px-6 md:px-[8vw] bg-transparent text-center">
      <div className="max-w-4xl mx-auto">
        <div 
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-8 tracking-widest uppercase border"
          style={{ 
            backgroundColor: "rgba(140, 107, 62, 0.05)",
            borderColor: "rgba(140, 107, 62, 0.15)",
            color: T.accent 
          }}
        >
          07 — Mission & Vision
        </div>
        <h2 className="font-serif text-4xl md:text-6xl font-semibold mb-12 leading-tight" style={{ color: T.charcoal }}>
          Strengthening Diagnostics Through <br className="hidden md:block" />
          Responsible Technology
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <MissionCard 
            title="Our Mission"
            text="To preserve, standardize, and scientifically strengthen SpandaVidya through deep instrumentation and data-driven insights."
          />
          <MissionCard 
            title="Our Vision"
            text="An integrative future where traditional functional diagnostics complement modern healthcare systems at global scale."
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;

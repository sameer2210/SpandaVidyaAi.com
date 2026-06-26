import React, { useState } from "react";
import { T } from "../theme";
import { useScrollReveal } from "../hooks";
import { doshas } from '@/data';

interface DoshaCardProps {
  d: typeof doshas[0];
  index: number;
  visible: boolean;
}

const DoshaCard: React.FC<DoshaCardProps> = ({ d, index, visible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`reveal reveal-delay-${index + 1} ${visible ? "visible" : ""} p-8 md:p-10 transition-all`}
      style={{
        backgroundColor: T.cream,
        borderTop: `3px solid ${d.color}`,
        borderLeft: T.border.light,
        borderRight: T.border.light,
        borderBottom: T.border.light,
        borderRadius: T.radius.xl,
        position: "relative",
        boxShadow: isHovered ? `${T.shadows.md}, 0 8px 24px ${d.color}12` : T.shadows.sm,
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        transition: `all ${T.transitions.duration} ${T.transitions.easing}`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="w-11 h-11 rounded-full flex items-center justify-center mb-7"
        style={{
          background: `${d.color}18`, 
          border: `1px solid ${d.color}40`,
        }}
        aria-hidden="true"
      >
        <div className="w-3.5 h-3.5 rounded-full" style={{ background: d.color, opacity: 0.8 }} />
      </div>
      <div className="flex justify-between items-baseline mb-3">
        <h3 className="serif text-3xl font-medium" style={{ color: T.charcoal }}>
          {d.name}
        </h3>
        <span className="text-[11px] font-semibold tracking-widest uppercase" style={{ color: d.color }}>
          {d.element}
        </span>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: T.muted }}>
        {d.desc}
      </p>
    </div>
  );
};

export default function PhilosophySection() {
  const [sectionRef, visible] = useScrollReveal(0.1);

  return (
    <section 
      id="philosophy" 
      ref={sectionRef} 
      className="py-32 px-6 md:px-[8vw] bg-transparent relative overflow-hidden"
    >
      {/* Large background text */}
      <div 
        className="serif" 
        style={{
          position: "absolute", 
          top: "50%", 
          left: "-2%",
          transform: "translateY(-50%)",
          fontSize: "clamp(80px, 18vw, 220px)",
          fontWeight: 300, 
          color: `${T.accent}07`,
          letterSpacing: "-0.05em", 
          pointerEvents: "none",
          whiteSpace: "nowrap", 
          userSelect: "none",
          zIndex: 0,
        }}
      >
        Tridosha
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <span 
            className={`reveal ${visible ? "visible" : ""} inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-5`} 
            style={{ color: T.accent }}
          >
            04 — Philosophy
          </span>
          <div className="flex flex-wrap lg:flex-nowrap items-start gap-12 lg:gap-16">
            <h2 
              className={`serif reveal ${visible ? "visible reveal-delay-1" : ""} text-5xl md:text-6xl font-semibold leading-tight max-w-[480px]`} 
              style={{ color: T.charcoal }}
            >
              The three forces<br />
              <em className="italic font-medium" style={{ color: T.accent }}>that shape all life</em>
            </h2>
            <div 
              className={`reveal reveal-delay-2 ${visible ? "visible" : ""} max-w-2xl pt-2 space-y-5`}
            >
              <p className="text-lg leading-relaxed font-light" style={{ color: T.muted }}>
                Ayurveda does not treat symptoms. It understands the individual—their constitution,
                their environment, their rhythm of life. For five thousand years, Vaidyas have
                prescribed based on Prakriti, not just pathology.
              </p>
              <p className="text-lg leading-relaxed font-light" style={{ color: T.muted }}>
                SpandaVidyaAi encodes this wisdom into its reasoning layer. Every response
                considers your Dosha balance, your Agni (digestive fire), your Dhatus (tissues),
                and your unique life context—not a generic wellness template.
              </p>
            </div>
          </div>
        </div>

        {/* Dosha cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doshas.map((d, i) => (
            <DoshaCard 
              key={d.name} 
              d={d} 
              index={i} 
              visible={visible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

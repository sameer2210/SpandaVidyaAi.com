import React, { useState } from 'react';
import { T } from '../theme';
import { teamMembers } from '@/data';

const TeamCard: React.FC<{ member: typeof teamMembers[0] }> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group overflow-hidden flex flex-col transition-all"
      style={{
        backgroundColor: T.cream,
        border: T.border.light,
        borderRadius: T.radius.xl, // 24px
        boxShadow: isHovered ? T.shadows.md : T.shadows.sm,
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        transitionDuration: T.transitions.duration,
        transitionTimingFunction: T.transitions.easing,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="overflow-hidden bg-gray-100">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-[320px] object-cover object-top transition-transform duration-700"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold" style={{ color: T.charcoal }}>
          {member.name}
        </h3>

        <p className="text-sm font-semibold uppercase tracking-wider mt-2 mb-4" style={{ color: T.accent }}>
          {member.role}
        </p>

        <p className="text-sm leading-relaxed font-light" style={{ color: T.muted }}>
          {member.description}
        </p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section
      id="team"
      className="relative py-32 px-6 md:px-[8vw] bg-transparent overflow-hidden"
    >
      <div className="relative z-10">
        {/* Heading */}
        <div className="max-w-3xl mb-20">
          <span 
            className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-5" 
            style={{ color: T.accent }}
          >
            08 — Our Team
          </span>

          <h2 className="font-serif text-5xl md:text-6xl font-semibold leading-tight mb-6" style={{ color: T.charcoal }}>
            The Minds Behind
            <span style={{ color: T.accent }}> SpandaVidya AI</span>
          </h2>

          <p className="text-lg leading-relaxed font-light" style={{ color: T.muted }}>
            A multidisciplinary team working at the intersection of Ayurveda,
            artificial intelligence, signal processing, and healthcare systems.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
import React, { useState } from 'react';
import { T } from '../theme';

interface TechStackItemProps {
  item: {
    name: string;
    category: string;
    description: string;
  };
}

const TechStackItem: React.FC<TechStackItemProps> = ({ item }) => {
  const { name, category, description } = item;
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle: React.CSSProperties = {
    backgroundColor: T.cream,
    border: isHovered ? `1px solid rgba(140, 107, 62, 0.3)` : T.border.light,
    borderRadius: T.radius.lg, // 16px
    padding: "26px", // p-6.5 equivalent (26px)
    boxShadow: isHovered ? T.shadows.md : T.shadows.sm,
    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
    transition: `all ${T.transitions.duration} ${T.transitions.easing}`,
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col justify-between min-h-[160px] group"
    >
      <div>
        <span 
          className="text-[10px] font-bold uppercase tracking-wider mb-2.5 block"
          style={{ color: T.accent }}
        >
          {category}
        </span>
        <h4 
          className="font-serif text-2xl font-bold mb-2.5 transition-colors duration-300"
          style={{ color: isHovered ? T.accent : T.charcoal }}
        >
          {name}
        </h4>
        <p className="text-xs leading-relaxed" style={{ color: T.muted }}>
          {description}
        </p>
      </div>
      <div 
        className="h-[1px] transition-all duration-500 mt-5" 
        style={{ 
          width: isHovered ? "56px" : "32px", // w-14 vs w-8
          backgroundColor: isHovered ? T.accent : `rgba(140, 107, 62, 0.2)`
        }}
      />
    </div>
  );
};

export default TechStackItem;

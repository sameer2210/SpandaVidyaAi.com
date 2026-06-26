import React, { useState, forwardRef } from 'react';
import { T } from '../theme';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ children, className = '', style = {} }, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle: React.CSSProperties = {
    backgroundColor: T.cream,
    border: T.border.light,
    borderRadius: T.radius.xl, // 24px
    boxShadow: isHovered ? T.shadows.md : T.shadows.sm,
    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
    transition: `all ${T.transitions.duration} ${T.transitions.easing}`,
    ...style,
  };

  return (
    <div
      ref={ref}
      className={`p-8 md:p-12 flex flex-col ${className}`}
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;

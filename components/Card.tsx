
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white border border-black/5 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;

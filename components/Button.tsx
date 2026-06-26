import React, { useState } from 'react';
import { T } from '../theme';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', href, children, className = '', ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = "inline-flex items-center justify-center font-medium transform active:scale-95";
  
  // Base inline styles from theme tokens
  const inlineStyles: React.CSSProperties = {
    padding: "16px 40px", // py-4 px-10
    borderRadius: T.radius.sm, // 4px
    transition: T.transitions.standard,
    transform: isHovered ? "scale(1.02) translateY(-2px)" : "scale(1) translateY(0)",
  };

  // Variant mappings using theme tokens
  const variantStyles = {
    primary: {
      backgroundColor: isHovered ? T.accent : T.charcoal,
      color: T.ivory,
      border: `1px solid ${isHovered ? T.accent : T.charcoal}`,
      boxShadow: isHovered ? T.shadows.md : T.shadows.sm,
    },
    secondary: {
      backgroundColor: isHovered ? T.accent : T.cream,
      color: isHovered ? T.ivory : T.accent,
      border: `1px solid ${T.accent}`,
      boxShadow: isHovered ? T.shadows.md : T.shadows.sm,
    },
    outline: {
      backgroundColor: "transparent",
      color: isHovered ? T.accent : T.charcoal,
      border: `1px solid ${isHovered ? T.accent : `${T.charcoal}20`}`,
      boxShadow: "none",
    },
  };

  const combinedStyles = `${baseStyles} ${className}`;
  const combinedInlineStyles = { ...inlineStyles, ...variantStyles[variant] };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        style={combinedInlineStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedStyles}
      style={combinedInlineStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

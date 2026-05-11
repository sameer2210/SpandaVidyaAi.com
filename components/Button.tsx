
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', href, children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95";
  
  const variants = {
    primary: "bg-brand-accent text-white border border-brand-accent hover:bg-brand-accent/90 shadow-lg shadow-brand-accent/20",
    secondary: "bg-white text-brand-accent border border-brand-accent hover:bg-brand-accent hover:text-white shadow-lg shadow-black/5",
    outline: "bg-transparent text-brand-text border border-brand-text/20 hover:border-brand-accent hover:text-brand-accent",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;


import React, { useState, useEffect } from 'react';
import { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Approach', href: '#approach' },
  { label: 'Progress', href: '#progress' },
  { label: 'Mission', href: '#mission' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 md:px-[8vw] py-4 flex justify-between items-center ${
      isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm py-3' : 'bg-transparent'
    }`}>
      <div className="font-serif text-xl md:text-2xl font-bold text-brand-text tracking-tight flex items-center gap-2">
        {/* <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white text-xs"><img src="./public/logo.jpg" alt="" /></div> */}
        <img src="logo2.png" alt="Logo" className="w-64 h-40 object-contain " />
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex gap-8 items-center">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-semibold text-brand-muted hover:text-brand-accent transition-colors relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
        <a 
          href="https://naadi-raksha-liart.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-4 px-6 py-2.5 bg-brand-accent text-white text-sm font-bold rounded-full shadow-lg shadow-brand-accent/30 hover:bg-brand-accent/90 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
        >
          Try it, Chat us
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="lg:hidden p-2 text-brand-text focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-black/5 flex flex-col p-6 gap-4 lg:hidden animate-fade-in-up shadow-2xl">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-brand-text py-2 border-b border-black/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://naadi-raksha.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 px-6 py-4 bg-brand-accent text-white text-center font-bold rounded-2xl shadow-xl shadow-brand-accent/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            Try it, Chat us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

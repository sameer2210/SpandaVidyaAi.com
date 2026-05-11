
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
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY <= 30) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      setIsNavVisible(true);
    }
  }, [mobileMenuOpen]);

  const shouldShowNav = isNavVisible || mobileMenuOpen;

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 px-4 md:px-6 transition-transform duration-500 ${
        shouldShowNav ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div
        className={`relative mx-auto mt-3 max-w-[1220px] rounded-2xl transition-all duration-500 ${
          isScrolled
            ? 'border border-black/10 bg-white/88 shadow-[0_12px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl'
            : 'border border-black/5 bg-white/62 backdrop-blur-md'
        }`}
      >
        <div className="h-[68px] md:h-[72px] px-8 md:px-6 flex items-center justify-between">
          <a href="#home" className="group flex items-center">
            <img
              src="/logo2.png"
              alt="SpandaVidya Logo"
              className="h-14 md:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[15px] font-medium text-brand-muted transition-colors duration-300 hover:text-brand-text"
              >
                <span>{link.label}</span>
                <span className="absolute left-0 -bottom-1.5 h-[2px] w-full origin-left scale-x-0 bg-brand-accent/75 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
            <a
              href="https://naadi-raksha-liart.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group ml-2 inline-flex items-center gap-2 rounded-full bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(181,139,42,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(181,139,42,0.45)]"
            >
              Try it, Chat us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.6} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-brand-text transition-colors duration-300 hover:bg-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-black/10 px-5 pb-5 pt-3 animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2.5 text-base font-medium text-brand-text transition-colors duration-300 hover:bg-black/[0.03]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="https://naadi-raksha-liart.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-brand-accent px-6 py-3.5 text-center text-sm font-semibold text-white shadow-[0_10px_22px_rgba(181,139,42,0.35)] transition-all duration-300 hover:bg-brand-accent/95"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try it, Chat us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

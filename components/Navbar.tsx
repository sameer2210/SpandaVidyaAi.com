import React, { useState, useEffect } from 'react';
import { NavLink } from '../types';
import { branding, urls, navigationLinks } from '@/data';
import { T } from '../theme';

const links = navigationLinks;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticked = false;

    const handleScroll = () => {
      if (!ticked) {
        window.requestAnimationFrame(() => {
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
          ticked = false;
        });
        ticked = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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

  // Inline styles pulling directly from theme tokens
  const containerStyle: React.CSSProperties = {
    backgroundColor: isScrolled ? "rgba(251, 249, 244, 0.88)" : "rgba(251, 249, 244, 0.62)",
    border: isScrolled ? T.border.light : "1px solid rgba(26, 24, 20, 0.03)",
    boxShadow: isScrolled ? T.shadows.lg : T.shadows.sm,
    borderRadius: T.radius.lg,
    transition: `all ${T.transitions.duration} ${T.transitions.easing}`,
  };

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={`fixed inset-x-0 top-0 px-4 md:px-6 transition-transform`}
      style={{
        zIndex: T.zIndex.navbar,
        transform: shouldShowNav ? 'translateY(0)' : 'translateY(-100%)',
        transitionDuration: T.transitions.duration,
        transitionTimingFunction: T.transitions.easing,
      }}
    >
      <div
        className="relative mx-auto mt-3 max-w-[1220px] backdrop-blur-md"
        style={containerStyle}
      >
        <div className="h-[68px] md:h-[72px] px-8 md:px-6 flex items-center justify-between">
          <a href="#home" className="group flex items-center" aria-label="SpandaVidya Home">
            <img
              src={branding.logo}
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
                className="group relative text-[15px] font-medium transition-colors duration-300"
                style={{ color: T.muted }}
              >
                <span className="hover:text-[#1A1814] transition-colors" style={{ transitionDuration: T.transitions.duration }}>{link.label}</span>
                <span
                  className="absolute left-0 -bottom-1.5 h-[2px] w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ backgroundColor: T.accent }}
                />
              </a>
            ))}
            <a
              href={urls.chatbotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group ml-2 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: T.accent,
                boxShadow: `0 8px 24px rgba(140, 107, 62, 0.25)`,
              }}
            >
              Try it, Chat us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.6} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border text-brand-text transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={mobileMenuOpen}
            style={{
              borderColor: "rgba(26, 24, 20, 0.1)",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t px-5 pb-5 pt-3 animate-fade-in-up" style={{ borderColor: "rgba(26, 24, 20, 0.1)" }}>
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2.5 text-base font-medium transition-colors duration-300 hover:bg-black/[0.03]"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: T.charcoal }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={urls.chatbotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3.5 text-center text-sm font-semibold text-white transition-all duration-300 hover:opacity-95"
              style={{
                backgroundColor: T.accent,
                boxShadow: `0 10px 22px rgba(140, 107, 62, 0.25)`,
              }}
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

import React from 'react';
import { branding, company, social, contact, navigationLinks } from '@/data';
import { T } from '../theme';
import Button from './Button';
import Card from './Card';

interface FooterProps {
  onNavigate?: (path: string) => void;
  currentPath?: string;
}

const SocialIcon = ({ d, label, href }: { d: string; label: string; href: string }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a 
      href={href} 
      aria-label={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md"
      style={{
        backgroundColor: isHovered ? T.accent : T.cream,
        color: isHovered ? T.ivory : T.muted,
        border: `1px solid ${isHovered ? T.accent : "rgba(26, 24, 20, 0.06)"}`,
      }}
    >
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d={d} />
      </svg>
    </a>
  );
};

const Footer: React.FC<FooterProps> = ({ onNavigate, currentPath = '/' }) => {
  return (
    <footer 
      role="contentinfo"
      className="py-20 px-6 md:px-[8vw] bg-transparent"
      style={{ borderTop: T.border.light }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Final CTA Section above the footer (only on Home route) */}
        {currentPath === '/' && (
          <Card className="mb-24 p-12 md:p-16 text-center max-w-6xl mx-auto overflow-hidden relative border bg-transparent">
            {/* Ambient decorative glow inside the card */}
            <div 
              className="absolute -top-24 -left-24 w-48 h-48 rounded-full pointer-events-none"
              style={{
                backgroundColor: `${T.accent}08`,
                filter: 'blur(40px)',
              }}
            />
            <div 
              className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full pointer-events-none"
              style={{
                backgroundColor: `${T.accentWarm}06`,
                filter: 'blur(40px)',
              }}
            />
            
            <h3 className="font-serif text-3xl md:text-5xl font-semibold mb-4 leading-tight" style={{ color: T.charcoal }}>
              Pioneering Ocular & Ayurvedic Signal Intelligence
            </h3>
            <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto font-light leading-relaxed" style={{ color: T.muted }}>
              Join our active clinical research initiative or experience our AI-powered cataract screening assistant today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="#cataract-detection">Launch Screening App</Button>
              <Button href="#contact" variant="outline">Collaborate with Us</Button>
            </div>
          </Card>
        )}

        {/* 2. Main Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 mb-16 text-left">
          {/* Column 1: Brand */}
          <div className="flex flex-col space-y-5">
            <div className="flex items-center gap-3">
              <img 
                className="h-10 w-auto object-contain" 
                src={branding.logo} 
                alt={`${branding.title} Logo`} 
              />
              <span 
                className="font-serif text-2xl font-bold tracking-tight"
                style={{ color: T.charcoal }}
              >
                {branding.title}
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: T.muted }}>
              {company.description}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col space-y-4">
            <h4 
              className="font-semibold uppercase tracking-widest text-[11px]" 
              style={{ color: T.charcoal }}
            >
              Navigation
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              {navigationLinks.map((link) => (
                <a 
                  key={link.href}
                  href={currentPath === '/' ? link.href : `/${link.href}`}
                  onClick={(e) => {
                    if (currentPath !== '/' && onNavigate) {
                      e.preventDefault();
                      onNavigate('/');
                      // Wait a tick for section render then scroll
                      setTimeout(() => {
                        const target = document.querySelector(link.href);
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                      }, 50);
                    }
                  }}
                  className="hover:opacity-100 transition-opacity w-fit" 
                  style={{ color: T.muted, opacity: 0.8 }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col space-y-4">
            <h4 
              className="font-semibold uppercase tracking-widest text-[11px]" 
              style={{ color: T.charcoal }}
            >
              Platform
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              <a 
                href="#cataract-detection"
                onClick={(e) => {
                  if (currentPath !== '/' && onNavigate) {
                    e.preventDefault();
                    onNavigate('/');
                    setTimeout(() => {
                      const target = document.querySelector('#cataract-detection');
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }
                }}
                className="hover:opacity-100 transition-opacity w-fit" 
                style={{ color: T.muted, opacity: 0.8 }}
              >
                AI Cataract Detection
              </a>
              <a 
                href="#philosophy"
                onClick={(e) => {
                  if (currentPath !== '/' && onNavigate) {
                    e.preventDefault();
                    onNavigate('/');
                    setTimeout(() => {
                      const target = document.querySelector('#philosophy');
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }
                }}
                className="hover:opacity-100 transition-opacity w-fit" 
                style={{ color: T.muted, opacity: 0.8 }}
              >
                AI Naadi Consultation
              </a>
              <a 
                href="#technology"
                onClick={(e) => {
                  if (currentPath !== '/' && onNavigate) {
                    e.preventDefault();
                    onNavigate('/');
                    setTimeout(() => {
                      const target = document.querySelector('#technology');
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }
                }}
                className="hover:opacity-100 transition-opacity w-fit" 
                style={{ color: T.muted, opacity: 0.8 }}
              >
                Research Architecture
              </a>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col space-y-4">
            <h4 
              className="font-semibold uppercase tracking-widest text-[11px]" 
              style={{ color: T.charcoal }}
            >
              Inquiries
            </h4>
            <div className="flex flex-col gap-4 text-sm" style={{ color: T.muted }}>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider mb-1" style={{ color: T.charcoal }}>Official Email</p>
                <a 
                  href={`mailto:${contact.officialEmail}`} 
                  className="hover:opacity-100 transition-opacity break-all"
                  style={{ color: T.accent, opacity: 0.9 }}
                >
                  {contact.officialEmail}
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider mb-1" style={{ color: T.charcoal }}>Support Email</p>
                <a 
                  href={`mailto:${contact.supportEmail}`} 
                  className="hover:opacity-100 transition-opacity break-all"
                  style={{ color: T.accent, opacity: 0.9 }}
                >
                  {contact.supportEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Column 5: Stay Connected & Socials */}
          <div className="flex flex-col space-y-5">
            <h4 
              className="font-semibold uppercase tracking-widest text-[11px]" 
              style={{ color: T.charcoal }}
            >
              Stay Connected
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: T.muted }}>
              Follow our research initiatives and clinical updates.
            </p>
            <div className="flex gap-3">
              <SocialIcon 
                label="Instagram"
                href={social.instagram}
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" 
              />
              <SocialIcon 
                label="Twitter"
                href={social.twitter}
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
              />
              <SocialIcon 
                label="LinkedIn"
                href={social.linkedin}
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" 
              />
            </div>
          </div>
        </div>

        {/* 3. Quick Statistics / Trust Badges */}
        <div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-10 border-t border-b mb-16 text-center md:text-left"
          style={{ borderColor: "rgba(26, 24, 20, 0.08)" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center border transition-colors duration-300" style={{ backgroundColor: T.cream, borderColor: "rgba(26, 24, 20, 0.06)" }}>
              <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: T.accent }} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider" style={{ color: T.charcoal }}>AI Powered</p>
              <p className="text-[10px] leading-snug" style={{ color: T.muted }}>Gemini & Custom Vision</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center border transition-colors duration-300" style={{ backgroundColor: T.cream, borderColor: "rgba(26, 24, 20, 0.06)" }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: T.sage }} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider" style={{ color: T.charcoal }}>Privacy First</p>
              <p className="text-[10px] leading-snug" style={{ color: T.muted }}>TLS 1.3 & AWS S3 Encrypted</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center border transition-colors duration-300" style={{ backgroundColor: T.cream, borderColor: "rgba(26, 24, 20, 0.06)" }}>
              <span className="w-2.5 h-2.5 rounded-full animate-bounce" style={{ backgroundColor: T.accentWarm }} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider" style={{ color: T.charcoal }}>Research Driven</p>
              <p className="text-[10px] leading-snug" style={{ color: T.muted }}>Ayurvedic Pulse Mapping</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center border transition-colors duration-300" style={{ backgroundColor: T.cream, borderColor: "rgba(26, 24, 20, 0.06)" }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: T.sagePale }} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-wider" style={{ color: T.charcoal }}>Made in India</p>
              <p className="text-[10px] leading-snug" style={{ color: T.muted }}>Engineered at IIT Kanpur</p>
            </div>
          </div>
        </div>

        {/* 4. Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6" style={{ borderTop: T.border.light }}>
          <div className="text-[11px] font-medium tracking-wide uppercase text-center md:text-left" style={{ color: T.muted }}>
            &copy; {new Date().getFullYear()} {company.author} • All Rights Reserved
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a 
              href="/privacy" 
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/privacy');
                }
              }}
              className="hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-[0.2em]" 
              style={{ color: T.muted, opacity: 0.8 }}
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('/terms');
                }
              }}
              className="hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-[0.2em]" 
              style={{ color: T.muted, opacity: 0.8 }}
            >
              Terms & Conditions
            </a>
          </div>
          <div className="text-[9px] font-mono tracking-wider text-center md:text-right" style={{ color: T.muted, opacity: 0.7 }}>
            Secure Server-Side AI • TLS 1.3 Encryption
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

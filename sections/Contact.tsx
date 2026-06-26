import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { contact, branding } from '@/data';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../components/Button';
import { T } from '../theme';

gsap.registerPlugin(ScrollTrigger);

const ContactCard: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex gap-4 p-5 transition-all"
      style={{
        backgroundColor: T.cream,
        border: isHovered ? `1px solid rgba(140, 107, 62, 0.3)` : T.border.light,
        borderRadius: T.radius.xl, // 24px
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: isHovered ? T.shadows.md : T.shadows.sm,
        transitionDuration: T.transitions.duration,
        transitionTimingFunction: T.transitions.easing,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="w-11 h-11 rounded-xl border flex items-center justify-center" 
        style={{ 
          backgroundColor: "rgba(140, 107, 62, 0.05)",
          borderColor: "rgba(140, 107, 62, 0.20)",
          color: T.accent
        }} 
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <p className="text-sm tracking-wide uppercase font-semibold mb-1" style={{ color: T.muted }}>{label}</p>
        <p className="font-medium" style={{ color: T.charcoal }}>{value}</p>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { y: 34, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.14,
            scrollTrigger: {
              trigger: section,
              start: 'top 76%',
            },
          }
        );
      }

      if (cardRefs.current.length) {
        gsap.fromTo(
          cardRefs.current,
          { y: 36, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: section,
              start: 'top 68%',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-32 px-6 md:px-[8vw] bg-transparent">
      <div 
        className="max-w-6xl mx-auto p-8 md:p-12 relative overflow-hidden"
        style={{
          backgroundColor: T.cream,
          border: T.border.light,
          borderRadius: T.radius.xl, // 24px
          boxShadow: T.shadows.md,
        }}
      >
        <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div ref={headerRef}>
            <div 
              className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-5"
              style={{ color: T.accent }}
            >
              06 - Contact
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-5 leading-tight" style={{ color: T.charcoal }}>
              Connect with <br />{branding.title}
            </h2>
            <p className="text-lg leading-relaxed mb-8 max-w-xl font-light" style={{ color: T.muted }}>
              We are inviting researchers, medical clinicians, Ayurvedic experts, and mission-aligned investors to join our research hub.
            </p>
            <Button href={`mailto:${contact.supportEmail}`} className="w-full md:w-auto">
              Send an Inquiry
            </Button>
          </div>

          <div className="space-y-4">
            <div
              ref={(el) => {
                if (el) cardRefs.current[0] = el;
              }}
            >
              <ContactCard 
                label="Official Email"
                value={contact.supportEmail}
                icon={
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 6h18v12H3z" />
                    <path d="M3 7l9 7 9-7" />
                  </svg>
                }
              />
            </div>

            <div
              ref={(el) => {
                if (el) cardRefs.current[1] = el;
              }}
            >
              <ContactCard 
                label="Headquarters"
                value={contact.location}
                icon={
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.6" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

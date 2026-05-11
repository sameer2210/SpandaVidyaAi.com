
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../components/Button';

gsap.registerPlugin(ScrollTrigger);

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
    <section ref={sectionRef} id="contact" className="py-28 px-6 md:px-[8vw] bg-[#f6f3ee]">
      <div className="max-w-6xl mx-auto bg-[#fcfbf7] border border-black/10 rounded-[2rem] p-8 md:p-12 shadow-[0_14px_45px_rgba(0,0,0,0.08)] relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div ref={headerRef}>
            <div className="inline-block text-brand-accent text-xs font-semibold uppercase tracking-[0.16em] mb-5">
              06 - Contact
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-5 leading-tight text-brand-text">
              Connect with <br />SpandaVidya
            </h2>
            <p className="text-lg text-brand-muted leading-relaxed mb-8 max-w-xl">
              We are inviting researchers, medical clinicians, Ayurvedic experts, and mission-aligned investors to join our research hub.
            </p>
            <Button href="mailto:Dilpar99@gmail.com" className="w-full md:w-auto">
              Send an Inquiry
            </Button>
          </div>

          <div className="space-y-4">
            <div
              ref={(el) => {
                if (el) cardRefs.current[0] = el;
              }}
              className="flex gap-4 p-5 rounded-2xl bg-white border border-black/5 hover:border-brand-accent/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 6h18v12H3z" />
                  <path d="M3 7l9 7 9-7" />
                </svg>
              </div>
              <div>
                <p className="text-sm tracking-wide uppercase text-brand-muted font-semibold mb-1">Official Email</p>
                <p className="text-brand-text font-medium">Dilpar99@gmail.com</p>
              </div>
            </div>

            <div
              ref={(el) => {
                if (el) cardRefs.current[1] = el;
              }}
              className="flex gap-4 p-5 rounded-2xl bg-white border border-black/5 hover:border-brand-accent/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.6" />
                </svg>
              </div>
              <div>
                <p className="text-sm tracking-wide uppercase text-brand-muted font-semibold mb-1">Headquarters</p>
                <p className="text-brand-text font-medium">Advanced Health-Tech Research Hub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../components/Button';
import { urls } from '@/data';
import { T } from '../theme';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (badgeRef.current) {
        tl.fromTo(badgeRef.current, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55 });
      }

      if (headingRef.current) {
        tl.fromTo(headingRef.current, { y: 36, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9 }, '-=0.2');
      }

      if (paragraphRef.current) {
        tl.fromTo(paragraphRef.current, { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.75 }, '-=0.45');
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { y: 22, autoAlpha: 0, scale: 0.97 },
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.65, stagger: 0.1 },
          '-=0.35'
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="home" 
      className="relative min-h-screen flex items-center px-6 md:px-[8vw] py-32 overflow-hidden bg-transparent"
    >
      <div className="relative z-10 max-w-5xl">
        <div 
          ref={badgeRef} 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest mb-8"
          style={{
            backgroundColor: "rgba(140, 107, 62, 0.05)",
            borderColor: "rgba(140, 107, 62, 0.15)",
            color: T.accent,
          }}
        >
          <span className="relative flex h-2 w-2">
            <span 
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: T.accent }}
            />
            <span 
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ backgroundColor: T.accent }}
            />
          </span>
          AI-Enabled Health Intelligence
        </div>
        
        <h1 
          ref={headingRef} 
          className="font-serif text-6xl md:text-8xl font-bold leading-[1.05] mb-8"
          style={{ color: T.charcoal }}
        >
          Digitizing <span style={{ color: T.accent }}>SpandaVidya</span> <br />
          <span className="italic font-medium" style={{ color: "rgba(26, 24, 20, 0.6)" }}>with Signal Intelligence</span>
        </h1>
        
        <p 
          ref={paragraphRef} 
          className="text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed font-light"
          style={{ color: T.muted }}
        >
          We leverage high-fidelity sensing and proprietary AI to capture Ayurvedic pulse signals, delivering objective, clinical-grade functional insights for integrative medicine.
        </p>
        
        <div ref={ctaRef} className="flex flex-wrap gap-5">
          <Button href="#approach" className="shadow-xl">Our Technology</Button>
          <Button href="#contact" variant="outline">Partner & Collaborate</Button>
          <Button href={urls.chatbotUrl} variant="outline">
            Try Spandhvidya Chatbot
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

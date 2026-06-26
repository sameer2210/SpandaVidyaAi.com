import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { T } from '../theme';
import Card from '../components/Card';
import { approaches } from '@/data';

gsap.registerPlugin(ScrollTrigger);

const Approach: React.FC = () => {
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
          { y: 36, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
            },
          }
        );
      }

      if (cardRefs.current.length) {
        gsap.fromTo(
          cardRefs.current,
          { y: 42, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            ease: 'power3.out',
            stagger: 0.14,
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
    <section ref={sectionRef} id="approach" className="py-32 px-6 md:px-[8vw] bg-transparent relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-20">
          <span 
            className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-5"
            style={{ color: T.accent }}
          >
            02 — Methodology
          </span>
          <div className="flex flex-wrap lg:flex-nowrap items-start gap-12 lg:gap-16">
            <h2 
              className="font-serif text-5xl md:text-6xl font-semibold leading-tight max-w-[520px]"
              style={{ color: T.charcoal }}
            >
              Translating touch into
              <br />
              <em className="italic font-medium" style={{ color: T.accent }}>measurable patterns</em>
            </h2>
            <div className="max-w-2xl pt-2 space-y-5">
              <p className="text-lg leading-relaxed font-light" style={{ color: T.muted }}>
                A skilled Vaidya does not read only speed; they read character, rhythm, and tension. Our methodology captures that same richness as structured signal data.
              </p>
              <p className="text-lg leading-relaxed font-light" style={{ color: T.muted }}>
                The goal is not to replace traditional judgment. It is to make pulse interpretation more consistent, traceable, and teachable across practitioners.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((item, idx) => (
            <Card
              key={idx}
              ref={(el) => {
                if (el) cardRefs.current[idx] = el;
              }}
              className="min-h-[320px] text-left"
            >
              <div 
                className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-8 animate-pulse-slow"
                style={{ color: T.accent }}
              >
                Phase {item.phase}
              </div>
              <h3 className="font-serif text-3xl font-semibold mb-3 animate-fade-in-up" style={{ color: T.charcoal }}>
                {item.title}
              </h3>
              <div 
                className="text-[11px] font-semibold uppercase tracking-[0.12em] mb-6"
                style={{ color: `${T.accent}d0` }}
              >
                {item.detail}
              </div>
              <p className="leading-relaxed text-base font-light flex-grow mb-6" style={{ color: T.muted }}>
                {item.description}
              </p>
              <div className="w-14 h-[2px] transition-all duration-300" style={{ backgroundColor: `${T.accent}60` }} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;

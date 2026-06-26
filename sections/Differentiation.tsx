import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { T } from '../theme';
import Card from '../components/Card';
import { differentiators } from '@/data';

gsap.registerPlugin(ScrollTrigger);

const Differentiation: React.FC = () => {
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
            stagger: 0.12,
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
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.86,
            ease: 'power3.out',
            stagger: 0.14,
            scrollTrigger: {
              trigger: section,
              start: 'top 66%',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-[8vw] bg-transparent overflow-hidden relative">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-16">
          <span 
            className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-5"
            style={{ color: T.accent }}
          >
            03 — Differentiation
          </span>
          <div className="flex flex-wrap lg:flex-nowrap items-start gap-12 lg:gap-16">
            <h2 
              className="font-serif text-5xl md:text-6xl font-semibold leading-tight max-w-[540px]"
              style={{ color: T.charcoal }}
            >
              Why This Is
              <br />
              <em className="italic font-medium" style={{ color: T.accent }}>Different</em>
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed pt-2 font-light" style={{ color: T.muted }}>
              SpandaVidya is shaped as a clinical tool, not a speculative AI showcase. The system is designed to preserve classical intent while making pulse interpretation more consistent and reviewable.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((item, idx) => (
            <Card
              key={idx}
              ref={(el) => {
                if (el) cardRefs.current[idx] = el;
              }}
              className="min-h-[230px] text-left"
            >
              <div 
                className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-5"
                style={{ color: T.accent }}
              >
                Principle {item.label}
              </div>
              <h3 className="font-serif text-3xl font-semibold leading-tight mb-4" style={{ color: T.charcoal }}>
                {item.title}
              </h3>
              <p className="leading-relaxed text-base font-light flex-grow mb-6" style={{ color: T.muted }}>
                {item.description}
              </p>
              <div className="w-14 h-[2px]" style={{ backgroundColor: `${T.accent}60` }} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentiation;

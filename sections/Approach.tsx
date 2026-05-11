
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const approaches = [
  {
    phase: "01",
    title: "Signal Capture",
    detail: "Radial pulse at three diagnostic positions",
    description:
      "Non-invasive sensors record waveform data at clinically relevant depths while preserving natural pulse variability."
  },
  {
    phase: "02",
    title: "Ayurvedic Mapping",
    detail: "Gati, Vega, Tala and Dosha tendencies",
    description:
      "Each waveform is translated into classical Ayurvedic descriptors so the output reflects Vaidya logic, not only biomedical metrics."
  },
  {
    phase: "03",
    title: "Clinical Interpretation",
    detail: "Cross-checked with practitioner assessments",
    description:
      "Model outputs are reviewed against expert observations to improve reliability and keep decisions aligned with real clinical practice."
  }
];

const Approach: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLElement[]>([]);

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
    <section ref={sectionRef} id="approach" className="py-32 px-6 md:px-[8vw] bg-[#f6f3ee] relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-px bg-brand-accent/15 pointer-events-none" />
      <div className="relative z-10">
        <div ref={headerRef} className="mb-20">
          <span className="inline-block text-brand-accent text-xs font-semibold uppercase tracking-[0.16em] mb-5">
            02 - Methodology
          </span>
          <div className="flex flex-wrap items-start gap-12">
            <h2 className="font-serif text-5xl md:text-6xl font-semibold leading-tight text-brand-text max-w-[520px]">
              Translating touch into
              <br />
              <em className="italic text-brand-accent font-medium">measurable patterns</em>
            </h2>
            <div className="max-w-2xl pt-2 space-y-5">
              <p className="text-lg text-brand-muted leading-relaxed">
                A skilled Vaidya does not read only speed; they read character, rhythm, and tension. Our methodology captures that same richness as structured signal data.
              </p>
              <p className="text-lg text-brand-muted leading-relaxed">
                The goal is not to replace traditional judgment. It is to make pulse interpretation more consistent, traceable, and teachable across practitioners.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-1 border border-black/10 bg-[#ebe7df]">
          {approaches.map((item, idx) => (
            <article
              key={idx}
              ref={(el) => {
                if (el) cardRefs.current[idx] = el;
              }}
              className="bg-[#fdfcf9] p-10 md:p-12 min-h-[320px] transition-colors duration-500 hover:bg-white"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-8">
                Phase {item.phase}
              </div>
              <h3 className="font-serif text-3xl font-semibold text-brand-text mb-3">
                {item.title}
              </h3>
              <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-accent/80 mb-6">
                {item.detail}
              </div>
              <p className="text-brand-muted leading-relaxed text-base">
                {item.description}
              </p>
              <div className="mt-8 w-14 h-[2px] bg-brand-accent/40" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;

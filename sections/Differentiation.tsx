
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const differentiators = [
  {
    label: "01",
    title: "Not a black-box diagnosis engine",
    description: "Every inference is tied to interpretable signal features so clinicians can review how a conclusion was reached."
  },
  {
    label: "02",
    title: "Respects classical Ayurvedic principles",
    description: "The reasoning layer is aligned with traditional pulse interpretation frameworks, not detached from Vaidya practice."
  },
  {
    label: "03",
    title: "Built for robustness, not demos",
    description: "Designed for repeatability across sessions, environments, and users, with emphasis on stable real-world behavior."
  },
  {
    label: "04",
    title: "Designed for real clinical environments",
    description: "The workflow supports practical consultation settings where clarity, speed, and trust matter more than visual novelty."
  }
];

const Differentiation: React.FC = () => {
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
    <section ref={sectionRef} className="py-28 px-6 md:px-[8vw] bg-[#efeae2] text-brand-text overflow-hidden relative">
      <div className="absolute inset-y-0 right-0 w-px bg-brand-accent/20 pointer-events-none" />
      <div className="relative z-10">
        <div ref={headerRef} className="mb-16">
          <span className="inline-block text-brand-accent text-xs font-semibold uppercase tracking-[0.16em] mb-5">
            03 - Differentiation
          </span>
          <div className="flex flex-wrap items-start gap-12">
            <h2 className="font-serif text-5xl md:text-6xl font-semibold leading-tight max-w-[540px]">
              Why This Is
              <br />
              <em className="italic text-brand-accent font-medium">Different</em>
            </h2>
            <p className="max-w-2xl text-lg text-brand-muted leading-relaxed pt-2">
              SpandaVidya is shaped as a clinical tool, not a speculative AI showcase. The system is designed to preserve classical intent while making pulse interpretation more consistent and reviewable.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-1 border border-black/10 bg-[#e3ddd3]">
          {differentiators.map((item, idx) => (
            <article
              key={idx}
              ref={(el) => {
                if (el) cardRefs.current[idx] = el;
              }}
              className="bg-[#faf8f3] p-10 md:p-12 min-h-[230px] transition-colors duration-500 hover:bg-white"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-5">
                Principle {item.label}
              </div>
              <h3 className="font-serif text-3xl font-semibold leading-tight mb-4">
                {item.title}
              </h3>
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

export default Differentiation;

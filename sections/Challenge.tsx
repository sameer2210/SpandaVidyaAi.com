
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { T } from '../theme';

gsap.registerPlugin(ScrollTrigger);

const Challenge: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { y: 36, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.92,
            ease: 'power3.out',
            stagger: 0.16,
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
            },
          }
        );
      }

      if (visualRef.current) {
        gsap.fromTo(
          visualRef.current,
          { y: 42, autoAlpha: 0, scale: 0.96 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-[8vw] bg-transparent overflow-hidden">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <article ref={contentRef}>
          <header className="mb-10">
            <span 
              className="inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-5" 
              style={{ color: T.accent }}
            >
              01 — Challenge
            </span>
            <h2 className="font-serif text-5xl md:text-6xl font-semibold leading-tight" style={{ color: T.charcoal }}>
              Bridging Ancient Wisdom <br />& Precise Instrumentation
            </h2>
          </header>
          <div className="space-y-8 text-lg leading-relaxed font-light" style={{ color: T.muted }}>
            <p>
              Classical Naadi diagnostics offers profound systemic insights into a patient's functional health, yet its clinical wider utility has been limited by the inherent subjectivity of human touch.
            </p>
            <p>
              Modern healthcare excels in structural imaging but often misses the real-time, functional context provided by the arterial pulse. <strong style={{ color: T.charcoal }}>SpandaVidya</strong> bridges this gap by introducing objective signal data into traditional diagnostics.
            </p>
            <blockquote className="pt-6 border-l-4 pl-8 italic text-xl font-serif" style={{ borderLeftColor: `${T.accent}60`, color: T.charcoal }}>
              "Our mission is to empower Ayurvedic practitioners with digital vision while providing clinicians with holistic functional data."
            </blockquote>
          </div>
        </article>
        <div ref={visualRef} className="relative rounded-[3rem] overflow-hidden aspect-[4/5] mr-8 md:aspect-square shadow-2xl bg-gradient-to-br from-[#f9f9f7] via-[#efefed] to-[#d9d9d9]">
          <svg
            viewBox="0 0 960 720"
            className="absolute inset-0 w-full h-full"
            role="img"
            aria-label="Animated pulse waveform visualization"
          >
            <defs>
              <linearGradient id="waveGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d5bc80" />
                <stop offset="50%" stopColor="#8a6a2b" />
                <stop offset="100%" stopColor="#d5bc80" />
              </linearGradient>
              <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect x="0" y="0" width="960" height="720" fill="transparent" />
            <line x1="0" y1="360" x2="960" y2="360" stroke="#c1ab77" strokeOpacity="0.3" strokeWidth="1.5" />

            <g filter="url(#softGlow)" opacity="0.95">
              <g>
                <path
                  d="M-240 360 C-180 300 -120 300 -60 360 C0 420 60 420 120 360 C180 300 240 300 300 360 C360 420 420 420 480 360 C540 300 600 300 660 360 C720 420 780 420 840 360 C900 300 960 300 1020 360 C1080 420 1140 420 1200 360"
                  fill="none"
                  stroke="url(#waveGold)"
                  strokeWidth="4"
                >
                  <animateTransform attributeName="transform" type="translate" values="0 0; -240 0" dur="5s" repeatCount="indefinite" />
                </path>
              </g>

              <g opacity="0.85">
                <path
                  d="M-240 360 C-180 250 -120 250 -60 360 C0 470 60 470 120 360 C180 250 240 250 300 360 C360 470 420 470 480 360 C540 250 600 250 660 360 C720 470 780 470 840 360 C900 250 960 250 1020 360 C1080 470 1140 470 1200 360"
                  fill="none"
                  stroke="#9a7a3c"
                  strokeWidth="3.2"
                >
                  <animateTransform attributeName="transform" type="translate" values="0 0; -240 0" dur="7.2s" repeatCount="indefinite" />
                </path>
              </g>

              <g opacity="0.45">
                <path
                  d="M-240 360 C-180 320 -120 320 -60 360 C0 400 60 400 120 360 C180 320 240 320 300 360 C360 400 420 400 480 360 C540 320 600 320 660 360 C720 400 780 400 840 360 C900 320 960 320 1020 360 C1080 400 1140 400 1200 360"
                  fill="none"
                  stroke="#bca77a"
                  strokeWidth="2.2"
                >
                  <animateTransform attributeName="transform" type="translate" values="0 0; 240 0" dur="8.5s" repeatCount="indefinite" />
                </path>
              </g>
            </g>

            <circle cx="150" cy="360" r="4.5" fill="#f0e1b4">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="2.2s" repeatCount="indefinite" />
              <animate attributeName="cx" values="120;840" dur="4.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="760" cy="360" r="3.5" fill="#dbc38f" opacity="0.7">
              <animate attributeName="opacity" values="0.1;0.9;0.1" dur="2.8s" repeatCount="indefinite" />
              <animate attributeName="cx" values="840;120" dur="6.1s" repeatCount="indefinite" />
            </circle>
          </svg>

          <div className="absolute inset-0 bg-gradient-to-t from-brand-text/30 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 text-white z-10">
            <div className="text-xs font-bold uppercase tracking-tighter opacity-80 mb-1">SpandaVidya Analytics</div>
            <div className="text-2xl font-serif italic">Precision Mapping</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;

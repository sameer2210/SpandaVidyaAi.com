import React, { useEffect, useRef, useState } from 'react';
import { T } from '../theme';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  drift: number;
}

const BackgroundCanvas: React.FC<{ prefersReducedMotion: boolean }> = ({ prefersReducedMotion }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;
    let particles: Particle[] = [];
    const maxParticles = 45;

    const initParticles = () => {
      particles = Array.from({ length: maxParticles }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height + canvas.height,
        size: Math.random() * 1.8 + 0.4,
        speed: Math.random() * 0.4 + 0.15,
        opacity: Math.random() * 0.35 + 0.08,
        drift: (Math.random() - 0.5) * 0.4,
      }));
    };

    let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resize();
      }, 150); // throttle resize
    };

    resize();
    window.addEventListener('resize', handleResize);

    const draw = () => {
      // Pause drawing if tab is hidden
      if (document.hidden) {
        rafId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.speed;
        p.x += p.drift;
        p.opacity += (Math.random() - 0.5) * 0.01;
        p.opacity = Math.max(0.04, Math.min(0.4, p.opacity));

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140, 107, 62, ${p.opacity})`;
        ctx.fill();
      });

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
};

const SacredGeometry: React.FC<{ prefersReducedMotion: boolean }> = ({ prefersReducedMotion }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Concentric breathing rings */}
      {[220, 360, 500, 640].map((size, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: size,
            height: size,
            borderRadius: '50%',
            border: `1px solid ${T.accent}`,
            opacity: prefersReducedMotion ? 0.005 : 0.02 - i * 0.004,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: prefersReducedMotion ? 'none' : `breathe ${4 + i * 0.8}s ease-in-out infinite`,
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}

      {/* Spanda geometry mandalic lines */}
      <svg
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700,
          height: 700,
          opacity: 0.1,
          animation: prefersReducedMotion ? 'none' : 'spinSlow 120s linear infinite',
          pointerEvents: 'none',
        }}
        viewBox="0 0 700 700"
        aria-hidden="true"
        role="presentation"
      >
        {[0, 30, 60, 90, 120, 150].map((r) => (
          <line
            key={r}
            x1="350"
            y1="50"
            x2="350"
            y2="650"
            stroke={T.accent}
            strokeWidth="0.5"
            transform={`rotate(${r} 350 350)`}
          />
        ))}
        <circle cx="350" cy="350" r="200" fill="none" stroke={T.accent} strokeWidth="0.5" />
        <circle cx="350" cy="350" r="280" fill="none" stroke={T.accent} strokeWidth="0.5" />
      </svg>
    </div>
  );
};

const BackgroundGlow: React.FC = () => {
  return (
    <>
      {/* Top Left Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          backgroundColor: T.accent,
          opacity: 0.03,
          filter: `blur(${T.blur.glow})`,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
      {/* Center Right Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '45%',
          right: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          backgroundColor: T.accentWarm,
          opacity: 0.04,
          filter: `blur(${T.blur.glow})`,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
      {/* Bottom Left Sage Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          backgroundColor: T.sagePale,
          opacity: 0.035,
          filter: `blur(${T.blur.glow})`,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
    </>
  );
};

const DecorativeLines: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* Vertical blueprint alignment lines */}
      <div
        className="hidden md:block"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '8vw',
          width: '1px',
          backgroundColor: T.accent,
          opacity: T.opacity.line,
        }}
      />
      <div
        className="hidden md:block"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: '8vw',
          width: '1px',
          backgroundColor: T.accent,
          opacity: T.opacity.line,
        }}
      />
    </div>
  );
};

export const GlobalBackground: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: T.zIndex.background, // 0
        backgroundColor: T.ivory, // base canvas color
        pointerEvents: 'none',
      }}
      aria-hidden="true"
      role="presentation"
    >
      <BackgroundCanvas prefersReducedMotion={prefersReducedMotion} />
      <SacredGeometry prefersReducedMotion={prefersReducedMotion} />
      <BackgroundGlow />
      <DecorativeLines />
    </div>
  );
};

export default GlobalBackground;

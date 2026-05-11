import React, { useEffect, useRef } from "react";
import { T } from "../theme";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Floating particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 48 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height + canvas.height,
      size: Math.random() * 1.8 + 0.4,
      speed: Math.random() * 0.4 + 0.15,
      opacity: Math.random() * 0.35 + 0.08,
      drift: (Math.random() - 0.5) * 0.4,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
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
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      background: T.ivory, position: "relative", overflow: "hidden",
      padding: "120px clamp(24px, 5vw, 80px) 80px",
    }}>
      {/* Particle canvas */}
      <canvas ref={canvasRef} style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        pointerEvents: "none",
      }} />

      {/* Breathing rings */}
      {[220, 360, 500, 640].map((size, i) => (
        <div key={i} style={{
          position: "absolute",
          width: size, height: size,
          borderRadius: "50%",
          border: `1px solid ${T.accent}`,
          opacity: 0.06 - i * 0.01,
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          animation: `breathe ${4 + i * 0.8}s ease-in-out infinite`,
          animationDelay: `${i * 0.6}s`,
        }} />
      ))}

      {/* Spanda geometry - decorative mandalic lines */}
      <svg style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 700, height: 700, opacity: 0.04,
        animation: "spinSlow 120s linear infinite",
        pointerEvents: "none",
      }} viewBox="0 0 700 700">
        {[0,30,60,90,120,150].map(r => (
          <line key={r}
            x1="350" y1="50" x2="350" y2="650"
            stroke={T.accent} strokeWidth="0.5"
            transform={`rotate(${r} 350 350)`}
          />
        ))}
        <circle cx="350" cy="350" r="200" fill="none" stroke={T.accent} strokeWidth="0.5" />
        <circle cx="350" cy="350" r="280" fill="none" stroke={T.accent} strokeWidth="0.5" />
      </svg>

      {/* Content */}
      <div style={{ position: "relative", textAlign: "center", maxWidth: 960 }}>
        {/* Eyebrow */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          background: `${T.accent}12`,
          border: `1px solid ${T.accentLight}40`,
          borderRadius: 32, padding: "7px 18px",
          marginBottom: 40,
          animation: "fadeSlideUp 0.8s ease both",
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: "50%",
            background: T.accent, display: "inline-block",
          }} />
          <span style={{
            fontSize: 11, letterSpacing: "0.14em", color: T.accent,
            textTransform: "uppercase", fontWeight: 500,
          }}>
            Ayurvedic Intelligence Platform
          </span>
        </div>

        {/* Main headline */}
        <h1 className="serif" style={{
          fontSize: "clamp(56px, 9vw, 120px)",
          fontWeight: 300, lineHeight: 0.92,
          letterSpacing: "-0.02em", color: T.charcoal,
          marginBottom: 28,
          animation: "fadeSlideUp 0.9s ease 0.1s both",
        }}>
          Spanda
          <br />
          <em style={{ fontStyle: "italic", color: T.accent }}>Vidya</em>
          <span style={{ color: T.muted }}>Ai</span>
        </h1>

        {/* Tagline */}
        <p className="serif" style={{
          fontSize: "clamp(20px, 3vw, 32px)",
          fontWeight: 300, fontStyle: "italic",
          color: T.muted, marginBottom: 48,
          letterSpacing: "0.01em", lineHeight: 1.5,
          animation: "fadeSlideUp 1s ease 0.2s both",
        }}>
          Ancient wisdom.&nbsp;&nbsp;Modern intelligence.
        </p>

        {/* Sub-copy */}
        <p style={{
          fontSize: 16, color: T.muted, maxWidth: 560, margin: "0 auto 52px",
          lineHeight: 1.8, fontWeight: 300,
          animation: "fadeSlideUp 1s ease 0.3s both",
        }}>
          An AI-guided Ayurvedic consultation platform rooted in classical Dosha science—
          designed for the human seeking balance in a fractured world.
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap",
          animation: "fadeSlideUp 1s ease 0.4s both",
        }}>
          <button id="start" className="magnetic-btn" style={{
            background: T.charcoal, color: T.ivory,
            border: "none", borderRadius: 4,
            padding: "16px 40px", fontSize: 14,
            letterSpacing: "0.1em", textTransform: "uppercase",
            fontFamily: "inherit", fontWeight: 500,
            cursor: "pointer",
          }}
          onMouseEnter={e => e.currentTarget.style.background = T.accent}
          onMouseLeave={e => e.currentTarget.style.background = T.charcoal}
          >
            Consult the Vaidya
          </button>
          <button className="magnetic-btn" style={{
            background: "transparent",
            color: T.charcoal,
            border: `1px solid ${T.charcoal}30`,
            borderRadius: 4, padding: "16px 40px",
            fontSize: 14, letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontFamily: "inherit", fontWeight: 400,
            cursor: "pointer",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = T.accent;
            e.currentTarget.style.color = T.accent;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = `${T.charcoal}30`;
            e.currentTarget.style.color = T.charcoal;
          }}
          >
            Learn the Philosophy
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        animation: "fadeSlideUp 1.2s ease 0.8s both",
      }}>
        <span style={{ fontSize: 11, letterSpacing: "0.12em", color: T.muted, textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{
          width: 1, height: 48, background: `linear-gradient(${T.accent}, transparent)`,
        }} />
      </div>
    </section>
  );
}

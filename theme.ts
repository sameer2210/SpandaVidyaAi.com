export const T = {
  ivory:        "#F8F5EF",
  ivoryDeep:    "#EDE6D6",
  charcoal:     "#1A1814",
  charcoalMid:  "#2C2921",
  accent:       "#8C6B3E",
  accentWarm:   "#B8935A",
  accentLight:  "#D4B896",
  sage:         "#5C6E52",
  sagePale:     "#A8BAAA",
  muted:        "#8A8378",
  darkBg:       "#0E0D0A",
  darkCard:     "#161410",
  darkBorder:   "#2A2620",
  cream:        "#FBF9F4",
};

export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: ${T.ivory};
    color: ${T.charcoal};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  .serif { font-family: 'Cormorant Garamond', serif; }

  /* ── Scroll reveal ── */
  .reveal {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1),
                transform 0.9s cubic-bezier(0.16,1,0.3,1);
  }
  .reveal.visible { opacity: 1; transform: translateY(0); }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.22s; }
  .reveal-delay-3 { transition-delay: 0.36s; }
  .reveal-delay-4 { transition-delay: 0.5s; }

  /* ── Breathing circle (hero) ── */
  @keyframes breathe {
    0%, 100% { transform: scale(1); opacity: 0.06; }
    50%       { transform: scale(1.18); opacity: 0.12; }
  }
  @keyframes breatheSlow {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.04; }
    50%       { transform: scale(1.12) rotate(90deg); opacity: 0.09; }
  }
  @keyframes floatUp {
    0%   { opacity: 0; transform: translateY(0); }
    20%  { opacity: 1; }
    100% { opacity: 0; transform: translateY(-180px); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes drawLine {
    from { stroke-dashoffset: 800; }
    to   { stroke-dashoffset: 0; }
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50%       { opacity: 1; transform: scale(1.08); }
  }
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes counterUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Magnetic button ── */
  .magnetic-btn {
    transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
    cursor: pointer;
  }

  /* ── Nav ── */
  .nav-blur {
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
  }

  /* ── Gradient text ── */
  .gradient-text {
    background: linear-gradient(135deg, ${T.accent} 0%, ${T.accentWarm} 40%, ${T.accentLight} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ── Spanda geometry ── */
  .spanda-ring {
    border-radius: 50%;
    border: 1px solid ${T.accent};
    position: absolute;
    animation: spinSlow linear infinite;
    opacity: 0.15;
  }

  /* ── Scrollbar ── */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: ${T.ivoryDeep}; }
  ::-webkit-scrollbar-thumb { background: ${T.accentLight}; border-radius: 2px; }

  /* ── Tech node pulse ── */
  .node-pulse { animation: pulse 2.4s ease-in-out infinite; }
`;

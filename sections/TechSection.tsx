import React from "react";
import { T } from "../theme";
import { useScrollReveal } from "../hooks";

export default function TechSection() {
  const [sectionRef, visible] = useScrollReveal(0.1);

  const nodes = [
    { label: "Client App", x: 50, y: 50, color: T.accentLight },
    { label: "CDN / WAF", x: 200, y: 50, color: T.accentWarm },
    { label: "API Gateway", x: 360, y: 50, color: T.accentWarm },
    { label: "JWT Auth", x: 280, y: 160, color: T.muted },
    { label: "Chat Service", x: 440, y: 160, color: T.sage },
    { label: "AI Backend", x: 360, y: 270, color: T.accent },
    { label: "Gemini API", x: 520, y: 270, color: T.accentWarm },
    { label: "HuggingFace", x: 280, y: 380, color: T.sage },
    { label: "AWS S3", x: 160, y: 380, color: T.sage },
    { label: "PostgreSQL", x: 440, y: 380, color: T.muted },
    { label: "Redis Cache", x: 360, y: 480, color: T.accentWarm },
    { label: "Observability", x: 200, y: 480, color: T.muted },
  ];

  const edges = [
    [0,1],[1,2],[2,3],[2,4],[3,5],[4,5],[5,6],[5,7],[7,8],[5,9],[5,10],[8,10],[9,10],[10,11]
  ];

  return (
    <section 
      id="technology" 
      ref={sectionRef} 
      className="py-32 px-6 md:px-[8vw] relative overflow-hidden"
      style={{ background: T.darkBg }}
    >
      {/* Grid overlay */}
      <div 
        style={{
          position: "absolute", 
          inset: 0, 
          opacity: 0.025,
          backgroundImage: `linear-gradient(${T.accent} 1px, transparent 1px),
                             linear-gradient(90deg, ${T.accent} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <span 
          className={`reveal ${visible ? "visible" : ""} inline-block text-xs font-semibold uppercase tracking-[0.16em] mb-5`} 
          style={{ color: T.accentWarm }}
        >
          05 — Infrastructure
        </span>

        <h2 
          className={`serif reveal ${visible ? "visible reveal-delay-1" : ""} text-4xl md:text-5xl font-semibold mb-12 leading-tight`} 
          style={{ color: T.ivory }}
        >
          Clinical-Grade Systems Architecture
        </h2>

        {/* Architecture diagram */}
        <div 
          className={`reveal reveal-delay-2 ${visible ? "visible" : ""} p-8 md:p-12 mb-10 overflow-x-auto`} 
          style={{
            background: T.darkCard, 
            border: `1px solid ${T.darkBorder}`,
            borderRadius: T.radius.xl,
            boxShadow: T.shadows.md,
          }}
        >
          <svg viewBox="0 0 580 540" className="w-full max-w-[580px] block mx-auto">
            {/* Edges */}
            {edges.map(([a, b], i) => (
              <line key={i}
                x1={nodes[a].x + 40} y1={nodes[a].y + 14}
                x2={nodes[b].x + 40} y2={nodes[b].y + 14}
                stroke={`${T.accent}25`} strokeWidth="1"
                strokeDasharray="4 3"
              />
            ))}
            {/* Nodes */}
            {nodes.map((node, i) => (
              <g key={i} style={{ cursor: "default" }}>
                <rect
                  x={node.x} y={node.y - 6}
                  width={82} height={28}
                  rx={2} fill={`${node.color}12`}
                  stroke={`${node.color}40`} strokeWidth="1"
                  className="node-pulse"
                  style={{ animationDelay: `${i * 0.18}s` }}
                />
                <text x={node.x + 41} y={node.y + 10}
                  fill={node.color} fontSize="10"
                  fontFamily="DM Sans, sans-serif"
                  textAnchor="middle" fontWeight="500"
                  letterSpacing="0.04em"
                >
                  {node.label}
                </text>
                <circle
                  cx={node.x + 6} cy={node.y + 8}
                  r={2.5} fill={node.color} opacity={0.7}
                  className="node-pulse"
                  style={{ animationDelay: `${i * 0.22}s` }}
                />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { T } from "../theme";
import { useScrollReveal } from "../hooks";

export default function TechSection() {
  const [sectionRef, visible] = useScrollReveal(0.1);

  const nodes = [
    { label: "Client", x: 50, y: 50, color: "#8BACC4" },
    { label: "CDN/WAF", x: 200, y: 50, color: T.accentWarm },
    { label: "API Gateway", x: 360, y: 50, color: T.accentWarm },
    { label: "Auth", x: 280, y: 160, color: "#8A8378" },
    { label: "Chat Service", x: 440, y: 160, color: T.sage },
    { label: "AI Orchestrator", x: 360, y: 270, color: T.accent },
    { label: "Gemini / LLM", x: 520, y: 270, color: "#B8935A" },
    { label: "RAG Pipeline", x: 280, y: 380, color: T.sage },
    { label: "Vector DB", x: 160, y: 380, color: T.sage },
    { label: "Postgres", x: 440, y: 380, color: "#6B7C8E" },
    { label: "Redis", x: 360, y: 480, color: "#C47C5A" },
    { label: "Observability", x: 200, y: 480, color: "#8A8378" },
  ];

  const edges = [
    [0,1],[1,2],[2,3],[2,4],[3,5],[4,5],[5,6],[5,7],[7,8],[5,9],[5,10],[8,10],[9,10],[10,11]
  ];

  const techStack = [
    { cat: "Frontend", items: ["React + Vite", "TypeScript", "Tailwind CSS"] },
    { cat: "AI Layer", items: ["Google Gemini API", "Prompt Engineering", "SSE Streaming"] },
    { cat: "Infrastructure", items: ["Kubernetes", "Redis Cluster", "Postgres + Replicas"] },
    { cat: "Observability", items: ["OpenTelemetry", "Prometheus", "Grafana + Loki"] },
    { cat: "Security", items: ["OIDC / JWT", "WAF + CDN", "KMS Encryption"] },
    { cat: "Scale Targets", items: ["P95 TTFT < 2.5s", "99.95% uptime", "1M sessions"] },
  ];

  return (
    <section id="technology" ref={sectionRef} style={{
      background: T.darkBg, padding: "140px clamp(24px, 5vw, 80px)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.025,
        backgroundImage: `linear-gradient(${T.accent} 1px, transparent 1px),
                          linear-gradient(90deg, ${T.accent} 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative" }}>
        <span className={`reveal ${visible ? "visible" : ""}`} style={{
          display: "inline-block", fontSize: 11,
          letterSpacing: "0.16em", color: T.accentWarm,
          textTransform: "uppercase", marginBottom: 20,
        }}>
          03 — Infrastructure
        </span>

        {/* Architecture diagram */}
        <div className={`reveal reveal-delay-2 ${visible ? "visible" : ""}`} style={{
          background: T.darkCard, border: `1px solid ${T.darkBorder}`,
          borderRadius: 2, padding: "48px 32px", marginBottom: 60,
          overflowX: "auto",
        }}>
          <svg viewBox="0 0 580 540" style={{ width: "100%", maxWidth: 580, display: "block", margin: "0 auto" }}>
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

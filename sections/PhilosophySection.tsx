import React from "react";
import { T } from "../theme";
import { useScrollReveal } from "../hooks";

export default function PhilosophySection() {
  const [sectionRef, visible] = useScrollReveal(0.1);

  const doshas = [
    {
      name: "Vāta",
      element: "Air + Space",
      color: "#8BACC4",
      desc: "The force of movement, creativity, and communication. In balance — clarity. In excess — anxiety.",
    },
    {
      name: "Pitta",
      element: "Fire + Water",
      color: "#C47C5A",
      desc: "The force of transformation, digestion, and intelligence. In balance — wisdom. In excess — inflammation.",
    },
    {
      name: "Kapha",
      element: "Earth + Water",
      color: "#5C8A6E",
      desc: "The force of structure, stability, and nourishment. In balance — love. In excess — lethargy.",
    },
  ];

  return (
    <section id="philosophy" ref={sectionRef} style={{
      background: T.cream, padding: "140px clamp(24px, 5vw, 80px)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Large background text */}
      <div className="serif" style={{
        position: "absolute", top: "50%", left: "-2%",
        transform: "translateY(-50%)",
        fontSize: "clamp(80px, 18vw, 220px)",
        fontWeight: 300, color: `${T.accent}07`,
        letterSpacing: "-0.05em", pointerEvents: "none",
        whiteSpace: "nowrap", userSelect: "none",
      }}>
        Tridosha
      </div>

      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 80 }}>
          <span className={`reveal ${visible ? "visible" : ""}`} style={{
            display: "inline-block",
            fontSize: 11, letterSpacing: "0.16em",
            color: T.accent, textTransform: "uppercase",
            fontWeight: 500, marginBottom: 20,
          }}>
            01 — Philosophy
          </span>
          <div style={{ display: "flex", gap: 60, alignItems: "flex-start", flexWrap: "wrap" }}>
            <h2 className={`serif reveal ${visible ? "visible reveal-delay-1" : ""}`} style={{
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 300, lineHeight: 1.1,
              color: T.charcoal, flex: "0 0 auto",
              maxWidth: 480,
            }}>
              The three forces<br />
              <em style={{ fontStyle: "italic", color: T.accent }}>that shape all life</em>
            </h2>
            <div className={`reveal reveal-delay-2 ${visible ? "visible" : ""}`} style={{
              flex: 1, minWidth: 280, paddingTop: 12,
            }}>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: T.muted, marginBottom: 20 }}>
                Ayurveda does not treat symptoms. It understands the individual—their constitution,
                their environment, their rhythm of life. For five thousand years, Vaidyas have
                prescribed based on Prakriti, not just pathology.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: T.muted }}>
                SpandaVidyaAi encodes this wisdom into its reasoning layer. Every response
                considers your Dosha balance, your Agni (digestive fire), your Dhatus (tissues),
                and your unique life context—not a generic wellness template.
              </p>
            </div>
          </div>
        </div>

        {/* Dosha cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2 }}>
          {doshas.map((d, i) => (
            <div
              key={d.name}
              className={`reveal reveal-delay-${i + 1} ${visible ? "visible" : ""}`}
              style={{
                background: T.ivory, padding: "48px 40px",
                borderTop: `3px solid ${d.color}`,
                position: "relative",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 20px 60px ${d.color}20`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: `${d.color}18`, border: `1px solid ${d.color}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 28,
              }}>
                <div style={{ width: 14, height: 14, borderRadius: "50%", background: d.color, opacity: 0.8 }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                <h3 className="serif" style={{ fontSize: 34, fontWeight: 400, color: T.charcoal }}>
                  {d.name}
                </h3>
                <span style={{ fontSize: 11, letterSpacing: "0.1em", color: d.color, textTransform: "uppercase" }}>
                  {d.element}
                </span>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: T.muted }}>
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

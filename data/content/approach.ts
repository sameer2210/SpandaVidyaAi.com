export interface ApproachPhase {
  readonly phase: string;
  readonly title: string;
  readonly detail: string;
  readonly description: string;
}

export const approaches = [
  {
    phase: "01",
    title: "Signal Capture",
    detail: "Radial pulse at three diagnostic positions",
    description: "Non-invasive sensors record waveform data at clinically relevant depths while preserving natural pulse variability."
  },
  {
    phase: "02",
    title: "Ayurvedic Mapping",
    detail: "Gati, Vega, Tala and Dosha tendencies",
    description: "Each waveform is translated into classical Ayurvedic descriptors so the output reflects Vaidya logic, not only biomedical metrics."
  },
  {
    phase: "03",
    title: "Clinical Interpretation",
    detail: "Cross-checked with practitioner assessments",
    description: "Model outputs are reviewed against expert observations to improve reliability and keep decisions aligned with real clinical practice."
  }
] as const satisfies readonly ApproachPhase[];

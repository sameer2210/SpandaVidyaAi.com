export interface ProgressStep {
  readonly text: string;
  readonly date: string;
}

export const progressSteps = [
  { text: "Conceptual framework for digitized SpandaVidya defined", date: "2023" },
  { text: "Multi-position radial pulse acquisition prototype built", date: "2024" },
  { text: "Pilot clinical data collection for signal validation", date: "2024" },
  { text: "Advanced signal processing pipeline optimization", date: "2025" },
  { text: "AI modeling & Multi-centric validation phase", date: "Active" }
] as const satisfies readonly ProgressStep[];

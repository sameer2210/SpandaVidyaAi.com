export interface Differentiator {
  readonly label: string;
  readonly title: string;
  readonly description: string;
}

export const differentiators = [
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
] as const satisfies readonly Differentiator[];

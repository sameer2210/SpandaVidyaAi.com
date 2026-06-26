export interface Dosha {
  readonly name: string;
  readonly element: string;
  readonly color: string;
  readonly desc: string;
}

export const doshas = [
  {
    name: "Vāta",
    element: "Air + Space",
    color: "#8BACC4",
    desc: "The force of movement, creativity, and communication. In balance — clarity. In excess — anxiety."
  },
  {
    name: "Pitta",
    element: "Fire + Water",
    color: "#C47C5A",
    desc: "The force of transformation, digestion, and intelligence. In balance — wisdom. In excess — inflammation."
  },
  {
    name: "Kapha",
    element: "Earth + Water",
    color: "#5C8A6E",
    desc: "The force of structure, stability, and nourishment. In balance — love. In excess — lethargy."
  }
] as const satisfies readonly Dosha[];

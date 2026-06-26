export interface CompanyInformation {
  readonly author: string;
  readonly description: string;
}

export const company = {
  author: "SpandaVidya Research Initiative",
  description: "Pioneering the future of integrative medicine through digital signal acquisition and Ayurvedic intelligence."
} as const satisfies CompanyInformation;

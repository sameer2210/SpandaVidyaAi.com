export interface BrandMetadata {
  readonly title: string;
  readonly logo: string;
  readonly themeColor: string;
  readonly backgroundColor: string;
}

export const branding = {
  title: "SpandaVidya",
  logo: "/logo2.png",
  themeColor: "#b58b2a",
  backgroundColor: "#f9fafb"
} as const satisfies BrandMetadata;

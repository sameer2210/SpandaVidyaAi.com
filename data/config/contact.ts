export interface ContactInformation {
  readonly officialEmail: string;
  readonly supportEmail: string;
  readonly location: string;
  readonly headquarters: string;
}

export const contact = {
  officialEmail: "spandavidyaai@gmail.com",
  supportEmail: "Dilpar99@gmail.com",
  location: "Advanced Health-Tech Research Hub",
  headquarters: "IIT Kanpur, India"
} as const satisfies ContactInformation;

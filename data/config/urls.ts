export interface WebsiteUrls {
  readonly website: string;
  readonly chatbotUrl: string;
}

export const urls = {
  website: "https://spandavidya.ai",
  chatbotUrl: "https://naadi-raksha-liart.vercel.app/"
} as const satisfies WebsiteUrls;

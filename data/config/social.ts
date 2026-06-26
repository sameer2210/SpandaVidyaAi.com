export interface SocialLinks {
  readonly twitter: string;
  readonly linkedin: string;
  readonly facebook: string;
  readonly github: string;
  readonly instagram: string;
}

export const social = {
  twitter: "https://x.com/Sameer2210_",
    linkedin: "https://www.linkedin.com/posts/sameer-khan2210_buildinpublic-reactnative-nestjs-ugcPost-7461120240740032512-8tmC/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKLCdMBmjVjszptx-0pXufoZ-FFSz454pM",
    facebook: "https://facebook.com/spandaVidya",
    github: "https://github.com/sameer2210/SpandaVidyaAi-App",
    instagram: "https://instagram.com/spandaVidya"
} as const satisfies SocialLinks;

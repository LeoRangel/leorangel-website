import { profileInfo } from "./profileInfo";

export const siteInfo = {
  title: profileInfo.name,
  description:
    "Blog pessoal sobre desenvolvimento frontend, acessibilidade, performance e construção de aplicações web modernas.",

  url: process.env.NEXT_PUBLIC_BASE_URL,

  language: "pt-BR",

  author: {
    name: profileInfo.name,
    role: profileInfo.role,
  },

  editorialFocus: {
    primary: "Frontend",
    secondary: "Web Development",
  },
} as const;

// src/data/seo/posts.ts
import { Metadata } from "next";
import { profileInfo } from "../profileInfo";
import { siteInfo } from "../siteInfo";

export const POSTS_DEFAULT_SEO: Metadata = {
  title: `Posts | ${profileInfo.name}`,
  description:
    "Artigos técnicos sobre frontend, acessibilidade, performance e desenvolvimento web.",

  alternates: {
    canonical: `${siteInfo.url}/posts`,
  },

  openGraph: {
    title: `Posts | ${profileInfo.name}`,
    description:
      "Conteúdos práticos sobre frontend, acessibilidade, performance e web moderna.",
    type: "website",
    url: `${siteInfo.url}/posts`,
    siteName: siteInfo.title,
    images: [
      {
        url: "/og-posts.jpg",
        width: 1200,
        height: 630,
        alt: "Posts técnicos sobre frontend",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Posts | ${profileInfo.name}`,
    description:
      "Conteúdos práticos sobre frontend, acessibilidade, performance e web.",
    images: ["/og-posts.jpg"],
  },
};

// src/data/seo/home.ts
import { Metadata } from "next";
import { profileInfo } from "../profileInfo";
import { siteInfo } from "../siteInfo";

export const HOME_DEFAULT_SEO: Metadata = {
  title: `${profileInfo.name} — ${profileInfo.role}`,
  description: siteInfo.description,

  alternates: {
    canonical: siteInfo.url,
  },

  authors: [
    {
      name: profileInfo.name,
      url: siteInfo.url,
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: `${profileInfo.name} — ${profileInfo.role}`,
    description: siteInfo.description,
    type: "website",
    url: siteInfo.url,
    siteName: siteInfo.title,
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: `${profileInfo.name} — ${profileInfo.role}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${profileInfo.name} — ${profileInfo.role}`,
    description: siteInfo.description,
    images: ["/og-home.jpg"], // TODO: add image
  },
};

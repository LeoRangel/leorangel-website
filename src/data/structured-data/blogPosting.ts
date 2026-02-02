import { siteInfo } from "../siteInfo";

interface BlogPostingJsonLdType {
  title: string;
  description: string;
  slug: string;
  publishedAt?: string;
  modifiedAt?: string;
  image?: string;
  readingTime?: number;
}

export const blogPostingJsonLd = ({
  title,
  description,
  slug,
  publishedAt,
  modifiedAt,
  image,
  readingTime,
}: BlogPostingJsonLdType) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",

  headline: title,
  description,

  image: image ? [image] : undefined,

  author: {
    "@type": "Person",
    "@id": `${siteInfo.url}#person`,
  },

  publisher: {
    "@type": "Person",
    "@id": `${siteInfo.url}#person`,
  },

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteInfo?.url?.replace(/\/$/, "")}/${slug.replace(/^\//, "")}`,
  },

  datePublished: publishedAt,
  dateModified: modifiedAt ?? publishedAt,

  inLanguage: siteInfo.language,

  timeRequired: readingTime ? `PT${Math.ceil(readingTime)}M` : undefined,
});

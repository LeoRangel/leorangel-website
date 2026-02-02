import { siteInfo } from "../siteInfo";

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteInfo.url}#website`,
  url: siteInfo.url,
  name: siteInfo.title,
  description: siteInfo.description,
  inLanguage: siteInfo.language,
};

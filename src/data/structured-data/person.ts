import { profileInfo } from "../profileInfo";
import { siteInfo } from "../siteInfo";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteInfo.url}#person`,
  name: profileInfo.name,
  description: profileInfo.bio.short,
  url: siteInfo.url,
  jobTitle: profileInfo.role,
};

import { siteInfo } from "../siteInfo";

export const NOT_FOUND_DEFAULT_SEO = {
  title: `Página não encontrada | ${siteInfo.title}`,
  metaDesc: "A página que você tentou acessar não existe ou foi removida.",
  metaRobotsNoindex: "noindex",
  metaRobotsNofollow: "follow",
  opengraphTitle: `Página não encontrada | ${siteInfo.title}`,
  opengraphDescription:
    "Essa página não existe, mas você pode continuar navegando pelo site.",
  opengraphType: "website",
} as const;

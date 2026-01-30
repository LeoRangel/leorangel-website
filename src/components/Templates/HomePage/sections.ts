import { MenuItem } from "@/gql/graphql";

export const SECTIONS = {
  blog: { id: "blog", label: "Blog" },
  projetos: { id: "projetos", label: "Projetos" },
  sobre: { id: "sobre", label: "Sobre" },
  contato: { id: "contato", label: "Contato" },
} as const;

export const homeSectionMenu = Object.values(SECTIONS).map(({ id, label }) => ({
  uri: `#${id}`,
  label: `#${id}`,
  target: null,
})) as MenuItem[];

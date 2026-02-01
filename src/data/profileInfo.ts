export interface ProfileInfoType {
  name: string;
  role: string;
  bio: {
    short: string;
    long: string;
  };
  favoriteTopics: string[];
  stack: string[];
  avatar: {
    src: string;
    alt: string;
  };
}

export const profileInfo: ProfileInfoType = {
  name: "Leandro Rangel",
  role: "Software Engineer",

  bio: {
    short:
      "Desenho e construo apps modernos — e, de vez em quando, compartilho algumas ideias e conteúdos técnicos por aqui. 👨‍🚀🛸",
    long: "Desenvolvo aplicações web com foco em frontend, lidando com desafios reais de escala, performance, acessibilidade, UX e SEO...",
  },

  favoriteTopics: [
    "Frontend",
    "JavaScript",
    "React",
    "Performance Web",
    "Acessibilidade",
    "Next.js",
    "TypeScript",
    "SEO",
    "UX",
  ],

  stack: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "HTML",
    "CSS",
    "SCSS",
    "Tailwind CSS",
    "Design Systems",
    "Microfrontend",
    "Redux",
    "Server-Side Rendering (SSR)",
    "Static Site Generation (SSG)",
    "REST APIs",
    "GraphQL",
    "SEO",
    "Web Performance",
    "Core Web Vitals",
    "Jest",
    "Storybook",
    "Git",
    "CI/CD",
    "AWS",
    "WordPress",
  ],

  avatar: {
    src: "https://github.com/leorangel.png",
    alt: "Imagem de Leandro Rangel",
  },
} as const;

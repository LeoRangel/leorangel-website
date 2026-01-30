export interface ProfileInfoType {
  name: string;
  role: string;
  bio: {
    short: string;
    long: string;
  };
  stacks: {
    favorite: string[];
    full: string[];
  };
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
      "Normalmente desenho e construo apps modernos — e, de vez em quando, compartilho algumas ideias e conteúdos técnicos por aqui. 👨‍🚀🛸",
    long: "Desenvolvo aplicações web com foco em frontend, lidando com desafios reais de escala, performance, acessibilidade, UX e SEO. Gosto de pensar em soluções simples e bem estruturadas, participar de decisões técnicas e trabalhar de forma colaborativa com times multidisciplinares. No dia a dia, gosto de explorar novas ideias, experimentar ferramentas e abordagens diferentes e compartilhar aprendizados práticos que surgem enquanto construo coisas e resolvo problemas na web.",
  },
  stacks: {
    favorite: [
      "JavaScript",
      "Performance",
      "React",
      "Next.js",
      "TypeScript",
      "SEO",
      "UX",
      "Acessibilidade",
    ],
    full: [
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
  },
  avatar: {
    src: "https://github.com/leorangel.png",
    alt: "Imagem de Leandro Rangel",
  },
} as const;

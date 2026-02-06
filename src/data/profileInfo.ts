export interface ProfileInfoType {
  name: string;
  role: string;
  bio: {
    short: string;
    long: string;
  };
  favoriteTopics: string[];
  skills: {
    primary: string[];
    secondary: string[];
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
      "Desenho e construo apps — e, de vez em quando, compartilho ideias e aprendizados técnicos por aqui. 👨‍🚀🛸",
    long: "Sou desenvolvedor e atuo principalmente com frontend, criando aplicações web modernas no dia a dia. Busco soluções simples, bem estruturadas e que funcionem de verdade para quem está usando. Tenho interesse especial em temas como performance, acessibilidade e experiência do usuário, com atenção aos detalhes que impactam o uso em produção. Além da stack principal, costumo explorar outras tecnologias, avaliar novas ferramentas e experimentar abordagens diferentes.",
  },

  favoriteTopics: [
    "Frontend",
    "JavaScript",
    "React",
    "Web Performance",
    "Acessibilidade",
    "Next.js",
    "TypeScript",
    "SEO",
    "UX",
  ],

  skills: {
    primary: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Web Performance",
      "SEO",
      "Acessibilidade",
      "Core Web Vitals",
      "Git",
      "HTML",
      "CSS",
      "Redux",
      "Storybook",
      "Testes",
      "Jest",
      "Testing Library",
      "CMS",
      "REST APIs",
      "SSR",
      "SSG",
      "SASS",
    ],
    secondary: [
      "Strapi",
      "WordPress",
      "AWS",
      "CI/CD",
      "GraphQL",
      "Docker",
      "Tailwind CSS",
      "Shadcn",
      "Android",
      "Microfrontend",
      "Observability",
      "Kotlin",
      "PHP",
      "Vue.js",
      "Firebase",
      "Golang",
      "CSS-IN-JS",
      "UI",
      "UX",
      "Figma",
      "Design Systems",
    ],
  },

  avatar: {
    src: "https://github.com/leorangel.png",
    alt: "Imagem de Leandro Rangel",
  },
} as const;

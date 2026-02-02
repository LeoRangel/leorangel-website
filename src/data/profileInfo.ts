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
    long: "Sou desenvolvedor e trabalho principalmente com frontend, criando aplicações web no dia a dia. Gosto de pensar em soluções simples, bem organizadas e que funcionem de verdade para quem está usando.\n\nTenho interesse especial por performance, acessibilidade e experiência do usuário — principalmente nos detalhes que fazem um produto ser melhor no uso real. Além da stack principal, costumo explorar outras tecnologias, testar ferramentas novas e sair um pouco da zona de conforto.\n\nEste site é um espaço onde compartilho aprendizados, organizo ideias e escrevo sobre coisas que vou descobrindo enquanto construo projetos e resolvo problemas.",
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
      "Design Systems",
      "Testes",
      "CMS",
      "REST APIs",
      "SSR",
      "SSG",
      "SCSS",
    ],
    secondary: [
      "Strapi",
      "WordPress",
      "AWS",
      "CI/CD",
      "GraphQL",
      "Docker",
      "Android",
      "Tailwind CSS",
      "Shadcn",
      "Golang",
      "PHP",
      "Vue.js",
      "Microfrontend",
      "CSS-IN-JS",
      "Jest",
      "Testing Library",
      "UX",
      "Figma",
    ],
  },

  avatar: {
    src: "https://github.com/leorangel.png",
    alt: "Imagem de Leandro Rangel",
  },
} as const;

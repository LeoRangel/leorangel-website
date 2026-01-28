export type SocialLink = {
  name: string;
  href: string;
  iconKey: string;
  handle: string;
};

// declare new icons imports in src\utils\getIconsByKey.ts
// lib icons https://react-icons.github.io/react-icons/icons/lu/
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/LeoRangel",
    iconKey: "LuGithub",
    handle: "/leorangel",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/leandro-ranggel/",
    iconKey: "LuLinkedin",
    handle: "/in/leandro-ranggel",
  },
  {
    name: "E-mail",
    href: "mailto:leandrorangelm@gmail.com",
    iconKey: "LuMail",
    handle: "leandrorangelm@gmail.com",
  },
  // {
  //   name: "WhatsApp",
  //   href: "https://api.whatsapp.com/send?l=pt_pt&phone=+55",
  //   iconKey: "FaWhatsapp",
  // },
  // {
  //   name: "Behance",
  //   href: "https://www.behance.net/",
  //   iconKey: "SlSocialBehance",
  // },
];

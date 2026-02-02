import { IconType } from "react-icons";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

const iconMap: Record<string, IconType> = {
  LuGithub,
  LuLinkedin,
  LuMail,
};

export function getIconByKey(key: string): IconType | null {
  return iconMap[key] || null;
}

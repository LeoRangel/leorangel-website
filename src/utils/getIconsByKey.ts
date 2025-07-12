import { IconType } from "react-icons";
import { LuGithub, LuLinkedin } from "react-icons/lu";

const iconMap: Record<string, IconType> = {
  LuGithub,
  LuLinkedin,
};

export function getIconByKey(key: string): IconType | null {
  return iconMap[key] || null;
}

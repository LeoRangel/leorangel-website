"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { LuMoon, LuSun } from "react-icons/lu";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      aria-label="Alternar Tema"
      size="icon"
      className="cursor-pointer"
    >
      {theme === "dark" ? <LuMoon size={20} /> : <LuSun size={20} />}
    </Button>
  );
};

export { ThemeToggle };

"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
    </Button>
  );
};

export { ThemeToggle };

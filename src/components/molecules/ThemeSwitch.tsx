"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@ui/switch";
import { LuMoon, LuSun } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { Spinner } from "@ui/spinner";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="flex items-center justify-center"
        aria-busy="true"
        aria-label="Carregando controle de tema"
      >
        <Spinner />
        <span className="sr-only">Carregando controle de tema</span>
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <LuMoon
        aria-hidden="true"
        className={cn(
          "h-4 w-4 transition-colors",
          isDark ? "text-foreground" : "text-muted-foreground",
        )}
      />

      <Switch
        checked={!isDark}
        onCheckedChange={(checked) => setTheme(checked ? "light" : "dark")}
        aria-label={`Alternar para modo ${isDark ? "claro" : "escuro"}`}
      />

      <LuSun
        aria-hidden="true"
        className={cn(
          "h-4 w-4 transition-colors",
          !isDark ? "text-foreground" : "text-muted-foreground",
        )}
      />
    </div>
  );
};

export { ThemeSwitch };

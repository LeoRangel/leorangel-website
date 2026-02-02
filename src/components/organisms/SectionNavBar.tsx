"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@ui/button";
import { ThemeToggle } from "@molecules/ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";

type Section = {
  id: string;
  label: string;
};

interface SectionNavBarProps {
  sections: Section[];
  className?: string;
}

export default function SectionNavBar({
  sections,
  className,
}: SectionNavBarProps) {
  const { active } = useActiveSection(sections);

  return (
    <nav
      aria-label="Navegação por seções"
      className={cn(
        "relative mx-auto w-full rounded-full",
        "bg-muted/80 backdrop-blur",
        "supports-[backdrop-filter]:bg-muted/60",
        "border border-border/60",
        "shadow-sm",
        "overflow-hidden",
        "overflow-x-auto scrollbar-none",
        className,
      )}
    >
      <div className="flex items-center">
        <div className="relative flex-1 overflow-hidden">
          {/* fade esquerda */}
          <span
            className="
                pointer-events-none absolute left-0 top-0 z-10 h-full w-6
                bg-gradient-to-r
                from-muted/80
                supports-[backdrop-filter]:from-muted/80
                to-transparent
            "
          />

          {/* fade direita */}
          <span
            className="
                pointer-events-none absolute right-0 top-0 z-10 h-full w-6
                bg-gradient-to-l
                from-muted/80
                supports-[backdrop-filter]:from-muted/80
                to-transparent
            "
          />

          <div
            className="
              flex items-center gap-0
              overflow-x-auto
              px-1.5 py-1
              scrollbar-none
            "
          >
            {sections.map((section) => {
              const isActive = active === section.id;

              return (
                <Button
                  key={section.id}
                  asChild
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "shrink-0 rounded-full",
                    "px-3 h-7 text-[11px] leading-none",
                    "transition-colors",
                    isActive
                      ? "bg-background text-foreground shadow-sm"
                      : "text-foreground hover:text-foreground",
                  )}
                >
                  <Link href={`#${section.id}`} className="no-underline">
                    {section.label}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

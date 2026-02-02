"use client";

import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

type Section = {
  id: string;
  label: string;
};

interface SectionNavProps {
  sections: Section[];
  className?: string;
}

export function SectionNav({ sections, className }: SectionNavProps) {
  const { active, activeIndex } = useActiveSection(sections);

  const progress =
    sections.length > 1 ? activeIndex / (sections.length - 1) : 0;

  return (
    <nav
      aria-label="Navegação por seções da página"
      className={cn("sticky h-[100vh] top-0", className)}
    >
      <div className="relative flex h-full flex-col justify-between py-12 px-2">
        {/* base track */}
        <span className="absolute left-1/2 top-12 h-[calc(100%-6rem)] w-px -translate-x-1/2 bg-border" />

        {/* progress track */}
        <span
          className="absolute left-1/2 top-12 w-px -translate-x-1/2 bg-foreground/20 transition-all duration-300"
          style={{
            height: `calc((100% - 6rem) * ${progress})`,
          }}
        />

        {sections.map((section) => {
          const isActive = active === section.id;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group relative z-10 flex justify-center"
            >
              {/* bullet */}
              <span
                className={cn(
                  "flex h-3.5 w-3.5 items-center justify-center rounded-full border bg-background transition-all",
                  isActive
                    ? "scale-110 border-foreground"
                    : "border-border group-hover:scale-105",
                )}
              >
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    isActive ? "bg-foreground" : "bg-muted-foreground",
                  )}
                />
              </span>

              {/* tooltip */}
              <span
                className={`
                  pointer-events-none absolute left-6 top-1/2
                  -translate-y-1/2 whitespace-nowrap
                  rounded-md bg-popover px-2 py-1
                  text-xs text-popover-foreground
                  shadow transition-all duration-200
                  opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0
                `}
              >
                {section.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

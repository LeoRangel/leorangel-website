"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Section = {
  id: string;
  label: string;
};

interface SectionNavProps {
  sections: Section[];
}

export function SectionNav({ sections }: SectionNavProps) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(section.id);
            history.replaceState(null, "", `#${section.id}`);
          }
        },
        { rootMargin: "-45% 0px -45% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const activeIndex = sections.findIndex((s) => s.id === active);
  const progress =
    sections.length > 1 ? (activeIndex / (sections.length - 1)) * 100 : 0;

  return (
    <nav
      aria-label="Section navigation"
      className="sticky top-0 hidden lg:flex h-[100vh] items-center"
    >
      <div className="relative flex h-full flex-col justify-between py-6 px-2">
        {/* base track */}
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />

        {/* progress track */}
        <span
          className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-foreground/20 transition-all duration-300"
          style={{ height: `${progress}%` }}
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
                className="
                  pointer-events-none absolute left-6 top-1/2 -translate-y-1/2
                  whitespace-nowrap rounded-md bg-popover px-2 py-1 text-xs
                  text-popover-foreground opacity-0 shadow
                  transition
                  group-hover:opacity-100
                "
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

"use client";

import { useEffect, useState } from "react";

type Section = {
  id: string;
};

interface UseActiveSectionOptions {
  rootMargin?: string;
  initialActiveId?: string;
  updateHash?: boolean;
}

export function useActiveSection<T extends Section>(
  sections: T[],
  {
    rootMargin = "-45% 0px -45% 0px",
    initialActiveId,
    updateHash = true,
  }: UseActiveSectionOptions = {},
) {
  const [active, setActive] = useState<string | undefined>(
    initialActiveId ?? sections[0]?.id,
  );

  useEffect(() => {
    if (!sections.length) return;

    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(section.id);

            if (updateHash) {
              history.replaceState(null, "", `#${section.id}`);
            }
          }
        },
        { rootMargin },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [sections, rootMargin, updateHash]);

  const activeIndex = sections.findIndex((s) => s.id === active);

  return {
    active,
    activeIndex,
  };
}

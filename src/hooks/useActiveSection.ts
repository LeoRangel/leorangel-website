"use client";

import { useEffect, useState } from "react";

type Section = {
  id: string;
};

interface UseActiveSectionOptions {
  offset?: number;
  initialActiveId?: string;
}

export function useActiveSection<T extends Section>(
  sections: T[],
  { offset = 0, initialActiveId }: UseActiveSectionOptions = {},
) {
  const [active, setActive] = useState<string | undefined>(
    initialActiveId ?? sections[0]?.id,
  );

  useEffect(() => {
    if (!sections.length) return;

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const computeActive = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1;

      if (atBottom) {
        const lastId = elements[elements.length - 1].id;
        setActive((prev) => (prev === lastId ? prev : lastId));
        return;
      }

      let closestId: string | null = null;
      let minDistance = Infinity;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;

        const distance = Math.abs(rect.top - offset);

        if (distance < minDistance) {
          minDistance = distance;
          closestId = el.id;
        }
      });

      if (closestId) {
        setActive((prev) =>
          prev === closestId ? prev : closestId || undefined,
        );
      }
    };

    const observer = new IntersectionObserver(() => computeActive(), {
      rootMargin: `-${offset}px 0px 0px 0px`,
      threshold: 0,
    });

    elements.forEach((el) => observer.observe(el));

    window.addEventListener("scroll", computeActive, {
      passive: true,
    });

    computeActive();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", computeActive);
    };
  }, [sections, offset]);

  const activeIndex = sections.findIndex((s) => s.id === active);

  return { active, activeIndex };
}

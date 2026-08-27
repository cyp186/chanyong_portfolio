"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const items = document.querySelectorAll(".reveal:not(.is-visible)");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      document.querySelectorAll(".reveal").forEach((item) => {
        item.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

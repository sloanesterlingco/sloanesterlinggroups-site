"use client";

import { useEffect } from "react";

export default function SectionObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".section-animate, .section-left, .section-right, .activate-glow"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";

export default function PageTransition() {
  useEffect(() => {
    const el = document.getElementById("page-wrapper");
    if (!el) return;

    // allow slight delay for dramatic entrance
    setTimeout(() => {
      el.classList.add("loaded");
    }, 50);
  }, []);

  return null;
}

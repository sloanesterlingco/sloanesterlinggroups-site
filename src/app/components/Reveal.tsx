"use client";

import useInView from "@/hooks/useInView";
import { ReactNode } from "react";

export default function Reveal({ children }: { children: ReactNode }) {
  const { ref, visible } = useInView();

  return (
    <div
      ref={ref as any}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out 
        ${visible ? "opacity-100 translate-y-0" : ""}`}
    >
      {children}
    </div>
  );
}


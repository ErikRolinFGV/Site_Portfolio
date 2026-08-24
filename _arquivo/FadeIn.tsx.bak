"use client";
import React, { useEffect, useRef } from "react";

type FadeInProps = {
  children?: React.ReactNode;
  delay?: number;
  as?: any;
  className?: string;
  [key: string]: any;
};

// Tiny scroll-fade wrapper.
export function FadeIn({ children, delay = 0, as: As = "div", className = "", ...rest }: FadeInProps) {
  const ref = useRef<any>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("in"), delay);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <As ref={ref} className={`fade-in ${className}`} {...rest}>
      {children}
    </As>
  );
}

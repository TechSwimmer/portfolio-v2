"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  delay?: number;
  yOffset?: number;
};

export default function AnimatedSection({
  children,
  className = "",
  once = true,
  delay = 0,
  yOffset = 16,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin: "-80px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`${className} transition-all duration-300 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0"
      }`}
    >
      <div style={{ transform: isVisible ? "translateY(0)" : `translateY(${yOffset}px)` }}>
        {children}
      </div>
    </div>
  );
}
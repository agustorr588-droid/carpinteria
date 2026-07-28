"use client";

import { useReducedMotion } from "@/app/hooks/useReducedMotion";

interface AnimatedProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function Animated({ children, delay = 0, className = "" }: AnimatedProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <div
      className={`animate-blur-fade-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

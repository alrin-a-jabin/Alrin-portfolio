"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export default function Section({ children, className, id, fullWidth = false }: SectionProps) {
  return (
    <section id={id} className={cn("py-20", className)}>
      <div className={cn(!fullWidth && "container mx-auto px-4 max-w-6xl")}>
        {children}
      </div>
    </section>
  );
}

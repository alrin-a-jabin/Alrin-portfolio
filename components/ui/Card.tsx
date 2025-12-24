"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "elevated" | "bordered" | "glass" | "gradient";
  padding?: "sm" | "md" | "lg" | "xl";
  glow?: boolean;
}

export default function Card({ 
  children, 
  className, 
  hover = false, 
  variant = "default",
  padding = "md",
  glow = false 
}: CardProps) {
  const variants = {
    default: "bg-white shadow-md hover:shadow-lg border border-gray-100",
    elevated: "bg-white shadow-xl hover:shadow-2xl border border-gray-50",
    bordered: "bg-white border-2 border-gray-200 hover:border-blue-300 shadow-sm",
    glass: "bg-white/70 backdrop-blur-lg border border-white/30 shadow-lg hover:bg-white/80",
    gradient: "bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 shadow-lg border border-gray-100",
  };
  
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };
  
  const hoverStyles = hover ? "transition-all duration-300 hover:-translate-y-2 cursor-pointer" : "transition-all duration-300";
  const glowStyles = glow 
    ? "relative before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-blue-500/10 before:to-purple-500/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100" 
    : "";

  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden",
        variants[variant],
        paddings[padding],
        hoverStyles,
        glowStyles,
        className
      )}
    >
      {children}
    </div>
  );
}

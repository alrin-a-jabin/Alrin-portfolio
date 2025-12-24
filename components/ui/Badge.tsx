"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "error" | "gray" | "gradient";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "primary", size = "md", dot = false, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center font-medium rounded-full transition-all duration-200";
    
    const variants = {
      primary: "bg-blue-100 text-blue-800 hover:bg-blue-200",
      secondary: "bg-purple-100 text-purple-800 hover:bg-purple-200",
      success: "bg-green-100 text-green-800 hover:bg-green-200",
      warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
      error: "bg-red-100 text-red-800 hover:bg-red-200",
      gray: "bg-gray-100 text-gray-800 hover:bg-gray-200",
      gradient: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600",
    };
    
    const sizes = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-3 py-1 text-sm",
      lg: "px-4 py-1.5 text-base",
    };
    
    const dotColor = {
      primary: "bg-blue-500",
      secondary: "bg-purple-500",
      success: "bg-green-500",
      warning: "bg-yellow-500",
      error: "bg-red-500",
      gray: "bg-gray-500",
      gradient: "bg-gradient-to-r from-blue-500 to-purple-500",
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {dot && (
          <span className={cn("w-2 h-2 rounded-full mr-1.5", dotColor[variant])} />
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;

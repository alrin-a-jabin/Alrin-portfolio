"use client";

import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
  className?: string;
}

export default function SkillBadge({ skill, level, className }: SkillBadgeProps) {
  const levelColors = {
    beginner: "from-gray-400 to-gray-500",
    intermediate: "from-blue-400 to-blue-500",
    advanced: "from-purple-400 to-purple-500",
    expert: "from-pink-400 to-pink-500",
  };

  const levelGradient = level ? levelColors[level] : "from-blue-400 to-purple-500";

  return (
    <div
      className={cn(
        "relative group inline-block",
        className
      )}
    >
      <div className="relative px-4 py-2 bg-white rounded-lg shadow-md border border-gray-200 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        <span className="relative z-10 text-sm font-medium text-gray-800">
          {skill}
        </span>
        {level && (
          <div className={cn(
            "absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r",
            levelGradient
          )} />
        )}
      </div>
      {level && (
        <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={cn(
              "h-full bg-gradient-to-r transition-all duration-500 group-hover:w-full",
              levelGradient,
              {
                'w-1/4': level === 'beginner',
                'w-1/2': level === 'intermediate',
                'w-3/4': level === 'advanced',
                'w-full': level === 'expert',
              }
            )}
          />
        </div>
      )}
    </div>
  );
}

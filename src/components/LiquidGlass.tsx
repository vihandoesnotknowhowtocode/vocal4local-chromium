import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "strong";
}

const LiquidGlass = ({ children, className, intensity = "medium" }: LiquidGlassProps) => {
  const intensityClasses = {
    light: "backdrop-blur-sm bg-white/5 dark:bg-white/5",
    medium: "backdrop-blur-md bg-white/10 dark:bg-white/10",
    strong: "backdrop-blur-xl bg-white/15 dark:bg-white/15",
  };

  return (
    <div className={cn("relative group", className)}>
      {/* SVG Filter for Chrome - Liquid Glass Refraction */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="liquid-glass-filter" colorInterpolationFilters="sRGB">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.01"
              numOctaves="2"
              seed="5"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <linearGradient id="glass-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glass container */}
      <div
        className={cn(
          "relative rounded-2xl overflow-hidden",
          "border border-white/20 dark:border-white/10",
          "shadow-[0_8px_32px_rgba(0,0,0,0.1)]",
          "transition-all duration-500 ease-out",
          "group-hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)]",
          "group-hover:border-white/30 dark:group-hover:border-white/20",
          intensityClasses[intensity]
        )}
        style={{
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        {/* Specular highlight - top edge */}
        <div 
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
          style={{ opacity: 0.6 }}
        />
        
        {/* Specular highlight - left edge */}
        <div 
          className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/50 via-transparent to-transparent"
          style={{ opacity: 0.4 }}
        />

        {/* Inner glow */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Refraction shimmer effect */}
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
            backgroundSize: "200% 200%",
            animation: "liquid-shimmer 8s ease-in-out infinite",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LiquidGlass;

import { ReactNode, useId } from "react";
import { cn } from "@/lib/utils";

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
}

const LiquidGlass = ({ children, className }: LiquidGlassProps) => {
  const filterId = useId().replace(/:/g, "");

  return (
    <div className={cn("relative group", className)}>
      {/* SVG Filter for Chrome - Liquid Glass Refraction with backdrop-filter */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id={`liquid-glass-${filterId}`} colorInterpolationFilters="sRGB" x="-50%" y="-50%" width="200%" height="200%">
            {/* Create subtle noise for organic glass distortion */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015 0.015"
              numOctaves="3"
              seed="42"
              result="noise"
            />
            {/* Displacement map creates the refraction effect */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="8"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            {/* Gaussian blur for glass softness */}
            <feGaussianBlur in="displaced" stdDeviation="0.5" result="blurred" />
            {/* Merge back with original for cleaner output */}
            <feMerge>
              <feMergeNode in="blurred" />
            </feMerge>
          </filter>
          
          {/* Specular highlight filter */}
          <filter id={`specular-${filterId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
            <feSpecularLighting
              in="blur"
              surfaceScale="5"
              specularConstant="0.75"
              specularExponent="20"
              result="specular"
            >
              <fePointLight x="-5000" y="-10000" z="20000" />
            </feSpecularLighting>
            <feComposite in="specular" in2="SourceAlpha" operator="in" result="specularOut" />
          </filter>
        </defs>
      </svg>

      {/* Glass container with backdrop-filter for true refraction */}
      <div
        className={cn(
          "relative rounded-2xl overflow-hidden",
          "border border-white/30 dark:border-white/15",
          "transition-all duration-500 ease-out",
          "group-hover:border-white/40 dark:group-hover:border-white/25",
        )}
        style={{
          // Chrome-only: backdrop-filter with SVG filter for true refraction
          backdropFilter: `url(#liquid-glass-${filterId}) blur(12px) saturate(180%)`,
          WebkitBackdropFilter: `url(#liquid-glass-${filterId}) blur(12px) saturate(180%)`,
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
          boxShadow: `
            0 8px 32px rgba(0,0,0,0.12),
            inset 0 1px 0 rgba(255,255,255,0.2),
            inset 0 -1px 0 rgba(0,0,0,0.05)
          `,
        }}
      >
        {/* Top specular highlight - bright edge reflection */}
        <div 
          className="absolute inset-x-0 top-0 h-[2px] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.8) 80%, transparent 100%)",
            opacity: 0.7,
          }}
        />
        
        {/* Left specular highlight */}
        <div 
          className="absolute inset-y-0 left-0 w-[2px] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 30%, transparent 70%)",
            opacity: 0.5,
          }}
        />

        {/* Inner glow gradient on hover */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 60%)",
          }}
        />

        {/* Refraction shimmer animation */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.15) 25%, transparent 50%, rgba(255,255,255,0.1) 75%, transparent 100%)",
            backgroundSize: "400% 400%",
            animation: "liquid-shimmer 6s ease-in-out infinite",
          }}
        />

        {/* Caustic light effect - simulates light bending through glass */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 20%, rgba(255,255,255,0.4) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)
            `,
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

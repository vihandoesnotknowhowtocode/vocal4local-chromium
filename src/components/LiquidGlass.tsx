import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  // Intensity prop is removed as its primary function (CSS blur/opacity) is being replaced by the SVG filter.
}

// **Note:** This effect relies heavily on the SVG filter and its appearance
// will depend on the content behind it and the specific filter values.
// The default glassmorphism appearance (backdrop blur, background color) has been removed.

const LiquidGlass = ({ children, className }: LiquidGlassProps) => {
  return (
    <div className={cn("relative group", className)}>
      {/* SVG Filter for Chrome - Liquid Glass Refraction */}
      {/* The SVG element must be present in the DOM for the filter to be applied. */}
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
            {/* feDisplacementMap uses the noise to distort the SourceGraphic (the content being filtered) */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="3" // Controls the intensity of the displacement/refraction
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Glass container - Simplified to only apply the SVG filter */}
      {/* **IMPORTANT:** The filter is applied via the 'filter' style property. */}
      <div
        className={cn(
          "relative rounded-2xl overflow-hidden",
          "border border-white/20 dark:border-white/10",
          "shadow-[0_8px_32px_rgba(0,0,0,0.1)]",
          "transition-all duration-500 ease-out",
          "group-hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)]",
          "group-hover:border-white/30 dark:group-hover:border-white/20",
          // Removed basic CSS glass styles like backdrop-blur and bg-white/x
        )}
        style={{
          // Apply the SVG filter here. This will only work in Chrome/WebKit browsers
          // that fully support applying SVG filters to HTML content in this manner.
          filter: "url(#liquid-glass-filter)",
          // You might still want a subtle backdrop blur, but keeping strictly to *only*
          // the SVG effect means this CSS-based property is often removed.
          // I will remove the WebkitBackdropFilter line for strict adherence.
          // WebkitBackdropFilter: "blur(12px)", 
        }}
      >
        {/* Specular highlights, inner glow, and refraction shimmer are kept 
            as they contribute to the 'glass' look, but are not the SVG filter itself. */}
        
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
            // Ensure you have a global CSS animation defined for this keyframe
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

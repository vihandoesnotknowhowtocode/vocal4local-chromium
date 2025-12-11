import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LiquidGlass from "./LiquidGlass";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <LiquidGlass className="rounded-full">
        <div className="flex items-center gap-2 px-3 py-1.5">
          <Sun className="h-4 w-4 text-muted-foreground" />
          <div className="w-10 h-5 bg-muted/30 rounded-full" />
          <Moon className="h-4 w-4 text-muted-foreground" />
        </div>
      </LiquidGlass>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <LiquidGlass className="rounded-full">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="flex items-center gap-2 px-3 py-1.5 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <Sun className={`h-4 w-4 transition-all duration-300 ${isDark ? "text-muted-foreground scale-90" : "text-primary scale-110 animate-pulse"}`} />
        <div className="relative w-10 h-5 rounded-full bg-muted/30 overflow-hidden">
          <div 
            className={`absolute top-0.5 w-4 h-4 rounded-full bg-primary shadow-lg transition-all duration-300 ease-out ${isDark ? "left-5" : "left-0.5"}`}
            style={{
              boxShadow: isDark 
                ? "0 0 10px hsl(var(--primary) / 0.5), 0 0 20px hsl(var(--primary) / 0.3)" 
                : "0 0 10px hsl(var(--primary) / 0.5), 0 0 20px hsl(var(--primary) / 0.3)"
            }}
          />
        </div>
        <Moon className={`h-4 w-4 transition-all duration-300 ${isDark ? "text-primary scale-110 animate-pulse" : "text-muted-foreground scale-90"}`} />
      </button>
    </LiquidGlass>
  );
};

export default ThemeToggle;

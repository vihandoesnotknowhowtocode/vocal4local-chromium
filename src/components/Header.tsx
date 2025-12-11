import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LiquidGlass from "./LiquidGlass";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Brands", href: "/#brands" },
    { name: "Categories", href: "/#categories" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <LiquidGlass className="w-full">
          <div className="flex items-center justify-between h-14 md:h-16 px-4">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-base">V</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-base leading-tight text-foreground">Vocal</span>
                <span className="text-xs text-muted-foreground font-body">for Local</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <a href="https://www.mygov.in/podcast/lighting-lives-through-vocal-local/" target="_blank" rel="noopener noreferrer">
                <LiquidGlass>
                  <button className="px-5 py-2 font-body font-medium text-foreground hover:text-primary transition-colors">
                    Join Movement
                  </button>
                </LiquidGlass>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </LiquidGlass>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <LiquidGlass className="mt-2 animate-fade-in">
            <div className="py-4 px-4">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-body font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex items-center justify-between mt-4">
                  <ThemeToggle />
                  <a href="https://www.mygov.in/podcast/lighting-lives-through-vocal-local/" target="_blank" rel="noopener noreferrer">
                    <LiquidGlass>
                      <button className="px-5 py-2 font-body font-medium text-foreground hover:text-primary transition-colors">
                        Join Movement
                      </button>
                    </LiquidGlass>
                  </a>
                </div>
              </nav>
            </div>
          </LiquidGlass>
        )}
      </div>
    </header>
  );
};

export default Header;

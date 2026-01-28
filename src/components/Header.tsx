import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/cursos", label: "Cursos" },
    { href: "/trabalhe-conosco", label: "Trabalhe Conosco" },
    { href: "/contato", label: "Contato" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md shadow-card border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shadow-soft">
              <span className="text-primary-foreground font-bold text-lg">IS</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                Instituto Sorocabano
              </h1>
              <p className="text-xs text-muted-foreground">Unidade Registro</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-4 py-2 rounded-pill font-medium transition-all duration-300",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/80 hover:text-primary hover:bg-secondary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-pill"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-4 py-3 rounded-2xl font-medium transition-all duration-300",
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/80 hover:text-primary hover:bg-secondary"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg" 
        : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-portfolio-primary animate-pulse" data-testid="logo">
            Hyldraw Aqui!
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 dark:text-gray-300 hover:text-portfolio-primary dark:hover:text-portfolio-primary transition-all duration-300 hover:scale-110"
              data-testid="nav-inicio"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-gray-700 dark:text-gray-300 hover:text-portfolio-primary dark:hover:text-portfolio-primary transition-all duration-300 hover:scale-110"
              data-testid="nav-projetos"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-700 dark:text-gray-300 hover:text-portfolio-primary dark:hover:text-portfolio-primary transition-all duration-300 hover:scale-110"
              data-testid="nav-contato"
            >
              Contato
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              data-testid="theme-toggle"
            >
              {theme === "dark" ? 
                <Sun className="h-4 w-4 text-yellow-500" /> : 
                <Moon className="h-4 w-4 text-gray-600" />
              }
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-portfolio-primary transition-all duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 animate-in slide-in-from-top-2 duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-portfolio-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-300"
                data-testid="mobile-nav-inicio"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("projetos")}
                className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-portfolio-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-300"
                data-testid="mobile-nav-projetos"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-portfolio-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-300"
                data-testid="mobile-nav-contato"
              >
                Contato
              </button>
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center gap-2 w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-portfolio-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-300"
                data-testid="mobile-theme-toggle"
              >
                {theme === "dark" ? 
                  <>
                    <Sun className="h-4 w-4" />
                    Tema Claro
                  </> : 
                  <>
                    <Moon className="h-4 w-4" />
                    Tema Escuro
                  </>
                }
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

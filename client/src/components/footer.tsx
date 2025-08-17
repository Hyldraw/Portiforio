import { Heart, Code, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/10 via-portfolio-secondary/10 to-portfolio-accent/10 animate-gradient-x"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-portfolio-primary to-portfolio-secondary mb-2">
            Hyldraw
          </h3>
          <p className="text-gray-400 dark:text-gray-500">
            Usando IA Para Criar Projetos!
          </p>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 pt-6">
          <p className="text-gray-400 dark:text-gray-500 mb-3" data-testid="footer-copyright">
            © {currentYear} Hyldraw. Todos os direitos reservados.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-600">
            <div className="flex items-center gap-1 animate-float" style={{ animationDelay: '0s' }}>
              <Code className="h-4 w-4 text-portfolio-primary" />
              <span>Clean Code</span>
            </div>
            <div className="flex items-center gap-1 animate-float" style={{ animationDelay: '0.5s' }}>
              <Heart className="text-red-500 h-4 w-4" fill="currentColor" />
              <span>Feito com amor</span>
            </div>
            <div className="flex items-center gap-1 animate-float" style={{ animationDelay: '1s' }}>
              <Sparkles className="h-4 w-4 text-portfolio-accent" />
              <span>Sempre inovando</span>
            </div>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-700 mt-4" data-testid="footer-tech">
            Construído com React, TypeScript, Tailwind CSS e muito café ☕
          </p>
        </div>
      </div>
    </footer>
  );
}

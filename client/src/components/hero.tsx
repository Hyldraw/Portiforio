import { User, Github, Mail, ExternalLink } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden transition-colors duration-500">
      {/* Green gradient overlay for dark mode */}
      <div className="absolute inset-0 opacity-0 dark:opacity-20 bg-gradient-to-tr from-portfolio-accent/10 via-transparent to-portfolio-accent/5 pointer-events-none"></div>
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-portfolio-accent/5 rounded-full blur-3xl opacity-0 dark:opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-portfolio-accent/3 rounded-full blur-3xl opacity-0 dark:opacity-20 animate-float"></div>
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Avatar with enhanced animations */}
          <div className="mb-8 animate-in fade-in-0 zoom-in-50 duration-1000">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl hover:shadow-portfolio-primary/25 transition-all duration-500 hover:scale-110">
              <img 
                src="https://i.imgur.com/YBExiFl.png" 
                alt="Hyldraw Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Main title with typing animation effect */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-300" data-testid="hero-title">
            Olá, eu sou{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-portfolio-primary via-portfolio-secondary to-portfolio-accent animate-gradient-x">
              Hyldraw
            </span>
          </h1>
          
          {/* Description with fade in animation */}
          <p className="text-xl md:text-2xl text-portfolio-neutral dark:text-gray-300 mb-8 leading-relaxed animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-500" data-testid="hero-description">
            Ola! sou um desenvolvedor Iniciante, atualmente estou apenas usando a IA para criar projetos para mim, como este portifolio.
          </p>
          
          {/* Action buttons with staggered animations */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-700">
            <button
              onClick={() => scrollToSection("projetos")}
              className="group bg-gradient-to-r from-portfolio-primary to-portfolio-secondary hover:from-portfolio-secondary hover:to-portfolio-primary text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-portfolio-primary/25 flex items-center gap-2"
              data-testid="button-view-projects"
            >
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Ver Meus Projetos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="group border-2 border-portfolio-primary dark:border-portfolio-primary text-portfolio-primary dark:text-portfolio-primary hover:bg-portfolio-primary hover:text-white dark:hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              data-testid="button-contact"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Entre em Contato
            </button>
          </div>

          {/* Social links with floating animation */}
          <div className="flex justify-center space-x-6 animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-1000">
            <a 
              href="https://github.com/Hyldraw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-portfolio-primary dark:hover:bg-portfolio-primary text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg animate-float"
              style={{ animationDelay: '0s' }}
              data-testid="link-github-hero"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a 
              href="mailto:davidalexsandro2019@gmail.com" 
              className="group p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-portfolio-secondary dark:hover:bg-portfolio-secondary text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg animate-float"
              style={{ animationDelay: '0.2s' }}
              data-testid="link-email-hero"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

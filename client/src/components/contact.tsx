import { Mail, MapPin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gradient-to-t dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden transition-colors duration-500">
      {/* Green accent background */}
      <div className="absolute inset-0 opacity-0 dark:opacity-15 bg-gradient-to-r from-transparent via-portfolio-accent/8 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-portfolio-accent/8 rounded-full blur-3xl opacity-0 dark:opacity-40 animate-pulse"></div>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-in fade-in-50 slide-in-from-bottom-4 duration-1000" data-testid="contact-title">
          Entre em Contato Comigo
        </h2>
        <p className="text-xl text-portfolio-neutral dark:text-gray-300 mb-12 max-w-2xl mx-auto animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-200" data-testid="contact-description">
          Ficarei feliz em ouvir o que você tem a dizer! Caso queira compartilhar alguma sugestão ou tirar dúvidas!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
          <Card className="group bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-300">
            <CardContent className="flex flex-col items-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-portfolio-primary/20 to-portfolio-secondary/20 dark:from-portfolio-primary/30 dark:to-portfolio-secondary/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-2xl text-portfolio-primary dark:text-portfolio-primary" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2" data-testid="contact-email-label">Email</h3>
              <a 
                href="mailto:joao.silva@email.com"
                className="text-portfolio-neutral dark:text-gray-300 hover:text-portfolio-primary dark:hover:text-portfolio-primary transition-colors duration-300" 
                data-testid="contact-email"
              >
                davidalexsandro2019@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="group bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-400">
            <CardContent className="flex flex-col items-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-portfolio-accent/20 to-portfolio-secondary/20 dark:from-portfolio-accent/30 dark:to-portfolio-secondary/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="text-2xl text-portfolio-accent dark:text-portfolio-accent" size={32} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2" data-testid="contact-location-label">Localização</h3>
              <p className="text-portfolio-neutral dark:text-gray-300" data-testid="contact-location">Algarve, Portugal</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center space-x-6 animate-in fade-in-50 slide-in-from-bottom-4 duration-1000 delay-500">
          <a 
            href="https://github.com/Hyldraw" 
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 bg-gray-800 dark:bg-gray-600 hover:bg-black dark:hover:bg-gray-500 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl animate-float"
            style={{ animationDelay: '0s' }}
            data-testid="link-github"
          >
            <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          </a>
          <a 
            href="https://www.instagram.com/davidrzzs/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 animate-float"
            style={{ animationDelay: '0.2s' }}
            data-testid="link-instagram"
          >
            <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
